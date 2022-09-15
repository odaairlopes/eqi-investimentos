import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "10px",
          border: "1px solid black",
          "&.Mui-selected": {
            backgroundColor: "#ED8E53",
            color: "#fff",
            borderLeft: "1px solid black",
            border: "1px solid black",
          },
        },
      },
    },
  },
});
