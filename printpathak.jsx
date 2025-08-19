import React, { useMemo, useState } from "react";
import { Phone, Mail, MapPin, Printer, Package, BookOpen, Building2, ShieldCheck, CheckCircle2, Star, ChevronRight, Truck, Sparkles, MessageCircle } from "lucide-react";

// --- Quick how-to ---
// 1) This file is a complete single-page website for printpathak.com.
// 2) It uses React + Tailwind. In a Next.js app, drop it into app/page.tsx.
//    In Create React App / Vite, use it as App.tsx and render <Website/>.
// 3) Replace ALL placeholders in PLACEHOLDER_* constants below.
// 4) Tailwind is expected to be configured. If not, switch classes to plain CSS.

const PLACEHOLDER_COMPANY = "Pathak Print Pack"; // or "Pathak Print"
const PLACEHOLDER_TAGLINE = "All types of printing & school stationery — trusted by 500+ schools";
const PLACEHOLDER_PHONE = "+91-98XXXXXXXX"; // Replace with your number
const PLACEHOLDER_WHATSAPP = "+91-98XXXXXXXX"; // WhatsApp-enabled number (with country code)
const PLACEHOLDER_EMAIL = "hello@printpathak.com"; // Replace
const PLACEHOLDER_ADDRESS = "Uttarpara–Serampore belt, Hooghly, West Bengal"; // Replace with full address

