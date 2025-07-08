
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-tectonner-green rounded-2xl flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-tectonner-dark mb-4">Cadastro</h1>
            <p className="text-lg text-gray-600">
              Junte-se à TECTONNER e tenha acesso a todas as nossas soluções
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-tectonner-dark text-center">
                Crie sua conta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    name="nome"
                    placeholder="Digite seu nome completo"
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Celular *
                  </label>
                  <Input
                    name="celular"
                    placeholder="(11) 98765-4321"
                    value={formData.celular}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da Empresa
                  </label>
                  <Input
                    name="nomeEmpresa"
                    placeholder="Digite o nome da sua empresa (opcional)"
                    value={formData.nomeEmpresa}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CPF ou CNPJ *
                  </label>
                  <Input
                    name="cpfCnpj"
                    placeholder="Digite seu CPF ou CNPJ"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-tectonner-green hover:bg-green-700 text-lg font-semibold"
                >
                  Criar Conta
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                Ao criar sua conta, você concorda com nossos termos de uso
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
