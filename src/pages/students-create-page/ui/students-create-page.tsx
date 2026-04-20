import { CreateStudentForm } from "@/features/student-create";
import { paths } from "@/shared/const/paths";
import { useNavigate } from "react-router";

interface StudentsCreatePageProps {}

export const StudentsCreatePage = ({}: StudentsCreatePageProps) => {
  const navigate = useNavigate();

  return <CreateStudentForm onSuccess={() => navigate(paths.home)} />;
};
