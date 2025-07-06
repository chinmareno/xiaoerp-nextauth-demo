import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
type Props = {
  text?: string;
};

export const GoogleAuthButton = ({ text = "Google" }: Props) => {
  return (
    <div>
      <Button
        onClick={() => signIn("google", { redirectTo: "/dashboard" })}
        className="flex h-12 w-full items-center justify-center gap-4 rounded-lg border-2 border-gray-300 bg-white font-semibold text-black hover:bg-slate-50"
      >
        <FcGoogle className="h-6 w-6 flex-shrink-0" />
        {text}
      </Button>
    </div>
  );
};
