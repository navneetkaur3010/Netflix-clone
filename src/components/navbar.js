import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button
} from "@mui/material";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: " ",
    };
  }

  render() {
    return (
      <div className="navbar">
        <AppBar
          sx={{
            backgroundImage:
              "linear-gradient(90deg, rgba(36,0,6,1) 25%, rgba(180,10,51,1) 50%, rgba(130,49,68,1) 62%, rgba(57,24,32,1) 73%)",
          }}
        >
          <Toolbar>
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={2}>
                <Typography></Typography>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  {" "}
                  Netflix
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <Tabs
                  value={1}
                  textColor="white"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="one" label="Home" />
                  <Tab value="two" label="Series" />
                  <Tab value="three" label="Movies" />
                  <Tab value="three" label="Orignal" />
                  <Tab value="three" label="Recently Added" />
                </Tabs>
              </Grid>

              <Grid item xs={1} />
              <Grid item xs={3}>
                <Box display="flex">
                  <Button
                    sx={{ marginLeft: "auto", background: "rgba(36,0,6,1)" }}
                    variant="contained"
                  >
                    SignUp
                  </Button>
                  <Button
                    sx={{ marginLeft: 1, background: "rgba(36,0,6,1)" }}
                    variant="contained"
                  >
                    LogIn
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
