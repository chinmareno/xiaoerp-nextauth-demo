import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  locale: string;
};
const BackHomeButton = ({ locale }: Props) => {
  return (
    <div className="mt-8 text-center">
      <Button
        asChild
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        <Link href={`/${locale}`} replace>
          <ArrowLeft className="h-4 w-4" />
          <span>Back Home</span>
        </Link>
      </Button>
    </div>
  );
};

export default BackHomeButton;
