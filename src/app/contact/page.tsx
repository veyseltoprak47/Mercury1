"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("📨 contact form submitted:", data);
    toast.success("Message sent! We'll get back to you shortly.");
    reset();
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-4xl font-serif text-yellow-500">Contact Us</h1>
        <p className="text-gray-400">
          Looking to connect? Share your thoughts, questions, or proposals—
          we’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input placeholder="Your Name" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input type="email" placeholder="Your Email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Textarea placeholder="Your Message" rows={5} {...register("message")} />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-yellow-500 text-black hover:bg-yellow-400 transition w-full"
          >
            Send Message
          </Button>
        </form>
      </div>
    </main>
  );
}
