import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { paths } from "@/shared/const/paths";
import { GoBackButton, StatePage } from "@/shared/ui";

import { StudentEditForm } from "@/features/student-update";

import { StudentDetails, useGetStudentById } from "@/entitites/student";

export const StudentDetailsPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const { data: student, isLoading, error } = useGetStudentById({ id });

  if (isLoading) return <StatePage variant="loading" size="page" />;
  if (error) return <StatePage variant="error" size="page" />;
  if (!student) return <StatePage variant="empty" size="page" />;

  return (
    <div className="space-y-4">
      {!isEditing && (
        <GoBackButton
          label="Back to students"
          onClick={() => navigate(paths.students.root)}
        />
      )}

      {!isEditing && (
        <StudentDetails
          student={student}
          onClickEdit={() => setIsEditing(true)}
        />
      )}
      {isEditing && (
        <StudentEditForm
          student={student}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};
