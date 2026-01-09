import Image1 from "./ink.House.svg";
import Image2 from "./cart.svg";
import "./header.css";

function Header() {
  return (
    <header>
      <img src={Image1} alt="" />
      <div>
        <a href="">Репродукции</a>
        <a href="">Новинки</a>
        <a href="">О нас</a>
        <img src={Image2} alt="" />
      </div>
    </header>
  );
}

export default Header;
