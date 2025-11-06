import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="JF Houfflyn" className="h-12 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("electricite")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Électricité
          </button>
          <button
            onClick={() => scrollToSection("climatisation")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Climatisation
          </button>
          <button
            onClick={() => scrollToSection("galerie")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Galerie
          </button>
          <Button onClick={() => scrollToSection("contact")} size="sm">
            Contact
          </Button>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => scrollToSection("contact")}
        >
          <span className="h-0.5 w-6 bg-foreground"></span>
          <span className="h-0.5 w-6 bg-foreground"></span>
          <span className="h-0.5 w-6 bg-foreground"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
