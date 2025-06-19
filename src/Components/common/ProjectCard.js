import Image from "next/image";

const ProjectCard = ({
  imageSrc,
  title,
  duration,
  description,
  imageLeftPosition = true,
}) => {
  return (
    <div className="bottom flex color-white">
      {/* Show image on the left if imageLeftPosition is true */}
      {!imageLeftPosition && (
        <div className="left pos-relative  flex right-center ">
          <div className="date  b-r-5">
             <p className="font-regular small gradient-t-w"
            >{title}</p>
            <p className="font-light tiny l-h-1-5 italic color-light-grey">
              {duration}
              </p>
          </div>
          <div className="circle">
            <div className="icon b-r-50"></div>
          </div>
        </div>
      )}

      {/* Text content */}
      <div className="right b-r-15 font-regular flex-1 ">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        ></div>
        <div className="content ">
          <h4 className="tiny font-regular">{title}</h4>
          <p className="extreme-tiny font-light color-light-grey  italic l-h-1-5">
            {duration}
          </p>
          <br />
          <p className=" col-4-5 extreme-tiny l-h-1-2">{description}</p>
          <div className="visit flex center-center  b-r-50">
            <div className="visit-box flex center-center  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h10m0 0v10m0-10L7 17"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Show image on the right if imageLeftPosition is false */}
      {imageLeftPosition && (
        <div className="left pos-relative  flex left-center ">
          <div className="date-left  b-r-5">
            <p className="font-regular small gradient-t-w"
            >{title}</p>
            <p className="font-light tiny l-h-1-5 italic color-light-grey">
              {duration}
            </p>
          </div>
          <div className="circle-right">
            <div className="icon b-r-50"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
