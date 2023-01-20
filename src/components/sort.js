// import React from 'react';
// import { Grid, Input, Button } from "@mui/material";
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import { UpdateDisabled } from '@mui/icons-material';
// export default class Sort extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             episodes: [],


//         }
//     }

//     componentDidMount() {
//         fetch("http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes").then(resp => {
//             return resp.json().then((data) => {
//                 this.setState({ data: data })
//                 this.setState({ episodes: data._embedded.episodes })

//             }
//             )
//         })
//     }




//     ascending = () => {
//         let temp=""
//         let sorted=this.state.episodes.map((x)=>x)
//         for (let i=0;i<sorted.length;i++){
//             for(let j=0;j<sorted.length-1-i;j++){
//                 if(sorted[j].name.slice(0,1)>sorted[j+1].name.slice(0,1)){
//                     temp=sorted[j];
//                     sorted[j]=sorted[j+1];
//                     sorted[j+1]=temp

//                 }
//             }
//         }
//         this.setState({episodes:sorted})
//     }


    
//     descending = () => {
//         let temp=""
//         let sorted=this.state.episodes.map((x)=>x)
//         for (let i=0;i<sorted.length;i++){
//             for(let j=0;j<sorted.length-1-i;j++){
//                 if(sorted[j].name.slice(0,1)<sorted[j+1].name.slice(0,1)){
//                     temp=sorted[j];
//                     sorted[j]=sorted[j+1];
//                     sorted[j+1]=temp

//                 }
//             }
//         }
//         this.setState({episodes:sorted})
//     }

//     // ascending=()=>{
//     //     let temp=""
//     //     let sorted=this.state.episodes.map((x)=>x)
//     //     for(let ele of sorted){
//     //         if(ele.name.sort((a,b)=>a.name>b.name?1:-1)){
//     //         ele=sorted
//     //         }
//     //     }
//     //     this.setState({episodes:sorted})

//     // }





//     render() {
//         if (this.state.data == null) {
//             return <p>LOADING...</p>
//         }





//         return <div >

//             <div >

//                 <Button onClick={this.ascending} >Sort<KeyboardDoubleArrowUpIcon /></Button>
//                 <Button onClick={this.descending} >Sort<KeyboardDoubleArrowDownIcon/></Button>



//             </div>

//             <div >

//                 <Grid container spacing={8} xs={12}>

//                     <Grid item xs={6}><h1>{this.state.data.name}</h1><br /><br />
//                         <p dangerouslySetInnerHTML={{ __html: this.state.data.summary }} ></p><br />

//                         <p> <b> Episode Info: </b><br /><br />

//                             Genres:  {this.state.data.genres.map((ele) => {
//                                 return <b>{ele} </b>
//                             })}
//                         </p>

//                         <p>Language: {this.state.data.language}, Rating:  {this.state.data.rating.average}</p></Grid>

//                     <Grid item xs={6} ><img src={this.state.data.image.original} width="250px" display="flex" height="350px"></img></Grid>

//                 </Grid>
//             </div>

//             <div className="result">
//                 {this.state.episodes.map((e) => {
//                     return (<Grid container spacing={8} style={{ fontSize: "18px", width: "80rem", color: "black", display: "run-in", margin: "10px", fontFamily: "Poppins" }}  >
//                         <Grid item xs={6}><h3 className="card-title">{e.name}</h3><br />

//                             <p dangerouslySetInnerHTML={{ __html: e.summary }}></p><br />

//                             <p><h5 >Episode Info:</h5> Number: season-{e.season} {" ,"}  Airdate: {e.airdate}{"  ,"}
//                                 Runtime: {e.runtime}minutes    Ratings: {e.rating.average}</p><br />

//                             <button class="btn btn-danger"><a href={e.url} style={{ fontSize: "18px" }}>Watch</a></button></Grid>
//                         <Grid item xs={6}><img src={e.image.original} width="700px" display="flex" height="500px" class="card-img-top"></img> <br /><br /><br /><br /><br /><br /><br /><br /></Grid>


//                     </Grid>)

//                 })


//                 }




//             </div>






//         </div>
//     }



// }