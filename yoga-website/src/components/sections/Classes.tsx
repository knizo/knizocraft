"use client";

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users, TrendingUp } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      name: "Beginner Hatha",
      description: "Perfect for those new to yoga. Focus on basic poses and breathing techniques.",
      duration: "60 min",
      intensity: "Gentle",
      price: "$20",
      features: [
        "Basic yoga poses",
        "Breathing techniques",
        "Meditation introduction",
        "Props provided"
      ],
      popular: false
    },
    {
      name: "Vinyasa Flow",
      description: "Dynamic sequences that link breath with movement for strength and flexibility.",
      duration: "75 min",
      intensity: "Moderate",
      price: "$25",
      features: [
        "Dynamic sequences",
        "Strength building",
        "Flexibility focus",
        "Music-driven flow"
      ],
      popular: true
    },
    {
      name: "Power Yoga",
      description: "Intense, athletic style of yoga that builds strength and stamina.",
      duration: "90 min",
      intensity: "Advanced",
      price: "$30",
      features: [
        "High-intensity workout",
        "Strength training",
        "Stamina building",
        "Advanced poses"
      ],
      popular: false
    }
  ];

  const memberships = [
    {
      name: "Drop-in",
      price: "$25",
      period: "per class",
      description: "Perfect for trying out our studio",
      features: [
        "Single class access",
        "All class types",
        "Mat rental included",
        "No commitment"
      ],
      cta: "Book Class",
      popular: false
    },
    {
      name: "Monthly Unlimited",
      price: "$89",
      period: "per month",
      description: "Best value for regular practitioners",
      features: [
        "Unlimited classes",
        "All class types",
        "Free mat storage",
        "Guest passes (2/month)",
        "Workshop discounts"
      ],
      cta: "Start Membership",
      popular: true
    },
    {
      name: "10-Class Package",
      price: "$200",
      period: "3 months validity",
      description: "Flexible option for busy schedules",
      features: [
        "10 classes included",
        "All class types",
        "Transferable to friends",
        "No expiration stress"
      ],
      cta: "Buy Package",
      popular: false
    }
  ];

  return (
    <section id="classes" className="py-20 bg-amethyst-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amethyst-light/80 backdrop-blur-sm rounded-full text-sm font-medium text-amethyst-deep mb-4">
            Our Classes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find Your Perfect
            <span className="text-amethyst-dark"> Practice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From gentle beginner sessions to challenging power yoga, 
            we offer classes for every level and every goal.
          </p>
        </div>

        {/* Class Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {classes.map((yogaClass, index) => (
            <Card key={index} className="relative border-amethyst-light hover:border-amethyst-medium transition-all hover:shadow-lg group">
              {yogaClass.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amethyst-dark text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{yogaClass.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{yogaClass.description}</p>
                <div className="flex justify-center items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-amethyst-medium" />
                    <span>{yogaClass.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-amethyst-medium" />
                    <span>{yogaClass.intensity}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-amethyst-dark">{yogaClass.price}</div>
                  <div className="text-sm text-muted-foreground">per class</div>
                </div>
                
                <ul className="space-y-3">
                  {yogaClass.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-amethyst-medium" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    yogaClass.popular 
                      ? 'bg-amethyst-dark hover:bg-amethyst-deep text-white' 
                      : 'border-amethyst-medium text-amethyst-dark hover:bg-amethyst-light'
                  }`}
                  variant={yogaClass.popular ? 'default' : 'outline'}
                >
                  Book This Class
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Membership Options */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Membership Options
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle and commitment level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <Card key={index} className={`relative transition-all hover:shadow-lg ${
              membership.popular 
                ? 'border-amethyst-dark shadow-lg scale-105' 
                : 'border-amethyst-light hover:border-amethyst-medium'
            }`}>
              {membership.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amethyst-dark text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">{membership.name}</h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-amethyst-dark">{membership.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{membership.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{membership.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {membership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-amethyst-medium" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${
                    membership.popular 
                      ? 'bg-amethyst-dark hover:bg-amethyst-deep text-white' 
                      : 'border-amethyst-medium text-amethyst-dark hover:bg-amethyst-light'
                  }`}
                  variant={membership.popular ? 'default' : 'outline'}
                >
                  {membership.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;