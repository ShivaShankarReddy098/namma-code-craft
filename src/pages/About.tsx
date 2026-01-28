import { Users, Target, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StructuredData from "@/components/StructuredData";

const About = () => {
  // Structured Data for About Page
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Namma Code",
    url: "https://www.nammacode.com/about",
    description:
      "Learn about Namma Code, a passionate team of developers, designers, and digital strategists dedicated to creating exceptional web experiences.",
    mainEntity: {
      "@type": "Organization",
      name: "Namma Code",
      foundingDate: "2025",
      description:
        "We're a passionate team of developers, designers, and digital strategists dedicated to creating exceptional web experiences that drive business growth.",
      mission:
        "Every business deserves a powerful digital presence that truly represents their vision and connects with their audience.",
      values: [
        "Mission-Driven - We're committed to delivering solutions that make a real impact",
        "Innovation First - We stay ahead with cutting-edge technologies",
        "Client-Focused - Your success is our success",
        "Quality Excellence - We maintain the highest standards",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9481973172",
        email: "nammacode@gmail.com",
        contactType: "customer service",
      },
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Namma Code",
    alternateName: "ನಮ್ಮ Code",
    description:
      "A full-service digital agency helping businesses of all sizes transform their online presence and achieve their digital goals.",
    foundingDate: "2025",
    numberOfEmployees: "2-10",
    industry: "Web Development",
    slogan: "Crafting Digital Excellence",
    knowsAbout: [
      "Web Development",
      "UI/UX Design",
      "SEO Optimization",
      "Website Rebuilding",
      "Performance Optimization",
      "React Development",
      "Node.js Development",
    ],
  };

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to delivering solutions that make a real impact on your business success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of the curve with cutting-edge technologies and creative approaches.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every project, from design to deployment.",
    },
  ];

  // const team = [
  //   {
  //     name: "Shiva Shankar Reddy",
  //     role: "Lead Developer",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  //   },
  //   {
  //     name: "Rahul S Math",
  //     role: "UI/UX Designer",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  //   },
  //   {
  //     name: "Dadapeer",
  //     role: "Frontend Developer",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  //   },
  //   {
  //     name: "Abhi",
  //     role: "Backend Developer",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  //   },
  // ];

  return (
    <div className="pt-16">
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={organizationSchema} />
      {/* Hero Section */}
      <section className="py-20 bg-bg-background from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 animate-fade-in">
              About <span className="text-gradient">Namma Code</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
              We're a passionate team of developers, designers, and digital
              strategists dedicated to creating exceptional web experiences that
              drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Founded in 2025, nammaCode emerged from a simple belief: every
                business deserves a powerful digital presence that truly
                represents their vision and connects with their audience.
              </p>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                We've grown from a small team of passionate developers to a
                full-service digital agency, helping businesses of all sizes
                transform their online presence and achieve their digital goals.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we continue to push boundaries, embrace new technologies,
                and deliver solutions that not only meet but exceed our clients'
                expectations.
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our team working together"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind nammaCode who bring creativity,
              expertise, and passion to every project.
            </p> */}
      {/* </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
      {/* </div>
      </section> */}
    </div>
  );
};

export default About;
