import { Grid } from "@mui/material"

function Season1(props) {
    return <div>

        {props.data.map((e) => {
            
                    return (<Grid container spacing={8} xs={12} >

                        <Grid item xs={6}>

                            <p dangerouslySetInnerHTML={{ __html: e.summary }}></p><br />

                            <p ><h5 >Episode Info:</h5>
                                Number: season-{e.season} {" ,"}  Airdate: {e.airdate}{"  ,"}
                                Runtime: {e.runtime}minutes    Ratings: {e.rating.average}
                            </p><br />

                            <button class="btn btn-danger"><a href={e.url} >Watch</a></button></Grid>
                        <Grid item xs={6}><img src={e.image.medium} class="card-img-top"></img> <br /><br /><br /><br /><br /><br /><br /><br />
                        </Grid>


                    </Grid>)
                

            })}
        

        

    </div>
}

export default Season1