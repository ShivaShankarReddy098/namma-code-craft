import {
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

const Services = () => {
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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
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
      <section className="py-20 bg-secondary/30">
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your
              business needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
