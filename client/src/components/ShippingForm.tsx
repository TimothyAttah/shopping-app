"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { shippingFormSchema } from "@/types";
import { z } from "zod";

// 👇 derive type directly from schema (BEST PRACTICE)
type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

interface Props {
  setShippingForm: (data: ShippingFormInputs) => void;
}

const ShippingForm = ({ setShippingForm }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    },
  });

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);

    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Name</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Email</label>
        <input
          type="email"
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="john@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Phone</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="+123456789"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">Address</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="12, Lagos, Nigeria"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* City */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500 font-medium">City</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          placeholder="Lagos"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all text-white p-2 rounded-lg flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default ShippingForm;
