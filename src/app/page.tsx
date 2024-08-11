import FeaturedCategories from "@/components/FeaturedCategories";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <PopularProducts />
    </main>
  );
}
