import LandingPage from "./LandingPage/page";

export const generateMetadata = () => ({
  title: "Portfolio | Beihrazi",
  description: "my-portfolio",
});

const page = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default page;
