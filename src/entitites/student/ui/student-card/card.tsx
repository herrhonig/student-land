import { paths } from "@/shared/const/paths";
import type { Student } from "../../types/student.schema";

type StudentCardProps = {
  student: Student;
};

const statusStyles: Record<Student["status"], string> = {
  active: "bg-green-100 text-green-700",
  excluded: "bg-red-100 text-red-700",
};

export const StudentCard = ({ student }: StudentCardProps) => {
  const { id, registeredAt, name, status, email, course } = student;

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{name}</h3>

        <span
          className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>Email: {email}</p>
        <p>Course: {course}</p>
        <p>Registered: {new Date(registeredAt).toLocaleDateString()}</p>
      </div>

      <div className="flex justify-end mt-4">
        <a
          href={`${paths.students.detailsById(id)}`}
          className="px-3 py-1 text-sm rounded-md bg-black text-white hover:bg-gray-800"
        >
          Open
        </a>
      </div>
    </div>
  );
};
