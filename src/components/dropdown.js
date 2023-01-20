import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { textAlign } from "@mui/system"
import React from "react"
export default class Dropdown extends React.Component {

    constructor() {
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then(resp => {
            console.log(resp)
            return resp.json().then((data) => this.setState({ data: data }))
        })
    }



    render() {

        return <div >
        <FormControl style={{fontSize:"30px", textAlign:"center"}}> 
            <select style={{fontSize:"20px"}}>
                <option>Seasons </option>
                
                <option>Seasons 1</option>
                <option>Seasons 2</option>
                <option>Seasons 3</option>
                
          
             
            </select>
            </FormControl>
  
        </div>
    }
}