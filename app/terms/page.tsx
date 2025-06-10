import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="heading-lg mb-12">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="heading-md mb-4">Booking & Appointments</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All appointments must be booked in advance with a non-refundable deposit of 50% of the total service cost. 
                  This deposit secures your date and time and will be applied to your final balance.
                </p>
                <p>
                  Cancellations must be made at least 48 hours prior to your scheduled appointment. 
                  Cancellations made with less than 48 hours notice will forfeit the deposit.
                </p>
                <p>
                  Late arrivals of more than 15 minutes may result in shortened service time or rescheduling, 
                  depending on the day's schedule.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Payment Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We accept cash, credit cards, and digital payments. Full payment is due at the time of service 
                  unless other arrangements have been made in advance.
                </p>
                <p>
                  For bridal packages and large events, payment plans may be arranged. 
                  Please discuss payment options during your initial consultation.
                </p>
                <p>
                  Gratuity is appreciated but not required. If you choose to tip, industry standard is 15-20% of the service cost.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Health & Safety</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Please inform us of any allergies, skin sensitivities, or medical conditions that may affect your service. 
                  We use professional, high-quality products, but allergic reactions can occur.
                </p>
                <p>
                  If you have any active skin conditions, infections, or recent cosmetic procedures, 
                  please reschedule your appointment until fully healed.
                </p>
                <p>
                  All tools and brushes are thoroughly sanitized between clients according to industry standards.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Photography & Usage Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Unless otherwise requested, we may photograph your completed look for portfolio and marketing purposes. 
                  Please let us know if you prefer not to be photographed.
                </p>
                <p>
                  Images may be used on our website, social media platforms, and promotional materials. 
                  We respect your privacy and will not share personal information with images.
                </p>
                <p>
                  If you share images of our work on social media, we appreciate being tagged and credited.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While we take every precaution to ensure your comfort and safety, we cannot be held liable for 
                  allergic reactions to products or dissatisfaction with services after you have approved the final look.
                </p>
                <p>
                  We are not responsible for makeup longevity beyond our recommended timeline, 
                  especially if proper care instructions are not followed.
                </p>
                <p>
                  Any damage to personal property during service will be addressed on a case-by-case basis.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Travel & Location Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Travel fees apply for services provided outside our studio location. 
                  Fees vary based on distance and will be discussed during booking.
                </p>
                <p>
                  Client must provide adequate lighting and a clean, suitable workspace for on-location services.
                </p>
                <p>
                  Additional time charges may apply for location services due to setup and breakdown requirements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="heading-md mb-4">Modifications to Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These terms and conditions may be updated periodically. 
                  Clients will be notified of any significant changes that may affect existing bookings.
                </p>
                <p>
                  By booking our services, you acknowledge that you have read, understood, 
                  and agree to be bound by these terms and conditions.
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2024
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For questions about these terms, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}