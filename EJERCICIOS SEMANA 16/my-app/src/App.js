import logo from "./logo.svg";
import "./App.css";
import Data from "./lista.json";
function App() {
  // function ColorCode() {
  //   var makingColorCode = "0123456789ABCDEF";
  //   var finalCode = "#";
  //   for (var counter = 0; counter < 6; counter++) {
  //     finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  //   }
  //   return finalCode;
  // }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <p>esta es mi variable {process.env.REACT_APP_MI_VARIABLE}</p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    //   <div>
    //     {" "}
    //     <h1
    //       style={{
    //         backgroundColor: ColorCode(),
    //       }}
    //     >
    //       {" "}
    //       TITULO{" "}
    //     </h1>
    //     <p className="importante">dafjñdls</p>
    //   </div>
    // );

    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "colums",
    //   marginTop: "150px",
    //   marginRight: "500px",
    //   color: "black",
    // }}
    >
      <div>
        {Data.map((user, index) => {
          return (
            <div>
              <img src={user.picture.large}></img>
              <p>
                {user.name.first} {user.name.last}
              </p>
              <p> {user.location.city}</p>
              <p>{user.dob.age < 18 ? "MENOR!!!!" : ""} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
