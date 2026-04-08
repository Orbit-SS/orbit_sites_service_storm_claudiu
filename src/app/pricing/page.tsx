import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-semibold text-lg tracking-tight">Orbit</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="/#about" className="hover:text-foreground transition-colors">About</a>
            <a href="/pricing" className="text-foreground font-medium">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
          Pricing
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Simple, honest pricing.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Start for free. Scale as you grow. No hidden fees, no surprises.
        </p>
      </section>

      {/* Pricing tiers */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-background rounded-xl border p-8 flex flex-col ${
                  tier.featured ? "border-foreground shadow-lg" : "border-border"
                }`}
              >
                {tier.featured && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Most popular
                  </span>
                )}
                <h2 className="text-xl font-semibold mb-1">{tier.name}</h2>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="text-foreground mt-0.5">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.featured ? "default" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-border">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Still not sure?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start with the free plan — no credit card required. Upgrade whenever you're ready.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg">Start for free</Button>
            <Button variant="outline" size="lg">Talk to sales</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2026 Orbit</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const tiers = [
  {
    name: "Free",
    description: "For individuals and small side projects.",
    price: "$0",
    period: "/ month",
    featured: false,
    cta: "Get started",
    features: [
      "Up to 3 projects",
      "1 team member",
      "5 GB storage",
      "Community support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    description: "For growing teams shipping real products.",
    price: "$29",
    period: "/ month",
    featured: true,
    cta: "Start free trial",
    features: [
      "Unlimited projects",
      "Up to 20 team members",
      "50 GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Audit logs",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs.",
    price: "Custom",
    period: undefined,
    featured: false,
    cta: "Talk to sales",
    features: [
      "Unlimited everything",
      "Unlimited team members",
      "Unlimited storage",
      "Dedicated support",
      "SSO & SCIM",
      "SLA guarantee",
      "Custom contracts",
    ],
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes. You can upgrade or downgrade at any time. Changes take effect immediately and are prorated on your next billing cycle.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer:
      "Yes — the Pro plan comes with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex) and ACH transfers for annual Enterprise plans.",
  },
  {
    question: "Do you offer discounts for nonprofits or education?",
    answer:
      "Yes. Reach out to our sales team and we'll set you up with a discounted plan.",
  },
];
