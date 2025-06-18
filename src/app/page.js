import LandingPage from "@/Components/pages/LandingPageComponent/LandingPage";



export const generateMetadata = () => ({
  title: "Portfolio | Beihrazi",
  description: "my-portfolio",
});


const page = () => {
  return (
    <div>
     <LandingPage/>
    
    </div>
  )
}

export default page
