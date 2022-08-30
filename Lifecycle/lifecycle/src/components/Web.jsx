import React, { Component } from "react";

class Web extends Component {
  state = {
    users: [],
  };
  submit = () => {
    alert(this.state.name);
  };
  prevent = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    this.setState({
      users: [...this.state.users, {"username":{username}, "password":{password}}],
    });
    console.log(this.state.users);
  };
  handle = (event) => {
    const { name, value } = event.target;
    this.setState({
      users: [...this.state.users, {}],
    });
  };

  render() {
    return (
      <>
        <div className="text-center my-4 ">
          <form onSubmit={this.prevent}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              id="username"
            //   onChange={this.handle}
            ></input>
            <br />
            <label>Password:</label>

            <input
              type="password"
              name="password"
              id="password"
            //   value={this.state.password}
            //   onChange={this.handle}
            ></input>
            <br />

            <button type="submit" className="btn btn-primary">submit</button>
          </form>
          {JSON.stringify(this.state.data)}
        </div>
      </>
    );
  }
}

export default Web;
