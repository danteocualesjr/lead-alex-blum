
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Users, 
  FileText, 
  Briefcase, 
  ShieldCheck
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

const Home = () => {
  const services = [
    {
      title: "Individual Accounting",
      description: "Professional tax return preparation and planning for employees, self-employed individuals, and retirees.",
      link: "/individual-accounting",
      icon: <Users size={36} />
    },
    {
      title: "Gift Tax, Trusts, and Estates",
      description: "Specialized services for handling tax matters related to gifts, trusts, and estates with expertise.",
      link: "/gift-tax-trusts-and-estates",
      icon: <FileText size={36} />
    },
    {
      title: "Business Services",
      description: "Comprehensive bookkeeping, accounting, and business tax return preparation for your company.",
      link: "/business-services",
      icon: <Briefcase size={36} />
    }
  ];

  const testimonials = [
    {
      quote: "Alex has been handling my taxes for years. His expertise and attention to detail have saved me money and given me peace of mind.",
      author: "Sarah Johnson",
      position: "Small Business Owner"
    },
    {
      quote: "The team at Alex Blum CPA helped me navigate a complex tax situation with professionalism and clarity. Highly recommended!",
      author: "Michael Chang",
      position: "Freelance Consultant"
    },
    {
      quote: "I appreciate the personalized approach and clear communication. They make tax season stress-free.",
      author: "Jennifer Smith",
      position: "Baltimore Resident"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy mb-6 fade-in">
                Professional Tax Services in Baltimore
              </h1>
              <p className="text-lg text-gray-600 mb-8 fade-in">
                Alex Blum CPA, LLC provides comprehensive tax accounting and preparation services for individuals, families, and businesses in the Baltimore area.
              </p>
              <div className="flex flex-wrap gap-4 fade-in">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="glass-card p-8 fade-in">
                <div className="text-center mb-6">
                  <Calculator size={64} className="text-teal mx-auto" />
                  <h2 className="text-2xl font-serif font-semibold mt-4">
                    Accounting Excellence
                  </h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ShieldCheck className="text-teal flex-shrink-0 mt-1 mr-3" />
                    <span>Experienced tax professionals</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="text-teal flex-shrink-0 mt-1 mr-3" />
                    <span>Personalized service for every client</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="text-teal flex-shrink-0 mt-1 mr-3" />
                    <span>Comprehensive tax planning</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="text-teal flex-shrink-0 mt-1 mr-3" />
                    <span>Clear, transparent communication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of professional tax and accounting services to meet your financial needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Why Choose Alex Blum CPA?</h2>
              <p className="text-gray-600 mb-6">
                With years of experience serving the Baltimore community, we provide personalized tax accounting and preparation services that you can trust.
              </p>
              
              <div className="space-y-4">
                <div className="glass-card p-4">
                  <h3 className="font-semibold mb-1">Local Expertise</h3>
                  <p className="text-sm text-gray-600">
                    Serving Hampden, Roland Park, Remington, Medfield, Woodberry, and surrounding areas.
                  </p>
                </div>
                
                <div className="glass-card p-4">
                  <h3 className="font-semibold mb-1">Personalized Approach</h3>
                  <p className="text-sm text-gray-600">
                    Tailored tax strategies and solutions for your specific financial situation.
                  </p>
                </div>
                
                <div className="glass-card p-4">
                  <h3 className="font-semibold mb-1">Transparent Communication</h3>
                  <p className="text-sm text-gray-600">
                    Clear explanations and ongoing support throughout the tax process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="glass-card p-8 bg-navy text-white">
                <h3 className="text-2xl font-serif font-semibold mb-6">We're Here to Help</h3>
                <p className="mb-6">
                  Whether you're an individual, family, or business owner, we have the expertise to optimize your tax situation and provide peace of mind.
                </p>
                <p className="mb-8">
                  Our goal is to build long-term relationships with our clients, providing reliable tax services year after year.
                </p>
                <Link to="/contact" className="btn-secondary">
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Alex Blum CPA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Optimize Your Tax Situation?"
        description="Contact us today to schedule a consultation and learn how we can help you with your tax and accounting needs."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
};

export default Home;
