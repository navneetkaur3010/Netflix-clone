import React from "react";
import { Grid, FormControl } from '@mui/material'
import Season1 from "./season1";
import { DataArray } from "@mui/icons-material";
export default class Ddropdown extends React.Component {
    constructor() {
        super()
        this.state = {
            data: null,
            episode: [],
            season: [],
            selectedSeason: ""
        }
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then((resp) => {
            return resp.json().then((data) => {
                this.setState({ data: data })
                this.setState({episode:data._embedded.episodes})
                this.Totalseasons(data._embedded.episodes)
            })
        })
    }

    Totalseasons=(episode)=>{
        let temp=[]
        for(let ele of episode){
            if(temp.includes(ele.season)==false){
                temp.push(ele.season)
            }
        }
        this.setState({season:temp})
    }

    handleChange=(z)=>{
        this.setState({selectedSeason:z.target.value})
        let temp=this.state.data._embedded.episodes.filter((ele)=>{
            if(ele.season==z.target.value){
                return true
            }
            else{
                return false
            }
        })
        this.setState({episode:temp})
    }






    render() {
        if (this.state.data == null) {
            return <p>LOADING......</p>
        }


        return <div>
            <Grid container spacing={8} xs={12} >
                <Grid item xs={6}>
                    <p>{this.state.data.name}, {this.state.data.id},{this.state.data.type},{this.state.data.language}</p>

                    <p dangerouslySetInnerHTML={{ __html: this.state.data.summary }}></p>

                    <p>Genre: {this.state.data.genres.map((ele) => {
                        return <p>{ele} </p>
                    })}</p>

                    <FormControl>
                        
                        <select onChange={this.handleChange} value={this.state.selectedSeason}>
                            
                            {
                                this.state.season.map((x)=>{
                                    return <option value={x}>Season {x}</option>
                                }  )                          }

                        </select>
                    </FormControl>


                </Grid>
                <Grid item xs={6}><img src={this.state.data.image.medium} width="700px" display="flex" height="500px" class="card-img-top"></img> <br /><br /><br /><br /><br /><br /><br /><br /></Grid>

            </Grid>

            <div>

            <div>

               <Season1 data={this.state.episode}/>




            </div>

            </div>
        </div>
    }



}