import { createBrowserRouter, type RouteObject } from "react-router";
import { StudentDetailsPage } from "@/pages/student-details-page";
import { StudentsCreatePage } from "@/pages/students-create-page";
import { StudentsPage } from "@/pages/students-page";
import { PageLayout } from "@/shared/ui";
import { paths } from "@/shared/const/paths";

export const routes: RouteObject[] = [
  {
    path: paths.home,
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <StudentsPage />,
      },
      {
        path: paths.students.details,
        element: <StudentDetailsPage />,
      },
      {
        path: paths.students.create,
        element: <StudentsCreatePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };
