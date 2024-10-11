import bag from "../../Asset/bag.png";
import like from "../../Asset/heart-regular.svg";
import "./card.css";

export default function Card(img, name, outofstock, key) {
  return (
    <div className="wrapper" id={key}>
      {outofstock ? <div className="stock">OUT OF STOCK</div> : ""}
      <img src={bag} alt="bagimg" />
      <h4>Hemant bag</h4>
      <div className="smallinfo">
        <p>Sign in or Create and account to see </p>
        <img src={like} alt="" />
      </div>
    </div>
  );
}
