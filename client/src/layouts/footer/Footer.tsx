import CopyRight from "./CopyRight";
import "./Footer.css"
import Subscribe from "./Subscribe";
import Widgets from "./Widgets";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Subscribe />
      <Widgets />
      <CopyRight />
    </footer>
  );
};

export default Footer;