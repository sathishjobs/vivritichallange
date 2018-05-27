import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import { Filter } from "../filter";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Filter />
        </div>
        <div className={css(styles.cartText)}>
          <br />
          <h4>Cart Goes Here (No Time Friend)</h4>
        </div>
      </div>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  cartText: {
    textAlign: "center"
  }
});
