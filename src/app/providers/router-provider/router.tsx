import { StudentDetailsPage } from "@/pages/student-details-page";
import { StudentsPage } from "@/pages/students-page";
import { paths } from "@/shared/const/paths";
import { createBrowserRouter, type RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: paths.home,
    element: <StudentsPage />,
  },
  {
    path: paths.students.details,
    element: <StudentDetailsPage />,
  },
];

const router = createBrowserRouter(routes);

export { router };
