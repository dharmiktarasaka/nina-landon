import { Link } from "react-router-dom";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3">
      <img
        src="/favicon.png"
        alt="Radiant Flower logo"
        className="size-21 shrink-0 rounded-full object-contain pt-1 pb-1"
        width={56}
        height={56}
      />
      <span
        className={`font-script hidden text-2xl leading-none sm:block ${
          tone === "light" ? "text-cream" : "text-wine"
        }`}
      >
        Radiant Flower
      </span>
    </Link>
  );
}