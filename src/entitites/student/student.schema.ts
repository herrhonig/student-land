export type StudentStatus = "active" | "excluded";

export interface Student {
  id: number;
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
