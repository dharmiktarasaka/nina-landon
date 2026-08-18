import { ArrowUp, MessageCircle, X, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const SUGGESTIONS = [
  "Is this suitable if I'm over 60?",
  "What is the Radiant Flower Method?",
  "How do the retreats work?",
  "Are classes suitable for beginners?",
];

const KNOWLEDGE_RESPONSES: Record<string, string> = {
  age: "Radiant Flower is specifically designed for women 45 to 78+! Nina adapts every movement with seated, supported, and standing variations so you can practice comfortably regardless of joint stiffness, menopause symptoms, or experience level.",
  method: "The Radiant Flower Method has three core pillars:\n\n1. 🌸 **Reconnect** — Breath, gentle alignment, and feeling truly at home in your body.\n2. 💖 **Reawaken** — Joyful movement and sensuality to rediscover your feminine vitality.\n3. ✨ **Radiate** — Sustainable daily rituals and sisterhood that help you flourish permanently.",
  retreats: "Our small-group retreats (12–16 women) take place in beautiful sanctuaries across Spain, Italy, and Portugal. Every retreat includes boutique accommodation, nourishing chef-prepared meals, daily movement sessions with Nina, 1:1 reflection time, and restorative nature walks.",
  beginner: "Absolutely! Everything we do is 100% beginner friendly. You do not need any prior yoga, dance, or fitness experience, nor any special flexibility or equipment. Every practice offers gentle seated and supported options.",
  classes: "We offer weekly live classes online (Morning Reconnect, Sensual Flow, Chair & Gentle, and Sunday Radiate Circle). All live sessions are recorded and available in your student library with lifetime access!",
  courses: "Our self-paced online courses like 'Radiant Flower Foundations' and 'Energy After 50' come with step-by-step video lessons, printable ritual workbooks, and lifetime access to revisit whenever you wish.",
};

function getBloomResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("60") || q.includes("age") || q.includes("old") || q.includes("70") || q.includes("50")) {
    return KNOWLEDGE_RESPONSES.age;
  }
  if (q.includes("method") || q.includes("how does it work") || q.includes("radiant flower")) {
    return KNOWLEDGE_RESPONSES.method;
  }
  if (q.includes("retreat") || q.includes("spain") || q.includes("italy") || q.includes("portugal")) {
    return KNOWLEDGE_RESPONSES.retreats;
  }
  if (q.includes("beginner") || q.includes("experience") || q.includes("flexible") || q.includes("start")) {
    return KNOWLEDGE_RESPONSES.beginner;
  }
  if (q.includes("class") || q.includes("live") || q.includes("schedule") || q.includes("time")) {
    return KNOWLEDGE_RESPONSES.classes;
  }
  if (q.includes("course") || q.includes("foundation") || q.includes("price") || q.includes("cost")) {
    return KNOWLEDGE_RESPONSES.courses;
  }
  return "Thank you for reaching out, lovely! Radiant Flower is here to support your journey of blossoming into your most energetic, confident self. You can explore our live classes, online courses, or upcoming retreats — or reach out to Nina directly via our Contact page anytime.";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || isTyping) return;
    setInput("");

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: value,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const reply = getBloomResponse(value);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: reply,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {open && (
        <div className="fixed right-4 bottom-24 z-50 flex h-[min(78vh,600px)] w-[min(92vw,400px)] flex-col overflow-hidden rounded-[1.75rem] border border-blush bg-cream shadow-petal-lg">
          <div className="bg-wine flex items-center gap-3 px-5 py-4">
            <img src="/favicon.png" alt="Bloom" className="size-8 rounded-full object-contain" />
            <div className="flex-1">
              <p className="text-cream text-base leading-tight font-semibold flex items-center gap-1.5">
                Ask Bloom <Sparkles className="size-3.5 text-yellowspark" />
              </p>
              <p className="text-cream/70 text-xs">Your Radiant Flower guide</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-cream/80 hover:text-cream transition-colors p-1"
            >
              <X className="size-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
            {messages.length === 0 && (
              <div>
                <p className="text-ink/80 text-base">
                  Hello, lovely. I'm Bloom — ask me anything about classes, retreats, courses or the
                  Radiant Flower Method.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="border-blush text-wine hover:bg-blush rounded-2xl border bg-white px-4 py-2.5 text-left text-sm transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "user" ? (
                  <p className="bg-wine text-cream max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5 text-sm">
                    {m.text}
                  </p>
                ) : (
                  <div className="bg-white border border-blush/60 text-ink max-w-[90%] rounded-2xl rounded-bl-md px-4 py-3 text-sm whitespace-pre-line leading-relaxed shadow-sm">
                    {m.text}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <p className="text-muted-foreground animate-pulse text-sm">Bloom is typing…</p>
            )}
          </div>

          <form
            className="border-blush flex items-end gap-2 border-t bg-white px-4 py-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Ask me anything…"
              className="text-ink placeholder:text-muted-foreground max-h-28 flex-1 resize-none bg-transparent py-2 text-sm outline-none"
            />
            <Button
              type="submit"
              variant="bloom"
              size="icon"
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
              className="size-10 rounded-full shrink-0"
            >
              <ArrowUp className="size-4" />
            </Button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with Bloom"}
        className="bg-radiant shadow-petal-lg fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </>
  );
}