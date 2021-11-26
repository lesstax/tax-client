import FooterPanel from "../panels/FooterPanel";
import HeaderPanel from "../panels/HeaderPanel";
import "../res/css/home.css";
import FullFillPanel from "../panels/FullFillPanel";
import ServicesPanel from "../panels/ServicesPanel";
import MainPanel from "../panels/MainPanel";

const HomeComponent = () => {
  return (
    <>
      <HeaderPanel />
      <MainPanel />
      <ServicesPanel />
      <FullFillPanel />
      <FooterPanel />
    </>
  );
};

export default HomeComponent;
