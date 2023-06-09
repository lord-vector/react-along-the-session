import "./App.css";
import Header from "./components/Header";

function App() {
  const contacts = {
    contact: 545454545544,
  };
  return (
    <>
      <Header contact={contacts.contact}></Header>
      <div className="body">
        <h1 className="head">
          Linked<span>in</span>
        </h1>
        <div className="section">
          <div className="content">
            <div className="SectionHead">
              <h1>Sign in</h1>
              <p>Stay updated on your professional world</p>
            </div>
            <div className="form">
              <input
                type="text"
                placeholder="Email or Phone"
                className="inputs user"
              />
              <input
                type="password"
                placeholder="Password"
                className="inputs pass"
              />
            </div>
            <div className="forgetPass">Forgot Password?</div>
            <button className="signin">Sign in</button>
          </div>
        </div>
      </div>
      <div className="foot">foot</div>
    </>
  );
}

export default App;
