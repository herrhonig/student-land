import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { dayjs } from "@/shared/lib";
import { Button, Input, Select } from "@/shared/ui";

import {
  type CreateStudentFormData,
  createStudentSchema,
} from "../model/student-create.schema";

import { type CreateStudentDto, useCreateStudent } from "@/entitites/student";

interface CreateStudentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const courseOptions = [
  { value: "", label: "Choose course" },
  { value: "React Developer", label: "React Developer" },
  { value: "Fullstack JS", label: "Fullstack JS" },
  { value: "Python Developer", label: "Python Developer" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
];

const statusOptions = [
  { value: "", label: "Choose status" },
  { value: "active", label: "Active" },
  { value: "excluded", label: "Excluded" },
];

export const CreateStudentForm: React.FC<CreateStudentFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const { mutate: handleCreateStudent, isError } = useCreateStudent();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CreateStudentFormData>({
    resolver: zodResolver(createStudentSchema),
    defaultValues: {
      status: "active",
    },
  });

  const onSubmit = (formData: CreateStudentFormData) => {
    const newStudent: CreateStudentDto = {
      ...formData,
      registeredAt: dayjs().format("YYYY-MM-DD"),
      solvedCount: 0,
      totalTasks: 50,
      managerComment: "",
    };

    handleCreateStudent({
      newStudent,
      onSuccess,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg bg-white p-6 shadow-md"
    >
      <div className="mb-2 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">➕ New student</h2>
        <p className="mt-1 text-sm text-gray-500">
          Fill all the required fields
        </p>
      </div>

      <Input
        label="Name"
        required
        placeholder="Иван Петров"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        label="Email"
        required
        type="email"
        placeholder="ivan@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Cell phone"
        required
        placeholder="+7 (999) 123-45-67"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <Select
        label="Course"
        required
        options={courseOptions}
        error={errors.course?.message}
        {...register("course")}
      />

      <Select
        label="Status"
        required
        disabled
        options={statusOptions}
        error={errors.status?.message}
        {...register("status")}
      />

      <div className="flex gap-3 pt-4">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting || !isValid}
          className="flex-1"
        >
          {isSubmitting ? "Creation..." : "Create"}
        </Button>

        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1"
          >
            Cancel
          </Button>
        )}
      </div>

      {isError && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
          <p className="text-sm text-red-600">
            Error while creating new student. Please, try again.
          </p>
        </div>
      )}
    </form>
  );
};
