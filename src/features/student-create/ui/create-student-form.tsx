import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateStudent } from "@/entitites/student";
import {
  createStudentSchema,
  type CreateStudentFormData,
} from "../model/student-create.schema";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/select";
import { Button } from "@/shared/ui/button";

interface CreateStudentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const courseOptions = [
  { value: "", label: "Choose a course" },
  { value: "React Developer", label: "React Developer" },
  { value: "Fullstack JS", label: "Fullstack JS" },
  { value: "Python Developer", label: "Python Developer" },
  { value: "DevOps Engineer", label: "DevOps Engineer" },
];

const statusOptions = [
  { value: "", label: "Choose status" },
  { value: "active", label: "Активный" },
  { value: "excluded", label: "Исключен" },
];

export const CreateStudentForm: React.FC<CreateStudentFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const {
    mutate: handleCreateStudent,
    isPending,
    isError,
  } = useCreateStudent();

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
    const newStudent = {
      ...formData,
      registeredAt: new Date().toLocaleDateString(),
      solvedCount: 0,
      totalTasks: 50,
      managerComment: "",
    };

    console.log({ newStudent });
    handleCreateStudent({
      data: newStudent,
      onCb: onSuccess,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow-md p-6 space-y-4"
    >
      <div className="border-b border-gray-200 pb-4 mb-2">
        <h2 className="text-2xl font-bold text-gray-800">➕ New student</h2>
        <p className="text-sm text-gray-500 mt-1">
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
          {isSubmitting ? "Создание..." : "Создать студента"}
        </Button>

        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
            className="flex-1"
          >
            Отмена
          </Button>
        )}
      </div>

      {isError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">
            Ошибка при создании студента. Пожалуйста, попробуйте снова.
          </p>
        </div>
      )}
    </form>
  );
};
