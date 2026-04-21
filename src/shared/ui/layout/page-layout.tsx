import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-red-50 via-white to-emerald-50 px-4 pt-16 sm:px-6 md:px-8 lg:px-16">
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-lime-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-25 left-1/3 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
};
