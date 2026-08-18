import { Link } from "react-router-dom";
import {
  ArrowRight,
  Flower2,
  Heart,
  Sparkles,
  Star,
  Sun,
  Users,
  Wind,
} from "lucide-react";

import heroImage from "@/assets/hero.png";
import aboutImage from "@/assets/about.png";
import staffImage from "@/assets/staff.png";
import pathRetreats from "@/assets/path-retreats.jpg";
import pathClasses from "@/assets/path-classes.jpg";
import pathCourses from "@/assets/path-courses.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const STATS = [
  { icon: Users, value: "1000+", label: "Happy students" },
  { icon: Sun, value: "20+", label: "Years teaching" },
  { icon: Flower2, value: "Signature", label: "Radiant Flower Method" },
  { icon: Heart, value: "Worldwide", label: "Women's community" },
];

const PATHS = [
  {
    title: "Retreats",
    image: pathRetreats,
    alt: "Women 45+ practising gentle movement on a sunlit retreat terrace among olive trees",
    copy: "A week away that resets everything. Slow mornings, gentle movement, honest conversation and long dinners under the stars — with women who understand exactly where you are.",
    to: "/retreats",
  },
  {
    title: "Live Classes",
    image: pathClasses,
    alt: "A joyful group of women over 45 dancing together in a bright blush-coloured studio",
    copy: "Weekly online and in-person classes in feminine movement, breath and confidence. No experience needed, no mirrors, no pressure — just an hour that makes you feel alive.",
    to: "/courses",
  },
  {
    title: "Online Courses",
    image: pathCourses,
    alt: "A woman in her fifties following a Radiant Flower online course on her laptop at home",
    copy: "The Radiant Flower Method, at your own pace. Short, beautiful lessons you can do in your living room, whenever your day allows — with lifetime access.",
    to: "/courses",
  },
];

const METHOD = [
  {
    step: "01",
    title: "Reconnect",
    copy: "We begin with your body, exactly as it is today. Breath, gentle movement and rest teach you to feel at home in yourself again — often for the first time in years.",
  },
  {
    step: "02",
    title: "Reawaken",
    copy: "Next we wake up the parts of you that midlife quietly muted: playfulness, sensuality, appetite, desire. This is the step women say they never knew they were allowed.",
  },
  {
    step: "03",
    title: "Radiate",
    copy: "Finally we make it daily. Simple rituals and a supportive sisterhood turn one good week into a way of living — so your radiance stays long after the class ends.",
  },
];

const BENEFITS = [
  {
    icon: Sparkles,
    title: "Energy that lasts past 3pm",
    copy: "Movement and rhythms designed for a midlife body — you finish class with more, not less.",
  },
  {
    icon: Star,
    title: "Confidence in any room",
    copy: "You stop apologising for taking up space, and start speaking with your whole chest.",
  },
  {
    icon: Heart,
    title: "Sensuality, reclaimed",
    copy: "Pleasure, softness and desire become yours again — on your terms, at any age.",
  },
  {
    icon: Wind,
    title: "Joy that surprises you",
    copy: "The laughing-in-the-kitchen kind. Women tell us this is what they missed most.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I signed up thinking I needed fixing. Twelve weeks later I understood I only needed waking up. I dance in my kitchen now, at 58, and my husband keeps asking what changed.",
    name: "Marianne D.",
    place: "Bristol, UK",
  },
  {
    quote:
      "Menopause took my energy and, honestly, my sense of myself. Nina gave both back — gently, without ever making me feel broken. I have never been part of anything so kind.",
    name: "Rosa L.",
    place: "Valencia, Spain",
  },
  {
    quote:
      "The retreat was the first week in twenty years that belonged only to me. I came home softer and somehow braver. I've since changed jobs and started painting again.",
    name: "Anita K.",
    place: "Toronto, Canada",
  },
];

const POSTS = [
  {
    category: "Energy",
    title: "Why your 3pm slump isn't your age — and what actually helps",
    excerpt:
      "Three small rhythm changes that give midlife women their afternoons back, without another supplement.",
  },
  {
    category: "Sensuality",
    title: "Reclaiming sensuality after 50: a gentle place to begin",
    excerpt:
      "Sensuality isn't performance. It's attention. Here's a five-minute practice to start tonight.",
  },
  {
    category: "Menopause & Beyond",
    title: "The confidence dip nobody warns you about in menopause",
    excerpt:
      "Why self-doubt spikes in midlife, and the daily ritual our students use to steady themselves.",
  },
];

