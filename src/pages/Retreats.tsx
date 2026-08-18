import { Link } from "react-router-dom";
import { ArrowRight, Check, MapPin, Users, Utensils, Waves } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero.png";
import pathRetreats from "@/assets/path-retreats.jpg";
import staffImage from "@/assets/staff.png";

const RETREATS = [
  {
    name: "Ocean Bloom",
    place: "Costa Brava, Spain",
    dates: "12–18 May",
    spots: "6 of 16 places left",
    copy: "Sunrise movement on the cliffs, long lunches under fig trees, and the sea to remind you how big you are.",
    tags: ["7 days", "Sea swimming", "All meals"],
  },
  {
    name: "Wild Garden",
    place: "Tuscany, Italy",
    dates: "8–13 September",
    spots: "10 of 14 places left",
    copy: "Slow mornings in a stone farmhouse, sensual dance in the olive grove, and evenings that end in laughter.",
    tags: ["5 days", "Dance & breath", "All meals"],
  },
  {
    name: "Island Radiance",
    place: "Madeira, Portugal",
    dates: "3–9 November",
    spots: "Waitlist open",
    copy: "Volcanic hills, hibiscus everywhere, and a week designed to send you home unmistakably yourself.",
    tags: ["6 days", "Nature walks", "All meals"],
  },
];

const INCLUDED = [
  "Boutique accommodation (private or shared)",
  "All nourishing meals and local produce",
  "Two daily sessions with Nina",
  "1:1 blossom conversation with Nina",
  "Excursions, swims and long slow walks",
  "Take-home ritual guide for the year after",
];

const DAY = [
  { time: "07:30", text: "Sunrise breath and gentle movement, barefoot in the garden." },
  { time: "09:00", text: "Long, unhurried breakfast at one big table." },
  { time: "10:30", text: "The Method session — Reconnect, Reawaken or Radiate." },
  { time: "13:00", text: "Lunch, then free hours to swim, nap, read or wander." },
  { time: "17:00", text: "Sensual movement, dance or circle work as the light softens." },
  { time: "20:00", text: "Dinner, wine if you like, stories until someone cries laughing." },
];

const FAQ = [
  {
    q: "I'm not flexible or fit. Can I still come?",
    a: "Absolutely. Every session has seated, supported and standing options. Our women are 45 to 78 and most arrive saying exactly what you just said.",
  },
  {
    q: "Can I come alone?",
    a: "Most women do. Groups are capped at 16 so nobody disappears, and by day two you'll have a table full of friends.",
  },
  {
    q: "What about flights and single rooms?",
    a: "Flights aren't included so you can choose your own route. Private rooms are available on every retreat — mention it when you enquire.",
  },
  {
    q: "How do I hold a place?",
    a: "Send an enquiry and Nina will personally reply within two working days with dates, pricing and a simple deposit link.",
  },
];

export default function Retreats() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <img
          src={heroImage}
          alt="Retreat coastal landscape with radiant sun"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="from-cream via-cream/85 absolute inset-0 bg-gradient-to-r to-transparent" />
        <div className="shell relative">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-amaranth">Retreats</p>
            <h1 className="text-wine mt-3 text-4xl md:text-6xl">
              A week that changes the{" "}
              <span className="font-script text-gradient text-5xl md:text-7xl">decade</span>
            </h1>
            <p className="text-ink/80 mt-6 text-lg">
              Small groups. Beautiful places. Seven days of movement, sunlight, real food and women
              who understand — with Nina beside you the whole way.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="bloom" size="pillLg">
                <Link to="/contact">
                  Enquire about a place <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="wine" size="pillLg">
                <Link to="/courses">Try a class first</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">Upcoming</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              Where we're blossoming{" "}
              <span className="font-script text-gradient text-4xl md:text-5xl">next</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {RETREATS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <article className="border-blush shadow-petal hover:shadow-petal-lg flex h-full flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1">
                  <p className="text-amaranth flex items-center gap-2 text-sm font-semibold">
                    <MapPin className="size-4" /> {r.place}
                  </p>
                  <h3 className="text-wine mt-3 text-2xl">{r.name}</h3>
                  <p className="text-ink/60 mt-1 text-sm">{r.dates}</p>
                  <p className="text-ink/80 mt-4 flex-1 text-base">{r.copy}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.tags.map((t) => (
                      <li key={t} className="bg-blush text-wine rounded-full px-3 py-1 text-xs font-medium">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="text-magenta mt-5 text-sm font-semibold">{r.spots}</p>
                  <Button asChild variant="bloom" size="pill" className="mt-5 w-full">
                    <Link to="/contact">
                      Request details <ArrowRight />
                    </Link>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-blush/40">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-amaranth">A day in the life</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              Slow, sunlit, and entirely{" "}
              <span className="font-script text-gradient text-4xl md:text-5xl">yours</span>
            </h2>
            <ol className="mt-8 space-y-5">
              {DAY.map((d) => (
                <li key={d.time} className="flex gap-5">
                  <span className="text-amaranth w-14 shrink-0 pt-0.5 text-sm font-semibold">{d.time}</span>
                  <span className="text-ink/85 text-base">{d.text}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-blush shadow-petal rounded-3xl border bg-white p-8">
              <h3 className="text-wine text-2xl">What's included</h3>
              <ul className="mt-6 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="text-ink/85 flex gap-3 text-base">
                    <Check className="text-amaranth mt-1 size-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-blush mt-8 grid grid-cols-3 gap-4 border-t pt-6 text-center">
                {[
                  { icon: Users, label: "12–16 women" },
                  { icon: Utensils, label: "All meals" },
                  { icon: Waves, label: "Nature daily" },
                ].map((f) => (
                  <div key={f.label}>
                    <f.icon className="text-amaranth mx-auto size-6" aria-hidden="true" />
                    <p className="text-ink/70 mt-2 text-xs">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-wine relative overflow-hidden">
        <img
          src={staffImage}
          alt="Retreat guests laughing together holding flowers"
          loading="lazy"
          className="h-[380px] w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="shell">
            <Reveal className="max-w-xl">
              <p className="text-cream/90 font-script text-3xl">
                "I arrived exhausted and left feeling twenty years lighter."
              </p>
              <p className="text-cream/70 mt-3 text-sm">Marguerite, 61 — Ocean Bloom retreat</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="shell max-w-3xl">
          <Reveal>
            <h2 className="text-wine text-3xl md:text-4xl">
              Retreat <span className="font-script text-gradient text-4xl md:text-5xl">questions</span>
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {FAQ.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-blush">
                  <AccordionTrigger className="text-wine text-left text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-ink/80 text-base">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
