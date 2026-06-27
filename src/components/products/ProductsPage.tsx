import { SiteFooter } from "@/components/layout/SiteFooter";
import { Navbar } from "@/components/layout/Navbar";
import { ProductGrid } from "./ProductGrid";
import { ProductsHero } from "./ProductsHero";

export function ProductsPage() {
  return (
    <div className="min-h-full text-white">
      <Navbar />
      <main>
        <ProductsHero />
        <ProductGrid />
      </main>
      <SiteFooter />
    </div>
  );
}
