// Enhanced banner component with unique design and highlighted content
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Gift, Sparkles, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  // const { t } = useTranslation();
  const location = useLocation();

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Check if the current path is not the home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    isVisible && (
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isAnimated
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        )}
      >
        {/* Gradient Background with animated border */}
        <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 p-[2px] overflow-hidden">
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse opacity-75" />

          {/* Main content container */}
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 px-2 md:px-6 py-2 md:py-4">
            {/* Floating sparkles animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Sparkles
                className="absolute top-2 left-10 h-4 w-4 text-yellow-300 animate-bounce"
                style={{ animationDelay: "0s" }}
              />
              <Sparkles
                className="absolute top-3 right-20 h-3 w-3 text-pink-300 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <Sparkles
                className="absolute bottom-2 left-1/3 h-3 w-3 text-cyan-300 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <div className="flex items-center justify-between gap-2">
              {/* Left content with icon */}
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75" />
                    <Gift className="relative h-4 w-2 md:h-8 md:w-8 text-yellow-300 animate-pulse" />
                  </div>
                </div>

                {/* Main message with highlighted content */}
                <div className="flex-1">
                  <div className="text-foreground text-sm md:text-base font-medium leading-relaxed">
                    <span className="text-yellow-300 font-bold animate-pulse">
                      🎉 Welcome to Namma Code Craft!
                    </span>
                    <span className="ml-2">
                      We are excited to have you here. We're offering
                    </span>
                    <span className="mx-2 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-foreground font-bold rounded-full text-xs md:text-sm shadow-lg animate-bounce inline-block">
                      <Crown className="inline h-3 w-3 mr-1" />
                      FREE DOMAIN
                    </span>
                    <span>service with</span>
                    <span className="mx-1 px-2 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-foreground font-bold rounded-full text-xs md:text-sm shadow-lg animate-pulse inline-block">
                      1 MONTH FREE MAINTENANCE
                    </span>
                  </div>

                  {/* Call to action */}
                  <div className="mt-2">
                    <span className="text-cyan-200 text-xs font-medium animate-pulse">
                      ✨ Limited time offer - Don't miss out!
                    </span>
                  </div>
                </div>
              </div>

              {/* Close button with enhanced styling */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 text-foreground hover:text-red-400 hover:bg-white/10 transition-all duration-300 rounded-full border border-white/20 hover:border-red-400/50 hover:scale-110"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Banner;
