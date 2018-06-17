import React, { Component } from "react";
import ReactPaginate from 'react-paginate';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPeople } from "../api/getRandomUser";
import UserItem from "../components/userItem";

import { VisibilityFilters } from "../actions/index";

class Userlist extends Component {

  constructor() {
    super();
    this.state = {
      people: [],
      currentPage: 1,
      perPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    this.props.data();
  }

  render() {

    const { people, currentPage, perPage } = this.state;

    let filteredList = this.props.people.filter(user => {
      var filter = this.props.filters.text.toLowerCase();
      var firstname = user.name.first.toLowerCase();
      var lastname = user.name.last.toLowerCase();
      var email = user.email.toLowerCase();

      return (
        firstname.indexOf(filter) !== -1 ||
        lastname.indexOf(filter) !== -1 ||
        email.indexOf(filter) !== -1
      );
    });

    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const current = filteredList.slice(indexOfFirst, indexOfLast);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredList.length / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick} className="page-item page-link" >
          {number}
        </li>
      );
    });

    return (
      <div>
        <div id="peopleList">
          <table className="table table-hover table-responsive">
            <tbody>
              {current.map(function (peopleArr, index) {
                return <UserItem key={index} id={index} data={peopleArr} />;
              })}
            </tbody>
          </table>
          {this.props.people.length > 0 ? (
            <nav aria-label="Paginacao">
              <ul id="page-numbers" className="pagination">
                {renderPageNumbers}
              </ul>
            </nav>) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  var all = state.people.all;
  var done = state.people.done;
  var trash = state.people.trash;

  var people = all;
  if (state.visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
    people = done;
  if (state.visibilityFilter === VisibilityFilters.SHOW_TRASH) people = trash;

  return {
    people: people,
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ data: getPeople }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Userlist);
