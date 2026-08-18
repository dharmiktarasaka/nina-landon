import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Infinity as InfinityIcon, PlayCircle, Video } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aboutImage from "@/assets/about.png";
import pathCourses from "@/assets/path-courses.jpg";

const LIVE = [
  { day: "Monday", time: "09:00 CET", title: "Morning Reconnect", copy: "Breath, spine and a soft wake-up for the whole body.", level: "All levels" },
  { day: "Wednesday", time: "18:30 CET", title: "Sensual Flow", copy: "Slow, music-led movement to reawaken pleasure and confidence.", level: "All levels" },
  { day: "Friday", time: "12:00 CET", title: "Chair & Gentle", copy: "Fully seated option — perfect if you're starting from scratch.", level: "Beginner" },
  { day: "Sunday", time: "17:00 CET", title: "Radiate Circle", copy: "Movement, reflection and sisterhood to close your week.", level: "All levels" },
];

const COURSES = [
  {
    title: "The Radiant Flower Foundations",
    length: "6 weeks · 24 lessons",
    price: "€149",
    copy: "The complete Method, taught step by step. Reconnect with your body, reawaken confidence, and build rituals that stay.",
    features: ["24 guided video lessons", "Printable ritual workbook", "Private community circle", "Lifetime access"],
    featured: true,
  },
  {
    title: "Energy After 50",
    length: "4 weeks · 16 lessons",
    price: "€89",
    copy: "Short daily practices that rebuild stamina without exhausting you — designed around real energy, not gym energy.",
    features: ["16 short lessons (15 min)", "Morning & evening rituals", "Sleep and rest guide", "Lifetime access"],
  },
  {
    title: "Sensual Reawakening",
    length: "5 weeks · 18 lessons",
    price: "€119",
    copy: "A tender, joyful return to feeling at home — and delighted — in your own skin.",
    features: ["18 movement & breath lessons", "Journal prompts", "Music playlists", "Lifetime access"],
  },
];

const FAQ = [
  { q: "What if I've never done anything like this?", a: "Perfect. Foundations assumes you're starting today. Every lesson shows a seated, supported and standing version." },
  { q: "Are the live classes recorded?", a: "Yes. Every live class is recorded and lands in your library within a few hours, so nothing is lost to a timezone." },
  { q: "How long do I keep the courses?", a: "Forever. Buy once, return whenever you need it — including every future update." },
  { q: "Can I switch between live and self-paced?", a: "Of course. Most women do both: a live class for the company, a course for the mornings nobody else is awake." },
];

export default function Courses() {
  return (
    <>
      <section className="bg-cream relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="bg-radiant pointer-events-none absolute -top-20 right-0 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-amaranth">Classes & courses</p>
            <h1 className="text-wine mt-3 text-4xl md:text-6xl">
              Practise with Nina, <span className="font-script text-gradient text-5xl md:text-7xl">weekly</span>
            </h1>
            <p className="text-ink/80 mt-6 text-lg">
              Live classes for the company and the accountability. Self-paced courses for the
              mornings that belong only to you. Same Method, your pace.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="bloom" size="pillLg" asChild>
                <a href="#live">
                  See the timetable <ArrowRight />
                </a>
              </Button>
              <Button variant="wine" size="pillLg" asChild>
                <a href="#courses">Browse courses</a>
              </Button>
            </div>
            <div className="text-ink/70 mt-8 flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2"><Video className="text-amaranth size-4" /> Live on Zoom</span>
              <span className="flex items-center gap-2"><Clock className="text-amaranth size-4" /> 45–60 minutes</span>
              <span className="flex items-center gap-2"><InfinityIcon className="text-amaranth size-4" /> Lifetime access</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="bg-radiant absolute -inset-3 rounded-[52%_48%_40%_60%/48%_42%_58%_52%] opacity-25 blur-2xl" />
              <img
                src={aboutImage}
                alt="Nina smiling warmly teaching online courses"
                className="shadow-petal-lg relative aspect-[4/5] w-full rounded-[52%_48%_40%_60%/48%_42%_58%_52%] object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="live" className="section-y bg-blush/40 scroll-mt-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">Live weekly</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              The <span className="font-script text-gradient text-4xl md:text-5xl">timetable</span>
            </h2>
            <p className="text-ink/80 mt-4 text-lg">
              Four live classes every week, all recorded. Come with your camera on or off — nobody
              is watching but us, and we're all rooting for you.
            </p>
          </Reveal>

          <Tabs defaultValue="all" className="mt-10">
            <TabsList className="bg-white/70">
              <TabsTrigger value="all">All classes</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
            </TabsList>
            {(["all", "beginner"] as const).map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {LIVE.filter((c) => tab === "all" || c.level === "Beginner").map((c, i) => (
                    <Reveal key={c.title} delay={i * 0.07}>
                      <article className="border-blush shadow-petal flex h-full items-start gap-5 rounded-3xl border bg-white p-7">
                        <PlayCircle className="text-amaranth mt-1 size-8 shrink-0" aria-hidden="true" />
                        <div className="flex-1">
                          <p className="text-amaranth text-sm font-semibold">
                            {c.day} · {c.time}
                          </p>
                          <h3 className="text-wine mt-1 text-xl">{c.title}</h3>
                          <p className="text-ink/80 mt-2 text-base">{c.copy}</p>
                          <span className="bg-blush text-wine mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium">
                            {c.level}
                          </span>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Reveal className="mt-10">
            <div className="bg-radiant shadow-petal-lg flex flex-col items-center gap-5 rounded-3xl p-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h3 className="text-2xl font-semibold text-white">Unlimited live classes — €39/month</h3>
                <p className="mt-1 text-base text-white/85">
                  All four weekly classes, every recording, and the community circle. Cancel anytime.
                </p>
              </div>
              <Button asChild variant="cream" size="pillLg">
                <Link to="/contact">
                  Join the membership <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="courses" className="section-y bg-cream scroll-mt-24">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">Self-paced</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              Online <span className="font-script text-gradient text-4xl md:text-5xl">courses</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {COURSES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <article
                  className={`shadow-petal flex h-full flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
                    c.featured ? "border-amaranth ring-amaranth/20 ring-4" : "border-blush"
                  }`}
                >
                  {c.featured && (
                    <span className="bg-radiant mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold text-white">
                      Most loved
                    </span>
                  )}
                  <h3 className="text-wine text-2xl">{c.title}</h3>
                  <p className="text-ink/60 mt-1 text-sm">{c.length}</p>
                  <p className="text-ink/80 mt-4 flex-1 text-base">{c.copy}</p>
                  <ul className="mt-5 space-y-2">
                    {c.features.map((f) => (
                      <li key={f} className="text-ink/85 flex gap-2 text-sm">
                        <Check className="text-amaranth mt-0.5 size-4 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-wine mt-6 text-3xl font-bold">{c.price}</p>
                  <Button asChild variant={c.featured ? "bloom" : "wine"} size="pill" className="mt-4 w-full">
                    <Link to="/contact">
                      Enrol now <ArrowRight />
                    </Link>
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-blush/40">
        <div className="shell max-w-3xl">
          <Reveal>
            <h2 className="text-wine text-3xl md:text-4xl">
              Before you <span className="font-script text-gradient text-4xl md:text-5xl">begin</span>
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
