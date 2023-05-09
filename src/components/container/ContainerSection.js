import { Grid } from "@mui/material";
const ContainerSection = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={0} md={0} lg={1} xl={2} />
      {props.children}
      <Grid item xs={0} md={0} lg={1} xl={2} />
    </Grid>
  );
};

export default ContainerSection;