const FAQS = [
  {
    q: "What is the Radiant Flower Method?",
    a: "It's Nina's three-part approach — Reconnect, Reawaken, Radiate — for women 45+. You begin by reconnecting with your body through breath and gentle movement, reawaken confidence and sensuality, then build simple daily rituals so the change lasts. It's taught in every class, course and retreat.",
  },
  {
    q: "Is this suitable if I'm over 60?",
    a: "Yes, absolutely. Our community spans 45 to 78, and every practice is offered in three levels — seated, supported and standing. Many women tell us they felt most welcome here precisely because nothing is built for twenty-year-olds.",
  },
  {
    q: "Do I need to be flexible or experienced?",
    a: "No. You need nothing but a chair, a little floor space and a willingness to try. Most women arrive with no movement background at all, and the first class is deliberately slow so you can find your footing.",
  },
  {
    q: "How do the retreats work?",
    a: "Small groups of 12–16 women, five to seven days, in warm, beautiful places. Mornings are movement and method work, afternoons are free or optional, evenings are shared meals and circle. Accommodation, food and all sessions are included — you only book flights.",
  },
  {
    q: "Is this an anti-ageing programme?",
    a: "It is the opposite. We are not interested in turning back time. Radiant Flower is about being fully, unapologetically alive in the body and the decade you're in right now.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="from-blush via-cream to-peach/50 relative overflow-hidden bg-gradient-to-br pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="bg-radiant animate-petal pointer-events-none absolute top-16 -left-24 size-80 rounded-full opacity-25 blur-3xl" />
        <div className="bg-radiant pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full opacity-15 blur-3xl" />
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-amaranth">For women 45+</p>
            <h1 className="text-wine mt-5 text-4xl sm:text-5xl lg:text-6xl">
              It's Your Time to{" "}
              <span className="font-script text-gradient block text-6xl sm:text-7xl lg:text-8xl">
                Blossom!
              </span>
            </h1>
            <p className="text-ink/80 mt-6 max-w-xl text-lg md:text-xl">
              Helping women 45+ flourish with more energy, confidence, sensuality and joy — through
              retreats, live classes and online courses built around the Radiant Flower Method.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild variant="bloom" size="pillLg">
                <Link to="/courses">
                  Join a Class <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="wine" size="pillLg">
                <Link to="/retreats">Explore Retreats</Link>
              </Button>
            </div>
            <p className="text-ink/70 mt-7 flex items-center gap-2 text-base">
              <span className="text-orangebloom flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              Loved by 1000+ women in 20+ countries
            </p>
          </div>

          <div className="relative">
            <div className="bg-radiant absolute -inset-3 rounded-[46%_54%_38%_62%/54%_38%_62%_46%] opacity-30 blur-2xl" />
            <img
              src={heroImage}
              width={1160}
              height={928}
              alt="Radiant Flower wellness experience for women 45+"
              className="shadow-petal-lg relative aspect-[5/6] w-full rounded-[46%_54%_38%_62%/54%_38%_62%_46%] object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-cream py-10 md:py-14">
        <div className="shell grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="shadow-petal h-full rounded-3xl border border-blush bg-white p-6 text-center">
                <s.icon className="text-amaranth mx-auto size-7" aria-hidden="true" />
                <p className="text-wine mt-3 text-2xl font-bold">{s.value}</p>
                <p className="text-ink/70 mt-1 text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WAY TO BLOSSOM */}
      <section className="section-y bg-cream">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">Way to</p>
            <h2 className="font-script text-gradient mt-1 text-6xl md:text-7xl">Blossom</h2>
            <p className="text-ink/80 mt-4 text-lg">
              Choose the path that feels right for you. Every one of them teaches the same method —
              only the pace and the setting change.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PATHS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="shadow-petal hover:shadow-petal-lg group flex h-full flex-col overflow-hidden rounded-3xl border border-blush bg-white transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={p.image}
                    width={1024}
                    height={768}
                    loading="lazy"
                    alt={p.alt}
                    className="h-56 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-wine text-2xl">{p.title}</h3>
                    <p className="text-ink/80 mt-3 flex-1 text-base">{p.copy}</p>
                    <Link
                      to={p.to}
                      className="text-amaranth mt-6 inline-flex items-center gap-2 font-semibold"
                    >
                      Discover <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="section-y bg-blush/50 relative overflow-hidden">
        <div className="bg-radiant pointer-events-none absolute -top-20 right-1/4 size-72 rounded-full opacity-15 blur-3xl" />
        <div className="shell relative">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">The signature method</p>
            <h2 className="text-wine mt-3 text-3xl md:text-5xl">
              What is the <span className="font-script text-gradient">Radiant Flower Method</span>?
            </h2>
            <p className="text-ink/80 mt-4 text-lg">
              It's a three-step path from feeling faded to feeling fully alive — refined over twenty
              years with more than a thousand women.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {METHOD.map((m, i) => (
              <Reveal key={m.step} delay={i * 0.1}>
                <li className="shadow-petal h-full rounded-3xl border border-white bg-white/80 p-8 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="bg-radiant flex size-11 items-center justify-center rounded-full text-sm font-bold text-white">
                      {m.step}
                    </span>
                    <Flower2 className="text-magenta size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-wine mt-5 text-2xl">{m.title}</h3>
                  <p className="text-ink/80 mt-3 text-base">{m.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-y bg-cream">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="bg-radiant absolute -inset-2 rounded-[42%_58%_60%_40%/45%_40%_60%_55%] opacity-25 blur-2xl" />
              <img
                src={aboutImage}
                width={1080}
                height={1920}
                loading="lazy"
                alt="Nina, founder of Radiant Flower"
                className="shadow-petal-lg relative aspect-[4/5] w-full rounded-[42%_58%_60%_40%/45%_40%_60%_55%] object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-amaranth">Meet the founder</p>
            <h2 className="text-wine mt-3 text-3xl md:text-5xl">
              20+ years helping women <span className="font-script text-gradient">bloom</span>
            </h2>
            <p className="text-ink/80 mt-5 text-lg">
              I'm Nina. I began teaching movement at 29, and somewhere around my own
              forty-eighth birthday I noticed the women in my classes weren't asking to be smaller
              or younger. They were asking to feel like themselves again.
            </p>
            <p className="text-ink/80 mt-4 text-lg">
              So I built the Radiant Flower Method for exactly that: a warm, unhurried way back to
              your energy, your confidence and your sensuality — no fear, no fixing, no pretending
              midlife is a problem to solve.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="bloom" size="pill">
                <Link to="/about">
                  Read Nina's story <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="wine" size="pill">
                <Link to="/contact">Ask a question</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-y bg-peach/40">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-amaranth">The transformation</p>
            <h2 className="text-wine mt-3 text-3xl md:text-5xl">What blooming feels like</h2>
            <p className="text-ink/80 mt-4 text-lg">
              Not a new you. The one who's been waiting — with a little more room to breathe.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="shadow-petal h-full rounded-3xl bg-white p-7">
                  <span className="bg-blush text-amaranth flex size-12 items-center justify-center rounded-2xl">
                    <b.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-wine mt-5 text-xl">{b.title}</h3>
                  <p className="text-ink/80 mt-2 text-base">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section-y bg-cream">
        <div className="shell">
          <Reveal>
            <div className="shadow-petal-lg relative overflow-hidden rounded-[2rem]">
              <img
                src={staffImage}
                width={1043}
                height={624}
                loading="lazy"
                alt="A joyful group of Radiant Flower women in a community gathering"
                className="h-[380px] w-full object-cover md:h-[480px]"
              />
              <div className="from-wine/85 absolute inset-0 bg-gradient-to-r via-wine/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-md p-8 md:p-14">
                  <p className="eyebrow text-magenta">The sisterhood</p>
                  <h2 className="text-cream mt-3 text-3xl md:text-4xl">
                    You won't be doing this{" "}
                    <span className="font-script text-magenta text-4xl md:text-5xl">alone</span>
                  </h2>
                  <p className="text-cream/90 mt-4 text-base">
                    From the Caribbean to Copenhagen, women 45 to 78 gather with Nina every week —
                    laughing, moving, and reminding each other exactly who they are.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-wine text-cream relative overflow-hidden">
        <div className="bg-radiant pointer-events-none absolute -top-24 left-1/3 size-96 rounded-full opacity-25 blur-3xl" />
        <div className="shell relative">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-magenta">In their words</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              A thousand women, one{" "}
              <span className="font-script text-magenta text-5xl md:text-6xl">sisterhood</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="border-cream/15 flex h-full flex-col rounded-3xl border bg-white/5 p-8 backdrop-blur">
                  <div className="text-orangebloom flex gap-1" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-cream/90 mt-5 flex-1 text-base">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="text-cream mt-6 text-sm font-semibold">
                    {t.name}
                    <span className="text-cream/60 block font-normal">{t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="section-y bg-cream">
        <div className="shell">
          <Reveal>
            <div className="from-blush via-cream to-peach shadow-petal-lg grid gap-8 rounded-[2rem] bg-gradient-to-br p-8 md:grid-cols-2 md:items-center md:p-14">
              <div>
                <p className="eyebrow text-amaranth">Free download</p>
                <h2 className="text-wine mt-3 text-3xl md:text-4xl">
                  The <span className="font-script text-gradient">Blossom Blueprint</span>
                </h2>
                <p className="text-ink/80 mt-4 text-lg">
                  A beautiful 12-page guide with the seven-day practice our students use to find
                  their energy again — plus a short welcome class from Nina. Free, forever.
                </p>
              </div>
              <form
                className="rounded-3xl bg-white/80 p-6 backdrop-blur"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="lead-name" className="text-wine text-sm font-semibold">
                  First name
                </label>
                <Input id="lead-name" required placeholder="Your first name" className="mt-2 h-12 rounded-full px-5" />
                <label htmlFor="lead-email" className="text-wine mt-4 block text-sm font-semibold">
                  Email
                </label>
                <Input
                  id="lead-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="mt-2 h-12 rounded-full px-5"
                />
                <Button type="submit" variant="bloom" size="pillLg" className="mt-5 w-full">
                  Send me the Blueprint <ArrowRight />
                </Button>
                <p className="text-ink/60 mt-3 text-center text-sm">
                  One warm email a week. Unsubscribe in one click.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="section-y bg-mist/40">
        <div className="shell">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow text-amaranth">From the journal</p>
              <h2 className="text-wine mt-3 text-3xl md:text-4xl">Reading for radiant women</h2>
            </div>
            <Link to="/journal" className="text-amaranth inline-flex items-center gap-2 font-semibold">
              All articles <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link
                  to="/journal"
                  className="shadow-petal hover:shadow-petal-lg block h-full rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="bg-blush text-amaranth rounded-full px-3 py-1 text-xs font-semibold">
                    {p.category}
                  </span>
                  <h3 className="text-wine mt-4 text-xl">{p.title}</h3>
                  <p className="text-ink/80 mt-3 text-base">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-radiant py-16 md:py-24">
        <div className="shell text-center">
          <h2 className="text-4xl text-white md:text-5xl">
            It's your time to <span className="font-script text-6xl md:text-7xl">blossom</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            The next live cohort begins the first Monday of next month. Come as you are — a thousand
            women did exactly that.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="cream" size="pillLg">
              <Link to="/courses">
                Join a Class <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-cream">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-amaranth">Questions women ask</p>
            <h2 className="text-wine mt-3 text-3xl md:text-4xl">
              Everything you're <span className="font-script text-gradient">wondering</span>
            </h2>
            <p className="text-ink/80 mt-4 text-base">
              Still unsure? Write to Nina directly — a real woman replies within two working days.
            </p>
            <Button asChild variant="wine" size="pill" className="mt-6">
              <Link to="/contact">Contact us</Link>
            </Button>
          </Reveal>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`} className="border-blush">
                  <AccordionTrigger className="text-wine py-5 text-left text-lg font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink/80 pb-6 text-base">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
