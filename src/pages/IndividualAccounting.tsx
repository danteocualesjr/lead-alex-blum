
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Calculator, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const IndividualAccounting = () => {
  return (
    <>
      <PageHeader 
        title="Individual Accounting" 
        subtitle="Professional tax return preparation and planning for employees, self-employed individuals, and retirees"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Individual Accounting Services</h2>
              <p className="text-gray-600 mb-6">
                We prepare individual tax returns and help with tax planning for clients from all walks of life. Whether you work for an employer, are self-employed, or retired, our services are designed to optimize your tax situation and provide peace of mind.
              </p>
              <p className="text-gray-600">
                Our individual accounting services are tailored to your specific needs, ensuring that you receive personalized attention and strategic tax advice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-6">
                <div className="flex items-start mb-4">
                  <FileText className="text-teal mr-4" size={32} />
                  <h3 className="text-xl font-serif font-semibold">Tax Return Preparation</h3>
                </div>
                <p className="text-gray-600">
                  We handle the preparation and filing of individual tax returns with precision and attention to detail. Our team stays up-to-date with the latest tax laws and regulations to ensure your returns are accurate and compliant.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Federal and state tax returns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Self-employment taxes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Investment income reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Rental property income</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6">
                <div className="flex items-start mb-4">
                  <TrendingUp className="text-teal mr-4" size={32} />
                  <h3 className="text-xl font-serif font-semibold">Tax Planning</h3>
                </div>
                <p className="text-gray-600">
                  Our proactive tax planning helps you make informed financial decisions throughout the year. We identify opportunities to minimize your tax liability and maximize your financial well-being.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Year-round tax strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Retirement planning considerations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Deduction optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-teal flex-shrink-0 mt-1 mr-2" size={16} />
                    <span>Tax-efficient investment strategies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-navy text-white rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">Who We Serve</h3>
              <p className="mb-6">
                Our individual accounting services are tailored for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-teal font-semibold mb-2">Employees</h4>
                  <p className="text-gray-300">
                    W-2 employees looking for accurate tax preparation and strategies to maximize their refunds.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal font-semibold mb-2">Self-Employed</h4>
                  <p className="text-gray-300">
                    Freelancers, contractors, and sole proprietors needing comprehensive tax support.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal font-semibold mb-2">Retirees</h4>
                  <p className="text-gray-300">
                    Individuals managing retirement income and navigating tax implications of distributions.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal font-semibold mb-2">Investors</h4>
                  <p className="text-gray-300">
                    People with investment income seeking to optimize their tax position.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center justify-center mb-6">
                <Calculator className="text-teal" size={48} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-center mb-4">Our Approach</h3>
              <p className="text-gray-600 text-center mb-6">
                We believe in providing personalized service that goes beyond just number crunching. Our process includes:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Initial Consultation</h4>
                    <p className="text-gray-600">
                      We start by understanding your unique financial situation and goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Planning</h4>
                    <p className="text-gray-600">
                      We develop a customized tax strategy based on your specific circumstances.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Preparation & Filing</h4>
                    <p className="text-gray-600">
                      We prepare your tax returns with meticulous attention to detail and ensure timely filing.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-teal text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Year-Round Support</h4>
                    <p className="text-gray-600">
                      We provide ongoing advice and support to help you make informed financial decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to schedule a consultation and learn how we can help with your individual tax needs."
        buttonText="Contact Us"
        buttonLink="/contact"
        buttonVariant="primary"
      />
    </>
  );
};

export default IndividualAccounting;
