import React from 'react';
function Login(){
    return (
        <form>
        <div className="divconf">
            <label for="Idemail"><h4>Enter your Email address</h4></label>
            <input type="email" className="form-control" id="Idemail" aria-describedby="emailHelp" placeholder="Enter email"/>
            <br></br>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="divconf">
            <label for="IdPassword"><h4>Enter your Password</h4></label>
            <input type="password" className="form-control" id="IdPassword" placeholder="Password"/>
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1"><h5>Check me out</h5></label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}   
export default Login;