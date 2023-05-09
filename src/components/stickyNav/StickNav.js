import "./stickyNav.css";
import { Box } from "@mui/system";
const StickyNav = () => {
  return (
    <div className="stickyNav">
      <Box
        className="slider-area"
        sx={{ display: "flex", justifyContent: "space-around" }}
        pt={2}
      >
        <Box></Box>
        <Box>
          <a href="#mainNav">1. CheckOut</a>
        </Box>
        <Box>
          <a href="#shipping">2. Shipping</a>
        </Box>
        <Box>
          <a href="#billing">3. Billing </a>
        </Box>
        <Box>
          <a href="#review">4. Review</a>
        </Box>
        <Box></Box>
      </Box>
    </div>
  );
};

export default StickyNav;
