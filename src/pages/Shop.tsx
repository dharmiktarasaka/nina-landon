import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Download,
  Heart,
  Package,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import pathClasses from "@/assets/path-classes.jpg";
import pathCourses from "@/assets/path-courses.jpg";
import pathRetreats from "@/assets/path-retreats.jpg";
import heroImage from "@/assets/hero.png";
import aboutImage from "@/assets/about.png";
import staffImage from "@/assets/staff.png";

interface Product {
  id: string;
  name: string;
  category: "apparel" | "rituals" | "digital" | "essentials";
  price: number;
  rating: number;
  reviewsCount: number;
  tag?: string;
  image: string;
  description: string;
  details: string[];
  isDigital?: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "blossom-linen-tee",
    name: "The Blossom Relaxed Linen Tee",
    category: "apparel",
    price: 48,
    rating: 5,
    reviewsCount: 38,
    tag: "Bestseller",
    image: heroImage,
    description: "Breathable 100% organic European linen cut with a relaxed, flattering scoop neck in warm blush.",
    details: ["100% Organic Linen", "Pre-washed for cloud softness", "Ethically made in Portugal", "Sizes XS–3XL"],
  },
  {
    id: "radiance-ritual-mist",
    name: "Morning Radiance Botanical Mist",
    category: "rituals",
    price: 34,
    rating: 5,
    reviewsCount: 52,
    tag: "Popular",
    image: pathCourses,
    description: "Steam-distilled rosewater, neroli, and sweet orange to awaken skin and senses before morning practice.",
    details: ["100ml glass bottle", "100% pure organic botanicals", "Alcohol & chemical free", "Travel friendly"],
  },
  {
    id: "blossom-blueprint-pro",
    name: "The Complete Blossom Ritual Journal (Digital & Printable)",
    category: "digital",
    price: 24,
    rating: 5,
    reviewsCount: 89,
    tag: "Instant Download",
    image: aboutImage,
    isDigital: true,
    description: "120 pages of guided reflection prompts, weekly body check-ins, and Nina's signature morning rituals.",
    details: ["Instant PDF download", "Compatible with iPad/GoodNotes", "Printable high-res layout", "Includes 3 audio meditations"],
  },
  {
    id: "retreat-tote-canvas",
    name: "Sisterhood Heavyweight Cotton Tote",
    category: "apparel",
    price: 28,
    rating: 5,
    reviewsCount: 44,
    image: staffImage,
    description: "Durable organic cotton canvas with embroidered Radiant Flower emblem and reinforced shoulder straps.",
    details: ["100% Heavyweight Cotton Canvas", "Interior zip pocket for keys", "Deep wine embroidery", "Machine washable"],
  },
  {
    id: "evening-calm-tea",
    name: "Evening Bloom Herbal Infusion Tea",
    category: "rituals",
    price: 22,
    rating: 5,
    reviewsCount: 61,
    image: pathClasses,
    description: "Chamomile, passionflower, lavender buds and dried hibiscus to soothe midlife night tension.",
    details: ["80g loose leaf tin (approx. 40 cups)", "Caffeine-free organic blend", "Recyclable gold tin", "Hand-blended in Provence"],
  },
  {
    id: "sacred-sensuality-audio",
    name: "Sensual Reawakening Audio Journey & Workbook",
    category: "digital",
    price: 39,
    rating: 5,
    reviewsCount: 73,
    tag: "New",
    image: pathRetreats,
    isDigital: true,
    description: "7 audio guided breathwork transmissions with Nina and companion PDF workbook to reclaim delight in your skin.",
    details: ["Instant MP3 & PDF bundle", "Lifetime streaming in your portal", "Subtle music backing", "7 immersive sessions"],
  },
];

const CATEGORIES = [
  { key: "all", label: "All Items" },
  { key: "apparel", label: "Ritual Apparel & Totes" },
  { key: "rituals", label: "Botanicals & Teas" },
  { key: "digital", label: "Digital Workbooks" },
] as const;

