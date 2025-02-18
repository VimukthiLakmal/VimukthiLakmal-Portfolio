import React from "react";
import { Code, Database, Layout, Globe, Server, Shield } from "lucide-react";
export const About = () => {
  const skills = [{
    icon: Code,
    title: "Frontend",
    desc: "React, Laravel, Flutter, HTML, CSS"
  }, {
    icon: Database,
    title: "Backend",
    desc: "Node.js, Python, Dart"
  }, {
    icon: Layout,
    title: "UI/UX",
    desc: "Figma"
  }, {
    icon: Shield,
    title: "Security",
    desc: "ESET, Sophos, Cisco Meraki, Fortigate Firewall"
  }];
  return <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
              <img src="/image.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-poppins text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="font-inter text-gray-300 text-lg mb-8 leading-relaxed">
            I am an experienced IT professional with a strong passion for programming and expertise in software development, cybersecurity, and network security. Fluent in languages like C, Java, JavaScript, and skilled in Node.js, React.js, and modern web technologies. I also specialize in AI, Python, automation with PowerApps, and tools like Cisco Meraki, FortiGate firewall, and ESET portal. Eager to contribute my skills and grow with emerging industry trends.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                <span className="text-blue-400 font-bold text-3xl font-poppins">
                  1+
                </span>
                <p className="text-gray-400 font-inter mt-2">
                  Years Experience
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                <span className="text-purple-400 font-bold text-3xl font-poppins">
                  10+
                </span>
                <p className="text-gray-400 font-inter mt-2">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <h3 className="font-poppins text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => <div key={index} className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
                  <div className="relative bg-gray-800 p-4 rounded-lg inline-block">
                    <skill.icon className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 mt-6 font-poppins text-white">
                  {skill.title}
                </h4>
                <p className="text-gray-400 font-inter">{skill.desc}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};