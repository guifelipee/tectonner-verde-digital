
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Monitor, Smartphone, Printer, CheckCircle, Calendar } from "lucide-react";

const Locacao = () => {
  const rentalOptions = [
    {
      id: 1,
      name: "Notebook Dell Inspiron",
      category: "notebooks",
      monthlyPrice: "R$ 199,00",
      weeklyPrice: "R$ 79,00",
      dailyPrice: "R$ 19,90",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      specs: ["Intel i5", "8GB RAM", "256GB SSD"],
      popular: true
    },
    {
      id: 2,
      name: "MacBook Air M2",
      category: "notebooks",
      monthlyPrice: "R$ 599,00",
      weeklyPrice: "R$ 179,00",
      dailyPrice: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      specs: ["Apple M2", "8GB RAM", "256GB SSD"],
      premium: true
    },
    {
      id: 3,
      name: "Impressora HP LaserJet",
      category: "impressoras",
      monthlyPrice: "R$ 89,00",
      weeklyPrice: "R$ 29,00",
      dailyPrice: "R$ 7,90",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
      specs: ["Wi-Fi", "Duplex", "30 ppm"]
    },
    {
      id: 4,
      name: "iPhone 15",
      category: "celulares",
      monthlyPrice: "R$ 399,00",
      weeklyPrice: "R$ 119,00",
      dailyPrice: "R$ 24,90",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      specs: ["128GB", "5G", "Face ID"]
    },
    {
      id: 5,
      name: "Notebook Lenovo ThinkPad",
      category: "notebooks",
      monthlyPrice: "R$ 299,00",
      weeklyPrice: "R$ 99,00",
      dailyPrice: "R$ 22,90",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      specs: ["Intel i7", "16GB RAM", "512GB SSD"]
    },
    {
      id: 6,
      name: "Multifuncional Canon",
      category: "impressoras",
      monthlyPrice: "R$ 129,00",
      weeklyPrice: "R$ 39,00",
      dailyPrice: "R$ 9,90",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
      specs: ["Scanner", "Copiadora", "Wi-Fi"]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Sem Compromisso",
      description: "Cancele a qualquer momento"
    },
    {
      icon: Monitor,
      title: "Equipamentos Novos",
      description: "Dispositivos sempre atualizados"
    },
    {
      icon: Calendar,
      title: "Flexibilidade",
      description: "Períodos de 1 dia a 24 meses"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <RefreshCw className="w-12 h-12 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold">Locação</h1>
          </div>
          <p className="text-xl md:text-2xl font-light">
            Alugue equipamentos com total flexibilidade
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tectonner-dark mb-4">
              Vantagens da Locação TECTONNER
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tectonner-dark mb-4">
              Equipamentos Disponíveis
            </h2>
            <p className="text-lg text-gray-600">
              Escolha o período ideal para suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalOptions.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                <CardContent className="p-0">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 space-y-2">
                    {item.popular && (
                      <Badge className="bg-tectonner-green">
                        Mais Popular
                      </Badge>
                    )}
                    {item.premium && (
                      <Badge className="bg-purple-500">
                        Premium
                      </Badge>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-tectonner-dark mb-3">
                      {item.name}
                    </h3>

                    {/* Specs */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {item.specs.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Diária:</span>
                        <span className="font-semibold text-tectonner-green">{item.dailyPrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Semanal:</span>
                        <span className="font-semibold text-tectonner-green">{item.weeklyPrice}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-sm font-medium">Mensal:</span>
                        <span className="text-lg font-bold text-tectonner-green">{item.monthlyPrice}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-purple-500 hover:bg-purple-600">
                      Solicitar Locação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tectonner-dark mb-4">
              Como Funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-tectonner-dark mb-2">Escolha</h3>
              <p className="text-gray-600">Selecione o equipamento e período desejado</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-tectonner-dark mb-2">Solicite</h3>
              <p className="text-gray-600">Entre em contato e formalize o aluguel</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-tectonner-dark mb-2">Receba</h3>
              <p className="text-gray-600">Entregamos e configuramos na sua casa ou empresa</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locacao;
