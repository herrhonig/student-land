import { useNavigate } from "react-router";

import { paths } from "@/shared/const/paths";

import { CreateStudentForm } from "@/features/student-create";

export const StudentsCreatePage = () => {
  const navigate = useNavigate();

  return <CreateStudentForm onSuccess={() => navigate(paths.students.root)} />;
};
