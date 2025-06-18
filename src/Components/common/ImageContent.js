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
      {imageLeftPosition && (
        <div className="left pos-relative  flex right-center bor-b">
          <div className="date  b-r-5">
            <p className="font-light tiny">12 may 2024</p>
            {/* <Image
                alt={title}
                src={imageSrc}
                fill
                style={{ objectFit: "cover" }}
              /> */}
          </div>
          <div className="circle">
            <div className="icon b-r-50"></div>
          </div>
        </div>
      )}

      {/* Text content */}
      <div className="right bor-w font-regular flex-1 bor-b">
         <div className="image bor-r">
             {/* <Image
                alt={title}
                src={imageSrc}
                fill
                className="gradient-image"
                style={{ objectFit: "cover" }}
              />  */}this is image
          </div>
        <div className="content">
          <h4 className="sub-heading">{title}</h4>
          <p className="small italic l-h-1-2">{duration}</p>
          <br />
          <p className="small l-h-1-2">{description}</p>
        </div>
      </div>

      {/* Show image on the right if imageLeftPosition is false */}
      {!imageLeftPosition && (
        <div className="left flex right-center bor-b">
          <div className="image">
            {/* <Image
                alt={title}
                src={imageSrc}
                fill
                style={{ objectFit: "cover" }}
              /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
