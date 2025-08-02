// create a banner component that displays a message and a button to close the banner with that contain the
// meessage "Welcome to Namma Code Craft! We are excited to have you here. that we offering the free domain service with one month free maintance service.
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();
  const location = useLocation();

  // Check if the current path is not the home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 flex justify-between items-center z-50">
        <span>
          {t(
            "Welcome to Namma Code Craft! We are excited to have you here. We are offering the free domain service with one month free maintenance service."
          )}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-black"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    )
  );
};
export default Banner;
