const Wines = ({wine, location, rating, image}) =>
{
    return (
        <div className="wines-container">
            <div className="infowine">
                <img src={image} alt="images" height="300px" width=""></img>
                <h4>{wine}</h4>
                <div>{location}</div>
                <div>{rating}</div>
            </div>
        </div>
    )
}

export default Wines