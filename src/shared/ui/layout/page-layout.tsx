import { Outlet } from "react-router";

export const PageLayout = () => {
  return (
    <div className="min-h-screen bg-lime-50 py-16 px-4 sm:px-6 md:px-8 lg:px-16 mx-auto">
      <Outlet />
    </div>
  );
};
