import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import { connect } from "react-redux";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import _ from "lodash";
import { Label,Card,Image,Icon } from "semantic-ui-react";

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import "./search.css";
import {randomImageNumberGenerator} from "../../utilityComponents";
import {searchByName} from "../../../stateManager/actions";

class SearchComponent extends Component {
  state = {
    isLoading: false,
    results: [],
    value: "Search By Name",
  };

  handleResultSelect = (e, { result }) =>{
      this.setState({ value: result.name });
      this.props.searchByName([result]);
  }
  

  resetComponent = () =>{
      this.setState({ isLoading: false, value: "" });
      this.props.searchByName([])
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    // Hide loading when value is empty
    if(value==""){
        this.setState({
            isLoading: false,
          });
    }

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.name);

      this.props.searchByName(_.filter(this.props.beers.data, isMatch))

      this.setState({
        isLoading: false,
      });
    }, 300);
  };

  clearDefaultText = ()=>{
      if(this.state.value == "Search By Name"){
        this.setState({
            value : ""
        })
      }
  }

  render() {
    const { isLoading, value, results } = this.state;
    const {filteredData} = this.props.beers;

    return (
      <div>
        <Search
          onFocus={this.clearDefaultText}
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true
          })}
          results={filteredData}
          value={value}
          {...this.props}
          resultRenderer={resultRenderer}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers
  };
};
export default connect(mapStateToProps, {searchByName})(SearchComponent);

const styles = StyleSheet.create({
  searchWrapper: {
    textAlign: "center"
  },
  customSearchWrapper: {
    height: "400px",
    overflow: "hidden"
  },
  "resultText": {
      textAlign : "left"
  }
});

const resultRenderer = ({ name, ...extra }) => {
  return (
    <div className={css(styles.resultText)} key={extra.id}>
        <Label><Icon name="beer" size="large" color="orange" /> {name}</Label>
    </div>
  );
};

resultRenderer.propTypes = {
  name: PropTypes.string
};
