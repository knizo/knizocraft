"use client";

import Link from 'next/link';
import { Lotus, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Classes", href: "#classes" },
      { name: "Contact", href: "#contact" }
    ],
    "Classes": [
      { name: "Beginner Hatha", href: "#classes" },
      { name: "Vinyasa Flow", href: "#classes" },
      { name: "Power Yoga", href: "#classes" },
      { name: "Meditation", href: "#classes" }
    ],
    "Support": [
      { name: "FAQ", href: "#faq" },
      { name: "Pricing", href: "#classes" },
      { name: "Schedule", href: "#schedule" },
      { name: "Workshops", href: "#workshops" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-card border-t border-amethyst-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-amethyst-gradient rounded-full">
                  <Lotus className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-semibold text-amethyst-deep">ZenFlow Yoga</span>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your body, mind, and spirit through the ancient practice of yoga. 
                Join our community and discover inner peace and wellness.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-amethyst-light hover:bg-amethyst-medium rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-amethyst-dark group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-lg font-semibold text-foreground mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-amethyst-dark transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-amethyst-light">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 ZenFlow Yoga Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-muted-foreground hover:text-amethyst-dark transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-muted-foreground hover:text-amethyst-dark transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-muted-foreground hover:text-amethyst-dark transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;