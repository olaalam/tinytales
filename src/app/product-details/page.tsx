"use client";
import PageHeader from "@/components/layout/PageHeader";
import ProductSection from "@/components/product/ProductSection";
import ProductReviews from "@/components/product/ProductReviews";
import SimilarItems from "@/components/product/SimilarItems";

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Product Details"
        paths={[
          { name: "Home", href: "/" },
          { name: "Product Details", href: "#" }
        ]}
      />
      <main className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom duration-700">
        <ProductSection />
        <ProductReviews />
        <SimilarItems />
      </main>
    </div>
  );
}