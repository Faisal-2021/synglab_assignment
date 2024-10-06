import { z } from "zod";
const regex = /^[6-9]{1}[0-9]{9}$/;

export const UserSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().trim().toLowerCase(),
  username: z
    .string()
    .min(3, { message: "Username should contain atleast 3 character" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "10 digit mobile number" })
    .regex(regex, { message: "Please enter valid Mobile number" }),
    street: z.string().min(3),
    city: z.string(3).min(3),
    website: z.string().url().optional(),
  company: z.string().min(3).optional(),
});
