import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  component: () => <Outlet />,
});

// Note: child routes render through <Outlet />; see services.index.tsx for /services.
export const unusedRouterState = useRouterState;
