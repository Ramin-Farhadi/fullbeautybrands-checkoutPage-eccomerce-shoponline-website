import { Box } from "@mui/system";
import Card from "../../../Card/Card";
import "./shippingSection.css";
import Btn from "../../../buttons/Btn";

const ShippingSection = ({
  setAddressEditShowHide,
  addressEditShowHide,
  updateShippingAddress,
}) => {
  const ChangeShippingAddress = () => {
    setAddressEditShowHide(!addressEditShowHide);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card customClass="shippingAddress" title="Shipping Address">
      <span id="billing"></span>
      <Box
        className="shippingAddressContainer"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box className="shippingInfo" pl={5} sx={{ textAlign: "left" }}>
          <p
            style={{ fontWeight: "700", fontSize: "1.2rem" }}
            className="addressParagraph"
          >
            {updateShippingAddress.fullName}
          </p>
          <p className="addressParagraph">
            {updateShippingAddress.addressLine1}
          </p>
          <p className="addressParagraph">
            {updateShippingAddress.addressLine2}
          </p>
          <p className="addressParagraph">
            {updateShippingAddress.city} {updateShippingAddress.state}{" "}
            {updateShippingAddress.zip}
          </p>
        </Box>
        <Box className="shippingBtnArea" pr={5}>
          <Btn onClick={ChangeShippingAddress} btnStyle="editButton">
            CHANGE SHIPPING ADDRESS
          </Btn>
        </Box>
      </Box>
    </Card>
  );
};

export default ShippingSection;
