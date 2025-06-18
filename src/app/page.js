import Home from "./Home/page";

export const generateMetadata = () => ({
  title: "Portfolio | Beihrazi",
  description: "my-portfolio",
});

const page = () => {
  return (
    <div>
     <Home/>
    </div>
  );
};

export default page;
