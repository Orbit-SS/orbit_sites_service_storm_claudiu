import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">Orbit</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="/pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button size="sm">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-32 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
          Introducing Orbit
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Build faster.<br />Ship with confidence.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Orbit gives your team the tools to move quickly without breaking things.
          Designed for modern teams who care about quality.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg">Start for free</Button>
          <Button variant="outline" size="lg">View demo</Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-md mx-auto">
            A complete platform so you can focus on building great products instead of stitching tools together.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-background rounded-xl border border-border p-6">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Ready to launch?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Join thousands of teams already using Orbit to ship better products, faster.
        </p>
        <Button size="lg">Get started for free</Button>
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

const features = [
  {
    icon: "⚡",
    title: "Lightning fast",
    description: "Optimized from the ground up so your workflow stays snappy no matter the project size.",
  },
  {
    icon: "🔒",
    title: "Secure by default",
    description: "Enterprise-grade security built in. Your data is encrypted at rest and in transit.",
  },
  {
    icon: "🤝",
    title: "Built for teams",
    description: "Real-time collaboration, role-based access, and audit logs for every action.",
  },
  {
    icon: "📦",
    title: "Integrations",
    description: "Connect to the tools you already use. GitHub, Slack, Figma, and more.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Understand what's happening with clear dashboards and actionable insights.",
  },
  {
    icon: "🛠️",
    title: "Developer friendly",
    description: "A powerful API, webhooks, and SDKs so developers can build on top of Orbit.",
  },
];
