import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { Grid, Row, Col, Button, Clearfix } from "react-bootstrap";
import { Image, Reveal, Card, Icon, Label, Segment,Container } from "semantic-ui-react";

/**
|--------------------------------------------------
| local imports
|--------------------------------------------------
*/
import { Filter } from "../filter";
import { initialBeerDataLoad } from "../../stateManager/actions";

class Home extends Component {
  state = {
    isReady: false,
    tmpData : [
        {
           "abv":"0.05",
           "ibu":"",
           "id":1436,
           "name":"Pub Beer",
           "beerStyle":"American Pale Lager",
           "ounces":12.0
        },
        {
           "abv":"0.06",
           "ibu":"",
           "id":2265,
           "name":"Devils Cup",
           "beerStyle":"American Pale Ale (APA)",
           "ounces":12.0
        },
        {
           "abv":"0.07",
           "ibu":"",
           "id":2264,
           "name":"Rise of the Phoenix",
           "beerStyle":"American IPA",
           "ounces":12.0
        },
        {
           "abv":"0.09",
           "ibu":"",
           "id":2263,
           "name":"Sinister",
           "beerStyle":"American Double / Imperial IPA",
           "ounces":12.0
        },
        {
           "abv":"0.07",
           "ibu":"",
           "id":2262,
           "name":"Sex and Candy",
           "beerStyle":"American IPA",
           "ounces":12.0
        },
        {
           "abv":"0.07",
           "ibu":"",
           "id":2261,
           "name":"Black Exodus",
           "beerStyle":"Oatmeal Stout",
           "ounces":12.0
        },
        {
           "abv":"0.04",
           "ibu":"",
           "id":2260,
           "name":"Lake Street Express",
           "beerStyle":"American Pale Ale (APA)",
           "ounces":12.0
        },
        {
           "abv":"0.06",
           "ibu":"",
           "id":2259,
           "name":"Foreman",
           "beerStyle":"American Porter",
           "ounces":12.0
        },
        {
           "abv":"0.05",
           "ibu":"",
           "id":2258,
           "name":"Jade",
           "beerStyle":"American Pale Ale (APA)",
           "ounces":12.0
        },
        {
           "abv":"0.08",
           "ibu":"",
           "id":2131,
           "name":"Cone Crusher",
           "beerStyle":"American Double / Imperial IPA",
           "ounces":12.0
        },
        {
           "abv":"0.07",
           "ibu":"",
           "id":2099,
           "name":"Sophomoric Saison",
           "beerStyle":"Saison / Farmhouse Ale",
           "ounces":12.0
        }]
  };

  async componentDidMount() {
    const data = await this.props.initialBeerDataLoad();
    this.setState({
      isReady: true
    });
  }

  // Generate Random beer image for better look
  randomImageNumberGenerator() {
    return Math.floor(Math.random() * 11) + 1;
  }

  render() {
    let { data,filteredData } = this.props.beers;

    // Render filtered data 
    if(filteredData.length > 0){
        data = filteredData;
    }

    // const data = this.state.tmpData

    if (!this.state.isReady) {
      return <div className={css(styles.center)}>
      <div>
      <h1>Loading Beers...<img className={css(styles.loader)} src={require("../../assets/loading.gif")} /></h1>
      </div>
      </div>
    }
    return (
      <Container>
        <div className={css(styles.filterContainer)}>
          <Filter />
        </div>
        <div>
          <Grid>
            <Row className="show-grid">
              {data &&
                data.map((data, index) => (
                // For Fast UI rendering reduce the data length (For Testing)
                  index < 120 && 
                  <Col xs={12} md={3} key={data.id}>
                    <div className={css(styles.cardWrapper)}>
                      <Card>
                        <Segment className={css(styles.segmentAlter)}>
                          <Label
                            as="a"
                            color="orange"
                            ribbon="true"
                          >
                            <Icon name="signal" />Abv: {data.abv || 0}
                          </Label>
                        </Segment>
                        {/** Render Sample Beer image for better look... */}
                        <Image
                          className={css(styles.imageStyle)}
                          size="small"
                          src={require(`../../assets/beer/${index<=10 ? index+1 : 1 }.jpg`)}
                        />
                        <Card.Content>
                          <Card.Header
                            title={data.name}
                            className={css(styles.header)}
                          >
                            {data.name}
                          </Card.Header>
                          <Card.Meta>
                            <span className="date">{data.beerStyle}</span>
                          </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                          <div>
                            <Label as="a">
                              <Icon name="beer" size="large" color="orange" />
                              Ounces : {data.ounces}
                            </Label>
                            {data.ibu && 
                            <Label as="a">
                                <Icon name="heart"  size="large" color="red" />
                                Ibu : {data.ibu}
                            </Label> }
                          </div>
                        </Card.Content>
                      </Card>
                    </div>
                  </Col>
                ))}
            </Row>
          </Grid>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers
  };
};

export default connect(mapStateToProps, { initialBeerDataLoad })(Home);

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    color: "#424242"
  },
  filterContainer: {
    margin: "0 auto",
    textAlign: "center"
  },
  imageStyle: {
    margin: "auto",
    height: "260px"
  },
  header: {
    width: "232px",
    overflow: "hidden !important",
    "text-overflow": "ellipsis !important",
    "white-space": "nowrap",
    "font-size": "1em !important"
  },
  cardWrapper: {
    marginBottom: 6
  },
  segmentAlter: {
    border: "0px solid white",
    "box-shadow": "0 1px 2px 0 rgba(255, 255, 255, 0)",
    margin: 0
  },
  center : {
    position: "absolute",
    margin: "auto",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "auto",
    height: "200px",
    fontFamily : "Lato-light",
    fontSize : "12",
    textAlign : "center"
  },
  loader : {
      width : "auto",
      height : "175px"
  }
});
