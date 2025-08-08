"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Zap, Shield } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Physical Wellness",
      description: "Improve flexibility, strength, and posture while reducing chronic pain and enhancing overall physical health."
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Develop focus, reduce stress, and achieve mental clarity through mindful movement and breathing techniques."
    },
    {
      icon: Zap,
      title: "Energy & Vitality",
      description: "Boost your energy levels and feel more vibrant throughout the day with regular yoga practice."
    },
    {
      icon: Shield,
      title: "Inner Peace",
      description: "Find balance and tranquility in your daily life through meditation and mindfulness practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amethyst-light/80 backdrop-blur-sm rounded-full text-sm font-medium text-amethyst-deep mb-4">
            About ZenFlow Yoga
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transform Your Life Through
            <span className="text-amethyst-dark"> Yoga</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At ZenFlow Yoga, we believe that yoga is more than just physical exercise. 
            It's a journey of self-discovery, healing, and transformation that touches every aspect of your life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're dedicated to creating a welcoming space where people of all backgrounds, 
              abilities, and experience levels can discover the transformative power of yoga. 
              Our expert instructors guide you through a journey that nurtures your body, 
              calms your mind, and awakens your spirit.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a complete beginner or an experienced practitioner, 
              our diverse range of classes and personalized approach ensures that 
              you'll find exactly what you need to support your wellness journey.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amethyst-medium rounded-full"></div>
                <span className="text-foreground">Certified and experienced instructors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amethyst-medium rounded-full"></div>
                <span className="text-foreground">Small class sizes for personalized attention</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amethyst-medium rounded-full"></div>
                <span className="text-foreground">Inclusive and welcoming community</span>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="bg-amethyst-gradient rounded-3xl p-8 shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white/90">
                  <div className="text-4xl mb-4">🧘‍♂️</div>
                  <p className="text-sm">Peaceful yoga studio environment</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender/30 rounded-full animate-float"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-amethyst-light hover:border-amethyst-medium transition-colors group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amethyst-light rounded-full mb-4 group-hover:bg-amethyst-medium transition-colors">
                  <benefit.icon className="w-8 h-8 text-amethyst-dark" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;