import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import { sortByAbv } from "../../../stateManager/actions";

class SortComponent extends Component {
  state = {
    sortType: "down",
    sortStatus: false,
    tmpData: [
      {
        abv: "0.05",
        ibu: "",
        id: 1436,
        name: "Pub Beer",
        beerStyle: "American Pale Lager",
        ounces: 12.0
      },
      {
        abv: "0.06",
        ibu: "",
        id: 2265,
        name: "Devils Cup",
        beerStyle: "American Pale Ale (APA)",
        ounces: 12.0
      },
      {
        abv: "0.07",
        ibu: "",
        id: 2264,
        name: "Rise of the Phoenix",
        beerStyle: "American IPA",
        ounces: 12.0
      },
      {
        abv: "0.09",
        ibu: "",
        id: 2263,
        name: "Sinister",
        beerStyle: "American Double / Imperial IPA",
        ounces: 12.0
      },
      {
        abv: "0.07",
        ibu: "",
        id: 2262,
        name: "Sex and Candy",
        beerStyle: "American IPA",
        ounces: 12.0
      },
      {
        abv: "0.07",
        ibu: "",
        id: 2261,
        name: "Black Exodus",
        beerStyle: "Oatmeal Stout",
        ounces: 12.0
      },
      {
        abv: "0.04",
        ibu: "",
        id: 2260,
        name: "Lake Street Express",
        beerStyle: "American Pale Ale (APA)",
        ounces: 12.0
      },
      {
        abv: "0.06",
        ibu: "",
        id: 2259,
        name: "Foreman",
        beerStyle: "American Porter",
        ounces: 12.0
      },
      {
        abv: "0.05",
        ibu: "",
        id: 2258,
        name: "Jade",
        beerStyle: "American Pale Ale (APA)",
        ounces: 12.0
      },
      {
        abv: "0.08",
        ibu: "",
        id: 2131,
        name: "Cone Crusher",
        beerStyle: "American Double / Imperial IPA",
        ounces: 12.0
      },
      {
        abv: "0.07",
        ibu: "",
        id: 2099,
        name: "Sophomoric Saison",
        beerStyle: "Saison / Farmhouse Ale",
        ounces: 12.0
      }
    ]
  };
  sortByAbv =  () => {
    // Correct
    this.setState({
        sortStatus : true
    },()=>{

     if (this.state.sortType == "down") {
      // descending order

      const filteredData = this.sortFilter("down");
      this.props.sortByAbv(filteredData);
      this.setState({
        sortType: "up",
        sortStatus : false
      });
    } else {
      const filteredData = this.sortFilter("up");
      this.props.sortByAbv(filteredData);
      this.setState({
        sortType: "down",
        sortStatus : false
      });
    }
    })
  };

  sortFilter =  type => {
    if (type == "up") {
      //ascending order
      const sortedData = this.props.beers.data.sort((first, second) => {
        return first.abv - second.abv;
      });
      return sortedData;
    } else {
      //desending order
      const sortedData = this.props.beers.data.sort((first, second) => {
        return second.abv - first.abv;
      });
      return sortedData;
    }
  };

  render() {
    return (
      <Button
        loading={this.state.sortStatus}
        icon
        color="orange"
        onClick={this.sortByAbv}
      >
        <Icon name={`long arrow ${this.state.sortType}`} />Sort{" "}
        {this.state.sortType == "down" ? "Descending Order" : "Ascending Order"}By
        ABV
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers
  };
};

export default connect(mapStateToProps, { sortByAbv })(SortComponent);
