import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "~/components/ui/button";

export const Hero = () => {
  return (
    <section className="from-primary/5 via-background to-secondary/5 bg-gradient-to-br py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold md:text-6xl">
            Streamline Your Business with
            <span className="text-primary mt-2 block">Smart ERP Solution</span>
          </h1>

          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl leading-relaxed">
            Integrate accounting, inventory, purchasing, and sales in one
            powerful platform. Built for small businesses, designed for growth.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-card border-border flex flex-col items-center rounded-lg border p-6">
              <Shield className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">Secure & Reliable</h3>
              <p className="text-muted-foreground text-center">
                Enterprise-grade security for your business data
              </p>
            </div>

            <div className="bg-card border-border flex flex-col items-center rounded-lg border p-6">
              <Zap className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground text-center">
                Optimized performance for seamless workflows
              </p>
            </div>

            <div className="bg-card border-border flex flex-col items-center rounded-lg border p-6">
              <Users className="text-primary mb-4 h-12 w-12" />
              <h3 className="mb-2 text-lg font-semibold">Team Collaboration</h3>
              <p className="text-muted-foreground text-center">
                Built for teams to work together efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
