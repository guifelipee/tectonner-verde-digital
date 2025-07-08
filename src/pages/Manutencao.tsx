
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Wrench, Clock, Shield, Star } from "lucide-react";

const Manutencao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoEquipamento: "",
    marca: "",
    modelo: "",
    problema: "",
    urgencia: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.tipoEquipamento || !formData.problema) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para agendar o atendimento.",
    });

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      tipoEquipamento: "",
      marca: "",
      modelo: "",
      problema: "",
      urgencia: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const services = [
    {
      icon: Clock,
      title: "Diagnóstico Rápido",
      description: "Identificação do problema em até 24h"
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "90 dias de garantia em todos os serviços"
    },
    {
      icon: Star,
      title: "Técnicos Certificados",
      description: "Profissionais especializados e experientes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-tectonner-blue to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <Wrench className="w-12 h-12 mr-4" />
            <h1 className="text-5xl md:text-6xl font-bold">Manutenção</h1>
          </div>
          <p className="text-xl md:text-2xl font-light">
            Serviços especializados para seus equipamentos
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tectonner-dark mb-4">
              Por que escolher nossos serviços?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={service.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-tectonner-blue rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tectonner-dark mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-tectonner-dark text-center">
                Solicitar Manutenção
              </CardTitle>
              <p className="text-center text-gray-600">
                Descreva o problema e entraremos em contato
              </p>
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <Input
                      name="telefone"
                      placeholder="(11) 98765-4321"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Equipamento *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("tipoEquipamento", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="notebook">Notebook</SelectItem>
                        <SelectItem value="desktop">Desktop</SelectItem>
                        <SelectItem value="impressora">Impressora</SelectItem>
                        <SelectItem value="celular">Celular</SelectItem>
                        <SelectItem value="tablet">Tablet</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marca
                    </label>
                    <Input
                      name="marca"
                      placeholder="Ex: HP, Dell, Apple..."
                      value={formData.marca}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo
                    </label>
                    <Input
                      name="modelo"
                      placeholder="Ex: Inspiron 15, MacBook Air..."
                      value={formData.modelo}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgência
                  </label>
                  <Select onValueChange={(value) => handleSelectChange("urgencia", value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Selecione a urgência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">Baixa - Posso aguardar alguns dias</SelectItem>
                      <SelectItem value="media">Média - Alguns dias úteis</SelectItem>
                      <SelectItem value="alta">Alta - Preciso com urgência</SelectItem>
                      <SelectItem value="critica">Crítica - Emergencial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Problema *
                  </label>
                  <Textarea
                    name="problema"
                    placeholder="Descreva detalhadamente o problema que está enfrentando..."
                    value={formData.problema}
                    onChange={handleInputChange}
                    required
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-tectonner-blue hover:bg-blue-700 text-lg font-semibold"
                >
                  Solicitar Manutenção
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
