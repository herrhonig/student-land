import { CreateStudentForm } from "@/features/student-create";
import { paths } from "@/shared/const/paths";
import { useNavigate } from "react-router";

export const StudentsCreatePage = () => {
  const navigate = useNavigate();

  return <CreateStudentForm onSuccess={() => navigate(paths.students.root)} />;
};
