import "./btn.css";
const Btn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.btnStyle ? props.btnStyle : ""}
    >
      {props.children}
    </button>
  );
};

export default Btn;
