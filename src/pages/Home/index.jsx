import React, { useEffect, useState, useMemo, memo, useCallback } from "react";
import { Box } from "@mui/material";
import Tile from "../../components/widget/Tile";
import WildeTile from "../../components/widget/WildeTile";
import { Doughnut } from "react-chartjs-2";
import axios from "../../plugin/axios";
import ping from "web-pingjs";
import useInterval from "../../plugin/useInterval";

const areEqual = (prevProps, nextProps) => true;

// 도넛형 그래프
const Pie = memo(({ value }) => {
  const left = useMemo(() => value - 100, [value]);
  const data = {
    datasets: [
      {
        data: [value, left],
        backgroundColor: ["rgba(164, 228, 61, 0.2)", "rgba(38, 52, 64, 0.8)"],
        borderColor: ["rgba(164, 228, 61, 1)", "rgba(38, 52, 64, 1)"],
        borderWidth: 1,
        animation: {
          duration: 0,
        },
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
        {value}%
      </Box>
    </Box>
  );
}, areEqual);

// 원형 아이콘
const Circle = memo(({ color, value, type }) => {
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
}, areEqual);

const Home = () => {
  const [system, systemSet] = useState("");
  const [usage, usageSet] = useState("");
  const [ms, msSet] = useState("");
  const [rxArray, rxArraySet] = useState([]);
  const [txArray, txArraySet] = useState([]);

  const interval = useCallback(() => {
    // 시스템 정보
    axios.get("/info").then(({ data }) => {
      systemSet(data);
    });

    // 사용량
    axios.get("/usage").then(({ data }) => {
      data.rx_sec = (data.rx_sec / 125).toFixed(2);
      data.tx_sec = (data.tx_sec / 125).toFixed(2);
      usageSet(data);

      rxArraySet((prev) => [...prev, data.rx_sec]);
      txArraySet((prev) => [...prev, data.tx_sec]);
    });

    // 핑
    ping(process.env.REACT_APP_API_URL).then((ms) => {
      msSet(ms);
    });
  }, []);

  useEffect(() => {
    document.title = "리눅스 모니터";
    interval();
  }, [interval]);

  // 5초마다 데이터 갱신
  useInterval(() => {
    interval();
    if (rxArray.length > 6) {
      let tmp = rxArray;
      tmp.shift();
      rxArraySet(tmp);
      tmp = txArray;
      tmp.shift();
      txArraySet(tmp);
    }
  }, 5000);

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
            return <Pie value={usage.cpu} />;
          }}
          title="CPU"
        />
        <Tile
          component={() => {
            return <Pie value={usage.ram} />;
          }}
          title="RAM"
        />
        <Tile
          component={() => {
            return <Pie value={usage.hdd} />;
          }}
          title="HDD/SDD"
        />
      </Box>

      <WildeTile
        dataset={[
          {
            label: "보내기(kbps)",
            data: rxArray,
            fill: true,
            backgroundColor: "rgb(240, 137, 92)",
            borderColor: "rgba(240, 137, 92, 0.2)",
            animation: {
              duration: 0,
            },
          },
          {
            label: "받기(kbps)",
            data: txArray,
            fill: true,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 0.2)",
            animation: {
              duration: 0,
            },
          },
        ]}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Tile
          component={() => {
            return <Circle color="#F0895C" value={usage.rx_sec} type="kbps" />;
          }}
          title="보내기"
        />
        <Tile
          component={() => {
            return <Circle color="#B83B5D" value={usage.tx_sec} type="kbps" />;
          }}
          title="받기"
        />
        <Tile
          component={() => {
            return <Circle color="#6A2B71" value={ms} type="ms" />;
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
        <p>{system.brand} 시스템</p>
        <p>램 {(system.total / 1e9).toFixed(2)}MB</p>
        <p>
          {system.distro} {system.platform} {system.release}
        </p>
      </Box>
    </>
  );
};

export default Home;
