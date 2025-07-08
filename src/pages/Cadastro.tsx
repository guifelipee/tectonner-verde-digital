
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Shield, Clock, Award } from "lucide-react";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    nomeEmpresa: "",
    cpfCnpj: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nome || !formData.email || !formData.celular || !formData.cpfCnpj) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Bem-vindo à TECTONNER. Em breve entraremos em contato.",
    });

    // Reset form
    setFormData({
      nome: "",
      email: "",
      celular: "",
      nomeEmpresa: "",
      cpfCnpj: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: Shield,
      title: "Dados Protegidos",
      description: "Seus dados são criptografados e protegidos"
    },
    {
      icon: Clock,
      title: "Acesso Imediato",
      description: "Comece a usar nossos serviços instantaneamente"
    },
    {
      icon: Award,
      title: "Suporte Premium",
      description: "Atendimento prioritário e personalizado"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-tectonner-gray-light">
      <Header />

      {/* Premium Hero Banner */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tectonner-green/90 via-tectonner-green/80 to-tectonner-blue/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl space-y-8 fade-in-up">
            <div className="w-20 h-20 mx-auto mb-8 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm glass pulse-glow">
              <UserPlus className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow">
              Cadastro
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed max-w-3xl mx-auto">
              Junte-se à TECTONNER e tenha acesso a todas as nossas soluções tecnológicas sustentáveis. 
              <span className="block mt-2 text-tectonner-accent font-medium">
                Mais de 10.000 empresas confiam em nós.
              </span>
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm animate-float hidden md:block"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tectonner-green/5 to-tectonner-blue/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4 text-gradient">
              Por que se cadastrar?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra os benefícios exclusivos de fazer parte da família TECTONNER
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center premium-card fade-in-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-tectonner-green to-tectonner-green-light rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-tectonner-gray-light to-white">
        <div className="container mx-auto max-w-2xl">
          <Card className="premium-card border-0 shadow-premium backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-tectonner-dark mb-4">
                Crie sua conta
              </CardTitle>
              <p className="text-gray-600">
                Preencha os dados abaixo para começar sua jornada com a TECTONNER
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="fade-in-up">
                    <label className="block text-sm font-semibold text-tectonner-dark mb-3">
                      Nome Completo *
                    </label>
                    <Input
                      name="nome"
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-gray-200 focus:border-tectonner-green rounded-xl focus-premium transition-all duration-300"
                    />
                  </div>
                  
                  <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
                    <label className="block text-sm font-semibold text-tectonner-dark mb-3">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Digite seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-gray-200 focus:border-tectonner-green rounded-xl focus-premium transition-all duration-300"
                    />
                  </div>
                  
                  <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
                    <label className="block text-sm font-semibold text-tectonner-dark mb-3">
                      Celular *
                    </label>
                    <Input
                      name="celular"
                      placeholder="(11) 98765-4321"
                      value={formData.celular}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-gray-200 focus:border-tectonner-green rounded-xl focus-premium transition-all duration-300"
                    />
                  </div>
                  
                  <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
                    <label className="block text-sm font-semibold text-tectonner-dark mb-3">
                      Nome da Empresa
                    </label>
                    <Input
                      name="nomeEmpresa"
                      placeholder="Digite o nome da sua empresa (opcional)"
                      value={formData.nomeEmpresa}
                      onChange={handleChange}
                      className="h-14 text-lg border-2 border-gray-200 focus:border-tectonner-green rounded-xl focus-premium transition-all duration-300"
                    />
                  </div>
                  
                  <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
                    <label className="block text-sm font-semibold text-tectonner-dark mb-3">
                      CPF ou CNPJ *
                    </label>
                    <Input
                      name="cpfCnpj"
                      placeholder="Digite seu CPF ou CNPJ"
                      value={formData.cpfCnpj}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg border-2 border-gray-200 focus:border-tectonner-green rounded-xl focus-premium transition-all duration-300"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-16 button-premium text-xl font-bold rounded-2xl shadow-glow hover:shadow-glow-lg fade-in-up"
                  style={{animationDelay: '0.5s'}}
                >
                  <UserPlus className="w-6 h-6 mr-3" />
                  Criar Conta
                </Button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-600 fade-in-up" style={{animationDelay: '0.6s'}}>
                <p className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-tectonner-green" />
                  Seus dados estão protegidos e seguros conosco
                </p>
                <p className="mt-2">
                  Ao criar sua conta, você concorda com nossos 
                  <span className="text-tectonner-green font-medium cursor-pointer hover:underline ml-1">
                    termos de uso
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cadastro;
