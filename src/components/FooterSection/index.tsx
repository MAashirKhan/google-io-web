import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/GDGKolachi/', icon: <FaFacebookF size={20} /> },
  { name: 'YouTube', href: 'https://youtube.com/@gdgkolachi?si=eqnDAFwuLnsyginp', icon: <FaYoutube size={20} /> },
  { name: 'Instagram', href: 'https://www.instagram.com/GDGKolachi', icon: <FaInstagram size={20} /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/gdgkolachi', icon: <FaLinkedin size={20} /> },
  { name: 'X', href: 'https://www.twitter.com/gdgkolachi', icon: <BsTwitterX size={20} /> },
]

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/assets/footer-logo.png" alt="Google I/O Extended" className="h-8 w-auto" />
            <span className="text-md font-medium">|</span>
            <img src="/assets/gdg-logo.svg" alt="GDG Kolachi" className="h-6 w-auto" />
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
            <span className="text-sm text-gray-400">| © 2025 GDG Kolachi. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
