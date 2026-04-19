import { $api, handleApiError } from "@/shared/api";
import type { Student } from "./student.schema";

export const studentApi = {
  getStudents: async (): Promise<Student[] | undefined> => {
    try {
      const { data } = await $api.get("/students");
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  getStudent: async (id: string): Promise<Student | undefined> => {
    try {
      const { data } = await $api.get(`/students/${id}`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  updateStudent: async (student: Student) => {
    try {
      const { data } = await $api.put(`/students/${student.id}`, student);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  createStudent: async (student: Omit<Student, "id">) => {
    try {
      const { data } = await $api.post(`/students`, student);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },
};
