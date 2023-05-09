import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import "./item.css";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Item = ({ data, id, newArray, setNewArray }) => {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const [subTotal, setSubTotal] = useState(data.price * data.quantity);
  const [discount, setDiscount] = useState(0);
  const [gift, setGift] = useState(0);

  const quantityHandler = (e) => {
    setItemQuantity(e.target.value);
  };

  //if Item Quantity or Data change  ---------
  useEffect(() => {
    let newSubTotal = itemQuantity * data.price;
    let newDiscount = 0;

    //Only for Item B if for each 2 items, we have one gift
    if (data.id === "B") {
      let newGift = Math.floor(itemQuantity / 2);
      setGift(newGift);
    }
    // <<-----------------------

    //Discount For Item A
    if (data.id === "A") {
      newDiscount = Math.floor(itemQuantity / 2) * 20;
    }
    // <<-------------

    newSubTotal -= newDiscount;
    setSubTotal(newSubTotal);
    setDiscount(newDiscount);

    const updatedArray = newArray.map((element) => {
      if (element.id === id) {
        return { ...element, price: newSubTotal };
      } else {
        return element;
      }
    });
    setNewArray(updatedArray);
  }, [itemQuantity, data]);
  // <<<<<<<------------------------------------------------

  return (
    <div className="itemDetails">
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ width: "20%" }}>
          <img
            className="productImage"
            style={{ width: "100%" }}
            src={data.img}
            alt={data.name}
          />
        </Box>
        <Box className="pt0" sx={{ textAlign: "left" }} pt={4}>
          <p style={{ fontWeight: "700" }}>{data.name}</p>
          <p>
            Price:
            <span style={{ color: "#7B1FA2", fontWeight: "700" }}>
              &nbsp; $ {subTotal}
            </span>
          </p>
          {discount ? (
            <p
              style={{
                color: "#757575",
                textDecoration: "line-through",
                fontSize: "1rem",
              }}
            >
              List Price: ${subTotal + discount}
            </p>
          ) : gift ? (
            <p
              style={{
                color: "#757575",
                textDecoration: "line-through",
                fontSize: "1rem",
              }}
            >
              List Price: ${subTotal + data.price}
            </p>
          ) : gift && discount ? (
            <p style={{ color: "#757575", textDecoration: "line-through" }}>
              List Price: ${subTotal + data.price + discount}
            </p>
          ) : (
            ""
          )}
          {/* <p>Quantity: {itemQuantity}</p> */}
        </Box>
        <Box className="pt0" sx={{ minWidth: 80 }} pt={5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Quantity"
              value={itemQuantity}
              onChange={quantityHandler}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          {discount ? (
            <p style={{ fontWeight: "700", color: "#FF5252" }}>
              Sale: - ${discount}
            </p>
          ) : (
            ""
          )}
          {gift > 0 ? (
            <p style={{ fontWeight: "700", color: "#FF5252" }}>+ {gift} Free</p>
          ) : (
            ""
          )}
        </Box>
      </Box>
      <hr className="horizantalSeprator"></hr>
    </div>
  );
};
export default Item;
