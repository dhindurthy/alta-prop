import React from "react";
// import ReactDOM from "react-dom";
// import LoginForm from "../components/loginform.jsx";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    };
  }
  componentDidMount() {
    // this.setState({
    //   showLoginForm: true
    // });
    console.log("BBB");
    // LoginForm();
    this.ppwLoginForm();
    // const title = React.createElement('h1', {}, 'My First React Code');
    // ReactDOM.render(
    //   title,
    //   document.getElementById('global')
    // );
  }
  querySt(ji) {
    let hu = window.location.search.substring(1);
    let gy = hu.split("&");
    for (let i = 0; i < gy.length; i++) {
      let ft = gy[i].split("=");
      if (ft[0] === ji) {
        return ft[1];
      }
    }
    return false;
  }
  ppwLoginForm(bgcolor, textcolor) {
    if (!bgcolor) {
      bgcolor = "#F6F5E4";
    }
    if (!textcolor) {
      textcolor = "#000000";
    }
    var ppw_error = this.querySt("ppw_error");
    var ppw_username = this.querySt("ppw_username");
    if (ppw_error === false) {
      ppw_error = "";
    }
    if (ppw_username === false) {
      ppw_username = "";
    }
    this.setState({
      ppw_username: ppw_username
    });
    // document.write("");
    // document.write(
    //   '<form method="post" action="https://www.propertypreswizard.com/control.php/login/?event=verifyRemote" style="display:inline;">'
    // );
    // document.write('<fieldset style="background:' + bgcolor + ';">');
    // document.write("<legend>Log In</legend>");
    // if (ppw_error != "") {
    //   document.write(
    //     '<span style="color:red;">' +
    //       decodeURIComponent(ppw_error) +
    //       "</span><br />"
    //   );
    // }
    // document.write(
    //   '<label for="id_username" style="color:' +
    //     textcolor +
    //     ';"><strong>Username</strong></label><br /><input type="text" id="id_username" name="username" size="20" value="' +
    //     ppw_username +
    //     '" /><br />'
    // );
    // document.write(
    //   '<label for="id_password" style="color:' +
    //     textcolor +
    //     ';"><strong>Password</strong></label><br /><input type="password" id="id_password" name="password" size="20" /><br />'
    // );
    // document.write(
    //   '<input type="submit" name="login" value="Login" style="margin-top:10px;" />'
    // );
    // document.write("</fieldset>");
    // document.write("</form>");
    // document.write("");
  }
  render() {
    return (
      <section>
        <h3>Login Page</h3>
        <div>
          <h4>Work Order Login</h4>
          <div id="ppw_form_in_alta global">
            {/* <iframe
              width="100%"
              height="500"
              src="https://altapropertyservices.com/login/"
              title="W3Schools Free Online Web Tutorials"
            ></iframe> */}
            {/* <LoginForm /> */}
            {}
            {/* {this.state.showLoginForm && <LoginForm />} */}
            <form
              method="post"
              action="https://www.propertypreswizard.com/control.php/login/?event=verifyRemote"
              style={{ display: "inline" }}
            >
              <fieldset style={{ backgroundColor: "#F6F5E4" }}>
                <legend>Log In</legend>
                <label for="id_username" style={{ color: "#F6F5E4" }}>
                  <strong>Username</strong>
                </label>
                <br />
                <input
                  type="text"
                  id="id_username"
                  name="username"
                  size="20"
                  // value={this.state.ppw_username}
                />
                <br />
                <label for="id_password" style={{ color: "#F6F5E4" }}>
                  <strong>Password</strong>
                </label>
                <br />
                <input
                  type="password"
                  id="id_password"
                  name="password"
                  size="20"
                />
                <br />
                <input
                  type="submit"
                  name="login"
                  value="Login"
                  style={{ marginTop: "10px" }}
                />
              </fieldset>
            </form>
          </div>
        </div>
        <img
          alt=""
          src="https://altapropertyservices.com/wp-content/uploads/2017/08/LogoTransparent.png"
        />
      </section>
    );
  }
}

export default Login;
