import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Heart, Search, Sparkles, X, User } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import pathClasses from "@/assets/path-classes.jpg";
import pathCourses from "@/assets/path-courses.jpg";
import pathRetreats from "@/assets/path-retreats.jpg";
import heroImage from "@/assets/hero.png";
import aboutImage from "@/assets/about.png";
import staffImage from "@/assets/staff.png";

interface Article {
  id: string;
  category: "Energy & Vitality" | "Sensuality & Body Love" | "Menopause & Beyond" | "Daily Rituals";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  content: string[];
}

const ARTICLES: Article[] = [
  {
    id: "3pm-slump-midlife",
    category: "Energy & Vitality",
    title: "Why your 3pm slump isn't your age — and what actually restores your fire",
    excerpt: "Three small rhythm changes that give midlife women their afternoons back, without another supplement or cup of coffee.",
    readTime: "5 min read",
    date: "14 Oct 2025",
    image: heroImage,
    featured: true,
    content: [
      "For years, women tell me they hit 3:00 PM and feel as though someone pulled the plug on their battery. We are taught to blame age, or declining hormones, or simply accept fatigue as the tax for living beyond forty-five.",
      "In reality, midlife energy requires a shift from pushing to flowing. When your nervous system is trapped in chronic low-grade vigilance, adrenaline depletes your adrenal reserves by mid-afternoon.",
      "Here is the 3-step afternoon reset our students practice:\n1. Step away from blue light for 6 minutes.\n2. Inhale through the nose for 4 counts, hold for 2, exhale with a soft sigh for 7 counts.\n3. Drink 300ml of room-temperature water with a squeeze of fresh lemon and a pinch of unrefined salt.",
      "Energy is not something you force. It is the natural consequence of feeling safe and connected in your own body.",
    ],
  },
  {
    id: "reclaiming-sensuality",
    category: "Sensuality & Body Love",
    title: "Reclaiming sensuality after 50: A gentle, joyful place to begin",
    excerpt: "Sensuality isn't performance or youthfulness. It's attention and presence. Here is a five-minute practice to start tonight.",
    readTime: "6 min read",
    date: "28 Sep 2025",
    image: aboutImage,
    content: [
      "Society tells women that after a certain age, our sensuality expires or must be hidden away. But sensuality has nothing to do with youth — it is the sheer delight of having five senses alive in a living world.",
      "To reawaken sensuality, begin without expectations. Put on a song that moves you, take off your shoes, and let your hips sway gently for three minutes while you breathe into your lower belly.",
      "Feel the fabric of your clothes, the warmth of the air, the rhythm of your heartbeat. You are not here to perform for anyone — you are here to inhabit yourself.",
    ],
  },
  {
    id: "menopause-confidence-dip",
    category: "Menopause & Beyond",
    title: "The confidence dip nobody warns you about in menopause",
    excerpt: "Why self-doubt often spikes in midlife, and the daily grounding ritual our students use to steady themselves.",
    readTime: "7 min read",
    date: "10 Sep 2025",
    image: staffImage,
    content: [
      "Many capable, accomplished women in their early fifties suddenly experience a quiet wave of self-doubt or imposter syndrome. It often coincides with hormonal fluctuations affecting GABA and serotonin receptors.",
      "Understanding the biological root immediately removes the shame. You haven't lost your mind or your competence; your neurochemistry is simply recalibrating.",
      "When the doubt arrives, place both hands over your heart, feel the solid ground beneath your feet, and repeat: 'I am here. I am wise. I have twenty years of evidence that I can handle this moment.'",
    ],
  },
  {
    id: "morning-flower-ritual",
    category: "Daily Rituals",
    title: "The 8-minute Morning Blossom Ritual for calm and clarity",
    excerpt: "Before opening your phone or checking emails, give your nervous system this peaceful, grounding sanctuary.",
    readTime: "4 min read",
    date: "22 Aug 2025",
    image: pathCourses,
    content: [
      "How you meet the first ten minutes of your morning determines how your nervous system responds to the entire day.",
      "Instead of immediately reaching for your screen, place one hand on your chest and one on your belly while still in bed. Take five full, unhurried breaths.",
      "Stretch your spine like a cat, sip warm water, and set a single sensory intention for the day: softness, joy, spaciousness, or ease.",
    ],
  },
  {
    id: "sisterhood-retreat-magic",
    category: "Sensuality & Body Love",
    title: "Why women blossom faster in the company of other women",
    excerpt: "What happens when 16 women leave their obligations behind and share honest meals under olive trees.",
    readTime: "6 min read",
    date: "05 Aug 2025",
    image: pathRetreats,
    content: [
      "There is an ancient healing that happens when women sit together in circles without competition, comparison, or masks.",
      "On our retreats in Costa Brava and Tuscany, we watch women arrive with tight shoulders and guarded eyes. By day three, after shared movement and laughter, they look twenty years younger simply because the weight of performing has dropped away.",
    ],
  },
  {
    id: "nourishing-midlife-joints",
    category: "Energy & Vitality",
    title: "Gentle joint mobility for stiff mornings: No floor work required",
    excerpt: "A simple chair-based sequence to loosen hips, ankles and spine so you start your day fluid and pain-free.",
    readTime: "5 min read",
    date: "18 Jul 2025",
    image: pathClasses,
    content: [
      "Stiffness in the morning is common as synovial fluid cools overnight and estrogen dips. Aggressive stretching can cause micro-tears, but gentle rhythmic pulsing does wonders.",
      "While seated upright on a comfortable chair, circle your ankles, gently rotate your ribcage, and roll your shoulders back with your breath.",
      "Consistency beats intensity every time.",
    ],
  },
];

