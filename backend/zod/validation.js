import z from 'zod'

const userSignupValidationSchema = z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25).optional(true),
    email: z.string().email(),
    college: z.string(2),
    year: z.number()

});
/*
const userSigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string()
});
*/
export default userSignupValidationSchema;