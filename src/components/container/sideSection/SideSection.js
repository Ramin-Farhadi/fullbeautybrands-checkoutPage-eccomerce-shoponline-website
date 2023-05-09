import { Grid } from "@mui/material";
import "./sideSec.css";
import OrderSummary from "./OrderSummary/OrderSummary";
import "./sideSec.css";

const SideSection = ({ allItemSubTotal }) => {
  return (
    <Grid item className="sideSecContainer" xs={12} md={4} lg={4} xl={3}>
      <OrderSummary allItemSubTotal={allItemSubTotal} />
    </Grid>
  );
};

export default SideSection;
