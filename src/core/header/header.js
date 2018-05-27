import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

/**
|--------------------------------------------------
| Local imports
|--------------------------------------------------
*/
import { BreadCrump } from "../utilityComponents";

class Header extends Component {
  state = { activeItem: "Explore" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentWillMount(){
    this.setState({
      activeItem : "clear"
    })
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary size="large">
          <Menu.Item
            as={NavLink}
            active={activeItem === "Explore"}
            name="Explore"
            to="/"
            exact={true}
            onClick={this.handleItemClick}
          />
            <Menu.Item
              position="right"
              name="Cart"
              as={NavLink}
              exact={true}
              active={activeItem === "Cart"}
              to="/cart"
              onClick={this.handleItemClick}
            />
        </Menu>
      </div>
    );
  }
}

export default Header;
