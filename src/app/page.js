
import LandingPage from "./LandingPage/page";
import Experience from "./Experience/page";

export const generateMetadata = () => ({
  title: "Portfolio | Beihrazi",
  description: "my-portfolio",
});


const page = () => {
  return (
    <div>
     <LandingPage/>
     {/* <Experience/> */}
    </div>
  )
}

export default page
