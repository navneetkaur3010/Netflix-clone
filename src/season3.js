
function Season3(props) {
    return <div>

        {props.data._embedded.episodes.map((e) => {
            {
                if (e.season == 3) {
                    return (<div container spacing={8} xs={12} >

                        <div item xs={6}>

                            <p dangerouslySetInnerHTML={{ __html: e.summary }}></p><br />

                            <p ><h5 >Episode Info:</h5>
                                Number: season-{e.season} {" ,"}  Airdate: {e.airdate}{"  ,"}
                                Runtime: {e.runtime}minutes    Ratings: {e.rating.average}
                            </p><br />

                            <button class="btn btn-danger"><a href={e.url} >Watch</a></button></div>
                        <div item xs={6}><img src={e.image.original} class="card-img-top"></img> <br /><br /><br /><br /><br /><br /><br /><br />
                        </div>


                    </div>)
                }

            }
        })

        }

    </div>
}

export default Season3