
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach out to learn more about our services or to schedule a consultation"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Individual Tax Services">Individual Tax Services</option>
                      <option value="Business Services">Business Services</option>
                      <option value="Gift Tax, Trusts, and Estates">Gift Tax, Trusts, and Estates</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col">
                <div className="glass-card p-8 mb-8">
                  <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-teal rounded-full p-2 mr-4">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">(410) 844-4270</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal rounded-full p-2 mr-4">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a 
                          href="mailto:ablum@alexblumcpa.com" 
                          className="text-teal hover:underline"
                        >
                          ablum@alexblumcpa.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal rounded-full p-2 mr-4">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office Address</h3>
                        <p className="text-gray-600">
                          600 Wyndhurst Ave, Suite #300<br />
                          Baltimore, MD 21210
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-teal rounded-full p-2 mr-4">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday & Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-8 bg-navy text-white flex-grow">
                  <h2 className="text-2xl font-serif font-bold mb-6">Additional Contact Details</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-teal font-semibold mb-2">Fax</h3>
                      <p>(410) 618-1298</p>
                    </div>
                    
                    <div>
                      <h3 className="text-teal font-semibold mb-2">Service Areas</h3>
                      <p className="text-gray-300">
                        Serving Hampden, Roland Park, Remington, Medfield, Woodberry, and the greater Baltimore area.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-teal font-semibold mb-2">Appointments</h3>
                      <p className="text-gray-300">
                        We offer in-person consultations by appointment. Please call or email to schedule a meeting with our team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-12 glass-card p-4">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.0213272718146!2d-76.6227483!3d39.359944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80fa994e3af09%3A0x98c75a2a7bbe9d87!2s600%20Wyndhurst%20Ave%2C%20Baltimore%2C%20MD%2021210!5e0!3m2!1sen!2sus!4v1684346653869!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
