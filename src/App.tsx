import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ChatWidget } from "@/components/site/ChatWidget";
import { Toaster } from "@/components/ui/sonner";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Retreats from "@/pages/Retreats";
import Courses from "@/pages/Courses";
import Shop from "@/pages/Shop";
import Journal from "@/pages/Journal";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SiteFooter />
        <ChatWidget />
        <Toaster position="top-center" richColors />
      </div>
    </BrowserRouter>
  );
}
