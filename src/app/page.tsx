import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import TourList from "@/components/TourList";
import VaultGrid from "@/components/VaultGrid";
import MerchDrop from "@/components/MerchDrop";
import Manifesto from "@/components/Manifesto";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TourList />
        <VaultGrid />
        <MerchDrop />
        <Manifesto />
      </main>
    </div>
  );
}

