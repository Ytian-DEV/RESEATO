import { z } from "zod";

export const signUpSchema = z.object({
  role: z.enum(["customer", "owner"]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  password: z.string().min(6, "At least 6 characters"),
  confirmPassword: z.string().min(6),
  terms: z.boolean().refine((v) => v === true, "You must accept the terms"),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;