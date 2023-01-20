import { Grid, Input, Button } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"; 
import { FormControl, Link,Typography } from "@mui/material";
import "./index.css";

export default class Edisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      episodes: [],
      number: [],
      selectedSeason: "",
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch(
      "http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes"
    ).then((resp) => {
      console.log(resp);
      return resp.json().then((data) => {
        this.setState({ data: data });
        console.log(data);
        this.setState({ episodes: data._embedded.episodes });
        this.TotalSeasons(data._embedded.episodes);
      });
    });
  }

  TotalSeasons = (episodes) => {
    let temp = [];
    for (let ele of episodes) {
      if (temp.includes(ele.season) == false) {
        temp.push(ele.season);
      }
    }
    this.setState({ number: temp });
  };

  handleChange = (e) => {
    this.setState({ selectedSeason: e.target.value });
    let temp = this.state.data._embedded.episodes.filter((ele) => {
      if (ele.season == e.target.value) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ episodes: temp });
  };

  onChangesrch = (e) => {
    this.setState({ searchInput: e.target.value });
    let temp = this.state.data._embedded.episodes.filter((ele) => {
      return ele.name.toLowerCase().match(e.target.value);
    });

    this.setState({ episodes: temp });
  };

  ascending = () => {
    let temp = "";
    let sorted = this.state.episodes.map((x) => x);
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[j].name.slice(0, 1) > sorted[j + 1].name.slice(0, 1)) {
          temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
    this.setState({ episodes: sorted });
  };

  descending = () => {
    let temp = "";
    let sorted = this.state.episodes.map((x) => x);
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length - 1 - i; j++) {
        if (sorted[j].name.slice(0, 1) < sorted[j + 1].name.slice(0, 1)) {
          temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
    this.setState({ episodes: sorted });
  };

  render() {
    if (this.state.data == null) {
      return (
        < Typography variant="p" 
          style={{
            backgroundColor: "black",
            margin: "50px",
            textAlign: "center",
          }}
        >
          LOADING...
        </Typography>
      );
    }

    var searchItems = { data: this.state.data };

    return (
      <div>
        {" "}
        <br /> <br />
        <Navbar />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4"  style={{ color: "white", textAlign: "center",fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold'" }}>
            Unlimited movies, <br />
            TV shows and more.
          </Typography>
          <h4 style={{ color: "white", textAlign: "center" }}>
            Watch anywhere. Cancel anytime. Ready to watch?{" "}
          </h4>

          <div>
            <Input
              type="text"
              style={{ backgroundColor: "white" }}
              value={this.state.searchInput}
              onChange={this.onChangesrch}
              placeholder="Search..."
            />
            <Button style={{ color: "white" }}>Search</Button>
          </div>
        </div>
        <Grid
          container
          spacing={8}
          xs={12}
          style={{
            width: "80rem",
            display: "run-in",
            margin: "30px",
            fontFamily: "Poppins",
          }}
        >
          <Grid item xs={6}>
            <h1 style={{ fontSize: "35px" }}>{this.state.data.name}</h1>
            <br />
            <br />
            <FormControl style={{ fontSize: "30px", textAlign: "center" }}>
              <select
                style={{ fontSize: "20px" }}
                onChange={this.handleChange}
                value={this.state.selectedSeason}
              >
                Seasons
                {this.state.number.map((ele) => {
                  return (
                    <option onChange={this.epinumber} value={ele}>
                      Season {ele}
                    </option>
                  );
                })}
              </select>
            </FormControl>{" "}
            <br />
            <br />
            <Button
              onClick={this.ascending}
              style={{
                background: "white",
                color: "black",
                fontSize: "12px",
                height: "20px",
              }}
            >
              Sort
              <KeyboardDoubleArrowUpIcon />
            </Button>
            <Button
              onClick={this.descending}
              style={{
                background: "white",
                color: "black",
                fontSize: "12px",
                height: "20px",
              }}
            >
              Sort
              <KeyboardDoubleArrowDownIcon />
            </Button>
            <Typography variant="p"
              dangerouslySetInnerHTML={{ __html: this.state.data.summary }}
              style={{ fontSize: "18px", fontFamily: "Montserrat" }}
            ></Typography>
            <br />
            < Typography variant="p" style={{ fontSize: "18px" }}>
              {" "}
              <b> Episode Info: </b>
              <br />
              <br />
              Genres:{" "}
              {this.state.data.genres.map((ele) => {
                return <b>{ele} </b>;
              })}
            </Typography>
            <Typography variant="p">
              Language: {this.state.data.language}, Rating:{" "}
              {this.state.data.rating.average}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <img
              src={this.state.data.image.original}
              width="700px"
              display="flex"
              height="500px"
              style={{ flexDirection: "column", display: "run-in" }}
            ></img>
          </Grid>
        </Grid>
        <div style={{ width: "80rem", display: "run-in", margin: "30px" }}>
          {this.state.episodes.map((e) => {
            return (
              <Grid
                container
                spacing={8}
                style={{
                  fontSize: "18px",
                  width: "80rem",
                  color: "white",
                  display: "run-in",
                  margin: "10px",
                  fontFamily: "Poppins",
                }}
              >
                <Grid item xs={6}>
                  < Typography variant="h5" className="card-title" style={{fontFamily:"Haettenschweiler"}}>{e.name}</Typography>
                  <br />

                  <Typography variant="p" style={{fontFamily:"Haettenschweiler"}}  dangerouslySetInnerHTML={{ __html: e.summary }}></Typography>
                  <br />

                  <Typography variant="p">
                    <Typography variant="h5" style={{fontFamily:"Haettenschweiler"}}>Episode Info:</Typography> Number: season-{e.season} {" ,"}{" "}
                    Airdate: {e.airdate}
                    {"  ,"}
                    Runtime: {e.runtime}minutes Ratings: {e.rating.average}
                  </Typography>
                  <br /> <br/>

                  <Button class="btn btn-danger">
                    <Link href={e.url} style={{ fontSize: "18px" }}>
                      Watch
                    </Link>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src={e.image.original}
                    width="700px"
                    display="flex"
                    height="500px"
                    class="card-img-top"
                  ></img>{" "}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Grid>
              </Grid>
            );
          })}
        </div>
      </div>
    );
  }
}
