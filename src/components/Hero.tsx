import React, { useEffect, useRef } from "react";
import { ArrowRight, Hash, Terminal, BracesIcon, Binary, Webhook, Network } from "lucide-react";
import Typewriter from "typewriter-effect";
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <BracesIcon className="absolute top-20 right-[20%] w-16 h-16 text-blue-400/40 transform rotate-12" style={{
        filter: "drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))"
      }} />
        <Terminal className="absolute top-40 left-[15%] w-20 h-20 text-purple-400/40 transform -rotate-12" style={{
        filter: "drop-shadow(0 0 15px rgba(167, 139, 250, 0.4))"
      }} />
        <Hash className="absolute bottom-[20%] right-[25%] w-16 h-16 text-emerald-400/40 transform rotate-45" style={{
        filter: "drop-shadow(0 0 15px rgba(52, 211, 153, 0.4))"
      }} />
        <Network className="absolute bottom-[30%] left-[20%] w-24 h-24 text-cyan-400/40 transform -rotate-12" style={{
        filter: "drop-shadow(0 0 15px rgba(34, 211, 238, 0.4))"
      }} />
        <Binary className="absolute top-[35%] right-[35%] w-20 h-20 text-pink-400/40 transform rotate-45" style={{
        filter: "drop-shadow(0 0 15px rgba(236, 72, 153, 0.4))"
      }} />
        <Webhook className="absolute bottom-[40%] left-[40%] w-16 h-16 text-yellow-400/40 transform -rotate-45" style={{
        filter: "drop-shadow(0 0 15px rgba(250, 204, 21, 0.4))"
      }} />
      </div>
      <div className="text-center z-10 max-w-4xl">
        <div className="mb-6 inline-block">
          <span className="font-jetbrains text-emerald-400 bg-emerald-900/30 px-4 py-2 rounded-full border border-emerald-500/20">
            &lt;Available for hire /&gt;
          </span>
        </div>
        <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Vimukthi Lakmal
          <span className="block h-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
            <Typewriter options={{
            strings: ["Software Engineer", "Web Developer", "Network Analyst"],
            autoStart: true,
            loop: true,
            wrapperClassName: "font-ibm-plex-mono",
            cursorClassName: "text-purple-400"
          }} />
          </span>
        </h1>
        <p className="font-jetbrains text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
          $ echo "Building elegant solutions to complex problems"
        </p>
        <div className="flex items-center justify-center gap-6">
          <button 
          onClick={() => window.location.href = "#projects"}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/25 flex items-center group font-jetbrains">
            ./view-work.sh
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={() => {
            const link = document.createElement("a");
            link.href = "cv.pdf";  // Path to the PDF file in the public folder
            link.download = "Vimukthi Lakmal CV.pdf";  // Suggested filename for the download
            link.click();  // Trigger the download
            }}
            className="bg-gray-800 text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-700 flex items-center hover:bg-gray-700 font-jetbrains"
            >
            download_cv.exe
            </button>

        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "Laravel", "Python", "PowerApps", "Power Automate", "SharePoint", "Cisco Meraki", "Fortigate", "ESET Portal", "Flux With LoRa", "YOLO Model"].map(tech => <span key={tech} className="font-jetbrains px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-blue-500/50 transition-colors">
              {`<${tech} />`}
            </span>)}
        </div>
      </div>
    </section>;
};