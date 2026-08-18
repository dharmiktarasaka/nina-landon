import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import aboutImage from "@/assets/about.png";

const CONTACT_FAQS = [
  {
    q: "How soon will I receive a reply?",
    a: "Nina and our small, dedicated sisterhood team read every message personally. You will receive a thoughtful reply within 1–2 business days.",
  },
  {
    q: "Can I speak directly with Nina before booking a retreat?",
    a: "Yes! You can request a 15-minute Discovery Call in your message. Nina loves meeting future retreat guests to answer any questions about accessibility, rooms, and itinerary.",
  },
  {
    q: "I have joint issues or mobility limits. Can I still join classes?",
    a: "100% yes. Every live and recorded class is demonstrated with seated, wall-supported, and standing modifications. You are always met exactly where your body is today.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "retreats",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent to Nina & the Radiant Flower team!", {
        description: "We have received your note and will reply within 24–48 hours.",
      });
    }, 900);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-cream relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="bg-radiant pointer-events-none absolute -top-24 -left-24 size-96 rounded-full opacity-20 blur-3xl" />
        <div className="shell relative max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-amaranth">Get in Touch</p>
            <h1 className="text-wine mt-3 text-4xl md:text-6xl">
              Let's start a <span className="font-script text-gradient text-5xl md:text-7xl">conversation</span>
            </h1>
            <p className="text-ink/80 mx-auto mt-5 max-w-xl text-lg">
              Have a question about retreats, weekly live classes, or self-paced courses?
              Write to us — a real woman reads and replies with warmth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM & INFO GRID */}
      <section className="section-y bg-blush/30 pt-0">
        <div className="shell grid gap-12 lg:grid-cols-12">
          {/* LEFT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border-blush shadow-petal-lg rounded-3xl border bg-white p-8 md:p-10">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="bg-blush text-amaranth mx-auto flex size-16 items-center justify-center rounded-full">
                      <CheckCircle2 className="size-10 text-amaranth" />
                    </div>
                    <h3 className="text-wine text-2xl font-bold">Thank You, {formData.name || "Lovely"}!</h3>
                    <p className="text-ink/75 max-w-md mx-auto text-base">
                      Your message has been received with care. Nina and our team will get back to your email at <span className="font-semibold text-wine">{formData.email}</span> within 1–2 working days.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="wine"
                        size="pill"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", topic: "retreats", message: "" });
                        }}
                      >
                        Send Another Note
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-wine text-2xl font-bold">Send Nina a message</h2>
                    <p className="text-xs text-ink/60">Fields marked * are required.</p>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="text-wine text-sm font-semibold block mb-1.5">
                          Your Name *
                        </label>
                        <Input
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="h-12 rounded-xl border-blush bg-cream/40"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="text-wine text-sm font-semibold block mb-1.5">
                          Your Email *
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="h-12 rounded-xl border-blush bg-cream/40"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-phone" className="text-wine text-sm font-semibold block mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7123 456789"
                          className="h-12 rounded-xl border-blush bg-cream/40"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-topic" className="text-wine text-sm font-semibold block mb-1.5">
                          What is this about? *
                        </label>
                        <Select
                          value={formData.topic}
                          onValueChange={(val) => setFormData({ ...formData, topic: val })}
                        >
                          <SelectTrigger id="contact-topic" className="h-12 rounded-xl border-blush bg-cream/40">
                            <SelectValue placeholder="Select topic" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="retreats">Retreats Inquiry & Booking</SelectItem>
                            <SelectItem value="classes">Live Classes & Schedule</SelectItem>
                            <SelectItem value="courses">Online Courses & Portal</SelectItem>
                            <SelectItem value="discovery">15-min Call Request with Nina</SelectItem>
                            <SelectItem value="other">General Question / Say Hello</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="text-wine text-sm font-semibold block mb-1.5">
                        Your Message *
                      </label>
                      <Textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about yourself, your questions, or how we can support your blossoming..."
                        className="rounded-xl border-blush bg-cream/40 resize-y text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="bloom"
                      size="pillLg"
                      disabled={isSubmitting}
                      className="w-full shadow-petal"
                    >
                      {isSubmitting ? (
                        "Sending with warmth…"
                      ) : (
                        <>
                          <Send className="size-4 mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: CONTACT CARDS & DISCOVERY CALL */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="border-blush shadow-petal rounded-3xl border bg-white p-8">
                <h3 className="text-wine text-xl font-bold flex items-center gap-2">
                  <Heart className="size-5 text-amaranth" /> Direct Channels
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-ink/80">
                  <li className="flex items-start gap-3">
                    <Mail className="size-5 text-amaranth mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-wine">Email Us Directly</p>
                      <a href="mailto:hello@radiantflower.com" className="text-amaranth hover:underline">
                        hello@radiantflower.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="size-5 text-amaranth mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-wine">Warm Reply Guarantee</p>
                      <p className="text-ink/70 text-xs">Within 24–48 working hours, Monday to Friday.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="size-5 text-amaranth mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-wine">Retreat Sanctuaries</p>
                      <p className="text-ink/70 text-xs">Costa Brava (Spain), Tuscany (Italy), Madeira (Portugal).</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-radiant shadow-petal-lg rounded-3xl p-8 text-white">
                <span className="bg-white/20 backdrop-blur rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1">
                  <Calendar className="size-3" /> Complimentary
                </span>
                <h3 className="mt-4 text-2xl font-bold">15-Min Discovery Call</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed">
                  Unsure if a retreat or Foundations course is right for your current season of life?
                  Have a quick, unhurried 1:1 video chat with Nina.
                </p>
                <Button
                  variant="cream"
                  size="pill"
                  className="mt-6 w-full shadow-sm"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, topic: "discovery" }));
                    toast.info("Topic set to Discovery Call — please fill in your details!");
                  }}
                >
                  Request a Discovery Call <ArrowRight className="size-4 ml-1.5" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT FAQ */}
      <section className="section-y bg-cream">
        <div className="shell max-w-3xl">
          <Reveal>
            <h2 className="text-wine text-3xl md:text-4xl text-center">
              Frequently Asked <span className="font-script text-gradient text-4xl md:text-5xl">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {CONTACT_FAQS.map((f) => (
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
