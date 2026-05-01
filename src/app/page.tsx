import {
  Hero,
  FeaturedProperties,
  PopularLocations,
  WhyChooseUs,
  BlogSection,
  Services,
  Newsletter,
} from "@/components/Home";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProperties />
      <PopularLocations />
      <WhyChooseUs />
      <BlogSection />
      <Services />
      <Newsletter />
    </div>
  );
}

