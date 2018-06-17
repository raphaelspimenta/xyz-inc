import React from "react";
import { Link } from "react-router";
import { bindActionCreators } from "redux";
import { setText } from "../actions/index";
import { connect } from "react-redux";
import { getMyProfile } from "../api/getRandomUser";

export class Navbar extends React.Component {
  componentDidMount() {
    this.props.myprofile();
    console.log(this.props);
  }

  render() {
    const navStyle = {
      position: "fixed",
      width: "95%",
      height: "65px",
      zIndex: "1000",
      marginLeft: "50px",
      marginRight: "10px",
      color: "#f8f9fa",
      backgroundColor: "rgb(61, 77, 93)"
    };

    const navBarStyle = {
      color: "#f8f9fa"
    };

    const ulStyle = {
      width: "90%"
    };

    const liStyle = {
      width: "85%"
    };

    const navbarSupportedContent = {
      marginLeft: "120px"
    };

    const searchStyle = {
      borderRadius: "20px"
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
        <Link className="navbar-brand" to="/" style={navBarStyle}>
          XYZ-Inc
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={navbarSupportedContent}
        >
          <ul className="navbar-nav mr-auto nav-search" style={ulStyle}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item search" style={liStyle}>
              <span className="fa fa-search" />
              <input
                onChange={this.handleSetText}
                className="form-control mr-sm-2"
                style={searchStyle}
                type="search"
                placeholder="Buscar"
                aria-label="Procurar"
              />
            </li>
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
            <button className="btn btn-link">
              <img alt="" src={this.props.imgprofile} />
            </button>
          </ul>
        </div>
      </nav>
    );
  }

  handleSetText = event => {
    const text = event.target.value;
    this.props.setText(text);
  };
}

function mapStateToProps(state) {
  var src = "";
  if (state.people.myprofile !== undefined)
    src = state.people.myprofile.thumbnail;
  return {
    imgprofile: src
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      myprofile: getMyProfile,
      setText: text => dispatch(setText(text))
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
