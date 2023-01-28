import React, {Component} from 'react'

export default class SignUp extends Component {
  constructor(props) {  
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    }; 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(e) {
        e.preventDefault();
        const {fname,lname,email,password} = this.state;
        console.log(fname,lname,email,password);
        fetch("http://localhost:5000/register",{
            method: "POST",
            crossDomain: true,
            headers: {"Content-Type": "application/json", "accept": "application/json",
            "access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({fname,lname,email,password 
        }),
    }).then((res)=> res.json())
    .then((data)=> {
        console.log(data, "userRegister");
    });
}
render () {
    return (
    <form onSubmit={this.handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Fist Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          onChange={(e) => this.setState({fname: e.target.value})}
        />
      </div>
      <div className="mb-3">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Larst Name"
          onChange={(e) => this.setState({lname: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => this.setState({email: e.target.value})}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => this.setState({password: e.target.value})}
        />
      </div>
      
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
    
  );
    }}