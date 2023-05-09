import Card from "../../../Card/Card";
import { orderListScenario1 } from "../../../../data/orderList";
import Item from "./Item/Item";
import { useEffect, useState } from "react";
import Btn from "../../../buttons/Btn";
import "./newOrderSection.css";

const NewOrderSection = ({ setAllItemSubTotal }) => {
  const scrollUpFunc = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    let sumAll = 0;
    newArray.forEach((item) => {
      sumAll += item.price;
    });
    setAllItemSubTotal(sumAll);
  }, [newArray]);

  useEffect(() => {
    // Create a new array with updated values
    const updatedArray = orderListScenario1.map((eachItem) => ({
      id: eachItem.id,
      price: eachItem.price * eachItem.quantity - eachItem.discount,
    }));

    setNewArray(updatedArray);
  }, []);

  return (
    <Card title="Review Your Order">
      {orderListScenario1.map((eachItem) => {
        return (
          <Item
            data={eachItem}
            id={eachItem.id}
            key={eachItem.id}
            quantity={eachItem.quantity}
            newArray={newArray}
            setNewArray={setNewArray}
          />
        );
      })}
      <Btn btnStyle={"primaryBtn"} onClick={scrollUpFunc}>
        {" "}
        Place Order
      </Btn>
    </Card>
  );
};

export default NewOrderSection;
