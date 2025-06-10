"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Star, Camera, Palette, Users, Crown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const moodboardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hero animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' })
      .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8')
      .fromTo('.hero-button', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6');

    // Work showcase scroll animations
    gsap.utils.toArray('.showcase-item').forEach((item: any, index) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stagger the caption animations
      const caption = item.querySelector('.showcase-caption');
      if (caption) {
        gsap.fromTo(caption,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Services section animations
    gsap.utils.toArray('.service-card').forEach((card: any, index) => {
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

    // Testimonials floating animation
    gsap.utils.toArray('.testimonial-card').forEach((card: any, index) => {
      gsap.fromTo(card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Moodboard grid animations
    gsap.utils.toArray('.mood-item').forEach((item: any, index) => {
      gsap.fromTo(item,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Artist introduction parallax
    gsap.fromTo('.artist-image',
      { y: 0 },
      {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.artist-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const showcaseItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg',
      caption: 'Editorial Grace',
      model: 'Isabella Chen',
      type: 'Fashion Editorial'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      caption: 'Bridal Elegance',
      model: 'Sophia Laurent',
      type: 'Bridal Beauty'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
      caption: 'Modern Minimalism',
      model: 'Maya Rodriguez',
      type: 'Commercial Shoot'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      caption: 'Vintage Glamour',
      model: 'Elena Volkov',
      type: 'Vintage Editorial'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
      caption: 'Natural Beauty',
      model: 'Amara Johnson',
      type: 'Beauty Campaign'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      caption: 'Dramatic Artistry',
      model: 'Zara Al-Rashid',
      type: 'High Fashion'
    }
  ];

  const services = [
    {
      icon: Crown,
      title: 'Bridal Styling',
      description: 'Creating timeless beauty for your most precious moments, with looks that photograph beautifully and feel authentically you.'
    },
    {
      icon: Camera,
      title: 'Editorial Looks',
      description: 'Bold, artistic visions brought to life for fashion editorials, campaigns, and creative collaborations.'
    },
    {
      icon: Star,
      title: 'Fashion Shows',
      description: 'Runway-ready artistry that complements designer collections and captures the essence of each creative vision.'
    },
    {
      icon: Users,
      title: 'Personal Consultations',
      description: 'One-on-one sessions to discover your signature style and learn techniques tailored to your unique features.'
    }
  ];

  const testimonials = [
    {
      quote: "Aria transformed me into the bride of my dreams. Her attention to detail is extraordinary.",
      author: "Isabella M.",
      role: "Bride"
    },
    {
      quote: "Working with Aria elevated our entire editorial shoot. She's a true artist.",
      author: "Marcus Chen",
      role: "Fashion Photographer"
    },
    {
      quote: "The most talented makeup artist I've worked with. She sees beauty in everyone.",
      author: "Sofia Laurent",
      role: "Model"
    }
  ];

  const moodItems = [
    {
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg',
      note: 'Soft Drama'
    },
    {
      image: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg',
      note: 'Natural Glow'
    },
    {
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      note: 'Timeless Elegance'
    },
    {
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      note: 'Modern Grace'
    },
    {
      image: 'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      note: 'Bold Expression'
    },
    {
      image: 'https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg',
      note: 'Ethereal Beauty'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Editorial Hero */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
            alt="Beauty editorial portrait"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="hero-title heading-xl mb-6">
            Beauty Begins in Stillness
          </h1>
          <p className="hero-subtitle body-lg mb-8 max-w-2xl mx-auto text-white/90">
            An immersive look into curated looks and visual transformation.
          </p>
          <Button 
            size="lg" 
            className="hero-button bg-white text-black hover:bg-white/90 text-lg px-8 py-3 rounded-full"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Work Showcase Scroll */}
      <section ref={showcaseRef} className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6">Curated Works</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Each image tells a story of transformation, captured in moments of pure artistry.
            </p>
          </div>

          <div className="space-y-32">
            {showcaseItems.map((item, index) => (
              <div key={item.id} className={`showcase-item flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="relative aspect-[3/4] image-overlay group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.caption}
                      fill
                      className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="showcase-caption">
                    <h3 className="heading-md mb-3">{item.caption}</h3>
                    <p className="body-md text-muted-foreground mb-4">
                      {item.model} • {item.type}
                    </p>
                    <p className="body-md leading-relaxed">
                      A study in light and shadow, where each brushstroke serves the greater narrative of beauty and self-expression.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Introduction */}
      <section className="artist-section py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="artist-image">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg"
                  alt="Aria - Beauty Artist"
                  fill
                  className="object-cover rounded-lg grayscale"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="heading-lg">The Artist</h2>
              <div className="space-y-6 body-lg leading-relaxed text-muted-foreground">
                <p>
                  With every line, every curl, every tone — I tell a story.
                </p>
                <p>
                  Beauty is not a destination but a journey of discovery. Through years of studying light, texture, and the unique canvas that each face provides, I've learned that true artistry lies in revealing what was always there.
                </p>
                <p>
                  My approach is rooted in collaboration, where your vision meets my expertise to create something entirely new yet unmistakably you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section ref={servicesRef} className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6">Services</h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Each service is crafted to honor your individual story and style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-card/50">
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="heading-md mb-4">{service.title}</h3>
                <p className="body-md text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section ref={testimonialsRef} className="py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6">Voices</h2>
            <p className="body-md text-muted-foreground">
              Words from those who've experienced the transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card p-8 border-0 bg-background/80 backdrop-blur-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="body-md mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moodboard / Inspiration */}
      <section ref={moodboardRef} className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6">Inspiration</h2>
            <p className="body-md text-muted-foreground">
              Moments that spark creativity and fuel artistic vision.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {moodItems.map((item, index) => (
              <div key={index} className="mood-item group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.note}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-light tracking-wide">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="contact" className="py-32 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg mb-8">Let's create your look.</h2>
          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to begin your transformation? Let's discuss your vision and bring it to life.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-4 rounded-full">
            Book an Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}