import { StudentDetails, useGetStudentById } from "@/entitites/student";
import { StudentEditForm } from "@/features/student-update";
import { StatePage } from "@/shared/ui/state-page";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

type StudentDetailsPageProps = {};

export const StudentDetailsPage = ({}: StudentDetailsPageProps) => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const { data, isLoading, error } = useGetStudentById({ id });

  if (isLoading) return <StatePage variant="loading" size="page" />;
  if (error) return <StatePage variant="error" size="page" />;
  if (!data) return <StatePage variant="empty" size="page" />;

  return (
    <div className="space-y-4">
      {!isEditing && (
        <button
          onClick={() => navigate("/")}
          className="text-md text-muted-foreground hover:text-foreground transition"
        >
          ← Back to students
        </button>
      )}

      {!isEditing && (
        <StudentDetails student={data} onClickEdit={() => setIsEditing(true)} />
      )}
      {isEditing && (
        <StudentEditForm student={data} onCancel={() => setIsEditing(false)} />
      )}
    </div>
  );
};
