import { StudentDetailsPage } from "@/pages/student-details-page";
import { StudentsPage } from "@/pages/students-page";

export const routes = [
  {
    path: "/",
    element: <StudentsPage />,
  },
  {
    path: "/students/:id",
    element: <StudentDetailsPage />,
  },
];
