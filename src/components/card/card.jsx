import Image1 from "./Амур.svg";
import "./card.css";

function Card() {
  return (
    <>
      <div className="Hero">
        <div className="hdiv1">
          <h1>Репродукции</h1>
          <div className="btns">
            <button>Франция</button>
            <button>Германия</button>
            <button>Англия</button>
          </div>
        </div>
        <div className="hdiv2">
          <img src={Image1} alt="" />
          <p>Марсель Руссо</p>
          <h2>Охота Амура</h2>
          <h4 className="h4">Холст, масло (50х80) </h4>
          <h4 className="rub">14 500 руб</h4>
          <button>В корзину</button>
        </div>
      </div>
    </>
  );
}
export default Card;
