import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { InsertDriveFile, Folder, AccountTree } from "@mui/icons-material";
import axios from "../../plugin/axios";

// 파일 아이콘
const FileIcon = ({ name, focus, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100px",
        height: "120px",
        float: "left",
        margin: "5px",
        backgroundColor: focus ? "rgba(59, 130, 234, 0.2)" : "",
      }}
    >
      <InsertDriveFile
        sx={{
          width: "100%",
          fontSize: "80px",
        }}
      />
      <Typography align="center">{name}</Typography>
    </Box>
  );
};

// 풀더 아이콘
const FolderIcon = ({ name, focus, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100px",
        height: "120px",
        float: "left",
        margin: "5px",
        backgroundColor: focus ? "rgba(59, 130, 234, 0.2)" : "",
      }}
    >
      <Folder
        sx={{
          width: "100%",
          fontSize: "80px",
        }}
      />
      <Typography align="center">{name}</Typography>
    </Box>
  );
};

const FileManage = () => {
  const [focus, setFocus] = useState("");

  const focusLogic = (name) => {
    if (focus === name) {
      console.log("접속");
    } else {
      setFocus(name);
    }
  };

  useEffect(() => {
    axios.get("/file?path=-la /").then(({ data }) => {
      data = data.split(" ");
      data.shift();
      data = data.map((el, index) => {
        if (index % 10 === 0) {
          console.log(el);
        }
      });
      console.log(data);
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "200px",
        backgroundColor: "#1b2830",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#0f1c25",
          paddingLeft: "12px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        <AccountTree sx={{ marginRight: "12px" }} />
        경로
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <FileIcon
          name="a"
          onClick={() => focusLogic("a")}
          focus={focus === "a"}
        />
        <FileIcon
          name="b"
          onClick={() => focusLogic("b")}
          focus={focus === "b"}
        />
        <FileIcon
          name="c"
          onClick={() => focusLogic("c")}
          focus={focus === "c"}
        />
        <FolderIcon
          name="d"
          onClick={() => focusLogic("d")}
          focus={focus === "d"}
        />
      </Box>
    </Box>
  );
};

export default FileManage;
