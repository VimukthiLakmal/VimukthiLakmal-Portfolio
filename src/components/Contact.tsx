import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="py-20 px-4 relative bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-space-grotesk text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          &lt;Contact /&gt;
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
  onClick={() => window.location.href = "mailto:vimukthilakmal127@gmail.com"}
  className="flex items-start gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
>
  <div className="bg-gray-900/50 p-4 rounded-lg">
    <Mail className="text-blue-400" size={24} />
  </div>
  <div>
    <h3 className="font-space-grotesk text-xl font-bold mb-2 text-white">
      Email
    </h3>
    <p className="font-jetbrains text-gray-400">
      vimukthilakmal127@gmail.com
    </p>
  </div>
</div>

<div
  onClick={() => window.location.href = "tel:+94705323814"}
  className="flex items-start gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
>
  <div className="bg-gray-900/50 p-4 rounded-lg">
    <Phone className="text-purple-400" size={24} />
  </div>
  <div>
    <h3 className="font-space-grotesk text-xl font-bold mb-2 text-white">
      Phone
    </h3>
    <p className="font-jetbrains text-gray-400">+94 (70) 532-3814</p>
  </div>
</div>

<div
  onClick={() => window.open("https://maps.app.goo.gl/ZPdNvxYes2cKZTw26", "_blank")}
  className="flex items-start gap-4 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
>
  <div className="bg-gray-900/50 p-4 rounded-lg">
    <MapPin className="text-emerald-400" size={24} />
  </div>
  <div>
    <h3 className="font-space-grotesk text-xl font-bold mb-2 text-white">
      Location
    </h3>
    <p className="font-jetbrains text-gray-400">No.127, Hulandawa Left, Monaragala</p>
  </div>
</div>

        </div>
      </div>
    </section>;
};