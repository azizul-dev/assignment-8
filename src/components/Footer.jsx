// src/components/Footer.jsx
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="py-12 mt-auto"
      style={{
        background: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-400 to-green-600">
                <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
              </div>
              <h2 className="text-2xl font-extrabold text-white">SkillSphere</h2>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Modern online learning platform where you can upgrade your skills and learn from industry experts.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {[
                { label: "Facebook", href: "#", icon: "f" },
                { label: "Twitter", href: "#", icon: "𝕏" },
                { label: "LinkedIn", href: "#", icon: "in" },
                { label: "YouTube", href: "#", icon: "▶" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-emerald-800 hover:scale-110 transition"
                  style={{ background: "rgba(255,255,255,0.9)" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "All Courses", href: "/courses" },
                { label: "My Profile", href: "/profile" },
                { label: "Login", href: "/login" },
                { label: "Register", href: "/register" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-emerald-200 hover:text-white text-sm transition flex items-center gap-1"
                  >
                    <span className="text-emerald-400">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {["Development", "Design", "Marketing", "Data Science", "Security", "Finance"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/courses?category=${cat}`}
                    className="text-emerald-200 hover:text-white text-sm transition flex items-center gap-1"
                  >
                    <span className="text-emerald-400">›</span> {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-emerald-200">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">📧</span>
                <span>support@skillsphere.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">📍</span>
                <span>123 Learning St, San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-emerald-300 text-sm">
              © {new Date().getFullYear()} SkillSphere. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-emerald-300 hover:text-white text-sm transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;