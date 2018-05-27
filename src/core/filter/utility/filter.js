import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";
import { StyleSheet, css } from "aphrodite";
import {connect} from "react-redux";
import { Label } from "semantic-ui-react";

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import "./filter.css";
import {filterByStyle} from "../../../stateManager/actions";
class FilterComponent extends Component {
  state = {
      value : "lager"
  };
  handleChange = async (e, { value }) => {
      this.setState({ value })
      const filteredData = this.filterData(value)
      this.props.filterByStyle(filteredData);

  }

  filterData = (value)=>{
      return this.props.beers.data.filter((data,index)=>{
       return (data.beerStyle.indexOf(value) > -1)
    })
  }
  

  render() {
    return (
      <div>
        <div className={css(styles.radioButton)}>
           <Label size="small">Filter By :</Label>
          <Radio
            className={css(styles.radioButton)}
            label="Lager"
            name="filter"
            value="Lager"
            checked={this.state.value === "Lager"}
            onChange={this.handleChange}
          />

          <Radio
            className={css(styles.radioButton)}
            label="Ale"
            name="filter"
            value="Ale"
            checked={this.state.value === "Ale"}
            onChange={this.handleChange}
          />

          <Radio
            className={css(styles.radioButton)}
            label="IPA"
            name="filter"
            value="Ipa"
            checked={this.state.value === "Ipa"}
            onChange={this.handleChange}
          />

          <Radio
          className={css(styles.radioButton)}
          label="APA"
          name="filter"
          value="Apa"
          checked={this.state.value === "Apa"}
          onChange={this.handleChange}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      beers: state.beers
    };
  };
  export default connect(mapStateToProps, {filterByStyle})(FilterComponent);
  
  const styles = StyleSheet.create({
    radioButton: {
      textAlign: "center",
      margin : "6"
    },

  });