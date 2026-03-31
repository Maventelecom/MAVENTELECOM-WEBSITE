const Footer = () => (
  <footer className="py-16 section-padding border-t border-border">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#" className="inline-block mb-4">
            <img src="/mt-full-logo.png" alt="Maven Telecom" className="h-12" />
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Powering the future of telecom distribution for dealers nationwide.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
          <div className="space-y-3">
            {["About", "Services", "Why Us", "Platform", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
          <div className="space-y-3">
            <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4 text-sm">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>info@maventelecom.com</p>
            <p>+1 (800) 123-4567</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maven Telecom. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
