import { StudentCard, useGetStudents } from "@/entitites/student";
import { paths } from "@/shared/const/paths";
import { Button, StatePage } from "@/shared/ui";
import { useNavigate } from "react-router";

type StudentsPageProps = {};

export const StudentsPage = ({}: StudentsPageProps) => {
  const { data: students, isLoading, refetch } = useGetStudents();
  const navigate = useNavigate();

  if (isLoading) {
    return <StatePage variant="loading" />;
  }

  if (!students || students.length === 0) {
    return (
      <StatePage
        variant="empty"
        actionText="Try again"
        onAction={() => refetch()}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-6 pt-6">
        <h1 className="text-xl font-semibold">Students</h1>

        <Button onClick={() => navigate(paths.students.create)}>
          Add student
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};
