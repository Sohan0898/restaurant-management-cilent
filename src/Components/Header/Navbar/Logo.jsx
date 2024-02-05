import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={'/'}><img
        src="https://i.postimg.cc/x8CC0DpM/FOODIEFEAST-300-x-200-px-450-x-200-px-1.png"
        className="h-16 mr-3"
        alt="FoddieFeast Logo"
      /></Link>
    </div>
  );
};

export default Logo;
