import { Card } from "@/components/ui/card";
import electriciteImage from "@/assets/electricite.jpg";
import climatisationImage from "@/assets/climatisation.jpg";
import heroImage from "@/assets/hero-electrical.jpg";

const Gallery = () => {
  const images = [
    { src: electriciteImage, alt: "Installation électrique professionnelle" },
    { src: climatisationImage, alt: "Installation de climatisation" },
    { src: heroImage, alt: "Tableau électrique moderne" },
  ];

  return (
    <section id="galerie" className="py-24 bg-secondary/30 scroll-mt-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez quelques-unes de nos installations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
