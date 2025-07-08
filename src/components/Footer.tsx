
import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tectonner-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-tectonner-green rounded-xl">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TECTONNER</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tecnologia que conecta, sustentabilidade que importa. 
              Oferecemos soluções completas em TI com foco no meio ambiente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-tectonner-green transition-colors">
                Início
              </Link>
              <Link to="/quem-somos" className="block text-gray-300 hover:text-tectonner-green transition-colors">
                Quem Somos
              </Link>
              <Link to="/venda" className="block text-gray-300 hover:text-tectonner-green transition-colors">
                Venda
              </Link>
              <Link to="/manutencao" className="block text-gray-300 hover:text-tectonner-green transition-colors">
                Manutenção
              </Link>
              <Link to="/locacao" className="block text-gray-300 hover:text-tectonner-green transition-colors">
                Locação
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-tectonner-green" />
                <span className="text-gray-300">(11) 98765-4321</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-tectonner-green" />
                <span className="text-gray-300">contato@tectonner.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-tectonner-green" />
                <span className="text-gray-300">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TECTONNER. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
