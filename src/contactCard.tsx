import React from "react";
import ContactCard from '/ContactCard';
import App from './App';
import './index.css';
import ReactDOM from "react-dom/client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactCard = () => {
  return (
    <Card className="max-w-2xl mx-auto p-6 shadow-xl rounded-2xl bg-white">
      <CardContent className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact / Nos Coordonnées</h2>

        {/* Adresse */}
        <div className="flex items-start gap-3">
          <MapPin className="text-blue-600 mt-1" size={24} />
          <div>
            <p className="font-medium">Adresse</p>
            <p>
              Immeuble Diamniadio, 3ème étage<br />
              Rue de la Corniche, Dakar, Sénégal
            </p>
          </div>
        </div>

        {/* Téléphones */}
        <div className="flex items-start gap-3">
          <Phone className="text-blue-600 mt-1" size={24} />
          <div>
            <p className="font-medium">Téléphone</p>
            <p>+221 33 123 45 67</p>
            <p>+221 77 890 12 34 (WhatsApp)</p>
          </div>
        </div>

        {/* Emails */}
        <div className="flex items-start gap-3">
          <Mail className="text-blue-600 mt-1" size={24} />
          <div>
            <p className="font-medium">Email</p>
            <p>contact@immobilier-senegal.com</p>
            <p>support@immobilier-senegal.com</p>
          </div>
        </div>

        {/* Horaires */}
        <div className="flex items-start gap-3">
          <Clock className="text-blue-600 mt-1" size={24} />
          <div>
            <p className="font-medium">Horaires d'ouverture</p>
            <p>Lundi - Vendredi : 8h00 - 18h00</p>
            <p>Samedi : 9h00 - 13h00</p>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="pt-4 border-t border-gray-200">
          <p className="font-medium text-center mb-3">Suivez-nous sur</p>
          <div className="flex justify-center gap-6 text-blue-700">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook size={30} className="hover:text-blue-900 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter size={30} className="hover:text-sky-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram size={30} className="hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin size={30} className="hover:text-blue-800 transition-colors" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
