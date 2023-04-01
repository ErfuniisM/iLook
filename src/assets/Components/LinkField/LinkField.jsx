import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import LinkIcon from "@mui/icons-material/Link";

function LinkField({ fetchVideo }) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const [url, setUrl] = useState("");
  const handleChange = (event) => {
    setUrl(event.target.value);
    // Chaeck Url Link
    const { value } = event.target;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const validUrl = urlRegex.test(value);
    setInputValue(value);
    setInputError(!validUrl);
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
        error={inputError}
        helperText={inputError ? "inCorrect Link!" : ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LinkIcon sx={{ cursor: "pointer" }} onClick={callback} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
export default LinkField;
