import React from "react";
import "../styles/DisplayResults.css";

export default class DisplayResults extends React.Component {
  render() {
    console.log(this.props.state);
    console.log(this.props.state.results);
    const people = this.props.state.results.map(item => {
      return (
        <li>
          <h3>{item.name}</h3>
          <p>
            <span>Birth year</span>: {item.birth_year}
          </p>
          <p>
            <span>Eye color</span>: {item.eye_color}
          </p>
          <p>
            <span>Hair Color</span>: {item.hair_color}
          </p>
          <p>
            <span>Skin Color</span>: {item.skin_color}
          </p>
          <p>
            <span>Height</span>: {item.height} cm.
          </p>
        </li>
      );
    });
    const planets = this.props.state.results.map(item => {
      return (
        <li>
          <h3>{item.name}</h3>
          <p>
            <span>Climate</span>: {item.climate}
          </p>
          <p>
            <span>Diameter</span>: {item.diameter}
          </p>
          <p>
            <span>Oribital Period</span>: {item.oribital_period}
          </p>
          <p>
            <span>Population</span>: {item.population}
          </p>
          <p>
            <span>Climate</span>: {item.climate}
          </p>
          <p>
            <span>Terrian</span>: {item.terrain}
          </p>
        </li>
      );
    });
    const starships = this.props.state.results.map(item => {
      return (
        <li>
          <h3>{item.name}</h3>
          <p>
            <span>Model</span>: {item.model}
          </p>
          <p>
            <span>Starship Class</span>: {item.starship_class}
          </p>
          <p>
            <span>Crew</span>: {item.crew}
          </p>
          <p>
            <span>Passengers</span>: {item.passengers}
          </p>
          <p>
            <span>Cargo Capacity</span>: {item.cargo_capacity}
          </p>
          <p>
            <span>Cost in Credits</span>: {item.cost_in_credits}
          </p>
          <p>
            <span>Hyperdrive Rating</span>: {item.hyperdrive_rating}
          </p>
          <p>
            <span>Length</span>: {item.length}
          </p>
        </li>
      );
    });
    if (this.props.state.category === "people") {
      return <ul>{people}</ul>;
    } else if (this.props.state.category === "planets") {
      return <ul>{planets}</ul>;
    } else if (this.props.state.category === "starships") {
      return <ul>{starships}</ul>;
    }
  }
}
