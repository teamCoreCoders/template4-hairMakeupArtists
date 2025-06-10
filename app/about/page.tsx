"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Award, Users, Calendar, Camera } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Page animations
    const timeline = gsap.timeline();
    timeline
      .fromTo('.about-hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' })
      .fromTo('.about-hero-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8');

    // Stats animation
    gsap.utils.toArray('.stat-card').forEach((card: any, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients'
    },
    {
      icon: Calendar,
      number: '8+',
      label: 'Years Experience'
    },
    {
      icon: Camera,
      number: '200+',
      label: 'Editorial Shoots'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Industry Awards'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="about-hero-title heading-xl mb-8">
                The Story Behind the Art
              </h1>
              <div className="about-hero-text space-y-6 body-lg text-muted-foreground">
                <p>
                  Beauty has always been my language. From childhood sketches to professional artistry, 
                  I've spent years learning to speak fluently in the dialects of color, texture, and light.
                </p>
                <p>
                  My journey began in the vibrant arts district of my hometown, where I first discovered 
                  that makeup was more than cosmetics—it was storytelling, confidence-building, and pure magic.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg"
                alt="Aria working with client"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg mb-12">My Philosophy</h2>
          <div className="space-y-8 body-lg text-muted-foreground">
            <p className="text-2xl font-light leading-relaxed">
              "True beauty isn't about changing who you are—it's about revealing who you've always been."
            </p>
            <p>
              Every face tells a unique story, and my role is to listen carefully to what that story wants to become. 
              Whether we're creating a soft, natural glow for your wedding day or a bold editorial look for a photo shoot, 
              the goal remains the same: authentic expression elevated through artistry.
            </p>
            <p>
              I believe in the power of collaboration. Your comfort, your vision, and your individual beauty guide every 
              brushstroke. This isn't about imposing a look—it's about discovering it together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Experience by Numbers</h2>
            <p className="body-md text-muted-foreground">
              Years of dedication reflected in countless moments of beauty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="stat-card p-8 text-center border-0 bg-card/50">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-light mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-light tracking-wide">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg"
                alt="Behind the scenes makeup artistry"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-8">
              <h2 className="heading-lg">The Journey Continues</h2>
              <div className="space-y-6 body-md text-muted-foreground">
                <p>
                  My education began at the prestigious Beauty Arts Institute, where I studied under master colorists 
                  and learned the technical foundations that still guide my work today. But the real education happened 
                  on set, working alongside photographers, models, and creative directors who pushed me to see beauty 
                  through new lenses.
                </p>
                <p>
                  From intimate bridal preparations to high-fashion editorial shoots, from commercial campaigns to 
                  red carpet events, each experience has added depth to my understanding of what makeup can achieve. 
                  It's not just about the final look—it's about the confidence that blooms when someone sees their 
                  best self reflected back at them.
                </p>
                <p>
                  Today, I continue to learn, to grow, and to discover new ways of bringing out the inherent beauty 
                  in every person I work with. Because in the end, that's what this is all about—celebration, 
                  transformation, and the joy of feeling completely, authentically beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg mb-8">Let's Create Together</h2>
          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to discover your signature look? I'd love to hear about your vision and discuss how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-full">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 rounded-full">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}