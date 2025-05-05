
import React from 'react';
import { FileText, Gift, Briefcase, Lock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';

const GiftTaxTrustsEstates = () => {
  return (
    <>
      <PageHeader 
        title="Gift Tax, Trusts, and Estates" 
        subtitle="Specialized services for handling tax matters related to gifts, trusts, and estates"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-4">Comprehensive Estate Planning Services</h2>
              <p className="text-gray-600">
                We provide specialized tax services for gifts, trusts, and estates, helping you navigate complex tax regulations and ensure compliance while optimizing your financial strategy. Our expertise covers all aspects of estate planning and associated tax implications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <Gift className="text-teal mb-4" size={40} />
                <h3 className="text-xl font-serif font-semibold mb-3">Gift Tax</h3>
                <p className="text-gray-600">
                  Expert assistance with Form 709 and related gift tax regulations.
                </p>
              </div>
              
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <Lock className="text-teal mb-4" size={40} />
                <h3 className="text-xl font-serif font-semibold mb-3">Trusts</h3>
                <p className="text-gray-600">
                  Professional preparation of Form 1041 and other documents for various types of trusts.
                </p>
              </div>
              
              <div className="glass-card p-6 flex flex-col items-center text-center">
                <Briefcase className="text-teal mb-4" size={40} />
                <h3 className="text-xl font-serif font-semibold mb-3">Estates</h3>
                <p className="text-gray-600">
                  Comprehensive filing of Form 1041 and associated forms for estate tax returns.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Gift Tax Services</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <p className="text-gray-600 mb-4">
                      If you give a gift to someone over a certain amount in a given year not paid directly to a hospital or educational institution, you may have to file a Form 709 even if there is no current year taxable event.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our gift tax services include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                      <li>Preparation of Form 709 (United States Gift Tax Return)</li>
                      <li>Guidance on annual exclusion amounts</li>
                      <li>Strategic advice on lifetime gift exclusion</li>
                      <li>Documentation of qualified transfers</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-navy text-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-4 text-teal">Did You Know?</h4>
                    <p className="mb-4">
                      For 2023, the annual gift tax exclusion is $17,000 per recipient.
                    </p>
                    <p>
                      Gifts exceeding this amount require filing Form 709, even if no tax is due because of the lifetime exemption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Trust Services</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 bg-navy text-white p-6 rounded-lg order-2 md:order-1">
                    <h4 className="font-semibold mb-4 text-teal">Types of Trusts We Handle</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Revocable Living Trusts</li>
                      <li>• Irrevocable Trusts</li>
                      <li>• Charitable Trusts</li>
                      <li>• Grantor Retained Annuity Trusts (GRATs)</li>
                      <li>• Qualified Personal Residence Trusts (QPRTs)</li>
                      <li>• Generation-Skipping Trusts</li>
                    </ul>
                  </div>
                  <div className="flex-1 order-1 md:order-2">
                    <p className="text-gray-600 mb-4">
                      We prepare Form 1041 and other related documents for revocable trusts and other types of trusts.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our trust tax services include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                      <li>Preparation of Form 1041 (U.S. Income Tax Return for Estates and Trusts)</li>
                      <li>Schedule K-1 preparation for trust beneficiaries</li>
                      <li>Guidance on trust income taxation</li>
                      <li>Strategic tax planning for trust administration</li>
                      <li>Coordination with trustees and beneficiaries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Estate Services</h3>
                <p className="text-gray-600 mb-6">
                  We file form 1041 and other forms for estate tax returns.
                </p>
                
                <div className="bg-gray-light p-6 rounded-lg mb-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <FileText className="text-teal mr-2" size={20} />
                    Our Estate Tax Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-navy mb-2">Preparation Services:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                        <li>Form 1041 for estates</li>
                        <li>Form 706 (United States Estate Tax Return)</li>
                        <li>Schedule K-1 for estate beneficiaries</li>
                        <li>State estate and inheritance tax returns</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-navy mb-2">Advisory Services:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2">
                        <li>Estate tax planning strategies</li>
                        <li>Valuation of estate assets</li>
                        <li>Executor guidance and support</li>
                        <li>Coordination with legal counsel</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  We understand that dealing with estate matters can be overwhelming, especially during difficult times. Our compassionate team provides clear guidance and professional support throughout the estate administration process, ensuring all tax obligations are met efficiently and accurately.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 bg-navy text-white">
              <h3 className="text-2xl font-serif font-semibold mb-6">Why Choose Us for Estate Planning Tax Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-teal font-semibold mb-3">Specialized Expertise</h4>
                  <p className="text-gray-300 mb-6">
                    Our team has extensive experience in the complexities of gift, trust, and estate taxation, ensuring accurate filings and optimal tax strategies.
                  </p>
                  
                  <h4 className="text-teal font-semibold mb-3">Personalized Approach</h4>
                  <p className="text-gray-300">
                    We take the time to understand your unique situation and objectives, providing tailored solutions that align with your estate planning goals.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-teal font-semibold mb-3">Collaborative Process</h4>
                  <p className="text-gray-300 mb-6">
                    We work seamlessly with your attorney, financial advisor, and other professionals to ensure a coordinated approach to your estate plan.
                  </p>
                  
                  <h4 className="text-teal font-semibold mb-3">Ongoing Support</h4>
                  <p className="text-gray-300">
                    Estate planning is not a one-time event. We provide continuous guidance as tax laws change and as your personal circumstances evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Need Assistance with Gift Tax, Trusts, or Estates?"
        description="Contact us today to schedule a consultation and learn how we can help with your estate planning tax needs."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default GiftTaxTrustsEstates;
