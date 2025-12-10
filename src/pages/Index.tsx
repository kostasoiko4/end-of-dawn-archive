import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import TopSongs from '@/components/sections/TopSongs';
import Bio from '@/components/sections/Bio';
import Videos from '@/components/sections/Videos';
import Lineup from '@/components/sections/Lineup';
import Discography from '@/components/sections/Discography';
import Merch from '@/components/sections/Merch';
import Shows from '@/components/sections/Shows';
import SocialFeed from '@/components/sections/SocialFeed';
import MediaDownload from '@/components/sections/MediaDownload';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TopSongs />
      <Bio />
      <Videos />
      <Lineup />
      <Discography />
      <Merch />
      <Shows />
      <SocialFeed />
      <MediaDownload />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