const SHOP_FAQS = [
  {
    q: "How fast is shipping?",
    a: "Physical orders are shipped within 1–2 business days via carbon-neutral tracked courier (3–5 days across Europe, 5–8 days internationally). Digital items are delivered to your inbox instantly upon checkout.",
  },
  {
    q: "How do digital downloads work?",
    a: "Immediately after purchasing a digital guide or audio journey, you will receive a secure download link via email with lifetime access.",
  },
  {
    q: "What is your return policy?",
    a: "We want you to love everything you order. Physical items can be returned within 30 days in unworn condition for a full refund or exchange.",
  },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    toast.success(`Added "${product.name}" to your bag`, {
      description: "Click your bag in the top right to review.",
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-cream relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="bg-radiant pointer-events-none absolute -top-24 -left-24 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="shell relative flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow text-amaranth">Radiant Essentials</p>
            <h1 className="text-wine mt-3 text-4xl md:text-6xl">
              Wear & live your <span className="font-script text-gradient text-5xl md:text-7xl">radiance</span>
            </h1>
            <p className="text-ink/80 mx-auto mt-5 max-w-2xl text-lg">
              Thoughtfully curated organic apparel, calming botanicals, and digital guided workbooks —
              gentle reminders that it is always your time to blossom.
            </p>
          </Reveal>

          {/* FLOATING CART BUTTON TRIGGER */}
          <div className="mt-8 flex items-center gap-4">
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="bloom" size="pillLg" className="relative shadow-petal">
                  <ShoppingBag className="size-5 mr-2" />
                  Your Bag ({totalItems})
                  {totalItems > 0 && (
                    <span className="bg-wine text-cream ml-2 rounded-full px-2 py-0.5 text-xs font-bold">
                      €{totalPrice}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-cream flex w-[90vw] max-w-md flex-col p-6">
                <SheetHeader className="border-b border-blush pb-4">
                  <SheetTitle className="text-wine text-2xl font-bold flex items-center justify-between">
                    <span>Your Bag</span>
                    <span className="text-sm font-normal text-ink/60">({totalItems} items)</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center text-ink/60">
                      <ShoppingBag className="size-16 text-amaranth/40 mb-3" />
                      <p className="text-lg font-medium text-wine">Your bag is empty</p>
                      <p className="text-sm mt-1">Add items to support your daily blossoming.</p>
                    </div>
                  ) : (
                    cart.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="border-blush flex items-center gap-4 rounded-2xl border bg-white p-4 shadow-sm"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="size-16 rounded-xl object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-wine font-semibold text-sm truncate">{product.name}</p>
                          <p className="text-amaranth font-bold text-sm">€{product.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="size-6 rounded-md border border-blush bg-cream text-wine flex items-center justify-center font-bold text-xs"
                            >
                              -
                            </button>
                            <span className="text-xs font-semibold px-1">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="size-6 rounded-md border border-blush bg-cream text-wine flex items-center justify-center font-bold text-xs"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-ink/40 hover:text-destructive p-1"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-blush pt-4 space-y-3">
                    <div className="flex justify-between text-base font-semibold text-wine">
                      <span>Subtotal</span>
                      <span>€{totalPrice}</span>
                    </div>
                    <p className="text-xs text-ink/60">Shipping and taxes calculated at checkout.</p>
                    <Button
                      variant="bloom"
                      size="pillLg"
                      className="w-full"
                      onClick={() => {
                        toast.success("Proceeding to secure checkout...", {
                          description: "Thank you for supporting Radiant Flower!",
                        });
                        setIsCartOpen(false);
                      }}
                    >
                      Checkout · €{totalPrice} <ArrowRight className="size-4 ml-1" />
                    </Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & PRODUCTS GRID */}
      <section className="section-y bg-blush/30 pt-0">
        <div className="shell">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === c.key
                    ? "bg-wine text-cream shadow-petal"
                    : "bg-white text-ink/80 hover:bg-blush border border-blush"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <article className="border-blush shadow-petal hover:shadow-petal-lg group flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.tag && (
                      <span className="bg-radiant absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm flex items-center gap-1">
                        {p.isDigital ? <Download className="size-3" /> : <Sparkles className="size-3" />}
                        {p.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-1 text-orangebloom text-xs">
                      {[...Array(p.rating)].map((_, idx) => (
                        <Star key={idx} className="size-3.5 fill-current" />
                      ))}
                      <span className="text-ink/50 ml-1">({p.reviewsCount})</span>
                    </div>

                    <h3 className="text-wine mt-2 text-xl font-semibold leading-snug">{p.name}</h3>
                    <p className="text-ink/75 mt-2 flex-1 text-sm">{p.description}</p>

                    <ul className="mt-4 space-y-1 text-xs text-ink/70 border-t border-blush/60 pt-3">
                      {p.details.map((d) => (
                        <li key={d} className="flex items-center gap-1.5">
                          <Check className="size-3 text-amaranth shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between pt-2">
                      <div>
                        <span className="text-xs text-ink/50 block">Price</span>
                        <span className="text-wine text-2xl font-bold">€{p.price}</span>
                      </div>
                      <Button
                        variant="bloom"
                        size="pill"
                        onClick={() => addToCart(p)}
                        className="shadow-sm"
                      >
                        <ShoppingBag className="size-4 mr-1.5" /> Add to Bag
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES PROMISE */}
      <section className="section-y bg-cream">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Truck,
                title: "Carbon-Neutral Delivery",
                copy: "Plastic-free packaging and tracked delivery across Europe and worldwide.",
              },
              {
                icon: Heart,
                title: "Ethically Sourced",
                copy: "Organic certified linens and clean, non-toxic botanicals formulated with care.",
              },
              {
                icon: Package,
                title: "Instant Digital Access",
                copy: "Immediate lifetime downloads on all journals, guides, and meditation audios.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="border-blush shadow-petal h-full rounded-3xl border bg-white p-7 text-center">
                  <div className="bg-blush text-amaranth mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl">
                    <v.icon className="size-6" />
                  </div>
                  <h3 className="text-wine text-lg font-semibold">{v.title}</h3>
                  <p className="text-ink/75 mt-2 text-sm">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP FAQ */}
      <section className="section-y bg-blush/40">
        <div className="shell max-w-3xl">
          <Reveal>
            <h2 className="text-wine text-3xl md:text-4xl text-center">
              Shop <span className="font-script text-gradient text-4xl md:text-5xl">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {SHOP_FAQS.map((f) => (
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
