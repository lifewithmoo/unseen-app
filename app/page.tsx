import Hero from "@/app/components/home/Hero";
import FeaturedCollection from "@/app/components/home/FeaturedCollection";
import NewDrop from "@/app/components/home/NewDrop";
import Marquee from "@/app/components/home/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCollection />
      <NewDrop />
    </>
  );
}