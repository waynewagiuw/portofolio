import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterGradient from "./components/footer/FooterGradient copy";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      <FooterGradient/>
    </main>
  );
}

export default App;
