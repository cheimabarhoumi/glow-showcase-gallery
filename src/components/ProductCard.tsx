import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onBuyNow: () => void;
}

export const ProductCard = ({ image, name, description, price, onBuyNow }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-card-hover animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </CardTitle>
        <div className="text-2xl font-bold text-primary">
          {price}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </CardDescription>
        
        <Button 
          onClick={onBuyNow}
          className="w-full bg-gradient-primary border-0 text-primary-foreground hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
          size="lg"
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};