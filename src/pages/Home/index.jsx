import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Tile from "../../components/widget/Tile";
import WildeTile from "../../components/widget/WildeTile";
import { Doughnut } from "react-chartjs-2";

// 도넛형 그래프
const Pie = () => {
  const data = {
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["rgba(164, 228, 61, 0.2)", "rgba(38, 52, 64, 0.8)"],
        borderColor: ["rgba(164, 228, 61, 1)", "rgba(38, 52, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Doughnut data={data} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        90%
      </Box>
    </Box>
  );
};

// 원형 아이콘
const Circle = ({ color, value, type }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100px",
        height: "100px",
        backgroundColor: color,
        borderRadius: "75px",
        textAlign: "center",
        lineHeight: "100px",
      }}
    >
      {value}
      {type}
    </Box>
  );
};

const Home = () => {
  useEffect(() => {
    document.title = "리눅스 모니터";
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Tile
          component={() => {
            return <Pie />;
          }}
          title="CPU"
        />
        <Tile
          component={() => {
            return <Pie />;
          }}
          title="RAM"
        />
        <Tile
          component={() => {
            return <Pie />;
          }}
          title="HDD/SDD"
        />
      </Box>

      <WildeTile />

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Tile
          component={() => {
            return <Circle color="#F0895C" value={70} type="kbps" />;
          }}
          title="보내기"
        />
        <Tile
          component={() => {
            return <Circle color="#B83B5D" value={70} type="kbps" />;
          }}
          title="받기"
        />
        <Tile
          component={() => {
            return <Circle color="#6A2B71" value={10} type="ms" />;
          }}
          title="PING"
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          minHeight: "100px",
          marginTop: "24px",
          backgroundColor: "#1b2830",
          borderRadius: "0",
          padding: "20px",
        }}
      >
        <p>디바이스 이름</p>
        <p>장비 사양</p>
        <p>배포판</p>
      </Box>
    </>
  );
};

export default Home;
