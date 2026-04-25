import Image from 'next/image';

export function Footer() {
  const services = [
    'Telecom Equipment Installation and Commissioning',
    'In Building Solution (IBS)',
    'Telecom Civil Infrastructure Buildout',
    'Buildings and Roads Construction',
    'RF Planning and Optimization',
    'Logistics and Warehousing',
  ];

  const products = [
    'Solar Power Solutions',
    'Telecom Cabinets and Cooling Systems',
    'Galvanized Telecom Towers and Steel Structures',
    'Cell on Wheel Towers (COW)',
    'Diesel Generators',
  ];

  return (
    <footer className="bg-gradient-to-br from-chart-1 via-chart-1/95 to-chart-1 text-background py-16 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-primary/20">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <span className="text-background/80 group-hover:text-primary transition-colors duration-200 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-primary/20">
              Our Products
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="group">
                  <span className="text-background/80 group-hover:text-primary transition-colors duration-200 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{product}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Logo */}
          <div>
            <div className="flex items-center mb-8 pb-4 border-b border-primary/20">
              <Image
                src="/logo.png"
                alt="Industrial steel manufacturing"
                width={64}
                height={64}
                className="w-16 h-16 object-cover drop-shadow-lg rounded-lg bg-background/10 p-1"
                priority
              />
              <div className="ml-3">
                <span className="text-xl font-bold text-primary block leading-tight">
                  MATRIX ENGINEERING SERVICES
                </span>
              
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-primary/20">Contact us</h3>
              <div className="space-y-3">
                <p className="text-sm text-background/90 leading-relaxed">
                  <span className="font-semibold text-primary">Tel:</span>{' '}
                  <a href="tel:+923325220658" className="hover:text-primary transition-colors duration-200 underline-offset-2 hover:underline">
                    +923325220658
                  </a>
                </p>
                <p className="text-sm text-background/90 leading-relaxed">
                  <span className="font-semibold text-primary">Email:</span>{' '}
                  <a href="mailto:info@matrixes.pk" className="hover:text-primary transition-colors duration-200 underline-offset-2 hover:underline break-all">
                    info@matrixes.pk
                  </a>
                </p>
                <p className="text-sm text-background/90 leading-relaxed">
                  <span className="font-semibold text-primary">Address:</span>{' '}
                  <span>5th floor, Plaza 7, Capital Enclave, Islamabad</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/70">
            &copy; {new Date().getFullYear()} MATRIX ENGINEERING SERVICES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
