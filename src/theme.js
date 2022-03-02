import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#173A5E",
    },
    text: {
      primary: "#173ED0",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default theme;