export default function Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <SiteHeader />
      <Hero />
      <TrustBar />
      <Services />
      <Showcase />
      <Stats />
      <NotebookBrand />
      <Process />
      <Testimonials />
      <CTABanner />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <SeoMeta />
      <SchemaOrg />
    </div>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Pathak Notebook", href: "#notebook" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow">
            <Printer className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight">{PLACEHOLDER_COMPANY}</div>
            <div className="text-xs text-slate-500">Printing • Stationery • Notebooks</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {n.label}
            </a>
          ))}
          <a
            href={`tel:${PLACEHOLDER_PHONE}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <span className="sr-only">Toggle menu</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-2 py-3">
            <a href="#services" className="py-1 text-slate-700" onClick={() => setOpen(false)}>Services</a>
            <a href="#showcase" className="py-1 text-slate-700" onClick={() => setOpen(false)}>Showcase</a>
            <a href="#notebook" className="py-1 text-slate-700" onClick={() => setOpen(false)}>Pathak Notebook</a>
            <a href="#process" className="py-1 text-slate-700" onClick={() => setOpen(false)}>Process</a>
            <a href="#about" className="py-1 text-slate-700" onClick={() => setOpen(false)}>About</a>
            <a href="#faq" className="py-1 text-slate-700" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#contact" className="py-1 text-slate-700" onClick={() => setOpen(false)}>Contact</a>
            <a href={`tel:${PLACEHOLDER_PHONE}`} className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(1200px_600px_at_50%_-20%,#e2e8f0,transparent_70%)]" />
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            High‑quality Printing for Schools & Businesses
          </h1>
          <p className="mt-4 max-w-prose text-lg text-slate-600">
            {PLACEHOLDER_TAGLINE}. We deliver notebooks, printed stationery, labels, packaging, brochures, and more — on time, every time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md">
              <ChevronRight className="h-4 w-4" /> Get a Quote
            </a>
            <a href="#showcase" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400">
              See Work
            </a>
          </div>
          <ul className="mt-6 grid max-w-xl grid-cols-2 gap-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> ISO‑grade quality checks</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4"/> Pan‑India shipping support</li>
            <li className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> Custom designs & sizes</li>
            <li className="flex items-center gap-2"><Printer className="h-4 w-4"/> Offset • Digital • Flexo</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#f8fafc,transparent_40%),radial-gradient(circle_at_80%_80%,#e2e8f0,transparent_40%)]" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden w-40 rounded-2xl border border-slate-200 bg-white p-3 shadow md:block">
            <div className="text-xs font-semibold text-slate-700">B2B Specialist</div>
            <div className="mt-1 text-[11px] text-slate-500">Bulk & contract printing for institutions and brands.</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white/60">
      <Container className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 md:grid-cols-6">
        {[
          { icon: Building2, label: "500+ Schools" },
          { icon: BookOpen, label: "Pathak Notebook" },
          { icon: Package, label: "Packaging & Labels" },
          { icon: Printer, label: "All Printing" },
          { icon: Star, label: "Top‑rated Locally" },
          { icon: ShieldCheck, label: "Quality Assured" },
        ].map((i) => (
          <div key={i.label} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700">
            <i.icon className="h-4 w-4" /> {i.label}
          </div>
        ))}
      </Container>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Printer,
      title: "Commercial Printing",
      points: ["Brochures, flyers, catalogues", "Letterheads, envelopes, business cards", "Banners, standees, marketing kits"],
    },
    {
      icon: Package,
      title: "Packaging & Labels",
      points: ["Mono cartons, sleeves", "Stickers & labels (roll/sheet)", "Corrugated & custom die‑cuts"],
    },
    {
      icon: BookOpen,
      title: "School Stationery",
      points: ["Notebooks (all sizes)", "Registers, practical files", "Report cards, ID cards, diaries"],
    },
  ];
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Services</h2>
        <p className="mt-2 max-w-prose text-slate-600">End‑to‑end design, print, finishing and delivery for institutions and brands. Custom sizes and finishes available on request.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5" />
                <h3 className="text-lg font-bold">{it.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {it.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const items = new Array(8).fill(0).map((_, i) => ({
    title: `Project ${i + 1}`,
    desc: "Sample work — replace with your images.",
  }));
  return (
    <section id="showcase" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Showcase</h2>
            <p className="mt-2 max-w-prose text-slate-600">A glimpse of what we manufacture and print.</p>
          </div>
          <a href="#contact" className="hidden rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 md:inline-flex">Start a Project</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, idx) => (
            <figure key={idx} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_30%,#f8fafc,transparent_40%),radial-gradient(circle_at_70%_70%,#e2e8f0,transparent_40%)] group-hover:scale-105 transition-transform"/>
              <figcaption className="p-3">
                <div className="text-sm font-semibold">{it.title}</div>
                <div className="text-xs text-slate-500">{it.desc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "500+", label: "Schools Served" },
    { value: "15+", label: "Years Experience" },
    { value: "1M+", label: "Notebooks Yearly" },
    { value: "99.5%", label: "On‑time Delivery" },
  ];
  return (
    <section className="py-14">
      <Container className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.value}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}

function NotebookBrand() {
  const features = [
    "Premium paper GSM and bindings",
    "Mithila/abstract cover series",
    "Custom school branding and barcodes",
    "Eco‑friendly inks and processes",
  ];
  return (
    <section id="notebook" className="bg-gradient-to-b from-white to-slate-50 py-16 sm:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Pathak Notebook — Our In‑house Brand</h2>
          <p className="mt-2 max-w-prose text-slate-600">Launched to deliver consistent quality for schools across Eastern India. Choose from size series like 18×24, 22×28, 21×29.7, and 21×33, or request custom specs.</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> {f}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow">Request Catalogue</a>
            <a href="#showcase" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900">View Covers</a>
          </div>
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-full w-full bg-[repeating-linear-gradient(135deg,#f8fafc_0px,#f8fafc_10px,#e2e8f0_10px,#e2e8f0_20px)]" />
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Brief & Estimate", desc: "Share specs or sample. We confirm timeline & rates.", icon: ClipboardIcon },
    { title: "Design & Proof", desc: "Artwork prep with digital/physical proof for approval.", icon: Sparkles },
    { title: "Print & Finish", desc: "Offset/digital print, binding, lamination, QC.", icon: Printer },
    { title: "Dispatch", desc: "Safe packing and on‑time delivery to your door.", icon: Truck },
  ];
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">How We Work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <s.icon className="mx-auto h-6 w-6" />
              <div className="mt-3 text-lg font-bold">{s.title}</div>
              <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "School Partner", text: "Reliable quality and delivery for our full-year stationery.", rating: 5 },
    { name: "Brand Manager", text: "Packaging & labels always on point.", rating: 5 },
    { name: "Distributor", text: "Great margins and consistent supply on notebooks.", rating: 5 },
  ];
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <figure key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: it.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{it.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold">{it.name}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-slate-900 py-10 text-white">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <div className="text-xl font-semibold">Have a requirement or tender?</div>
          <div className="text-sm text-slate-300">Share specs to get a fast quote today.</div>
        </div>
        <div className="flex gap-3">
          <a href={`https://wa.me/${encodeURIComponent(PLACEHOLDER_WHATSAPP)}?text=Hello%20${encodeURIComponent(PLACEHOLDER_COMPANY)}%2C%20I%20need%20a%20quote.`} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow">
            Chat on WhatsApp
          </a>
          <a href="#contact" className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white">
            Send Details
          </a>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <Container className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">About {PLACEHOLDER_COMPANY}</h2>
          <p className="mt-2 max-w-prose text-slate-600">
            We are a printing & stationery manufacturer serving schools and businesses across Eastern India. From short‑run digital to large‑volume offset and packaging, our team manages design, print, finishing and dispatch under one roof.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> GEM & tender experience for government departments</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> Dedicated support for schools (500+ partners)</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4"/> Custom notebook brand — Pathak Notebook</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-lg font-bold">Capabilities</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Offset & digital printing",
              "Lamination, UV, foiling, die‑cut",
              "Binding — spiral, perfect, hardcase",
              "In‑house design team",
              "Barcoding & variable data",
              "Logistics & dispatch",
            ].map((c) => (
              <div key={c} className="rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                {c}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do you deliver outside West Bengal?", a: "Yes, we support pan‑India dispatch with reliable partners." },
    { q: "Can you customize notebook sizes?", a: "Absolutely. We produce standard sizes and fully custom specs." },
    { q: "Do you handle design?", a: "Yes, from concept to print‑ready artwork with proofs." },
  ];
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Enquiry from printpathak.com");
    const body = encodeURIComponent("Hi, I would like to discuss a printing requirement.\n\nName: \nCompany/School: \nPhone: \nDetails:\n");
    return `mailto:${PLACEHOLDER_EMAIL}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <Container className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Contact</h2>
          <p className="mt-2 max-w-prose text-slate-600">Reach us for quotes, catalogues, or dealership enquiries.</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`tel:${PLACEHOLDER_PHONE}`} className="flex items-center gap-2"><Phone className="h-4 w-4"/> {PLACEHOLDER_PHONE}</a>
            <a href={`mailto:${PLACEHOLDER_EMAIL}`} className="flex items-center gap-2"><Mail className="h-4 w-4"/> {PLACEHOLDER_EMAIL}</a>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> {PLACEHOLDER_ADDRESS}</div>
          </div>
          <div className="mt-6">
            <a href={`https://wa.me/${encodeURIComponent(PLACEHOLDER_WHATSAPP)}`} className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              <MessageCircle className="h-4 w-4"/> WhatsApp us
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-lg font-bold">Quick Enquiry</h3>
          <p className="mt-1 text-sm text-slate-600">This simple form opens your email app with pre‑filled details.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              window.location.href = mailto;
            }}
            className="mt-4 grid gap-3"
          >
            <input required placeholder="Your name" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-300" />
            <input required placeholder="Phone" className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-300" />
            <textarea required placeholder="Requirement details" rows={4} className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-300" />
            <button type="submit" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-md">Send Enquiry</button>
            {sent && <div className="text-xs text-slate-500">Opening your email app…</div>}
          </form>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="grid gap-6 sm:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold">{PLACEHOLDER_COMPANY}</div>
          <div className="mt-1 text-sm text-slate-600">All types of printing • School stationery • Packaging</div>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#showcase" className="hover:underline">Showcase</a></li>
            <li><a href="#notebook" className="hover:underline">Pathak Notebook</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-1">
            <li><a href={`tel:${PLACEHOLDER_PHONE}`} className="hover:underline">{PLACEHOLDER_PHONE}</a></li>
            <li><a href={`mailto:${PLACEHOLDER_EMAIL}`} className="hover:underline">{PLACEHOLDER_EMAIL}</a></li>
            <li>{PLACEHOLDER_ADDRESS}</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
        <div>© {new Date().getFullYear()} {PLACEHOLDER_COMPANY}. All rights reserved.</div>
        <a href="#" className="hover:underline">Terms & Privacy</a>
      </Container>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${encodeURIComponent(PLACEHOLDER_WHATSAPP)}`}
      className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg md:bottom-8 md:right-8"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function SeoMeta() {
  return (
    <>
      <title>{PLACEHOLDER_COMPANY} — Printing • Stationery • Packaging</title>
      <meta name="description" content={PLACEHOLDER_TAGLINE} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://printpathak.com/" />
      {/* Social / OG */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${PLACEHOLDER_COMPANY} — Printing • Stationery • Packaging`} />
      <meta property="og:description" content={PLACEHOLDER_TAGLINE} />
      <meta property="og:url" content="https://printpathak.com/" />
      <meta property="og:image" content="https://printpathak.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

function SchemaOrg() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PLACEHOLDER_COMPANY,
    url: "https://printpathak.com/",
    logo: "https://printpathak.com/logo.png",
    sameAs: [],
    contactPoint: [{
      "@type": "ContactPoint",
      telephone: PLACEHOLDER_PHONE,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "bn"]
    }],
    address: {
      "@type": "PostalAddress",
      streetAddress: PLACEHOLDER_ADDRESS,
      addressCountry: "IN"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M9 4h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a2 2 0 0 1 2-2Zm0 3h6V6H9v1Z" fill="currentColor" />
    </svg>
  );
}
