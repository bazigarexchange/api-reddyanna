import {
  FaWhatsapp,
  FaDownload,
  FaTimes,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";


export default function Home() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=919286300847&text=Hey+I+want+to+start&type=phone_number&app_absent=0";

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <main className="min-h-screen bg-white text-center flex flex-col justify-between items-center p-4 cursor-pointer">
        {/* Header */}
        <header className="flex justify-between items-center w-full max-w-2xl py-4">
          <div className="flex items-center gap-2 text-green-600 text-xl font-bold">
            <FaWhatsapp className="text-2xl" />
            WhatsApp
          </div>
          <div className="bg-green-500 text-white rounded-full p-2">
            <FaDownload />
          </div>
        </header>

        {/* Center */}
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <p className="text-gray-700 mb-4">
              Chat on WhatsApp with +91 92863 00847
            </p>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full text-lg mb-6">
              Continue to Chat
            </button>
            <p className="text-gray-500 text-sm">
              Don’t have WhatsApp yet?{" "}
              <span className="text-blue-500 underline">Download</span>
            </p>
          </div>

        {/* Footer */}
        <footer className="w-full bg-[#111b21] text-white py-8 mt-12">
          <div className="flex justify-center mb-4">
            <button className="bg-green-400 text-black px-6 py-2 rounded-full font-medium flex items-center gap-2">
              <FaDownload />
              Download
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <span className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <FaTimes />
            </span>
            <span className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <FaYoutube />
            </span>
            <span className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <FaInstagram />
            </span>
            <span className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              <FaFacebookF />
            </span>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-8 px-4 text-gray-300 text-left max-w-4xl mx-auto">
            <div>
              <p className="font-semibold mb-2">What we do</p>
              <p>Features</p>
              <p>Blog</p>
              <p>Security</p>
              <p>For Business</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Use WhatsApp</p>
              <p>Android</p>
              <p>iPhone</p>
              <p>Mac/PC</p>
              <p>WhatsApp Web</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Who we are</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Brand Center</p>
              <p>Privacy</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Need help?</p>
              <p>Contact Us</p>
              <p>Help Center</p>
              <p>Apps</p>
              <p>Security Advisories</p>
            </div>
          </div>

          <div className="text-xs text-center text-gray-400 mt-8">
            © 2025 WhatsApp LLC — Terms & Privacy Policy
          </div>
        </footer>
      </main>
    </a>
  );
}
