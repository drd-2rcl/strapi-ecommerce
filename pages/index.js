import React, { Component } from 'react'
import { 
  Button, 
  Alert, 
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row 
} from "reactstrap";
import Layout from "../components/layout";
import RestaurantList from "../components/restaurant/restaurantList";
import defaultPage from "../lib/apollo";

class Index extends Component {
  constructor(props) {
    super(props);
    // query state will be passed to RestaurantList for the filter query
    this.state = {
      query: ""
    };
  }
  onChange(e) {
    // set the state = to the input typed in the search Input Component this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div className="container-fluid">
      <Row>
        <Col>
         <div className="search">
          <InputGroup>
            <InputGroupAddon addonType="append"> Search </InputGroupAddon>
            <Input onChange={this.onChange.bind(this)} />
          </InputGroup> 
         </div> 
         <RestaurantList search={this.state.query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
    );
  }
}


export default defaultPage(Index);