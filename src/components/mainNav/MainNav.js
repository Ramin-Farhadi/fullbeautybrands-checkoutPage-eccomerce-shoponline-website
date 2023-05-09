import "./mainNav.css";
import { Grid } from "@mui/material";
const MainNav = () => {
  return (
    <div id="mainNav">
      <span id="shipping"></span>

      <Grid className="mainNavContainer" container spacing={2}>
        <Grid xs={1} md={1}></Grid>
        <Grid xs={10} md={4}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <img
                alt="logo"
                style={{ paddingLeft: "30%" }}
                className="logo"
                src={require("../../images/fblogo.jpg")}
              ></img>
            </Grid>
            <Grid xs={8}>
              <p className="logoText">
                <span style={{ fontWeight: "500", color: "#9C27B0" }}>
                  FULL
                </span>
                <span style={{ fontWeight: "700", color: "#9C27B0" }}>
                  BEAUTY
                </span>{" "}
                BRANDS
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={0} md={6}></Grid>
        <Grid xs={2} md={2}></Grid>
        <Grid xs={0} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default MainNav;
