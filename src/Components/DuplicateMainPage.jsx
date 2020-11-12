import React, { Component } from "react";
import Info from "../Info.json";
import List from "./List";
import { Button, ButtonGroup } from "react-bootstrap";

export class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      list: Info,
    };
  }

  AllBtnHandler = (e) => {
    e.preventDefault();
    this.setState({
      category: "",
    });
  };
  ArtworksBtnHandler = (e) => {
    e.preventDefault();
    this.setState({
      category: "Artwork",
    });
  };
  IllustrationBtnHandler = (e) => {
    e.preventDefault();
    this.setState({
      category: "Illustration",
    });
  };

  render() {
    const { category, list } = this.state;
    var filterList = [];
    if (category.length !== 0) {
      filterList = list.filter((image) =>
        image.category.toLowerCase().includes(category.toLowerCase())
      );
    } else {
      filterList = [...list];
    }
    return (
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light" onClick={this.AllBtnHandler}>
            All
          </Button>
          <Button variant="light" onClick={this.ArtworksBtnHandler}>
            Artworks
          </Button>
          <Button variant="light" onClick={this.IllustrationBtnHandler}>
            Illustration
          </Button>
        </ButtonGroup>
        <List Info={filterList} />
      </div>
    );
  }
}

export default MainPage;
