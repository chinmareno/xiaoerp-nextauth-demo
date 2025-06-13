import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  iconClassName: string;
};

export const ModulesOverviewCard = ({
  iconClassName,
  icon,
  title,
  description,
  features,
}: Props) => {
  return (
    <Card className="group border-border flex pb-11 transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div
          className={`h-12 w-12 rounded-lg ${iconClassName} mb-4 flex items-center justify-center`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title} Module</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-6 space-y-2">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="text-muted-foreground flex items-center text-sm"
            >
              <ArrowRight className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <Button
        variant="outline"
        className="mt-auto w-11/12 self-center bg-black text-white transition-colors hover:cursor-pointer hover:bg-black/85 hover:text-white"
      >
        Learn More
      </Button>
    </Card>
  );
};

export default ModulesOverviewCard;
