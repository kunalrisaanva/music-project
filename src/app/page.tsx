import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSecion from "@/components/HeroSecion";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import Instructure from "@/components/Instructure";
import UpcomingWebinars from "@/components/UpcomingWebinars";

import WhyChooseUse from "@/components/WhyChooseUse";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSecion/>
      <FeaturedCourses/>
      <WhyChooseUse/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructure/>
      <Footer/>
    </main>
  );
}
