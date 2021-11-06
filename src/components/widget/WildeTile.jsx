import { Line } from "react-chartjs-2";
import { Card, Box } from "@mui/material";

const WildeTile = ({ dataset }) => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: dataset,
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "400px",
        minHeight: "400px",
        maxHeight: "400px",
        backgroundColor: "#0F1C25",
        borderRadius: "0",
        marginTop: "24px",
        marginBottom: "24px",
      }}
    >
      <Box
        sx={{
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingLeft: "12px",
          marginTop: 0,
          marginBottom: 0,
          backgroundColor: "#0F1C25",
        }}
        component="h4"
      >
        네트워크 사용량
      </Box>
      <Line height="400px" data={data} options={options} />
    </Card>
  );
};

export default WildeTile;
