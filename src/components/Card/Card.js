import "./card.css";
const Card = (props) => {
  return (
    <div
      className={
        props.backgroundColor
          ? `card ${props.backgroundColor} ${props.customClass}`
          : `card ${props.customClass}`
      }
    >
      <h3 className="cardTitle">{props.title ? props.title : "Title"}</h3>
      {props.children}
    </div>
  );
};

export default Card;
