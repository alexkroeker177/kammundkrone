import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2">
              <p>Montag – Freitag: 9:00 – 18:00 Uhr</p>
              <p>Samstag: 10:00 – 16:00 Uhr</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                Musterstraße 123, 12345 Musterstadt
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +49 123 456789
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                info@kammundkrone.de
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C5A572] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#C5A572] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kamm & Krone. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/impressum" className="text-sm text-gray-400 hover:text-white">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-gray-400 hover:text-white">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;