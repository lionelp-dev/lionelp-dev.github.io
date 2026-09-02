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
import { ThemeSwitch } from "./components/ThemeSwitch";
import { RealisationsPage } from "./pages/realisations/RealisationsPage";
import { TechWatchPage } from "./pages/tech-watch/TechWatchPage";
import "./style.css";

const pageFrameClass = "mx-auto w-[90vw] max-w-[1440px] px-5 pb-16 pt-12";

function RootLayout() {
  return (
    <div className="min-h-screen bg-base-100 font-sans text-base-content">
      <ThemeSwitch />
      <main className={pageFrameClass}>
        <Outlet />
      </main>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/realisations" replace />,
});

const realisationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/realisations",
  component: RealisationsPage,
});

const techWatchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tech-watch",
  component: TechWatchPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  realisationsRoute,
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
