const InfoBox = (props) => {
    return (
        <div className="infoBox--container">
            <section className="infoBox--title">
                <span>{props.icon}</span><h3>{props.title}</h3>
            </section>
            <p>{props.text}</p>
        </div>
    )
}

export default InfoBox