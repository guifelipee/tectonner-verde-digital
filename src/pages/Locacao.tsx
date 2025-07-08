
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, CheckCircle, Clock, HeartHandshake } from "lucide-react";

const Locacao = () => {
  const plans = [
    {
      id: 1,
      name: "Plano Básico",
      equipment: "Impressora Multifuncional",
      monthlyPrice: "R$ 149,00",
      description: "HP DeskJet 3776 - Impressão, cópia e scanner",
      features: [
        "Impressão colorida",
        "Wi-Fi integrado",
        "Manutenção inclusa",
        "Suporte técnico 24/7"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Plano Profissional",
      equipment: "Notebook + Impressora",
      monthlyPrice: "R$ 399,00",
      description: "Dell Inspiron 15 + HP LaserJet Pro",
      features: [
        "Notebook Intel i5, 8GB RAM",
        "Impressora laser monocromática",
        "Manutenção inclusa",
        "Suporte técnico prioritário",
        "Substituição em 24h"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Plano Empresarial",
      equipment: "Pacote Completo",
      monthlyPrice: "R$ 899,00",
      description: "3 Notebooks + 2 Impressoras + Suporte",
      features: [
        "3 Notebooks profissionais",
        "2 Impressoras multifuncionais",
        "Setup e instalação",
        "Manutenção preventiva",
        "Suporte técnico dedicado",
        "Substituição imediata"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Sem Investimento Inicial",
      description: "Comece a usar sem grandes desembolsos"
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Contratos adaptáveis às suas necessidades"
    },
    {
      icon: HeartHandshake,
      title: "Suporte Completo",
      description: "Manutenção e suporte técnico inclusos"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-tectonner-green/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Locação</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Equipamentos de TI profissionais com flexibilidade e suporte completo
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">
              Por que escolher a locação?
            </h2>
            <p className="text-lg text-gray-600">
              Vantagens que fazem a diferença para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center fade-in-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-tectonner-green rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">
              Planos de Locação
            </h2>
            <p className="text-lg text-gray-600">
              Escolha o plano ideal para sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-tectonner-green' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tectonner-green px-6 py-1">
                    Mais Popular
                  </Badge>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-tectonner-dark mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.equipment}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-tectonner-green">{plan.monthlyPrice}</span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-tectonner-green mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full h-12 font-semibold ${
                      plan.popular 
                        ? 'bg-tectonner-green hover:bg-green-700' 
                        : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    Solicitar Proposta
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Precisa de um plano personalizado?
            </p>
            <Button variant="outline" className="border-tectonner-green text-tectonner-green hover:bg-tectonner-green hover:text-white">
              Fale com Nossos Especialistas
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locacao;
