import {
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { Footer } from "./components/Footer";
import { SiteLoader } from "./components/SiteLoader";
import { TopBar } from "./components/TopBar";
import { PortfolioPage } from "./pages/portfolio/PortfolioPage";
import "./style.css";

function RootLayout() {
  return (
    <div className="min-h-screen bg-base-100 font-sans text-base-content">
      <SiteLoader />
      <TopBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/portfolio" replace />,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});

const techWatchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tech-watch",
  component: () => (
    <Navigate to="/portfolio" hash="explorations-techniques" replace />
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  portfolioRoute,
  techWatchRoute,
]);

const router = createRouter({
  routeTree,
  history: createHashHistory(),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing #app element");
}

createRoot(app).render(<RouterProvider router={router} />);
