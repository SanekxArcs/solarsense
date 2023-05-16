import LaptopNav from "./LaptopNav";
import MobileNav from "./MobileNav";

const UnderHeader = ({ toggleMenu, isOpen }) => {

  return (
    <>
    <LaptopNav />
    <MobileNav isOpen={isOpen} toggleMenu={toggleMenu}/>
    </>
  );
};

export default UnderHeader;
