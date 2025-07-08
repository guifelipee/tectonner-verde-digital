
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Wrench, CheckCircle, Clock, Users } from "lucide-react";

const Manutencao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    equipamento: "",
    marca: "",
    modelo: "",
    problema: "",
    urgencia: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.equipamento || !formData.problema) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Nossa equipe técnica entrará em contato em breve.",
    });

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      equipamento: "",
      marca: "",
      modelo: "",
      problema: "",
      urgencia: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const features = [
    {
      icon: CheckCircle,
      title: "Diagnóstico Gratuito",
      description: "Análise completa sem custos para identificar o problema"
    },
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Resposta em até 24h para solicitações de manutenção"
    },
    {
      icon: Users,
      title: "Técnicos Certificados",
      description: "Equipe especializada e certificada pelos fabricantes"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-tectonner-blue/70" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Manutenção</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Suporte técnico especializado para seus equipamentos de TI
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center fade-in-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-tectonner-green rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tectonner-dark mb-4">
              Solicite um Orçamento
            </h2>
            <p className="text-lg text-gray-600">
              Descreva o problema do seu equipamento e nossa equipe entrará em contato
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-tectonner-dark text-center">
                Formulário de Manutenção
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="nome"
                      placeholder="Digite seu nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Digite seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input
                    name="telefone"
                    placeholder="(11) 98765-4321"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Equipamento *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("equipamento", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="notebook">Notebook</SelectItem>
                        <SelectItem value="impressora">Impressora</SelectItem>
                        <SelectItem value="celular">Celular</SelectItem>
                        <SelectItem value="toner">Toner</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marca
                    </label>
                    <Input
                      name="marca"
                      placeholder="Ex: HP, Dell, Canon"
                      value={formData.marca}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo
                    </label>
                    <Input
                      name="modelo"
                      placeholder="Ex: LaserJet Pro"
                      value={formData.modelo}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Problema *
                  </label>
                  <Textarea
                    name="problema"
                    placeholder="Descreva detalhadamente o problema apresentado pelo equipamento..."
                    value={formData.problema}
                    onChange={handleChange}
                    required
                    className="min-h-32"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Urgência
                  </label>
                  <Select onValueChange={(value) => handleSelectChange("urgencia", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione a urgência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">Baixa - Até 7 dias</SelectItem>
                      <SelectItem value="media">Média - Até 3 dias</SelectItem>
                      <SelectItem value="alta">Alta - Até 24h</SelectItem>
                      <SelectItem value="critica">Crítica - Imediato</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-tectonner-green hover:bg-green-700 text-lg font-semibold"
                >
                  Solicitar Orçamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manutencao;
