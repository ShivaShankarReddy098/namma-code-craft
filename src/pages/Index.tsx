import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Palette,
  Search,
  RefreshCw,
  Star,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StructuredData from "@/components/StructuredData";
import { motion } from "framer-motion";


// Note: Banner component was removed from this page; its file remains in case it's needed elsewhere.

const Index = () => {
  // Structured Data for Homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Namma Code",
    alternateName: "ನಮ್ಮ Code",
    url: "https://www.nammacode.com",
    logo: "https://www.nammacode.com/nammacode-logo1.png",
    description:
      "Professional web development and digital solutions company in Bengaluru, India. We create custom websites, UI/UX designs, and provide SEO optimization services.",
    foundingDate: "2025",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9481973172",
      contactType: "customer service",
      email: "nammacode@gmail.com",
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    sameAs: ["https://www.instagram.com/nammacode"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom websites built with modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "Beautiful, intuitive designs that engage users",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description: "Boost online visibility and drive organic traffic",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Namma Code - Digital Excellence Crafting",
    url: "https://www.nammacode.com",
    description:
      "Transform your ideas into powerful digital solutions that drive growth, engage users, and deliver exceptional results.",
    publisher: {
      "@type": "Organization",
      name: "Namma Code",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.nammacode.com/services?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies for optimal performance and user experience.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that engage users and drive conversions.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your online visibility and drive organic traffic to your website.",
    },
    {
      icon: RefreshCw,
      title: "Website Rebuilding",
      description:
        "Transform your outdated website into a modern, high-performing digital asset.",
    },
  ];

  const stats = [
    { icon: Users, value: "40+", label: "Happy Clients" },
    { icon: Award, value: "45+", label: "Projects Completed" },
    { icon: Star, value: "4.7", label: "Average Rating" },
    { icon: CheckCircle, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="pt-16 ">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />

      {/* Hero Section */}
      
      {/* <section className="  lg:py-32 overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-800 to-black-400 " />

        <div className="container mx-auto px-6 sm:px-10 lg:px-14 py-20 relative text-center">
          {/* Main Heading */}
          {/* <h1 className="text-foreground text-5xl md:text-7xl lg:text-8xl font-bold font-playfair mb-10 leading-tight drop-shadow-xl">
            Creafting Digital <span className="text-[#ffffff]">Excellence</span>
          </h1>  */}

          {/* Sub Text */}
          {/* <p className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto drop-shadow-md">
            Trusted digital solutions that bring your ideas to life.
          </p> */}

          {/* CTA Button */}
          {/* <div className="mt-12 flex justify-center">
            <button
                className="px-10 py-4 rounded-xl bg-[#b088f0] hover:bg-[#924BFF]
                text-foreground text-lg font-playfair font-bold shadow-1
                hover:shadow-[0_15px_40px_rgba(160,102,255,0.5)]
                transition-all duration-300"
            >
              <Link to="/contact">
              We’re Just a Message Away
              </Link>
            </button>
          </div>
        </div> */}

        {/* Floating Elements */}
        {/* <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl" />
        </div>

        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
        </div>
      </section> */}

{/* Hero Section */}
<section className="relative lg:py-32 overflow-hidden">

  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-indigo-800 to-black-400" />

  {/* Floating Blobs */}
  <motion.div
    className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
    animate={{ y: [0, -60, 0], x: [0, 40, 0] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="absolute bottom-24 right-16 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
    animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.div
    className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-2xl"
    animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
  />

  {/* Content */}
  <div className="container mx-auto px-6 sm:px-10 lg:px-14 py-20 relative text-center">

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-foreground text-5xl md:text-7xl lg:text-8xl font-bold font-playfair mb-10 leading-tight drop-shadow-xl"
    >
      Crafting Digital{" "}
      <span className="text-[#ffffff]">Excellence</span>
    </motion.h1>

    {/* Sub Text */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto drop-shadow-md"
    >
      Trusted digital solutions that bring your ideas to life.
    </motion.p>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-12 flex justify-center"
    >
      <Link to="/contact">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-xl bg-[#b088f0] hover:bg-[#924BFF]
          text-foreground text-lg font-playfair font-bold shadow-1
          hover:shadow-[0_15px_40px_rgba(160,102,255,0.5)]
          transition-all duration-300"
        >
          We’re Just a Message Away
        </motion.button>
      </Link>
    </motion.div>

  </div>
</section>




      {/* ///////////////////////////////////////////////// */}

      {/* Services Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 drop-shadow-sm text-foreground">
        Our <span className="text-gradient">Services</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        We offer comprehensive digital solutions to help your business thrive in the digital
        landscape.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {services.map((service, index) => (
        <Card
          key={service.title}
          className="group relative overflow-hidden rounded-2xl 
                     border border-white/0 
                     bg-white/ backdrop-blur-xl 
                     shadow-[0_8px_30px_rgba(0,0,0,0.4)] 
                     hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] 
                     transition-all duration-500 hover:-translate-y-3"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Card Light Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20 opacity-40 pointer-events-none" />

          <CardContent className="p-8 text-center relative">
            
            {/* Icon Wrapper */}
            <div className="mb-6 inline-flex p-5 rounded-2xl bg-transparent backdrop-blur-lg 
                            group-hover:bg-primary/20 transition-all duration-500 
                            shadow-[0_4px_20px_rgba(0,0,0,0.50)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.60)]">
              <service.icon className="h-9 w-9 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 tracking-wide text-foreground">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group relative transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Wrapper */}
                <div className="mb-4 inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-[0_4px_20px_rgba(160,102,255,0.25)] group-hover:bg-primary/20 group-hover:shadow-[0_10px_40px_rgba(160,102,255,0.45)] transition-all duration-500">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 drop-shadow">{stat.value}</div>

                {/* Label */}
                <div className="text-muted-foreground font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
   <section className="relative py-24 w-full overflow-hidden bg-white dark:bg-background water-bg">
         
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
          Transform Your Business?
        </span>
      </h2>

      <p
        className="mt-6 mb-10 max-w-2xl mx-auto text-lg md:text-xl
        text-black/70 dark:text-white/70"
      >
        Let’s work together to create something amazing. Get in touch with us
        today and let’s discuss your next project.
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
  <Link
  to="/contact"
  className="group flex items-center gap-2">
    
  Contact Us Today
    
  <span className="flex gap-1 ml-2">
    <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:0ms]" />
    <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:150ms]" />
    <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:300ms]" />
  </span>
</Link>
      </Button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Index;
