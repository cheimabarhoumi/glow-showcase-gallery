import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Add a subtle animation class to the body for theme transitions
    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
    setTimeout(() => {
      document.body.style.transition = "";
    }, 300);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden border-border/50 bg-background/50 backdrop-blur-sm hover:bg-accent hover:scale-110 transition-all duration-300"
    >
      <Sun className={`h-4 w-4 transition-all duration-500 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-500 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};