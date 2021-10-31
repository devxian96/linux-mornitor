import { Line } from "react-chartjs-2";
import { Card, Box } from "@mui/material";

const WildeTile = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: ["kbps", "kbps", "ms"],
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
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
      <Line data={data} options={options} />
    </Card>
  );
};

export default WildeTile;
