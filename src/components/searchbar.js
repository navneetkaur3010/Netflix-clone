import React from "react";
import { Grid, Input, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default class Searchbar extends React.Component {
    constructor() {
        super()
        this.state = {
            episodes: [],
            searchInput: ""
        }
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then(resp => {
            return resp.json().then((data) => {
                this.setState({ data: data })
                this.setState({ episodes: data._embedded.episodes })
           
            }
            )
        })
    }



    onChangesrch = (e) => {
        this.setState({ searchInput: e.target.value })
        let temp = this.state.data._embedded.episodes.filter((ele) => {
            return ele.name.toLowerCase().match(e.target.value);
        });


        this.setState({ episodes: temp })
    }



    render() {
        if (this.state.data == null) {
            return <p>LOADING...</p>
        }





        return <div >

            <div >
                <Input type="text" style={{backgroundColor:"white"}}  value={this.state.searchInput} onChange={this.onChangesrch} placeholder="Search..." />
                <Button style={{color:"white"  }}>Search</Button>



            </div>

            <div >

                <Grid container spacing={8} xs={12}>

                    <Grid item xs={6}><h1>{this.state.data.name}</h1><br /><br />
                        <p dangerouslySetInnerHTML={{ __html: this.state.data.summary }} ></p><br />

                        <p> <b> Episode Info: </b><br /><br />

                            Genres:  {this.state.data.genres.map((ele) => {
                                return <b>{ele} </b>
                            })}
                        </p>

                        <p>Language: {this.state.data.language}, Rating:  {this.state.data.rating.average}</p></Grid>

                    <Grid item xs={6} ><img src={this.state.data.image.original} width="250px" display="flex" height="350px"></img></Grid>

                </Grid>
            </div>

            <div className="result">
                {this.state.episodes.map((e) => {
                    return (<Grid container spacing={8} style={{ fontSize: "18px", width: "80rem", color: "white", display: "run-in", margin: "10px", fontFamily: "Poppins" }}  >
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