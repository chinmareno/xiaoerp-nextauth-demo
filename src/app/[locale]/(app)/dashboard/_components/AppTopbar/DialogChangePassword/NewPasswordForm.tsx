import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { api } from "@/trpc/react";
import { useLoadingStore } from "@/hooks/useLoadingStore";
import { toast } from "sonner";
import { Check, Dot } from "lucide-react";

const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "please fill this too")
      .refine((val) => /[A-Z]/.test(val))
      .refine((val) => /[a-z]/.test(val))
      .refine((val) => /\d/.test(val)),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof newPasswordSchema>;

type Props = {
  handleClose: () => void;
};

export const NewPasswordForm = ({ handleClose }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { resetLoading, setLoading } = useLoadingStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(newPasswordSchema),
  });

  const passwordValue =
    typeof window !== "undefined" ? (watch("password") ?? "") : "";

  const confirmPasswordValue =
    typeof window !== "undefined" ? (watch("confirmPassword") ?? "") : "";

  const mutate = api.user.changePassword.useMutation({
    onMutate: () => {
      setIsLoading(true);
      resetLoading();
      setLoading(30);
    },
    onSuccess: () => {
      setLoading(100);
      toast.success("Password changed successfully!");
      handleClose();
    },
    onError: () => {
      toast.error("Failed to change password. Please try again");
    },
    onSettled() {
      setIsLoading(false);
      setTimeout(resetLoading, 300);
    },
  });

  const onSubmit = (data: FormData) => {
    mutate.mutate(data);
    handleClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <DialogHeader>
        <DialogTitle>Set a New Password</DialogTitle>
        <DialogDescription>
          Your new password must be at least 8 characters long and include
          uppercase, lowercase, and a number.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-1 space-y-2">
        <Label htmlFor="password">New Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Enter your new password"
        />
        {errors.password && (
          <p className="text-xs text-red-600">
            Password does not meet requirements
          </p>
        )}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {/[a-z]/.test(passwordValue) ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Dot className="h-4 w-4" />
            )}
            <p className="text-sm">One lowercase character</p>
          </div>
          <div className="flex items-center gap-2">
            {/[A-Z]/.test(passwordValue) ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Dot className="h-4 w-4" />
            )}
            <p className="text-sm">One uppercase character</p>
          </div>
          <div className="flex items-center gap-2">
            {/\d/.test(passwordValue) ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Dot className="h-4 w-4" />
            )}
            <p className="text-sm">Includes a number</p>
          </div>
          <div className="flex items-center gap-2">
            {passwordValue.length >= 8 ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Dot className="h-4 w-4" />
            )}
            <p className="text-sm">8 characters minimum</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm your new password"
        />
        {errors.confirmPassword && passwordValue !== confirmPasswordValue && (
          <p className="text-xs text-red-600">Passwords do not match</p>
        )}
      </div>

      <DialogFooter>
        <Button onClick={() => handleClose()} variant="outline" type="button">
          Cancel
        </Button>

        <Button disabled={isLoading} type="submit">
          Change Password
        </Button>
      </DialogFooter>
    </form>
  );
};
