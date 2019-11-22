import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DisplayResults from "./components/DisplayResults";

class App extends React.Component {
  state = {
    category: "",
    term: "",
    results: [],
    error: ""
  };

  onSubmit = (e, category, term) => {
    e.preventDefault();
    this.setState({ category: category });
    this.setState({ term: term });
    this.setState({ results: [] });
    this.setState({ count: "" });
    this.ApiCall(category, term);
  };

  BASE_URL = "https://swapi.co/api/";

  ApiCall = (category, term) => {
    fetch(`${this.BASE_URL}${category}/?search=${term}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(resJson => {
        if (resJson.count === 0) {
          this.setState({ count: 0 });
        } else {
          this.setState({ results: resJson.results });
        }
      })
      .catch(err => this.setState({ error: err.message }));
  };

  setResults = e => {
    this.setState({ results: e });
  };

  render() {
    const renderResults = () => {
      if (this.state.results.length > 0) {
        return <DisplayResults state={this.state} />;
      } else if (this.state.count === 0) {
        return (
          <h3 className="no-result">Sorry I don't know who or what that is.</h3>
        );
      } else {
        return "";
      }
    };

    return (
      <div className="App">
        <Header />
        <h5 className="errorPrompt">{this.state.error}</h5>
        <SearchForm onSubmit={this.onSubmit} />
        <main>{renderResults()}</main>
      </div>
    );
  }
}

export default App;
