"use client";

import { Button } from '@/components/ui/button';
import { Play, Star, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-zen-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
     <div className="w-full h-full bg-gradient-to-br from-amethyst-light/10 to-lavender/10"></div>
     </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-amethyst-light/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-lavender/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-amethyst-medium/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-amethyst-light/80 backdrop-blur-sm rounded-full text-sm font-medium text-amethyst-deep mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
              #1 Rated Yoga Studio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your
              <span className="text-amethyst-dark"> Inner Peace</span>
              <br />
              Through Yoga
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your body, mind, and spirit with our expert-led yoga classes. 
              Join thousands who have discovered the path to wellness and mindfulness.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="bg-amethyst-dark hover:bg-amethyst-deep text-white px-8 py-4 text-lg rounded-full">
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-amethyst-medium text-amethyst-dark hover:bg-amethyst-light px-8 py-4 text-lg rounded-full group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amethyst-light rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-amethyst-dark" />
                </div>
                <div className="font-bold text-lg text-foreground">2K+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amethyst-light rounded-full mx-auto mb-2">
                  <Calendar className="w-6 h-6 text-amethyst-dark" />
                </div>
                <div className="font-bold text-lg text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Weekly Classes</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amethyst-light rounded-full mx-auto mb-2">
                  <Star className="w-6 h-6 text-amethyst-dark" />
                </div>
                <div className="font-bold text-lg text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative bg-amethyst-gradient rounded-3xl p-8 shadow-2xl">
              {/* Yoga pose silhouette placeholder */}
              <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-6xl text-white/80 animate-breathe">🧘‍♀️</div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-card shadow-lg rounded-xl p-3 border border-amethyst-light">
                <div className="text-sm font-medium text-amethyst-dark">Live Classes</div>
                <div className="text-xs text-muted-foreground">Available Now</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card shadow-lg rounded-xl p-3 border border-amethyst-light">
                <div className="text-sm font-medium text-amethyst-dark">Expert Trainers</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amethyst-medium rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amethyst-medium rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
