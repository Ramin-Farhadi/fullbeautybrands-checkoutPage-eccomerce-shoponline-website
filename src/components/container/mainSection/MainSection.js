import { Grid } from "@mui/material";
import "./mainSec.css";
import ShippingSection from "./shippingSection/ShippingSection";
import BillingSection from "./billingSection/BillingSection";
// import OrderDetailSection from "./orderDetailSection/OrderDetailSection";
import NewOrderSection from "./NewOrderSection/NewOrderSection";
const MainSection = ({
  setAllItemSubTotal,
  setAddressEditShowHide,
  addressEditShowHide,
  updateShippingAddress,
}) => {
  return (
    <Grid item className="MainSecContainer" xs={12} md={7} lg={6} xl={5}>
      <ShippingSection
        setAddressEditShowHide={setAddressEditShowHide}
        addressEditShowHide={addressEditShowHide}
        updateShippingAddress={updateShippingAddress}
      />
      <BillingSection />
      <NewOrderSection setAllItemSubTotal={setAllItemSubTotal} />
    </Grid>
  );
};

export default MainSection;
