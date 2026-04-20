import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className="mx-auto min-h-screen bg-lime-50 px-4 py-16 sm:px-6 md:px-8 lg:px-16">
      <Outlet />
    </div>
  );
};
