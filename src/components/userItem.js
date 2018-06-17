import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import {
  setToDone,
  moveToTrash,
  setToAll,
  VisibilityFilters
} from "../actions/index";

class UserItem extends React.Component {
  componentDidMount() {
    this.props.visibility;
  }

  ucFirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    var p = this.props.data;

    const linkStyle = {
      width: "100%"
    };

    const iconsStyle = {
      textDecoration: "none",
      color: "grey"
    };

    return (
      <tr className="box">
        <td>
          <Link
            className="btn"
            style={linkStyle}
            to={{
              pathname: "/usuario/" + p.login.username,
              state: p
            }}
          >
            {p.picture && p.picture.thumbnail ? (
              <img src={p.picture.thumbnail} alt="" />
            ) : (
                ""
              )}
          </Link>
        </td>
        <td>
          <span className="username">{this.ucFirst(p.name.first)}</span>
        </td>
        <td>
          <span className="email">{p.email}</span>
        </td>
        <td>
          <span className="cell">{p.cell}</span>
        </td>
        <td>
          <span className="location">
            {this.ucFirst(p.location.city) +
              "/" +
              this.ucFirst(p.location.state)}
          </span>
        </td>
        {this.props.visibility !== VisibilityFilters.SHOW_TRASH ? (
          <td>
            <button
              onClick={() => this.handleMoveToTrash(p)}
              className="btn btn-link fas fa-trash-alt"
              style={iconsStyle}
            />
          </td>
        ) : null}
        {this.props.visibility !== VisibilityFilters.SHOW_COMPLETED ? (
          <td>
            <button
              onClick={() => this.handleSetToDone(p)}
              className="btn btn-link fas fa-check"
              style={iconsStyle}
            />
          </td>
        ) : null}
        {this.props.visibility !== VisibilityFilters.SHOW_ALL ? (
          <td>
            <button
              onClick={() => this.handleSetToAll(p)}
              className="btn btn-link fas fa-list-alt"
              style={iconsStyle}
            />
          </td>
        ) : null}
      </tr >
    );
  }

  handleMoveToTrash(id) {
    this.props.moveToTrash(id);
  }

  handleSetToDone(id) {
    this.props.setToDone(id);
  }

  handleSetToAll(id) {
    this.props.setToAll(id);
  }
}

function mapStateToProps(state) {
  return { visibility: state.visibilityFilter };
}

const mapDispatchToProps = dispatch => ({
  moveToTrash: id => dispatch(moveToTrash(id)),
  setToDone: id => dispatch(setToDone(id)),
  setToAll: id => dispatch(setToAll(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserItem);
