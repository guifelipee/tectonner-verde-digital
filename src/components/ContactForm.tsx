
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-tectonner-dark">Envie sua mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="nome"
              placeholder="Seu nome *"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Seu email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Input
              name="telefone"
              placeholder="Seu telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <Textarea
              name="mensagem"
              placeholder="Sua mensagem *"
              value={formData.mensagem}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-tectonner-green hover:bg-green-700"
          >
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
