import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main About */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-primary">TRADERAY</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">TRADERAY</strong> is a high-performance crypto trading and market intelligence brand built for traders, investors, and institutions seeking clarity, precision, and consistency.
            </p>
            
            <p>
              Founded by <strong className="text-foreground">Ayoola</strong>, a disciplined market analyst, TraderAY provides deep insights, actionable strategies, and data-driven perspectives for navigating today's fast-moving digital asset markets.
            </p>
            
            <p className="text-xl font-medium text-foreground italic">
              Trading is not luck — it is structure, discipline, and mastery.
            </p>
            
            <p>
              Through a blend of technical frameworks, market psychology, and long-term strategy, we help individuals evolve beyond guesswork and noise. Every insight is built on real experience, market evidence, and a commitment to sustainable growth.
            </p>
            
            <p>
              With active communities on <a href="https://x.com/TraderAY1st" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">X (@TraderAY1st)</a> and <a href="https://instagram.com/traderay.1st" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram (@traderay.1st)</a>, TRADERAY is shaping a new generation of traders committed to smart decisions, disciplined execution, and long-term success.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 gradient-card border-border/50 transition-smooth hover:border-primary/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To guide traders toward consistent long-term success by delivering clarity, structure, and strategic intelligence in the crypto markets.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 gradient-card border-border/50 transition-smooth hover:border-accent/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's most trusted source of professional, data-driven crypto market insights.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
