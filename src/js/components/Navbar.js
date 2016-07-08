import React from "react";
import { Link } from "react-router";

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
    console.log(collapsed);
  }


  render() {

    const { location } = this.props;
    const { links } = this.props;
    const { title } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    const navLinks = typeof links !== "undefined" ?
      <div className={"navbar-collapse " + navClass}>
      <ul className="nav navbar-nav">
        {
          links.map((link, i) => {
          return <li key={i}><Link to={link.url}>{ link.title }</Link></li>
          })
        }
      </ul>
    </div> : "";

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
              <span className="sr-only">{ title.title }</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={title.url} className="navbar-brand">{ title.name }</Link>
          </div>

          { navLinks }

        </div>
      </nav>
    );
  }
}
