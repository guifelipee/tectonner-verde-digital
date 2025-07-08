
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Target, Eye, Heart, Users, Award } from "lucide-react";

const QuemSomos = () => {
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

  const values = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Comprometidos com práticas eco-friendly em todos os nossos processos"
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Construímos relacionamentos duradouros baseados na confiança"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre a excelência em nossos produtos e serviços"
    },
    {
      icon: Heart,
      title: "Responsabilidade",
      description: "Responsabilidade social e ambiental em todas as nossas ações"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-tectonner-green/80" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Quem Somos</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Conheça nossa história, valores e compromisso com a sustentabilidade
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in-on-scroll text-center mb-16">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-6">Nossa História</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A TECTONNER nasceu da necessidade de unir tecnologia e sustentabilidade. 
              Fundada por especialistas em TI com paixão pelo meio ambiente, nossa empresa 
              se dedica a oferecer soluções tecnológicas que não apenas atendem às necessidades 
              dos nossos clientes, mas também contribuem para um futuro mais sustentável.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="fade-in-on-scroll">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-tectonner-green mr-3" />
                    <h3 className="text-2xl font-bold text-tectonner-dark">Nossa Missão</h3>
                  </div>
                  <p className="text-gray-600">
                    Fornecer soluções tecnológicas inovadoras e sustentáveis, 
                    contribuindo para o crescimento dos nossos clientes enquanto 
                    preservamos o meio ambiente para as futuras gerações.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="fade-in-on-scroll">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-tectonner-green mr-3" />
                    <h3 className="text-2xl font-bold text-tectonner-dark">Nossa Visão</h3>
                  </div>
                  <p className="text-gray-600">
                    Ser referência nacional em soluções tecnológicas sustentáveis, 
                    reconhecida pela qualidade dos nossos serviços e pelo nosso 
                    compromisso com a responsabilidade ambiental.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">Nossos Valores</h2>
            <p className="text-lg text-gray-600">Os princípios que guiam nossas ações</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="fade-in-on-scroll text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-tectonner-green rounded-2xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in-on-scroll">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-8">
              Nosso Compromisso com a Sustentabilidade
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Acreditamos que a tecnologia pode e deve ser uma força positiva para o meio ambiente. 
              Por isso, todos os nossos processos são pensados para minimizar o impacto ecológico, 
              desde a escolha de fornecedores até o descarte responsável de equipamentos.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <h4 className="font-bold text-tectonner-dark mb-3">Reciclagem</h4>
                <p className="text-gray-600">Programa de reciclagem de equipamentos eletrônicos</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-tectonner-dark mb-3">Eficiência</h4>
                <p className="text-gray-600">Equipamentos com alta eficiência energética</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-tectonner-dark mb-3">Responsabilidade</h4>
                <p className="text-gray-600">Parceiros certificados em práticas sustentáveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
