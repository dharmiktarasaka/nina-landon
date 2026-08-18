import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./Logo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@radiantflower.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-wine text-cream relative">
      <div className="bg-radiant h-1.5 w-full" />
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="text-cream/80 mt-5 max-w-sm text-base">
            Radiant Flower is a women's wellness brand led by Nina, helping women 45+
            flourish with more energy, confidence, sensuality and joy through retreats, live classes
            and online courses — guided by her signature Radiant Flower Method and 20+ years of
            teaching.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Radiant Flower on ${label}`}
                className="border-cream/25 text-cream hover:bg-cream hover:text-wine flex size-11 items-center justify-center rounded-full border transition-colors"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow text-magenta">Explore</h3>
          <ul className="mt-5 space-y-3 text-base">
            {[
              { label: "About Nina", to: "/about" },
              { label: "Retreats", to: "/retreats" },
              { label: "Online Courses", to: "/courses" },
              { label: "Shop", to: "/shop" },
              { label: "Journal", to: "/journal" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 hover:text-cream transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-2xl font-semibold">
            Get radiant in your <span className="font-script text-magenta text-3xl">inbox</span>
          </h3>
          <p className="text-cream/80 mt-3 text-base">
            Weekly inspiration for women who refuse to fade. No spam — just warmth, once a week.
          </p>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <Input
              id="footer-email"
              type="email"
              required
              placeholder="your@email.com"
              className="text-cream placeholder:text-cream/50 h-12 rounded-full border-cream/25 bg-white/10 px-5"
            />
            <Button type="submit" variant="bloom" size="pill">
              Join <ArrowRight className="size-4" />
            </Button>
          </form>
          <p className="text-cream/60 mt-3 text-sm">
            Loved by 1000+ women worldwide. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <div className="border-cream/15 border-t">
        <div className="shell text-cream/70 flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>1000+ Happy Students · 20+ Years Teaching · Worldwide Community</p>
          <p>© {new Date().getFullYear()} Radiant Flower. It's your time to blossom.</p>
        </div>
      </div>
    </footer>
  );
}