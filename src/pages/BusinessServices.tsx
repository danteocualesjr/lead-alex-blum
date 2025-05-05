
import React from 'react';
import { Briefcase, BookOpen, FileText, Calculator, BarChart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const BusinessServices = () => {
  return (
    <>
      <PageHeader 
        title="Business Services" 
        subtitle="Comprehensive bookkeeping, accounting, and business tax return preparation"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4">Our Business Accounting Services</h2>
              <p className="text-gray-600">
                We provide bookkeeping and accounting services for businesses of all sizes and prepare business tax returns. Our comprehensive approach ensures that your business maintains accurate financial records while optimizing your tax position.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-6 h-full">
                <div className="flex items-start mb-4">
                  <BookOpen className="text-teal mr-3 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-serif font-semibold">Bookkeeping Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Maintain accurate financial records with our comprehensive bookkeeping services.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>General ledger maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Accounts payable and receivable</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Bank reconciliation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Payroll processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Financial report preparation</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 h-full">
                <div className="flex items-start mb-4">
                  <Calculator className="text-teal mr-3 flex-shrink-0" size={28} />
                  <h3 className="text-xl font-serif font-semibold">Accounting Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get insights into your business's financial health with our accounting expertise.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Financial statement preparation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Cash flow analysis and management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Budget development and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Financial analysis and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                    <span>Business performance reviews</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-8 mb-12">
              <div className="flex items-start mb-6">
                <FileText className="text-teal mr-4 flex-shrink-0" size={36} />
                <h3 className="text-2xl font-serif font-semibold">Business Tax Return Preparation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We prepare accurate and timely business tax returns for various entity types, ensuring compliance with all tax regulations while maximizing available deductions and credits.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-light p-5 rounded-lg">
                  <h4 className="font-semibold mb-3">Entity Types We Serve</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Sole Proprietorships (Schedule C)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Partnerships (Form 1065)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>S Corporations (Form 1120S)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>C Corporations (Form 1120)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>LLCs (based on tax classification)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-light p-5 rounded-lg">
                  <h4 className="font-semibold mb-3">Tax Services Include</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Federal and state income tax returns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Quarterly estimated tax payments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Sales and use tax returns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Payroll tax returns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 text-xs">✓</div>
                      <span>Business tax planning and strategy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-navy text-white rounded-xl p-8 mb-12">
              <div className="flex items-start mb-6">
                <BarChart className="text-teal mr-4 flex-shrink-0" size={36} />
                <h3 className="text-2xl font-serif font-semibold">Strategic Business Advisory</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Beyond traditional accounting and tax services, we offer strategic business advisory to help your business thrive.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-teal font-semibold mb-3">Business Planning</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Business entity selection and formation</li>
                    <li>• Business succession planning</li>
                    <li>• Growth strategy development</li>
                    <li>• Profit improvement analysis</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-teal font-semibold mb-3">Financial Advisory</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cash flow forecasting</li>
                    <li>• Break-even analysis</li>
                    <li>• Financing options assessment</li>
                    <li>• Financial risk management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif font-semibold text-center mb-6">Our Business Service Approach</h3>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-teal rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Understand Your Business</h4>
                    <p className="text-gray-600">
                      We take the time to learn about your business, industry, goals, and challenges to provide tailored services that address your specific needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-teal rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Establish Systems</h4>
                    <p className="text-gray-600">
                      We implement efficient accounting systems and processes that provide accurate financial information while minimizing administrative burden.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-teal rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Maintain & Monitor</h4>
                    <p className="text-gray-600">
                      We provide ongoing bookkeeping and accounting services to maintain accurate records and monitor your business's financial health.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-teal rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strategic Planning</h4>
                    <p className="text-gray-600">
                      We analyze your financial data to identify trends, opportunities, and potential issues, helping you make informed business decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-teal rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 text-white text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tax Optimization</h4>
                    <p className="text-gray-600">
                      We develop and implement tax strategies to minimize your tax liability while ensuring compliance with all applicable regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Ready to Optimize Your Business Finances?"
        description="Contact us today to schedule a consultation and learn how our business services can help your company thrive."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default BusinessServices;
