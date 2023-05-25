const Wines = ({wine, location, rating, image}) =>
{
    return (
        <div className="wines-container">
            <div className="infowine">
                <img src={image} alt="images" height="300px" width=""></img>
                <h3>{wine}</h3>
                <div>{location}</div>
                <div><strong>Average: </strong><i>{rating.average}</i></div>
                <div><strong>Reviews: </strong><i>{rating.reviews}</i></div>
            </div>
        </div>
    )
}

export default Wines