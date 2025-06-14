import ImageFallback from "@components/ImageFallback";
import config from "@config/config.json";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link href="/" className="navbar-brand block">
      <span style={{fontSize:"25px", color:"#fe6019", margin:"0 20px"}}>Ogilvy</span>
    </Link>
  );
};

export default Logo;
