import {
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useRouterState,
} from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { PortfolioPage } from "./pages/portfolio/PortfolioPage";
import { TechWatchPage } from "./pages/tech-watch/TechWatchPage";
import "./style.css";

const pageFrameClass = "mx-auto w-[90vw] max-w-[1680px]";

function RootLayout() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const hasPageChrome = pathname !== "/tech-watch";

  return (
    <div className="min-h-screen bg-base-100 font-sans text-base-content">
      {hasPageChrome && <TopBar />}
      <main className={pageFrameClass}>
        <Outlet />
      </main>
      {hasPageChrome && <Footer />}
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
  component: TechWatchPage,
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
