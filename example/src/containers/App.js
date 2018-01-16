import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const classNames = require("classnames");

import Layout from "charles-lamb-layout";
import Main from "../components/Main";
import About from "../components/About";
import { getProducts } from "../state/actions/data";

class App extends React.Component {

  componentWillMount () {
    this.props.getProducts()
  }
  render() {
    const links = [
      { path: "/", title: "home", key: 1 }
    ];
    const scheme = {
      bg: '#f4efde',
      fg: '#253248',
      font: 'raleway'
    }

    return (
      <Router>
        <main>
          <Layout links={links} scheme={scheme}/>
          <div>
            <Switch>
              <Route exact path="/"  component={Main} />
              <Route exact path="/about"  component={About} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { getProducts })(App);
