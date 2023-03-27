import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { Box } from "@mui/system";

const plyrOptions = {
  controls: [
    "play",
    "rewind",
    "fast-forward",
    "progress",
    "current-time",
    "duration",
    "mute",
    "volume",
    "settings",
    "airplay",
    "fullscreen",
  ],
};

function Player({ url, provider }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: {
          xxs: 0,
          xs: 350, //0
          sm: 600, // 600
          md: 900, // 900
          lg: 1200, // 1200
          xl: 1536, // 1536
        },
      }}
    >
      <Plyr
        options={plyrOptions}
        source={{
          poster: "src/assets/Components/Player/Posters/MovieTime.jpg",
          type: "video",
          sources: [
            {
              src: url,
              type: "video/mp4",
              provider: provider,
            },
          ],
        }}
      />
    </Box>
  );
}

export default React.memo(Player);
