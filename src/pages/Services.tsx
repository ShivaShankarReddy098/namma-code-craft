import {
  ArrowRight,
  Code2,
  Palette,
  Search,
  RefreshCw,
  Smartphone,
  Zap,
  Shield,
  Headphones,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import StructuredData from "@/components/StructuredData";

const Services = () => {
  // Structured Data for Services Page
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "Namma Code",
      url: "https://www.nammacode.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Custom websites and web applications built with modern technologies for optimal performance.",
            category: "Web Development",
            provider: {
              "@type": "Organization",
              name: "Namma Code",
            },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "99",
            priceCurrency: "USD",
            eligibleQuantity: {
              "@type": "QuantitativeValue",
              minValue: 1,
              unitText: "project",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description:
              "Beautiful, intuitive designs that engage users and drive conversions.",
            category: "Design",
            provider: {
              "@type": "Organization",
              name: "Namma Code",
            },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "55",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description:
              "Boost your online visibility and drive organic traffic to your website.",
            category: "Digital Marketing",
            provider: {
              "@type": "Organization",
              name: "Namma Code",
            },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "49",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Rebuilding",
            description:
              "Transform your outdated website into a modern, high-performing digital asset.",
            category: "Web Development",
            provider: {
              "@type": "Organization",
              name: "Namma Code",
            },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "49",
            priceCurrency: "USD",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.nammacode.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.nammacode.com/services",
      },
    ],
  };

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Integration",
        "API Development",
      ],
      price: "Starting at $99",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that engage users and drive conversions.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      price: "Starting at $55",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your online visibility and drive organic traffic to your website.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Performance Tracking",
      ],
      price: "Starting at $49",
    },
    {
      icon: RefreshCw,
      title: "Website Rebuilding",
      description:
        "Transform your outdated website into a modern, high-performing digital asset.",
      features: [
        "Legacy Migration",
        "Modern Framework",
        "Performance Optimization",
        "Mobile Responsive",
      ],
      price: "Starting at $49",
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile Optimization",
    //   description: "Ensure your website performs perfectly on all devices and screen sizes.",
    //   features: ["Responsive Design", "Mobile Performance", "Touch Optimization", "Progressive Web App"],
    //   price: "Starting at $49",
    // },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed up your website and improve user experience with advanced optimization techniques.",
      features: [
        "Speed Optimization",
        "Core Web Vitals",
        "Caching Strategy",
        "CDN Setup",
      ],
      price: "Starting at $49",
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description:
        "Keep your website secure and up-to-date with our comprehensive maintenance services.",
      features: [
        "Security Monitoring",
        "Regular Updates",
        "Backup Management",
        "24/7 Support",
      ],
      price: "Starting at $49",
    },
    // {
    //   icon: Headphones,
    //   title: "Consultation & Strategy",
    //   description: "Get expert advice on your digital strategy and technology decisions.",
    //   features: ["Digital Strategy", "Technology Consultation", "Project Planning", "ROI Analysis"],
    //   price: "Starting at $199/hour",
    // },
  ];

  return (
    <div className="pt-16">
      <StructuredData data={servicesPageSchema} />
      <StructuredData data={breadcrumbSchema} />
      {/* Hero Section */}
      <section className="py-20 bg-bg-background from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 animate-fade-in">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
              Comprehensive digital solutions to help your business thrive in
              the digital landscape. From development to design, we've got you
              covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="mr-2 mb-2"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        {service.price}
                      </span>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project is
              delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We understand your goals, requirements, and target audience.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "We create a detailed project plan and timeline for execution.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our team brings your vision to life with clean, efficient code.",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "We deploy your project and provide ongoing support and maintenance.",
              },
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
        <section className="relative py-24 overflow-hidden bg-white dark:bg-background">
  {/* Background glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] 
      -translate-x-1/2 -translate-y-1/2 rounded-full 
      bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent 
      blur-3xl" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative rounded-3xl border border-black/10 dark:border-white/10 
      bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl 
      px-6 py-16 md:px-16 text-center shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)]">

      {/* Accent line */}
      <div className="mx-auto mb-6 h-1 w-16 rounded-full 
        bg-gradient-to-r from-violet-500 to-purple-600" />

      <h2 className="font-playfair text-[36px] md:text-[88px] font-extrabold tracking-tight 
        text-black dark:text-white leading-tight">
        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
          Get Started?
        </span>
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl 
        text-black/70 dark:text-white/70">
        Let’s discuss your project and craft a solution that elevates your
        brand and delivers real business impact.
      </p>

      <div className="mt-10 flex justify-center">
        <Button
          asChild
          size="lg"
          className="group relative overflow-hidden rounded-full 
          bg-gradient-to-r from-violet-600 to-purple-600 
          px-8 py-6 text-base font-semibold text-white 
          shadow-lg shadow-purple-500/30
          transition-all duration-300 hover:scale-105"
        >
<Link
  to="/contact"
  className="group relative flex items-center overflow-hidden rounded-full"
>
  {/* Loading sweep */}
  <span
    className="absolute inset-0 -translate-x-full 
    bg-gradient-to-r from-transparent via-white/30 to-transparent
    group-hover:translate-x-full transition-transform duration-700"
  />

  {/* Button content */}
  <span className="relative z-10 flex items-center">
    Contact Us Today
    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
  </span>
</Link>


        </Button>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Services;
