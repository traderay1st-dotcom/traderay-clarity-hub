import { Card } from "@/components/ui/card";
import { Shield, Lightbulb, Trophy, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Discipline Over Hype",
    description: "We prioritize consistent, structured approaches over impulsive market reactions."
  },
  {
    icon: Lightbulb,
    title: "Clarity Over Confusion",
    description: "Clear, actionable insights that cut through market noise and complexity."
  },
  {
    icon: Trophy,
    title: "Mastery Over Luck",
    description: "Skill-based trading strategies built on proven frameworks and experience."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth Over Short-Term Noise",
    description: "Focus on sustainable wealth building rather than quick wins."
  }
];

const Values = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-accent">Stand For</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our core principles guide every analysis and decision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-6 gradient-card border-border/50 transition-smooth hover:border-accent/50 hover:glow-accent group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
