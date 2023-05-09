import Card from "../../../Card/Card";
import { Box } from "@mui/material";
import Btn from "../../../buttons/Btn";
import "./billingSection.css";
const BillingSection = () => {
  return (
    <Card title="Payment Method">
      <span id="review"></span>
      <Box
        className="billingContainer"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box className="billingInfo" pl={5} sx={{ textAlign: "left" }}>
          <div style={{ display: "flex", marginBottom: "15px" }}>
            <span className="masterCardIcon"></span>
            <span>
              <p className="addressParagraph">Ending in 1234</p>
            </span>
          </div>

          <p style={{ fontWeight: "700" }} className="addressParagraph">
            Billing Address
          </p>
          <p className="addressParagraph">Ramin Farhadi</p>
          <p className="addressParagraph">Peachtree Ln</p>
          <p className="addressParagraph">Apt 2</p>
          <p className="addressParagraph">Levittown NY 11756</p>
        </Box>
        <Box
          className="billingBtnArea"
          sx={{ display: "flex", flexDirection: "column" }}
          pr={5}
        >
          <Box className="billingBtnAreaChild" mb={3}>
            <Btn btnStyle="editButton">CHANGE PAYMENT METHOD</Btn>
          </Box>
          <Box className="billingBtnAreaChild" mb={3}>
            <Btn btnStyle="editButton">CHANGE BILLING ADDRESS</Btn>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default BillingSection;
