import { cn } from "@/shared/lib/cn";

import type { Student } from "../../types/student";

type StudentDetailsProps = {
  student: Student;
  onClickEdit: () => void;
};

const statusStyles: Record<Student["status"], string> = {
  active: "bg-green-100 text-green-700 border-green-200",
  excluded: "bg-red-100 text-red-700 border-red-200",
};

const statusLabel: Record<Student["status"], string> = {
  active: "Active",
  excluded: "Excluded",
};

export const StudentDetails = ({
  student,
  onClickEdit,
}: StudentDetailsProps) => {
  const progress =
    student.totalTasks > 0
      ? Math.round((student.solvedCount / student.totalTasks) * 100)
      : 0;

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-semibold">
            {student.name}
          </h1>
          <p className="text-muted-foreground text-sm">{student.email}</p>
        </div>

        <div className="flex gap-2">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs",
              statusStyles[student.status],
            )}
          >
            {statusLabel[student.status]}
          </span>
          <button
            onClick={onClickEdit}
            className="cursor-pointer rounded-md bg-black px-3 py-1 text-sm text-white hover:bg-gray-800"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Info label="Phone" value={student.phone} />
        <Info label="Course" value={student.course} />
        <Info
          label="Registered"
          value={new Date(student.registeredAt).toLocaleDateString()}
        />
        <Info
          label="Solved tasks"
          value={`${student.solvedCount} / ${student.totalTasks}`}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Progress:</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
          <div className="h-full bg-black" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-muted-foreground text-sm font-medium">
          Manager comment
        </h2>
        <div className="bg-muted/30 text-foreground rounded-lg border p-3 text-sm">
          {student.managerComment || "No comment yet"}
        </div>
      </div>
    </div>
  );
};

/* reusable block */
const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-background rounded-lg border p-3">
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="text-foreground text-sm font-medium">{value}</div>
    </div>
  );
};
