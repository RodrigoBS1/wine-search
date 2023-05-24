const Wines = ({wine, location, image}) =>
{
    return (
        <section className="wines-container">
            <h4>{wine}</h4>
            <div className="infowine">
                <div>{location}</div>
                <div>{image}</div>
            </div>
        </section>
    )
}

export default Wines