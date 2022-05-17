import "./login.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            connect with friends and the world around you on Lamasocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="UserName" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign up </button>
            <button className="loginRegisterButton">
              Login into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
