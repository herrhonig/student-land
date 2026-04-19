import { StudentCard, useGetStudents } from "@/entitites/student";
import { StatePage } from "@/shared/ui/state-page";

type StudentsPageProps = {};

export const StudentsPage = ({}: StudentsPageProps) => {
  const { data, isLoading, isError } = useGetStudents();

  // if (isLoading) {
  //   return <StatePage variant="loading" />;
  // }

  // if (isError) {
  //   return <StatePage variant="error" />;
  // }

  if (!data?.length) {
    return <StatePage variant="empty" />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {data?.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};
