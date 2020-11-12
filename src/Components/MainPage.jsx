import React, { Component } from "react";
import Info from "../Info.json";
import List from "./List";

export class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      list: Info,
    };
  }
  categoryChange = (e) => {
    const category = e.target.value;
    this.setState({
      category: category,
    });
  };

  render() {
    const { category, list } = this.state;
    var filterList = [];
    if (category.length <= 12) {
      filterList = list.filter((image) =>
        image.category.toLowerCase().includes(category.toLowerCase())
      );
    } else {
      filterList = [...list];
    }
    return (
      <div>
        <div className="categorySelect">
          <select id="category" onChange={this.categoryChange}>
            <option value="Artwork/Illustration" default>
              Artwork/Illustration
            </option>
            <option value="Artwork">Artwork</option>
            <option value="Illustration">Illustration</option>
          </select>
        </div>
        <List Info={filterList} />
      </div>
    );
  }
}

export default MainPage;
