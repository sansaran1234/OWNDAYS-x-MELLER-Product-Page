import { SiteFooter } from "@/components/layout/SiteFooter";
import { Navbar } from "@/components/layout/Navbar";
import { ProductGrid } from "./ProductGrid";
import { ProductsHero } from "./ProductsHero";
import { MarqueeSection } from "./MarqueeSection";

export function ProductsPage() {
  return (
    <div className="min-h-full bg-[#ff6723] text-white">
      <Navbar />
      <main>
        <ProductsHero />
        <ProductGrid />
        <MarqueeSection />
      </main>
      <SiteFooter />
    </div>
  );
}
