import { Box } from "@mui/material";
import { MotionInView, varScaleInX } from "../../animate";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <MotionInView variants={varScaleInX} height="75vh">
        <LineChart />
      </MotionInView >
    </Box>
  );
};

export default Line;
