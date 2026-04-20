import { useState, type ChangeEvent } from "react";
import {
  useUpdateStudent,
  type Student,
  type StudentStatus,
} from "@/entitites/student";

import { cn } from "@/shared/lib";

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
  const { mutate, isPending } = useUpdateStudent();

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as StudentStatus);
  };

  const onCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onSave = () => {
    mutate({
      data: { ...student, status, managerComment: comment },
    });
  };

  return (
    <div className="max-w-2xl mx-auto border rounded-xl p-6 space-y-6 bg-background">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Edit student</h2>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-muted-foreground">Status</label>
        <select
          value={status}
          onChange={onSelect}
          className={cn(
            "w-full rounded-md border bg-background px-3 py-2 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black",
          )}
        >
          <option value="active">Active</option>
          <option value="excluded">Excluded</option>
        </select>
      </div>

      <div className="space-y-1">
        <label className="text-sm text-muted-foreground">Manager comment</label>
        <textarea
          value={comment}
          onChange={onCommentChange}
          rows={5}
          maxLength={900}
          className={cn(
            "w-full rounded-md border bg-background px-3 py-2 text-sm",
            "resize-none",
            "focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black",
          )}
        />
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          onClick={onCancel}
          className={cn(
            "px-4 py-2 text-sm rounded-md border",
            "hover:bg-muted transition",
          )}
        >
          Cancel
        </button>

        <button
          onClick={onSave}
          disabled={isPending}
          className={cn(
            "px-4 py-2 text-sm rounded-md bg-black text-white",
            "hover:bg-gray-800 transition",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          {isPending ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
};
