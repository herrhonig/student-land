import { cn } from "@/shared/lib/cn";
import type { Student } from "../../types/student.schema";

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
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            {student.name}
          </h1>
          <p className="text-sm text-muted-foreground">{student.email}</p>
        </div>

        <div className="flex gap-2">
          <span
            className={cn(
              "text-xs px-3 py-1 rounded-full border",
              statusStyles[student.status],
            )}
          >
            {statusLabel[student.status]}
          </span>
          <button
            onClick={onClickEdit}
            className="px-3 py-1 text-sm rounded-md bg-black text-white hover:bg-gray-800 cursor-pointer"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-black" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">
          Manager comment
        </h2>
        <div className="rounded-lg border bg-muted/30 p-3 text-sm text-foreground">
          {student.managerComment || "No comment yet"}
        </div>
      </div>
    </div>
  );
};

/* reusable block */
const Info = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-lg border bg-background p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-medium text-foreground">{value}</div>
    </div>
  );
};
