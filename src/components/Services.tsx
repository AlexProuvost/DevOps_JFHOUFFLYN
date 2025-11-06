import { Card, CardContent } from "@/components/ui/card";
import { Zap, Wind } from "lucide-react";
import electriciteImage from "@/assets/electricite.jpg";
import climatisationImage from "@/assets/climatisation.jpg";

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Électricité */}
          <div id="electricite" className="scroll-mt-20">
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={electriciteImage} 
                  alt="Services d'électricité" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                  <div className="p-6 text-primary-foreground">
                    <Zap className="h-12 w-12 mb-2" />
                    <h2 className="text-3xl font-bold">Électricité</h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Installation électrique complète
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Mise aux normes et rénovation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Dépannage et maintenance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Tableau électrique et disjoncteurs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Éclairage intérieur et extérieur
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Climatisation */}
          <div id="climatisation" className="scroll-mt-20">
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={climatisationImage} 
                  alt="Services de climatisation" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end">
                  <div className="p-6 text-accent-foreground">
                    <Wind className="h-12 w-12 mb-2" />
                    <h2 className="text-3xl font-bold">Climatisation</h2>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Installation de climatisation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Entretien et maintenance annuelle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Dépannage rapide
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Climatisation réversible
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Conseil en économie d'énergie
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
