
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Monitor, Smartphone, Printer, Star } from "lucide-react";

const Venda = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos os Produtos" },
    { id: "notebooks", name: "Notebooks" },
    { id: "celulares", name: "Celulares" },
    { id: "impressoras", name: "Impressoras" },
    { id: "toners", name: "Toners" }
  ];

  const products = [
    {
      id: 1,
      name: "MacBook Air M2",
      category: "notebooks",
      price: "R$ 8.999,00",
      originalPrice: "R$ 10.999,00",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      description: "13 polegadas, 8GB RAM, 256GB SSD",
      rating: 4.8,
      badge: "Promoção"
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "celulares",
      price: "R$ 7.499,00",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      description: "128GB, Titânio Natural",
      rating: 4.9,
      badge: "Novo"
    },
    {
      id: 3,
      name: "HP LaserJet Pro",
      category: "impressoras",
      price: "R$ 899,00",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500",
      description: "Multifuncional, Wi-Fi, Duplex",
      rating: 4.6,
      badge: "Bestseller"
    },
    {
      id: 4,
      name: "Dell Inspiron 15",
      category: "notebooks",
      price: "R$ 2.799,00",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
      description: "Intel i5, 8GB RAM, 512GB SSD",
      rating: 4.4
    },
    {
      id: 5,
      name: "Samsung Galaxy S24",
      category: "celulares", 
      price: "R$ 3.999,00",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      description: "256GB, Phantom Black",
      rating: 4.7
    },
    {
      id: 6,
      name: "Toner HP 85A Original",
      category: "toners",
      price: "R$ 189,00",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      description: "Compatível com P1102, M1212",
      rating: 4.5
    }
  ];

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case "notebooks": return Monitor;
      case "celulares": return Smartphone;
      case "impressoras": return Printer;
      default: return ShoppingCart;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-tectonner-green/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Venda</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Produtos de qualidade com os melhores preços e garantia TECTONNER
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = getIcon(category.id);
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id 
                      ? "bg-tectonner-green hover:bg-green-700" 
                      : "hover:border-tectonner-green"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-tectonner-green">
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-tectonner-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.rating})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through block">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-2xl font-bold text-tectonner-green">
                          {product.price}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-tectonner-green hover:bg-green-700">
                      Comprar Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Venda;
