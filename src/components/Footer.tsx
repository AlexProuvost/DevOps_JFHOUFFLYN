import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="JF Houfflyn" className="h-10 w-auto" />
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} JF Houfflyn - Tous droits réservés</p>
            <p className="mt-1">Électricité & Climatisation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
