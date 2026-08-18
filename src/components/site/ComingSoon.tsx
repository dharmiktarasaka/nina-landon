import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ComingSoon({
  eyebrow,
  title,
  script,
  copy,
}: {
  eyebrow: string;
  title: string;
  script: string;
  copy: string;
}) {
  return (
    <section className="section-y from-blush via-cream to-peach/60 relative overflow-hidden bg-gradient-to-b pt-36">
      <div className="bg-radiant pointer-events-none absolute -top-24 -right-24 size-96 rounded-full opacity-20 blur-3xl" />
      <div className="shell relative max-w-3xl text-center">
        <p className="eyebrow text-amaranth">{eyebrow}</p>
        <h1 className="text-wine mt-4 text-4xl md:text-6xl">
          {title} <span className="font-script text-gradient block text-5xl md:text-7xl">{script}</span>
        </h1>
        <p className="text-ink/80 mx-auto mt-6 max-w-xl text-lg">{copy}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button asChild variant="bloom" size="pillLg">
            <Link to="/contact">
              Ask Nina a question <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="wine" size="pillLg">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}