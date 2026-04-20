export {
  useGetStudents,
  useGetStudentById,
  useCreateStudent,
  useUpdateStudent,
} from "./model/student.queries";

export { StudentCard } from "./ui/student-card/card";
export { StudentDetails } from "./ui/student-details/details";

export type {
  Student,
  StudentStatus,
  CreateStudentDto,
} from "./types/student.schema";
