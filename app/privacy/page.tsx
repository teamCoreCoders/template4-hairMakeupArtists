import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="heading-lg mb-12">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="heading-md mb-4">Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We collect information you provide directly to us, such as when you book appointments, 
                  contact us, or sign up for our newsletter. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Appointment preferences and service history</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Skin type, allergies, and relevant health information</li>
                  <li>Photos of our work (with your consent)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Schedule and manage your appointments</li>
                  <li>Provide personalized beauty services</li>
                  <li>Process payments and send receipts</li>
                  <li>Communicate about upcoming appointments or changes</li>
                  <li>Send promotional materials (with your consent)</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Information Sharing</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist us in operating our website or conducting our business</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a business transfer or sale</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Photography and Image Usage</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With your consent, we may photograph your completed makeup application for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Portfolio and marketing purposes</li>
                  <li>Website and social media content</li>
                  <li>Promotional materials and advertisements</li>
                </ul>
                <p>
                  You have the right to opt out of photography at any time. We will not use your images 
                  without your permission, and you may request removal of your images from our marketing materials.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Secure storage of physical and digital records</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Secure payment processing through trusted third-party providers</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request that we stop using your images</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Cookies and Website Analytics</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our website may use cookies and similar technologies to enhance your experience and 
                  gather information about how you use our site. You can control cookie preferences 
                  through your browser settings.
                </p>
                <p>
                  We may use analytics services to understand website usage patterns and improve our online presence.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Retention of Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain your personal information for as long as necessary to provide our services 
                  and comply with legal obligations. Client records are typically maintained for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service history: 3 years from last appointment</li>
                  <li>Payment records: 7 years for tax purposes</li>
                  <li>Marketing consent: Until you opt out</li>
                  <li>Health information: As required by local regulations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions about this privacy policy or how we handle your personal information, 
                  please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li>Email: privacy@ariabeauty.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: [Studio Address]</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any material changes by posting the updated 
                  policy on our website and, where appropriate, by email.
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2024
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This privacy policy is effective immediately and applies to all information collected by Aria Beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}