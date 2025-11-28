import { AlertTriangle } from "lucide-react";
import logo from "@/assets/traderay-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      {/* Disclaimer */}
      <div className="bg-destructive/10 border-b border-destructive/20 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Risk Disclaimer:</strong> Trading cryptocurrencies involves significant risk and may not be suitable for all investors. TRADERAY provides educational content and market insights but does not offer financial advice or guarantee performance. Always conduct your own research and trade responsibly.
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <img src={logo} alt="TRADERAY" className="h-10 md:h-12 w-auto mx-auto md:mx-0 mb-3" />
              <p className="text-sm text-muted-foreground">
                Clarity. Discipline. Mastery.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="https://x.com/TraderAY1st" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                Market Insights
              </a>
              <a href="#about" className="hover:text-primary transition-smooth">
                About
              </a>
              <a href="#services" className="hover:text-primary transition-smooth">
                Services
              </a>
              <a href="#contact" className="hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 TRADERAY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
