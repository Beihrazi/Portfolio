import ProjectCard from "@/Components/common/ImageContent";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <div className="project-Page">
      <div className="container-small">
        <div className="row">
          <div className="top bor-b flex center-center">
            <h1 className="gradient-t-w medium font-bold">Project</h1>
          </div>
          <div className="project-container bor-w">
            <ProjectCard
              imageSrc="/image/home.png"
              title="ArtCart "
              duration="(April 2024 – June 2024) "
              // description="Built a MERN full-stack application featuring a multi-role system (Admin, Seller, Customer) with integrated Razorpay API for seamless payment processing, and designed a visually appealing UI using Material-UI and Styled-Components to enhance the overall user experience."
              imageLeftPosition={true}
            />
            
            <div className="progress-box bor-r flex center-center">
              <div className="timeline">
                <p className="color-white"></p>
              </div>
            </div>
            

            {/* <ProjectCard
            imageSrc="/image/home.png"
            title="ArtCart "
            duration="(April 2024 – June 2024) "
            description="Built a MERN full-stack application featuring a multi-role system (Admin, Seller, Customer) with integrated Razorpay API for seamless payment processing, and designed a visually appealing UI using Material-UI and Styled-Components to enhance the overall user experience."
            imageLeftPosition={false}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
