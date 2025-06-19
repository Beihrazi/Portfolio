"use client";

import ProjectCard from "@/Components/common/ProjectCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectPage = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start end", "end start"], // ✅ crucial
});
  const scaledProgress = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <div className="project-Page">
      <div className="container-small">
        <div className="row">
          <div className="top flex center-center">
            <div className="t-a-c">
              <h1 className="sub-heading font-regular l-h-1 gradient-t-m">
                Selected
              </h1>
              <h1 className="gradient-t-w medium font-bold"> Work</h1>
            </div>
          </div>
          <div className="project-container " ref={targetRef}>
            <ProjectCard
              imageSrc="/image/home.png"
              title="ArtCart "
              duration="(April 2024 – June 2024) "
              description="Built a MERN full-stack application featuring a multi-role system"
              // (Admin, Seller, Customer) with integrated Razorpay API for seamless payment processing, and designed a visually appealing UI using Material-UI and Styled-Components to enhance the overall user experience."
              imageLeftPosition={false}
            />
            <ProjectCard
              imageSrc="/image/home1.png"
              title="Autumn Project "
              duration="(April 2024 – June 2024) "
              description="Built a MERN full-stack application featuring a multi-role system"
              // (Admin, Seller, Customer) with integrated Razorpay API for seamless payment processing, and designed a visually appealing UI using Material-UI and Styled-Components to enhance the overall user experience."
              imageLeftPosition={true}
            />
             <ProjectCard
              imageSrc="/image/home1.png"
              title="Autumn Project "
              duration="(April 2024 – June 2024) "
              description="Built a MERN full-stack application featuring a multi-role system"
              // (Admin, Seller, Customer) with integrated Razorpay API for seamless payment processing, and designed a visually appealing UI using Material-UI and Styled-Components to enhance the overall user experience."
              imageLeftPosition={false}
            />

            <div className="framer flex center-center">
              <motion.div
                className="progress gradient-b-m"
                style={{
                  scaleY: scaledProgress,
                  transformOrigin: "top",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
