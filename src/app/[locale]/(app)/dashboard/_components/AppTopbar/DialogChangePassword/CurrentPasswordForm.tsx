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
import { useState, type Dispatch } from "react";
import { api } from "@/trpc/react";
import { useLoadingStore } from "@/hooks/useLoadingStore";

const currentPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof currentPasswordSchema>;

type Props = {
  handleClose: () => void;
  setIsVerified: Dispatch<React.SetStateAction<boolean>>;
};

export const CurrrentPasswordForm = ({ handleClose, setIsVerified }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { resetLoading, setLoading } = useLoadingStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(currentPasswordSchema),
  });

  const mutate = api.user.verifyPassword.useMutation({
    onMutate: () => {
      setIsLoading(true);
      resetLoading();
      setLoading(30);
    },
    onSuccess: async () => {
      setLoading(100);
    },
    onSettled() {
      setIsLoading(false);
      setTimeout(resetLoading, 300);
    },
  });
  const onSubmit = async (data: FormData) => {
    const isVerified = await mutate.mutateAsync({ password: data.password });
    if (!isVerified)
      return setError("password", {
        message: "Incorrect password. Please try again.",
      });
    setIsVerified(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <DialogHeader>
        <DialogTitle>Verify Your Password</DialogTitle>
        <DialogDescription>
          Enter your current password to verify your identity.
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-1">
        <Label htmlFor="password">Current Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          placeholder="Enter your current password"
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <DialogFooter>
        <Button onClick={() => handleClose()} variant="outline" type="button">
          Cancel
        </Button>

        <Button disabled={isLoading} type="submit">
          Next
        </Button>
      </DialogFooter>
    </form>
  );
};
