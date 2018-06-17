import React from "react";
import { Link } from "react-router";

const ucFirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

class AvatarHeader extends React.Component {
  render() {
    var headerstyle = {
      height: 150,
      backgroundColor: "rgb(236, 236, 236)"
    };
    return <div style={headerstyle}> </div>;
  }
}

class Avatar extends React.Component {
  render() {
    var user_photo = {
      position: "relative",
      background: "#fff",
      width: 130,
      height: 130,
      borderRadius: 75,
      borderWidth: 1,
      birderStyle: "solid",
      left: 250,
      bottom: 50
    };
    var img_style = {
      width: 130,
      borderRadius: 75
    };
    return (
      <div style={user_photo}>
        <img style={img_style} src={this.props.source} alt="" />
      </div>
    );
  }
}

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLabel: "Olá! Meu nome é",
      activeValue:
        ucFirst(this.props.value.name.first) +
        " " +
        ucFirst(this.props.value.name.last)
    };
  }

  changeToName = () =>
    this.setState({
      activeLabel: "Meu nome é",
      activeValue:
        ucFirst(this.props.value.name.first) +
        " " +
        ucFirst(this.props.value.name.last)
    });
  changeToEmail = () =>
    this.setState({
      activeLabel: "Meu e-mail é",
      activeValue: this.props.value.email
    });
  changeToBirthday = () =>
    this.setState({
      activeLabel: "Meu aniversário é",
      activeValue: this.props.value.dob
    });
  changeToAddress = () =>
    this.setState({
      activeLabel: "Meu endereço é",
      activeValue: this.props.value.location.street
    });
  changeToPhone = () =>
    this.setState({
      activeLabel: "Meu telefone é",
      activeValue: this.props.value.phone
    });
  changeToPass = () =>
    this.setState({
      activeLabel: "Minha senha é",
      activeValue: this.props.value.login.password
    });

  render() {
    var title = {
      color: "#999",
      fontSize: 18,
      margin: 0
    };
    var detail_value = {
      color: "#2c2e31",
      fontSize: 38,
      margin: 5
    };

    var infosStyle = {
      justifyContent: "center",
      marginTop: "40px"
    };

    return (
      <div>
        <div>
          <p style={title}>{this.state.activeLabel}</p>
          <h3 style={detail_value}>{this.state.activeValue}</h3>
        </div>
        <div className="row" style={infosStyle}>
          <button
            className="btn btn-link btn-lg"
            onMouseEnter={this.changeToName}
          >
            <i className="fas fa-user" />
          </button>
          <button
            className="btn btn-link btn-lg"
            onMouseEnter={this.changeToEmail}
          >
            <i className="fas fa-envelope" />
          </button>
          <button
            className="btn btn-link btn-lg"
            onMouseEnter={this.changeToBirthday}
          >
            <i className="fas fa-calendar-alt" />
          </button>
          <button
            className="btn btn-link btn-lg"
            onMouseEnter={this.changeToAddress}
          >
            <i className="fas fa-address-card" />
          </button>
          <button
            className="btn btn-link btn-lg"
            onMouseEnter={this.changeToPhone}
          >
            <i className="fas fa-phone" />
          </button>
          <button
            className="btn btn-link btn-lg"
            onMouseEnter={this.changeToPass}
          >
            <i className="fas fa-key" />
          </button>
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  componentDidMount() {}

  render() {
    var cardStyle = {
      height: 480,
      width: 650,
      margin: 40,
      backgroundColor: "#FFF",
      textAlign: "center",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    var centerStyle = {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    };

    var mainStyle = {
      backgroundColor: "rgb(61, 77, 93)"
    };

    var backStyle = {
      float: "left",
      marginLeft: "30px",
      marginTop: "30px"
    };

    return (
      <div style={mainStyle}>
        <Link className="btn btn-lg" style={backStyle} to="/">
          <i className="far fa-arrow-alt-circle-left" />
        </Link>
        <div style={centerStyle}>
          <div style={cardStyle}>
            <AvatarHeader />
            <Avatar source={this.props.location.state.picture.large} />
            <Details value={this.props.location.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
