const Signup = () => {
    return(
        <div className="signup--container">
            <div className="form--container">
                <p className="signup--text">Sign up today!</p>
                <form>
                    <input placeholder="Username"/>
                    <input placeholder="Email"/>
                    <input placeholder="Password"/>
                    <input placeholder="Confirm Password"/>
                    <button className="button">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup