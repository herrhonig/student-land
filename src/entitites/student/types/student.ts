export type StudentStatus = "active" | "excluded";

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  status: StudentStatus;
  registeredAt: string;
  solvedCount: number;
  totalTasks: number;
  managerComment: string;
}

export type CreateStudentDto = Omit<Student, "id">;

export type UpdateStudentDto = Partial<
  Pick<Student, "status" | "managerComment">
>;
