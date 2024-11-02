import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        avatar_url: "dummy picture",
      },
    };
    console.log(this.props.name, " constructor");
  }
  async componentDidMount() {
    console.log(this.props.name, ":-Child componentDidMount");
    const data = await fetch("https://api.github.com/users/itachi-uch");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    //We do API calls here
  }
  render() {
    console.log(this.props.name, " render");

    const { name, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h3>
          <img src={avatar_url}></img>
        </h3>
      </div>
    );
  }
}

export default UserClass;
