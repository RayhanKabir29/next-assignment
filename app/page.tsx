import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Banner />
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}