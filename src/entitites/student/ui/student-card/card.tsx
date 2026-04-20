import { paths } from "@/shared/const/paths";
import { dayjs } from "@/shared/lib";

import type { Student } from "../../types/student";

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
    <div className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>

        <span
          className={`rounded-full px-2 py-1 text-xs ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-1 text-sm text-gray-600">
        <p>Email: {email}</p>
        <p>Course: {course}</p>
        <p>Registered: {dayjs(registeredAt).format("DD.MM.YYYY")}</p>
      </div>

      <div className="mt-4 flex justify-end">
        <a
          href={`${paths.students.detailsById(id)}`}
          className="rounded-md bg-black px-3 py-1 text-sm text-white hover:bg-gray-800"
        >
          Open
        </a>
      </div>
    </div>
  );
};
