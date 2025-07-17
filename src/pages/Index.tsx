import { ProductCard } from "@/components/ProductCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

// Import product images
import laptopImage from "@/assets/laptop-product.jpg";
import headphonesImage from "@/assets/headphones-product.jpg";
import smartphoneImage from "@/assets/smartphone-product.jpg";

const Index = () => {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      image: laptopImage,
      name: "UltraBook Pro",
      description: "Experience unparalleled performance with our latest laptop featuring cutting-edge technology and sleek design.",
      price: "$1,299"
    },
    {
      id: 2,
      image: headphonesImage,
      name: "AirWave Headphones",
      description: "Immerse yourself in crystal-clear audio with active noise cancellation and premium comfort.",
      price: "$299"
    },
    {
      id: 3,
      image: smartphoneImage,
      name: "SmartPhone X",
      description: "Stay connected with the most advanced smartphone featuring AI-powered camera and lightning-fast performance.",
      price: "$899"
    }
  ];

  const handleBuyNow = (productName: string) => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-2xl opacity-20" />
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            TechStore
          </h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className={`relative z-10 container mx-auto px-6 py-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Hero section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
            Premium Tech Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of cutting-edge technology products designed to elevate your digital lifestyle.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                onBuyNow={() => handleBuyNow(product.name)}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground">
            Experience the future of technology today
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
