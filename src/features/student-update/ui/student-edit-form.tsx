import { type ChangeEvent, useState } from "react";

import { cn } from "@/shared/lib";

import {
  type Student,
  type StudentStatus,
  useUpdateStudent,
} from "@/entitites/student";

type StudentEditFormProps = {
  student: Student;
  onCancel: () => void;
};

export const StudentEditForm = ({
  student,
  onCancel,
}: StudentEditFormProps) => {
  const { status: studentStatus, managerComment } = student;

  const [status, setStatus] = useState(studentStatus);
  const [comment, setComment] = useState(managerComment);
  const { mutate: handleUpdateStudent, isPending } = useUpdateStudent();

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as StudentStatus);
  };

  const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSave = () => {
    handleUpdateStudent({
      data: { ...student, status, managerComment: comment },
    });
  };

  return (
    <div className="bg-background mx-auto max-w-2xl space-y-6 rounded-xl border p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Edit student</h2>
      </div>

      <div className="space-y-1">
        <label className="text-muted-foreground text-sm">Status</label>
        <select
          value={status}
          onChange={onSelect}
          className={cn(
            "bg-background w-full rounded-md border px-3 py-2 text-sm",
            "focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none",
          )}
        >
          <option value="active">Active</option>
          <option value="excluded">Excluded</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-muted-foreground text-sm">Manager comment</label>
        <textarea
          value={comment}
          onChange={onCommentChange}
          rows={5}
          maxLength={900}
          className={cn(
            "bg-background w-full rounded-md border px-3 py-2 text-sm",
            "resize-none",
            "focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none",
          )}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          onClick={onCancel}
          className={cn(
            "rounded-md border px-4 py-2 text-sm",
            "hover:bg-muted transition",
          )}
        >
          Cancel
        </button>

        <button
          onClick={onSave}
          disabled={isPending}
          className={cn(
            "rounded-md bg-black px-4 py-2 text-sm text-white",
            "transition hover:bg-gray-800",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        >
          {isPending ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
};
