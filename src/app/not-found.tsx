import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCurrentLocale } from "./public/locales/client";

const NotFoundPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-foreground mb-4 text-8xl font-bold tracking-tight md:text-9xl">
              404
            </h1>
            <div className="border-muted bg-muted/40 mx-auto max-w-2xl rounded-3xl border px-6 py-8 shadow-md backdrop-blur-sm sm:px-10">
              <h2 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed sm:text-lg">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Button asChild size="lg">
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
