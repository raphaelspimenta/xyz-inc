import React, { Component } from "react";

import Navbar from "./ui/Navbar";
import "./styles/style.css";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

import Sidebar from "./ui/Sidebar";
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

class App extends Component {
  render() {
    const mainStyle = {
      marginTop: "30px"
    };
    return (
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Provider store={store}>
            <Navbar />
          </Provider>
          <Provider store={store}>
            <Sidebar />
          </Provider>
          <main className="col bg-faded py-3" style={mainStyle}>
            <Provider store={store}>{this.props.children}</Provider>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
