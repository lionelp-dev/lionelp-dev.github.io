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
import { TopBar } from "./components/TopBar";
import { PortfolioPage } from "./pages/portfolio/PortfolioPage";
import "./style.css";

function RootLayout() {
  return (
    <div className="min-h-screen bg-base-100 font-sans text-base-content">
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

const routeTree = rootRoute.addChildren([indexRoute, portfolioRoute]);

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
