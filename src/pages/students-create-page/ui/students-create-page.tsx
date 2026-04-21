import { useNavigate } from "react-router";

import { paths } from "@/shared/const/paths";
import { GoBackButton } from "@/shared/ui";

import { CreateStudentForm } from "@/features/student-create";

export const StudentsCreatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <GoBackButton
        label="Back to students"
        onClick={() => navigate(paths.students.root)}
      />
      <div className="mx-auto max-w-3xl space-y-6 p-6">
        <CreateStudentForm onSuccess={() => navigate(paths.students.root)} />
      </div>
    </div>
  );
};
