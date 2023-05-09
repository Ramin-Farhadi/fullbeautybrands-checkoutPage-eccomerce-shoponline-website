import Card from "../../../Card/Card";
import "./orderSummary.css";
import Btn from "../../../buttons/Btn";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
const OrderSummary = ({ allItemSubTotal }) => {
  const [orderTotalFinal, setOrderTotalFinal] = useState(0);
  useEffect(() => {
    setOrderTotalFinal(
      (allItemSubTotal + 2.55 + (allItemSubTotal * 6.35) / 100).toFixed(2)
    );
  }, [allItemSubTotal]);
  return (
    <Card title=" " backgroundColor="gray">
      <Btn btnStyle="primaryBtn">Place Order</Btn>
      <p className="orderSummaryPolicy">
        By placing your order, you agree to FULLBEAUTY BRANDS’s privacy notice
        and conditions of use. Order Summary
      </p>
      <p className="orderSummaryTitle">Order Summary</p>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ textAlign: "left" }} pl={2}>
          <p>Subtotal:</p>
          <p>Shipping:</p>
          <p>Total Before tax:</p>
          <p>Estimated tax to be collected:*</p>
        </Box>
        <Box sx={{ textAlign: "right" }} pr={2}>
          <p>${allItemSubTotal}</p>
          <p>${2.55}</p>
          <p>${allItemSubTotal + 2.55}</p>
          <p>${(allItemSubTotal * 6.35) / 100}</p>
        </Box>
      </Box>
      <hr></hr>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ textAlign: "left" }} pl={2}>
          <p className="orderSummaryTitle">Order Total: </p>
        </Box>
        <Box sx={{ textAlign: "right" }} pr={2}>
          <p className="orderTotalPrice">${orderTotalFinal}</p>
        </Box>
      </Box>
    </Card>
  );
};

export default OrderSummary;
