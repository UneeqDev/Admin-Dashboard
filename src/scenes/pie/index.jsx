import { Box } from "@mui/material";
import { MotionInView, varFadeIn, varScaleInX } from "../../animate";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <MotionInView variants={varScaleInX} height="75vh">
        <PieChart />
      </MotionInView>
    </Box>
  );
};

export default Pie;
