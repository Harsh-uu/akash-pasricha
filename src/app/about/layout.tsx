"use client"

import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useUIStore } from "@/store/useUIStore";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { mobileMenuOpen } = useUIStore();
  
  return (
    <div className={`${mobileMenuOpen ? "h-screen overflow-hidden" : ""}`}>
      <Header/>
      <main className={`min-h-96 bg-white antialiased`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
