import { Grid,FormControl } from "@mui/material";
import React from "react";


export default class Filterdata extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null,
            episodes: [],
            number: [],
            selectedSeason: ""
        }
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then(resp => {
            //console.log(resp)
            return resp.json().then((data) => {
            
                this.setState({ data: data })
              //  console.log(data)
                this.setState({ episodes: data._embedded.episodes })
                this.TotalSeasons(data._embedded.episodes)

            }
            )
        })
    }



    TotalSeasons = (episodes) => {
        let temp = []
        for (let ele of episodes) {
            if (temp.includes(ele.season) == false) {
                temp.push(ele.season)
            }
        }
        this.setState({ number: temp })
    }



    handleChange = (e) => {
        this.setState({ selectedSeason: e.target.value })
        let temp = this.state.data._embedded.episodes.filter((ele) => {
            if (ele.season == e.target.value ) {
                return true
            }
            else {
                return false
            }
        })
        this.setState({ episodes: temp })

    }





    render() {
        if (this.state.data == null) {
            return <p>LOADING...</p>
        }



        return <div >

            <Grid container spacing={8} xs={12}>

                <Grid item xs={6}><h1>{this.state.data.name}</h1><br /><br />


                    <FormControl >
                        <select onChange={this.handleChange} value={this.state.selectedSeason}>
                            {
                                this.state.number.map((ele) => {
                                    return <option value={ele}>Season {ele
                                    }</option>
                                })
                            }
                        </select>
                    </FormControl>


                    <p dangerouslySetInnerHTML={{ __html: this.state.data.summary }} ></p><br />

                    <p> <b> Episode Info: </b><br /><br />

                        Genres:  {this.state.data.genres.map((ele) => {
                            return <b>{ele} </b>
                        })}
                    </p>

                    <p>Language: {this.state.data.language}, Rating:  {this.state.data.rating.average}</p></Grid>

                <Grid item xs={6} ><img src={this.state.data.image.original} width="500px" display="flex" height="500px"></img></Grid>

            </Grid>




            <div>
                {this.state.episodes.map((e) => {
                    return (<Grid container spacing={8} style={{ fontSize: "18px", width: "80rem", color: "black", display: "run-in", margin: "10px", fontFamily: "Poppins" }}  >
                        <Grid item xs={6}><h3 className="card-title">{e.name}</h3><br />

                            <p dangerouslySetInnerHTML={{ __html: e.summary }}></p><br />

                            <p><h5 >Episode Info:</h5> Number: season-{e.season} {" ,"}  Airdate: {e.airdate}{"  ,"}
                                Runtime: {e.runtime}minutes    Ratings: {e.rating.average}</p><br />

                            <button class="btn btn-danger"><a href={e.url} style={{ fontSize: "18px" }}>Watch</a></button></Grid>
                        <Grid item xs={6}><img src={e.image.original} width="700px" display="flex" height="500px" class="card-img-top"></img> <br /><br /><br /><br /><br /><br /><br /><br /></Grid>


                    </Grid>)

                })


                }




            </div>



        </div>
    }
}

