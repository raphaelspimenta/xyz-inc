import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { setVisibilityFilter, VisibilityFilters } from "../actions/index";

export class Sidebar extends React.Component {
  render() {
    const asideStyle = {
      marginTop: "120px",
      paddingLeft: "40px"
    };

    return (
      <aside className="col-12 col-md-2 p-0 bg-default">
        <nav
          className="navbar navbar-expand navbar-dark bg-default flex-md-column flex-row align-items-start py-2"
          style={asideStyle}
        >
          <div className="collapse navbar-collapse">
            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() =>
                    this.handleSetVisibility(VisibilityFilters.SHOW_ALL)
                  }
                >
                  <span className="d-none d-md-inline">
                    <i className="fas fa-list-alt" /> Todos
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/atendidos"
                  onClick={() =>
                    this.handleSetVisibility(VisibilityFilters.SHOW_COMPLETED)
                  }
                >
                  <span className="d-none d-md-inline">
                    <i className="fas fa-check" /> Atendidos
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/lixeira"
                  onClick={() =>
                    this.handleSetVisibility(VisibilityFilters.SHOW_TRASH)
                  }
                >
                  <span className="d-none d-md-inline">
                    <i className="fas fa-trash-alt" /> Lixeira
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    );
  }

  handleSetVisibility = event => {
    const text = event;
    this.props.setVisibilityFilter(text);
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
