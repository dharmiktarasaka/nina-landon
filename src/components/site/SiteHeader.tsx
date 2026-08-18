import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Retreats", to: "/retreats" },
  { label: "Online Courses", to: "/courses" },
  { label: "Shop", to: "/shop" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 shadow-petal backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[0.95rem] font-medium transition-colors hover:text-amaranth ${
                  isActive ? "text-amaranth font-semibold" : "text-ink/80"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="bloom" size="pill" className="hidden sm:inline-flex">
            <Link to="/courses">
              Join a Class <ArrowRight />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="size-11 rounded-full lg:hidden"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream w-[86vw] max-w-sm border-l-0 p-8">
              <div className="mt-4 flex flex-col gap-2">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-xl font-medium transition-colors hover:bg-blush ${
                        isActive ? "text-amaranth font-semibold bg-blush/60" : "text-wine"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button asChild variant="bloom" size="pillLg" className="mt-6">
                  <Link to="/courses" onClick={() => setOpen(false)}>
                    Join a Class <ArrowRight />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}