import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CobalOS from "./pages/CobalOS"
import Contacto from "./pages/Contacto";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import ProductDetail from "./pages/ProductDetail";
import ScamAlert from "./pages/ScamAlert";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<CobalOS />} />
              <Route path="/detalles-de-producto" element={<ProductDetail  />} />
              <Route path="/quienes-somos" element={<AboutUs />} />
              <Route path="/contactos" element={<Contacto />} />
              <Route path="/Terminos-y-condiciones" element={<TermsAndConditions />} />
              <Route path="/seguridad-de-clientes" element={<ScamAlert />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
