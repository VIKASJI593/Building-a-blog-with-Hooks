import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  render() {
    return (
      <div className="App" style={{ padding: 10 }}>
        <input value={this.state.email} onChange={this.handleChange} />
        <p>Email:{this.state.email}</p>
      </div>
    );
  }
}
export default App;
