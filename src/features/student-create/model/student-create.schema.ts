import { z } from "zod";

export const createStudentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email").min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
  course: z.string().min(1, "Course is required"),
  status: z.enum(["active", "excluded"]),
});

export type CreateStudentFormData = z.infer<typeof createStudentSchema>;
