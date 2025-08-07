"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Zen Avenue, Peaceful District\nSan Francisco, CA 94102"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-YOGA\n+1 (555) 123-9642"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@zenflowstudio.com\ninfo@zenflowstudio.com"
    },
    {
      icon: Clock,
      title: "Studio Hours",
      content: "Mon-Fri: 6:00 AM - 10:00 PM\nSat-Sun: 7:00 AM - 8:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amethyst-light/80 backdrop-blur-sm rounded-full text-sm font-medium text-amethyst-deep mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your
            <span className="text-amethyst-dark"> Journey Today</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your yoga journey? Get in touch with us to book your first class 
            or learn more about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="border-amethyst-light">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground mb-2">Send us a message</h3>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Fill out the form below and we'll get back to you soon.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      className="border-amethyst-light focus:border-amethyst-medium focus:ring-amethyst-medium"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      placeholder="Doe"
                      className="border-amethyst-light focus:border-amethyst-medium focus:ring-amethyst-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-amethyst-light focus:border-amethyst-medium focus:ring-amethyst-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-amethyst-light focus:border-amethyst-medium focus:ring-amethyst-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="I'm interested in..."
                    className="border-amethyst-light focus:border-amethyst-medium focus:ring-amethyst-medium"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your yoga experience and what you're looking for..."
                    rows={4}
                    className="border-amethyst-light focus:border-amethyst-medium focus:ring-amethyst-medium"
                  />
                </div>
                
                <Button className="w-full bg-amethyst-dark hover:bg-amethyst-deep text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-amethyst-light hover:border-amethyst-medium transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-amethyst-light rounded-full">
                        <info.icon className="w-6 h-6 text-amethyst-dark" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-amethyst-light">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-amethyst-gradient rounded-lg flex items-center justify-center">
                  <div className="text-center text-white/90">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Studio Location</p>
                    <p className="text-sm opacity-80">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20">
          <Card className="bg-amethyst-gradient border-0 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Life?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Join our welcoming community and discover the life-changing benefits of yoga. 
                Your journey to wellness starts with a single step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="bg-white text-amethyst-dark border-white hover:bg-white/90">
                  Schedule a Tour
                </Button>
                <Button size="lg" className="bg-amethyst-deep hover:bg-amethyst-deep/90 text-white">
                  Book Your First Class
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;