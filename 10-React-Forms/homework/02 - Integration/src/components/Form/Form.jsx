import React from "react";
import style from "./Form.module.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.state = {
      errors: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (evento) => {
    //console.log(evento.target.name);
    if (evento.target.name === "username") {
      this.setState({
        username: evento.target.value,
        password: this.state.password,
      });
    } else {
      this.setState({
        username: this.state.username,
        password: evento.target.value,
      });
    }
  };

  render() {
    return (
      <div className={style.div}>
        <label className={style.label}>Username:</label>
        <input
          type="text"
          name="username"
          value={this.props.username}
          onChange={this.handleInputChange}
          className={style.input}
        />

        <label className={style.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={this.props.password}
          onChange={this.handleInputChange}
          className={style.input}
        />

        <button className={style.button}>LOGIN</button>
      </div>
    );
  }
}
