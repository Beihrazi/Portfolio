import Contact from "@/Components/pages/LandingPageComponent/ContactComponent"
import LandingPageComponent from "@/Components/pages/LandingPageComponent/LandingPageComponent"
import ProjectPage from "@/Components/pages/LandingPageComponent/ProjectPageComponent"
import SkillComponent from "@/Components/pages/LandingPageComponent/skill/SkillComponent"
import WorkExperience from "@/Components/pages/LandingPageComponent/WorkExperienceComponent"

const Home = () => {
    
  return (
    <div>
      <LandingPageComponent/>
      <WorkExperience/>
      <SkillComponent/>
      <ProjectPage/>
      <Contact/>
    </div>
  )
}

export default Home
