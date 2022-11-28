import Button from "./Button"
const Hero = () => {
    return(
        <div className="hero--container">
                <section className="hero--text">
                    <h1>Protocals for life</h1>
                    <h2>Consistency made easy</h2>
                    <p>Create and complete protocols designed to carry you forward consistently one day at a time. Build new habits, achieve new milestones and improve your life.</p>
                   
                    <section className="hero--buttons">
                        <Button text={'Learn More'}/>
                        <Button text={'Sign Up'} />
                    </section>
                    <section className="hero--box box--top"></section>
                    <section className="hero--box box--bottom"></section>
                   
                </section>
                <section className="hero--img">
                    <img src="/inkscape.svg"/>
                </section>           
        </div>
    )
}

export default Hero