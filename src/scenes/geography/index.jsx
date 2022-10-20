import { Box, useTheme } from "@mui/material";
import { MotionInView, varScaleInX } from "../../animate";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <MotionInView variants={varScaleInX}
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </MotionInView >
    </Box>
  );
};

export default Geography;
