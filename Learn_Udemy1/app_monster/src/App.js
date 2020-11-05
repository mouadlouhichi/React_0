import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.components.jsx";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monsters: user }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div className="App">
          <h1>Monster Finder</h1>
          <SearchBox
            placeholder="Search Box"
            handleChange={this.handleChange}
          />
          <br />
          <br />
          <CardList monsters={filterMonsters} />
        </div>
      </>
    );
  }
}

export default App;
