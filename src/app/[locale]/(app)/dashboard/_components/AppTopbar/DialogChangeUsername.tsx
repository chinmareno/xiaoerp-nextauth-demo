import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { Dispatch } from "react";
import { api } from "@/trpc/react";

const usernameSchema = z.object({
  username: z.string().min(1, "Username cannot be empty"),
});

type FormData = z.infer<typeof usernameSchema>;

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const DialogChangeUsername = ({ isOpen, setIsOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(usernameSchema),
  });
  const utils = api.useUtils();
  const mutate = api.user.changeUsername.useMutation({
    onSuccess: (updatedUser) => {
      utils.user.getUser.setData(undefined, (oldData) => ({
        ...oldData,
        name: updatedUser.name,
        image: oldData?.image || null,
      }));
    },
  });

  const onSubmit = (data: FormData) => {
    mutate.mutate(data.username);
    reset();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent
        onXIconClick={() => setIsOpen(false)}
        className="sm:max-w-[425px]"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Only 16 characters are displayed for the username.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-1">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              {...register("username")}
              placeholder="Enter new username"
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>

          <DialogFooter>
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              type="button"
            >
              Cancel
            </Button>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
