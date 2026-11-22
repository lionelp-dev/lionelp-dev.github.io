import {
  createBrowserHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { Footer } from "./components/Footer";
import { SiteLoader } from "./components/SiteLoader";
import { TopBar } from "./components/TopBar";
import { PortfolioPage } from "./pages/PortfolioPage";
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
  component: PortfolioPage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
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
