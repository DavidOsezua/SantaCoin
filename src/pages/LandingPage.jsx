
import { Navbar, Hero, About, Roadmap, FAQ, Footer,CopyRight } from "../components";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
      <CopyRight/>
    </>
  );
};

export default LandingPage;
