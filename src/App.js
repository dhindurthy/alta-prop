import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles.css";
import "./style.scss";
import Menu from "./components/menu.jsx";
import Home from "./routes/Home.js";
import Services from "./routes/Services.js";

import SnowRemoval from "./routes/snowremoval.js";
import RepairsandRehab from "./routes/repairsandrehab.js";
import SecuredServices from "./routes/securedservices.js";
import TrashOut from "./routes/trashout.js";
import RemediationServices from "./routes/remediationservices.js";
import Winterization from "./routes/winterization.js";
import Landscaping from "./routes/landscaping.js";

import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Login from "./routes/Login.js";
import Careers from "./routes/careers.js";
import ServiceArea from "./routes/ServiceArea.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [
        {
          value: "/home",
          label: "Home"
        },
        {
          value: "/about",
          label: "About"
        },
        {
          type: "dropdown",
          label: "Services",
          value: "/services",
          options: [
            {
              value: "/snowremoval",
              label: "Snow Removal"
            },
            {
              value: "/repairsandrehab",
              label: "Repairs and Rehabs"
            },
            {
              value: "/securedservices",
              label: "Secured Services"
            },
            {
              value: "/trashout",
              label: "Trash Out"
            },
            {
              value: "/remediationservices",
              label: "Remediation Services"
            },
            {
              value: "/landscaping",
              label: "Landscaping"
            },
            {
              value: "/winterization",
              label: "Winterization"
            }
          ]
        },
        {
          value: "/area",
          label: "Service Area"
        },
        {
          value: "/contact",
          label: "Contact Us"
        },
        {
          value: "/login",
          label: "Login"
        }
      ],
      footerData: [
        {
          value: "contact",
          label: "Contact"
        },
        {
          value: "login",
          label: "Login"
        },
        // {
        //   value: "team",
        //   label: "Team"
        // },
        {
          value: "careers",
          label: "Careers"
        }
      ]
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <Link className="logo" tabIndex="0" role="menuitem" to="/home">
              <img alt="Alta Property Services Logo and Home" src="" />
            </Link>
            <Menu menuData={this.state.menuData} />
          </header>
          <main>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />

            <Route path="/snowremoval" component={SnowRemoval} />
            <Route path="/repairsandrehab" component={RepairsandRehab} />
            <Route path="/securedservices" component={SecuredServices} />
            <Route path="/trashout" component={TrashOut} />
            <Route path="/landscaping" component={Landscaping} />
            <Route
              path="/remediationservices"
              component={RemediationServices}
            />
            <Route path="/winterization" component={Winterization} />

            <Route path="/area" component={ServiceArea} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/careers" component={Careers} />
            <Route path="/" exact={true} component={Home} />
          </main>

          <footer className="footer">
            <h4 tabIndex="0" className="question-phone">
              Have a question about our services?{" "}
              <span className="phone-num">Please call us at 630.461.9229</span>
            </h4>
            <Menu menuData={this.state.footerData} />
          </footer>
        </div>
      </Router>
    );
  }
}
