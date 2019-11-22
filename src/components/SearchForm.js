import React from "react";
import "../styles/SearchForm.css";

export default class SearchForm extends React.Component {
  render() {
    return (
      <section className="SearchForm">
        <form
          id="form"
          onSubmit={e =>
            this.props.onSubmit(
              e,
              e.target["searchCategory"].value,
              e.target["searchTerm"].value
            )
          }
        >
          <select id="searchCategory" required>
            <option value="">Which do you want to search</option>
            <option value="people">Characters</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
          </select>
          <input
            type="text"
            id="searchTerm"
            placeholder="Skywalker (Optional)"
          />
          <button id="submitBtn">search</button>
        </form>
      </section>
    );
  }
}
