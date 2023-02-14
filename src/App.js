import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "" };
  }
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div className="App" style={{ padding: 10 }}>
        <input value={this.state.email} onChange={this.handleChange} />

        <input value={this.state.name} onChange={this.handleChangeName} />
        <p>Email:{this.state.email}</p>
        <p>Name:{this.state.name}</p>
      </div>
    );
  }
}
export default App;
