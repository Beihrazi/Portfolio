import Contact from "@/Components/pages/LandingPageComponent/Contact"
import LandingPage from "@/Components/pages/LandingPageComponent/LandingPage"
import ProjectPage from "@/Components/pages/LandingPageComponent/ProjectPage"
import SkillComponent from "@/Components/pages/LandingPageComponent/skill/SkillComponent"
import WorkExperience from "@/Components/pages/LandingPageComponent/WorkExperience"

const page = () => {
    
  return (
    <div>
      <LandingPage/>
      <WorkExperience/>
      <SkillComponent/>
      <ProjectPage/>
      <Contact />
    </div>
  )
}

export default page
