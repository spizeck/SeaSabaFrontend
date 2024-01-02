import React from 'react'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  verify_password: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone_number: z.string().optional(),
  company_name: z.string().optional(),
}).refine((data) => data.password === data.verify_password, "Passwords do not match")

type FormData = z.infer<typeof formSchema>

type FormFieldName =
  "username"
  | "email"
  | "password"
  | "verify_password"
  | "first_name"
  | "last_name"
  | "phone_number"
  | "company_name";

export function RegisterForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      verify_password: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      company_name: "",
    },
  })

  const fields: { name: FormFieldName, type: string, placeholder: string }[] = [
    {name: "username", type: "text", placeholder: "Username"},
    {name: "email", type: "email", placeholder: "Email"},
    {name: "password", type: "password", placeholder: "Password"},
    {name: "verify_password", type: "password", placeholder: "Verify Password"},
    {name: "first_name", type: "text", placeholder: "First Name - Optional"},
    {name: "last_name", type: "text", placeholder: "Last Name - Optional"},
    {name: "phone_number", type: "text", placeholder: "Phone Number - Optional"},
    {name: "company_name", type: "text", placeholder: "Company Name - Optional"},
  ]

  function onSubmit(values: FormData) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({field}) => (
              <FormItem>
                <FormLabel>{field.name}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
}