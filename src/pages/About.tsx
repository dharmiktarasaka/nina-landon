import { Link } from "react-router-dom";
import { ArrowRight, Flower2, HeartHandshake, Sparkles, Sun } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about.png";
import staffImage from "@/assets/staff.png";
import pathRetreats from "@/assets/path-retreats.jpg";

const VALUES = [
  {
    icon: Flower2,
    title: "Blossoming, not fixing",
    copy: "You are not a problem to solve. Everything here is built on what is already alive in you.",
  },
  {
    icon: Sun,
    title: "Joy is the practice",
    copy: "Playfulness, colour and laughter aren't extras — they are how the body remembers to open.",
  },
  {
    icon: HeartHandshake,
    title: "Sisterhood first",
    copy: "Small groups, real names, real conversations. Nobody blossoms in isolation.",
  },
  {
    icon: Sparkles,
    title: "Beginner-friendly always",
    copy: "No flexibility, experience or equipment needed. Every practice has a seated option.",
  },
];

const TIMELINE = [
  { year: "1999", text: "Nina teaches her first movement class at 29 — twelve women in a village hall." },
  { year: "2008", text: "She begins working almost exclusively with women over 45, and sees what nobody talks about." },
  { year: "2016", text: "Her own turning point: energy gone, confidence quieter. She rebuilds herself, step by step." },
  { year: "2019", text: "The Radiant Flower Method is born — Reconnect, Reawaken, Radiate." },
  { year: "2022", text: "The first international retreat. Sixteen women, one week, a whole new decade of life." },
  { year: "Today", text: "1000+ women across 20+ countries practise the Method every single week." },
];

export default function About() {
  return (
    <>
      <section className="bg-cream relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="bg-radiant pointer-events-none absolute -top-24 -left-24 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-amaranth">Meet the founder</p>
            <h1 className="text-wine mt-3 text-4xl md:text-6xl">
              Hello, I'm <span className="font-script text-gradient text-5xl md:text-7xl">Nina</span>
            </h1>
            <p className="text-ink/80 mt-6 text-lg">
              For over twenty years I've stood in front of rooms full of women and watched the same
              quiet moment happen again and again — the moment a woman remembers she is still here,
              still wanting, still radiant.
            </p>
            <p className="text-ink/80 mt-4 text-lg">
              I built Radiant Flower for the years nobody prepares us for. Not to make you younger.
              To make you fully, unapologetically yourself.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="bloom" size="pillLg">
                <Link to="/courses">
                  Practise with me <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="wine" size="pillLg">
                <Link to="/retreats">See the retreats</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="bg-radiant absolute -inset-3 rounded-[46%_54%_38%_62%/54%_38%_62%_46%] opacity-25 blur-2xl" />
              <img
                src={aboutImage}
                alt="Nina leading a wellness class with women"
                className="shadow-petal-lg relative aspect-[4/5] w-full rounded-[46%_54%_38%_62%/54%_38%_62%_46%] object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-blush/40">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-amaranth">The flower</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              Why a <span className="font-script text-gradient text-4xl md:text-5xl">flower</span>
            </h2>
            <p className="text-ink/80 mt-5 text-lg">
              A flower doesn't rush, apologise or compare itself to the one beside it. It simply
              opens when the conditions are right — warmth, light, water, time.
            </p>
            <p className="text-ink/80 mt-4 text-lg">
              My whole work is creating those conditions for women. The petals in our mark are the
              parts of you that get folded away: your energy, your confidence, your sensuality, your
              joy. We open them one by one.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div key={v.title} className="border-blush shadow-petal h-full rounded-3xl border bg-white p-7">
                  <v.icon className="text-amaranth size-7" aria-hidden="true" />
                  <h3 className="text-wine mt-4 text-xl">{v.title}</h3>
                  <p className="text-ink/75 mt-2 text-base">{v.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">The journey</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              Twenty years, one <span className="font-script text-gradient text-4xl md:text-5xl">calling</span>
            </h2>
          </Reveal>
          <ol className="border-blush mt-12 space-y-6 border-l-2 pl-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="relative">
                  <span className="bg-radiant ring-cream absolute top-2 -left-[41px] size-4 rounded-full ring-4" />
                  <p className="text-amaranth text-sm font-semibold tracking-wide">{t.year}</p>
                  <p className="text-ink/85 mt-1 text-lg">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-wine relative overflow-hidden">
        <img
          src={staffImage}
          alt="Women of the Radiant Flower community gathered together"
          loading="lazy"
          className="h-[420px] w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="shell">
            <Reveal className="max-w-xl">
              <h2 className="text-cream text-3xl md:text-4xl">
                Come and meet the women who{" "}
                <span className="font-script text-magenta text-4xl md:text-5xl">get it</span>
              </h2>
              <Button asChild variant="bloom" size="pillLg" className="mt-7">
                <Link to="/contact">
                  Write to Nina <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
