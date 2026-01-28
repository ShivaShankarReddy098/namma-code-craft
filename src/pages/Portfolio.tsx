import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/StructuredData";
import {ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";



const Portfolio = () => {
  // Structured Data for Portfolio Page
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio - Namma Code",
    url: "https://www.nammacode.com/portfolio",
    description:
      "Explore our latest projects and see how we've helped businesses achieve their digital goals with innovative solutions.",
    mainEntity: {
      "@type": "ItemList",
      name: "Web Development Projects",
      itemListElement: [
        {
          "@type": "CreativeWork",
          name: "E-Commerce Platform",
          description:
            "A modern e-commerce platform with advanced filtering, payment integration, and inventory management.",
          creator: {
            "@type": "Organization",
            name: "Namma Code",
          },
          about: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "Web Development",
        },
        {
          "@type": "CreativeWork",
          name: "Healthcare Dashboard",
          description:
            "An intuitive dashboard for healthcare professionals to manage patient data and appointments.",
          creator: {
            "@type": "Organization",
            name: "Namma Code",
          },
          about: ["Figma", "React", "TypeScript", "Chart.js"],
          category: "UI/UX Design",
        },
        {
          "@type": "CreativeWork",
          name: "Restaurant Website",
          description:
            "A beautiful restaurant website with online reservations and menu showcase.",
          creator: {
            "@type": "Organization",
            name: "Namma Code",
          },
          about: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
          category: "Web Development",
        },
      ],
    },
    breadcrumb: {
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
          name: "Portfolio",
          item: "https://www.nammacode.com/portfolio",
        },
      ],
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Namma Code",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Experience",
        about: "200+ Projects Completed",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Client Satisfaction",
        about: "100+ Happy Clients",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Industry Recognition",
        about: "50+ Awards Won",
      },
    ],
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A modern e-commerce platform with advanced filtering, payment integration, and inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      description:
        "An intuitive dashboard for healthcare professionals to manage patient data and appointments.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Figma", "React", "TypeScript", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      description:
        "A beautiful restaurant website with online reservations and menu showcase.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description:
        "A secure and user-friendly mobile banking application with modern design principles.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Sketch", "Figma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Analytics Platform",
      category: "Web Development",
      description:
        "A comprehensive analytics platform for SaaS businesses with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "D3.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description:
        "A stunning portfolio website for a creative agency showcasing their work and services.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "GSAP", "Tailwind", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = ["All", "Web Development", "UI/UX Design", "Mobile App"];

  return (
    <div className="pt-16">
      <StructuredData data={portfolioSchema} />
      <StructuredData data={organizationSchema} />
      {/* Hero Section */}
      <section className="py-20 bg-bg-background from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 animate-fade-in">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
              Explore our latest projects and see how we've helped businesses
              achieve their digital goals with innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "80+", label: "Happy Clients" },
              { value: "20+", label: "Awards Won" },
              { value: "1", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="relative py-24 overflow-hidden bg-white dark:bg-background">
  {/* Background glow */}
  <div className="absolute inset-0 -z-10">
    <div
      className="absolute top-1/2 left-1/2 h-[500px] w-[500px]
      -translate-x-1/2 -translate-y-1/2 rounded-full
      bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent
      blur-3xl"
    />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="relative text-center rounded-3xl
      border border-black/10 dark:border-white/10
      bg-white/80 dark:bg-neutral-900/70
      backdrop-blur-xl
      px-6 py-16 md:px-16
      shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)]"
    >

      {/* Accent line */}
      <div
        className="mx-auto mb-6 h-1 w-16 rounded-full
        bg-gradient-to-r from-violet-500 to-purple-600"
      />

      <h2
        className="font-playfair text-[36px] md:text-[88px] font-extrabold
        tracking-tight leading-tight
        text-black dark:text-white"
      >
        Ready to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
          Get Started?
        </span>
      </h2>

      <p
        className="mt-6 mb-10 max-w-2xl mx-auto text-lg md:text-xl
        text-black/70 dark:text-white/70"
      >
        Let’s discuss your project and find the perfect solution for your
        business needs.
      </p>

      <Button
        asChild
        size="lg"
        className="group relative overflow-hidden rounded-full
        bg-gradient-to-r from-violet-600 to-purple-600
        px-8 py-6 text-base font-semibold text-white
        shadow-lg shadow-purple-500/30
        transition-all duration-300 hover:scale-105"
      >
        <Link to="/contact" className="relative flex items-center">
          {/* Loading sweep */}
          <span
            className="absolute inset-0 -translate-x-full
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            group-hover:translate-x-full transition-transform duration-700"
          />

          <span className="relative z-10 flex items-center">
            Contact Us Today
            <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </Button>

    </div>
  </div>
</section>


    </div>
  );
};

export default Portfolio;
