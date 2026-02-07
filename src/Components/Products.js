import One from "../assets/images/one.jpg";
import Two from "../assets/images/two.jpg";
import Three from "../assets/images/three.jpg";

function Products() {
  return (
    <div className="products">
      <div className="box">
        <img src={One} alt="one"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img src={Two} alt="two"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img src={Three} alt="three"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>

    </div>
  )
}

export default Products;