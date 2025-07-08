
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Wrench, 
  RefreshCw, 
  Leaf, 
  Shield, 
  Users, 
  Phone, 
  Mail, 
  MessageCircle,
  Monitor,
  Smartphone,
  Printer
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    });

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      title: "Venda",
      description: "Impressoras, notebooks, celulares e toners",
      icon: ShoppingCart,
      path: "/venda",
      gradient: "from-tectonner-green to-green-600"
    },
    {
      title: "Manutenção", 
      description: "Serviços especializados para seus equipamentos",
      icon: Wrench,
      path: "/manutencao",
      gradient: "from-tectonner-blue to-blue-600"
    },
    {
      title: "Locação",
      description: "Aluguel de equipamentos com flexibilidade",
      icon: RefreshCw,
      path: "/locacao", 
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  const differentials = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Comprometidos com práticas eco-friendly"
    },
    {
      icon: Shield, 
      title: "Garantia",
      description: "Todos os serviços com garantia estendida"
    },
    {
      icon: Users,
      title: "Suporte Técnico",
      description: "Equipe especializada sempre disponível"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 hero-gradient text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="fade-in-on-scroll">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              TECTONNER
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Tecnologia que conecta, sustentabilidade que importa
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-tectonner-green hover:bg-gray-100 font-semibold"
            >
              <Link to="/cadastro">Comece Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções completas em tecnologia com foco em sustentabilidade e excelência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="fade-in-on-scroll block"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="service-card group h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-tectonner-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">Produtos e Equipamentos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Printer, name: "Impressoras", description: "Multifuncionais e laser" },
              { icon: Monitor, name: "Notebooks", description: "Para trabalho e estudos" },
              { icon: Smartphone, name: "Celulares", description: "Smartphones e acessórios" }
            ].map((product, index) => (
              <div key={product.name} className="fade-in-on-scroll text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 mx-auto mb-4 bg-tectonner-green rounded-2xl flex items-center justify-center">
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-tectonner-dark mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">Nossos Diferenciais</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentials.map((item, index) => (
              <div
                key={item.title}
                className="fade-in-on-scroll text-center p-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-tectonner-green rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">Estamos aqui para ajudar você</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="fade-in-on-scroll">
              <h3 className="text-2xl font-bold text-tectonner-dark mb-8">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tectonner-green rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-tectonner-dark">Telefone</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tectonner-green rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-tectonner-dark">Email</p>
                    <p className="text-gray-600">contato@tectonner.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tectonner-green rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-tectonner-dark">WhatsApp</p>
                    <p className="text-gray-600">(11) 98765-4321</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-on-scroll">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
