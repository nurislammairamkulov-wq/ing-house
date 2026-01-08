import img1 from "./hero.png"
import "./hero.css";

function Hero() {
  return (
    <section>
        <div className="conteiner">
            <div className="hero1">
               <img src={img1} alt="" />
            </div>
            <div className="hero2">
                <h1>Реплики картин <br />от <span>Ink. House</span> </h1>
                <p>Высокое качество отрисовки на плотной бумаге или льняном <br /> холсте. Редкие произведения, доступные цены.</p>
                <button>Продукция</button>
            </div>
        </div>
    </section>
  );
}
export default Hero;