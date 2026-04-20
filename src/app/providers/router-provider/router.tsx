import { createBrowserRouter, type RouteObject } from "react-router";

import { paths } from "@/shared/const/paths";
import { PageLayout } from "@/shared/ui";

import { StudentDetailsPage } from "@/pages/student-details-page";
import { StudentsCreatePage } from "@/pages/students-create-page";
import { StudentsPage } from "@/pages/students-page";

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
