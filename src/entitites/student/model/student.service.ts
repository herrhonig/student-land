import { $api, handleApiError } from "@/shared/api";
import type { Student } from "../types/student";

export class StudentApi {
  async getStudents(): Promise<Student[] | undefined> {
    try {
      const { data } = await $api.get("/students");
      return data;
    } catch (error) {
      handleApiError(error);
    }
  }

  async getStudent(id: string): Promise<Student | undefined> {
    try {
      const { data } = await $api.get(`/students/${id}`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  }

  async updateStudent(student: Student) {
    try {
      const { data } = await $api.put(`/students/${student.id}`, student);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  }

  async createStudent(student: Omit<Student, "id">) {
    try {
      const { data } = await $api.post(`/students`, student);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  }
}

export const studentService = new StudentApi();
