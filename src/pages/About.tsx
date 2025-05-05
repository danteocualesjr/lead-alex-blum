
import React from 'react';
import { MapPin, Award, Clock, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const About = () => {
  return (
    <>
      <PageHeader 
        title="About Alex Blum CPA" 
        subtitle="Serving the Baltimore community with professional tax and accounting services"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6">Our Story</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-navy rounded-lg overflow-hidden">
                    <div className="p-6 text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gray-light flex items-center justify-center mb-4">
                        <span className="text-3xl font-serif font-bold text-navy">AB</span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-white mb-2">Alex Blum, CPA</h3>
                      <p className="text-teal">Founder & Principal</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Alex Blum CPA, LLC was founded with a vision to provide personalized tax accounting and preparation services to the Baltimore community. With years of experience and a deep understanding of tax regulations, we've built a reputation for excellence in serving individuals, families, and businesses.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our firm is dedicated to offering professional, reliable, and accessible tax services. We believe in building long-term relationships with our clients, understanding their unique financial situations, and providing tailored solutions to help them achieve their goals.
                  </p>
                  <p className="text-gray-600">
                    From individual tax returns to complex business accounting, we approach each client with the same level of dedication and attention to detail. Our commitment to personalized service sets us apart and has made us a trusted partner for all tax and accounting needs in the Baltimore area.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <div className="flex items-start">
                    <div className="bg-teal rounded-full p-3 mr-4">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Excellence</h3>
                      <p className="text-gray-600">
                        We are committed to delivering the highest quality tax and accounting services, staying current with changing regulations and best practices.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start">
                    <div className="bg-teal rounded-full p-3 mr-4">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Client-Centered</h3>
                      <p className="text-gray-600">
                        We prioritize our clients' needs and goals, providing personalized attention and tailored solutions for each unique situation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start">
                    <div className="bg-teal rounded-full p-3 mr-4">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Reliability</h3>
                      <p className="text-gray-600">
                        Our clients can count on us for timely, accurate, and thorough service, with clear communication throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <div className="flex items-start">
                    <div className="bg-teal rounded-full p-3 mr-4">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">Community</h3>
                      <p className="text-gray-600">
                        As a locally owned and operated firm, we take pride in serving our Baltimore community and building lasting relationships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6">Areas We Serve</h2>
              <p className="text-gray-600 mb-6">
                Alex Blum CPA, LLC provides tax accounting and preparation services for Baltimore area individuals, families, and businesses, including:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-light p-4 rounded-lg text-center">
                  <span className="font-medium">Hampden</span>
                </div>
                <div className="bg-gray-light p-4 rounded-lg text-center">
                  <span className="font-medium">Roland Park</span>
                </div>
                <div className="bg-gray-light p-4 rounded-lg text-center">
                  <span className="font-medium">Remington</span>
                </div>
                <div className="bg-gray-light p-4 rounded-lg text-center">
                  <span className="font-medium">Medfield</span>
                </div>
                <div className="bg-gray-light p-4 rounded-lg text-center">
                  <span className="font-medium">Woodberry</span>
                </div>
                <div className="bg-gray-light p-4 rounded-lg text-center">
                  <span className="font-medium">And More</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 bg-navy text-white">
              <h2 className="text-2xl font-serif font-bold mb-6">Our Approach</h2>
              <p className="text-gray-300 mb-8">
                At Alex Blum CPA, we believe in a comprehensive approach to tax accounting and preparation. We don't just process numbers; we build relationships and provide strategic advice to help our clients achieve their financial goals.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-teal mb-3">Personal Attention</h3>
                  <p className="text-gray-300">
                    We take the time to understand your unique financial situation, goals, and concerns. This personal approach allows us to provide tailored solutions that address your specific needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-semibold text-teal mb-3">Proactive Planning</h3>
                  <p className="text-gray-300">
                    Rather than just reacting to tax events, we work with you throughout the year to implement strategies that optimize your tax position and support your financial goals.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-semibold text-teal mb-3">Clear Communication</h3>
                  <p className="text-gray-300">
                    We explain complex tax concepts in terms you can understand, keeping you informed throughout the process and empowering you to make confident financial decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Work with Us?"
        description="Contact us today to schedule a consultation and learn how we can assist with your tax and accounting needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;
