import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

function LinkField({ fetchVideo }) {
  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  function callback() {
    setUrl("");
    fetchVideo(url);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        sx={{
          width: {
            xxs: 0,
            xs: 270, //0
            sm: 400, // 600
            md: 600, // 900
            lg: 600, // 1200
            xl: 600, // 1536
          },
        }}
        fullWidth
        label="Movie Link"
        id="fullWidth"
        value={url}
        onChange={handleChange}
      />
      <Button size="Large" onClick={callback}>
        PLAY
      </Button>
    </Box>
  );
}
export default LinkField;