const CATEGORIES = [
  "All Articles",
  "Energy & Vitality",
  "Sensuality & Body Love",
  "Menopause & Beyond",
  "Daily Rituals",
] as const;

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [emailInput, setEmailInput] = useState("");

  const filteredArticles = ARTICLES.filter((a) => {
    const matchesCategory =
      selectedCategory === "All Articles" || a.category === selectedCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    toast.success("Welcome to the Sunday Blossom Letter!", {
      description: "Check your inbox for this week's warm words from Nina.",
    });
    setEmailInput("");
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-cream relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="bg-radiant pointer-events-none absolute -top-24 right-0 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="shell relative max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-amaranth">The Radiant Flower Journal</p>
            <h1 className="text-wine mt-3 text-4xl md:text-6xl">
              Words to help you <span className="font-script text-gradient text-5xl md:text-7xl">flourish</span>
            </h1>
            <p className="text-ink/80 mx-auto mt-5 max-w-2xl text-lg">
              Warm, practical essays and gentle wisdom on energy, confidence, sensuality, joy and
              menopause — written for women who refuse to fade.
            </p>
          </Reveal>

          {/* SEARCH BAR */}
          <div className="mt-8 mx-auto max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-ink/40" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by topic or keyword…"
              className="bg-white pl-11 pr-4 h-12 rounded-full border-blush shadow-sm text-sm"
            />
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      {selectedCategory === "All Articles" && !searchQuery && featured && (
        <section className="bg-cream pb-12">
          <div className="shell">
            <Reveal>
              <div className="border-blush shadow-petal-lg group relative overflow-hidden rounded-[2.5rem] border bg-white grid lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 h-72 lg:h-[420px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                  <span className="bg-blush text-amaranth w-fit rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                    Featured Story · {featured.category}
                  </span>
                  <h2 className="text-wine mt-4 text-2xl lg:text-3xl font-bold leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-ink/75 mt-3 text-base">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-ink/50 mt-6">
                    <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> {featured.readTime}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                  </div>
                  <Button
                    variant="bloom"
                    size="pill"
                    className="mt-6 w-fit shadow-sm"
                    onClick={() => setActiveArticle(featured)}
                  >
                    Read Full Article <ArrowRight className="size-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CATEGORY TABS & ARTICLES GRID */}
      <section className="section-y bg-blush/30">
        <div className="shell">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-wine text-cream shadow-petal"
                    : "bg-white text-ink/80 hover:bg-blush border border-blush"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, i) => (
              <Reveal key={article.id} delay={i * 0.08}>
                <article
                  onClick={() => setActiveArticle(article)}
                  className="border-blush shadow-petal hover:shadow-petal-lg group flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="bg-wine/90 backdrop-blur text-cream absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-ink/50 mb-2">
                      <span className="flex items-center gap-1"><Clock className="size-3" /> {article.readTime}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-wine text-xl font-bold leading-snug group-hover:text-amaranth transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-ink/75 mt-3 flex-1 text-sm leading-relaxed">{article.excerpt}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-blush/60 pt-4 text-amaranth font-semibold text-sm">
                      <span className="flex items-center gap-1.5">
                        Read Story <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE READER DIALOG */}
      <Dialog open={!!activeArticle} onOpenChange={(open) => !open && setActiveArticle(null)}>
        <DialogContent className="bg-cream max-w-2xl max-h-[85vh] overflow-y-auto p-8 rounded-3xl border-blush">
          {activeArticle && (
            <div>
              <DialogHeader>
                <span className="bg-blush text-amaranth w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                  {activeArticle.category}
                </span>
                <DialogTitle className="text-wine text-2xl sm:text-3xl font-bold leading-snug">
                  {activeArticle.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-xs text-ink/60 mt-3 pb-4 border-b border-blush">
                  <span className="flex items-center gap-1.5 font-medium text-wine"><User className="size-3.5 text-amaranth" /> Nina · Radiant Flower</span>
                  <span>·</span>
                  <span>{activeArticle.date}</span>
                  <span>·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </DialogHeader>

              <div className="mt-6 aspect-[16/9] overflow-hidden rounded-2xl mb-6">
                <img src={activeArticle.image} alt="" className="size-full object-cover" />
              </div>

              <div className="space-y-4 text-ink/85 text-base leading-relaxed">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">{paragraph}</p>
                ))}
              </div>

              <div className="bg-blush/50 border border-blush rounded-2xl p-6 mt-8 text-center">
                <p className="font-script text-wine text-2xl">"You are not a problem to solve. You are already alive."</p>
                <p className="text-xs text-ink/60 mt-1">— Nina, Founder</p>
              </div>

              <div className="mt-8 flex justify-end">
                <Button variant="wine" size="pill" onClick={() => setActiveArticle(null)}>
                  Close Article
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* NEWSLETTER SECTION */}
      <section className="section-y bg-cream">
        <div className="shell">
          <Reveal>
            <div className="from-blush via-cream to-peach shadow-petal-lg grid gap-8 rounded-[2.5rem] bg-gradient-to-br p-8 md:grid-cols-2 md:items-center md:p-14">
              <div>
                <p className="eyebrow text-amaranth">Sunday Blossom Letter</p>
                <h2 className="text-wine mt-3 text-3xl md:text-4xl">
                  Warm words in your <span className="font-script text-gradient text-4xl md:text-5xl">inbox</span>
                </h2>
                <p className="text-ink/80 mt-4 text-base">
                  Every Sunday morning, Nina sends one gentle thought, a seasonal movement ritual,
                  and a quiet reminder to breathe. No promotions — just warmth.
                </p>
              </div>
              <form
                className="rounded-3xl bg-white/80 p-6 backdrop-blur space-y-3"
                onSubmit={handleSubscribe}
              >
                <label htmlFor="journal-email" className="text-wine text-sm font-semibold block">
                  Your email address
                </label>
                <Input
                  id="journal-email"
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="your@email.com"
                  className="h-12 rounded-full px-5 border-blush"
                />
                <Button type="submit" variant="bloom" size="pillLg" className="w-full">
                  Subscribe for Free <ArrowRight className="size-4 ml-1.5" />
                </Button>
                <p className="text-ink/50 text-xs text-center">
                  Join 1000+ women worldwide. Unsubscribe anytime in one click.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
