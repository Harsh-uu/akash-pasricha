import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="min-h-96 bg-white antialiased">
        {children}
      </main>
      <Footer />
    </>
  );
}
