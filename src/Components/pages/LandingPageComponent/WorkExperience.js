"use client";

import React from "react";
import { Experience } from "../../../../data/Mydata";
import { motion, useScroll, useTransform } from "framer-motion";

const WorkExperience = () => {
  const { scrollYProgress } = useScroll();

  const scaledProgress = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <div className="experience-Page">
      <div className="container">
        <div className="row">
          <div className="top font-regular flex left-center ">
            <div className="content">
              <h1 className="sub-heading font-regular l-h-1 gradient-t-m">
                Work
              </h1>
              <h1 className="regular gradient-t-w">Experience</h1>
            </div>
          </div>
          <div className="bottom  b-r-10 flex font-regular">
            <div className="left  flex col-3-10 ">
              <h1 className="font-bold medium color-white">01</h1>
              <div className="framer-box ">
                <div className="framer">
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
            <div className="right  color-white flex-1">
              <p className="small font-bold ">{Experience.heading}</p>
              <div
                className="tiny font-light color-light-grey flex loc-date italic"
                style={{
                  padding: "10px 25px 0 0",
                }}
              >
                <p>{Experience.company}</p>
                <p>{Experience.date}</p>
              </div>

              <br />
              <ul className="font-light tiny l-h-1-5">
                {Experience.list.map((i, index) => (
                  <li
                    key={index}
                    style={{
                      paddingTop: "10px",
                    }}
                  >
                    {i.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
