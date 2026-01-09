import Png from "./Group 210.png"
import Svg1 from "./1.svg"
import Svg2 from "./2.svg"
import Svg3 from "./3.svg"
import "./hid.css"

function Section2() {
    return(
        <section className="full">
         <div className="img1">
         <img src={Png} alt="" />
         </div>
         <div>
            <h1>Наша команда</h1>
            <p>Значимость этих проблем настолько очевидна, что базовый вектор <br />развития позволяет оценить значение экспериментов, поражающих <br />по своей масштабности и грандиозности. Мы вынуждены отталкиваться <br />от того, что консультация с широким активом.</p>
         <div className="svg">
            <img src={Svg1} alt="" />
            <img src={Svg2} alt="" />
            <img src={Svg3} alt="" />
         </div>
         </div>
        </section>
    )
}
export default Section2;