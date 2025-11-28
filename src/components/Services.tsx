import { Card } from "@/components/ui/card";
import { BarChart3, Target, BookOpen, LineChart, Users } from "lucide-react";
import servicesBackground from "@/assets/services-bg.jpg";
import marketAnalysis from "@/assets/market-analysis-example.png";

const services = [
  {
    icon: BarChart3,
    title: "Market Intelligence & Insights",
    description: "Daily and weekly breakdowns of Bitcoin, altcoins, liquidity, and major market structure shifts."
  },
  {
    icon: Target,
    title: "Strategic Trade Outlooks",
    description: "Clean, structured setups based on trend flow, liquidity zones, and institutional behavior."
  },
  {
    icon: BookOpen,
    title: "Education & Trading Psychology",
    description: "Guides and lessons to build discipline, reduce emotional trading, and improve execution."
  },
  {
    icon: LineChart,
    title: "Long-Term Portfolio Guidance",
    description: "Macro insights, cycle forecasts, and high-conviction market signals for sustainable growth."
  },
  {
    icon: Users,
    title: "Community & Mentorship",
    description: "A connected community of disciplined traders learning and growing together.",
    badge: "Coming Soon"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${servicesBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive market intelligence and strategic guidance for serious traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 gradient-card border-border/50 transition-smooth hover:border-primary/50 hover:glow-primary group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Icon className="h-6 w-6" />
                    </div>
                    {service.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  {index === 0 && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-border/30">
                      <img 
                        src={marketAnalysis} 
                        alt="Market Analysis Example" 
                        className="w-full h-auto opacity-90 hover:opacity-100 transition-smooth"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Market Insights CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 gradient-card border-border/50 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Smart Market Breakdown
            </h3>
            <p className="text-lg text-muted-foreground mb-2">
              Always Clear, Never Noisy.
            </p>
            <p className="text-muted-foreground mb-6">
              Real analysis. No hype. No confusion. Stay updated with Bitcoin structure, altcoin trends, liquidity maps, and smart-money behavior.
            </p>
            <a 
              href="https://x.com/TraderAY1st" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8 glow-accent"
            >
              Read Insights
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
