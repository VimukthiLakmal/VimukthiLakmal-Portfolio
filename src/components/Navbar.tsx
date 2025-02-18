import React from "react";
import { Menu, Github, Linkedin, Mail,Facebook, Instagram,  MessageCircle } from "lucide-react";
export const Navbar = () => {
  return <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-blue-600 font-bold text-xl">Vimukthi Lakmal</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                Contact
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="http://github.com/VimukthiLakmal" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Github size={20} />
            </a>
            <a href="http://www.linkedin.com/in/vimukthi-lakmal" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vimukthilakmal127@gmail.com" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Mail size={20} />  
            </a>
            <a href="https://wa.me/94705323814" target="_blank" className="text-gray-600 hover:text-blue-600">
              < MessageCircle size={20} />
            </a>
            <a href="https://www.facebook.com/share/18aAFXCFEb/" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/vimukthi.lakmal?igsh=cG13YW1qMTFheW5x" target="_blank" className="text-gray-600 hover:text-blue-600">
              <Instagram size={20} />
            </a>
            
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>;
};