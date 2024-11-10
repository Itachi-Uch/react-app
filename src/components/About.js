import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>This is about page </h1>
        <userContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-lg font-bold">{loggedInUser}</h1>
          )}
        </userContext.Consumer>
        <UserClass name="child1" location="Raipur" />
      </div>
    );
  }
}
export default About;

/**
 * parent constructor
 * parent render
 * child1 constructor
 * child1 render
 * child2 constructor
 * child2 render
 * child 3 constructor
 * child 3 render
 * child 4 constructor
 * child 4 render
 * child 1 componentDidmount
 * child 2 componentDidmount
 * child 3 componentDidmount
 * parent componentDidmount
 *
 */
