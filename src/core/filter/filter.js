import React, { Component } from "react";
import { Grid, Row, Col, Button, Clearfix } from "react-bootstrap";
import { StyleSheet, css } from "aphrodite";
/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import {Search,Sort,FilterComponent} from "./utility";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div className={css(styles.filterWrapper)}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <div><Search/></div>
            </Col>
            <Col xs={12} md={3}>
              <div className={css(styles.filtersWrapper,styles.sortStyle)}>
                <Sort/>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className={css(styles.filtersWrapper)}>
                <FilterComponent />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Filter;

const styles = StyleSheet.create({
  filterWrapper: {
    textAlign: "center",
    margin: "10px auto"
  },
  selfService: {
    textAlign: "right"
  },
  sortStyle : {
    paddingTop : "6px"
  },
  filtersWrapper : {
      textAlign : "center"
  }
});
