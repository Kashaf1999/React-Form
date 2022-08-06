import React, { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [Data, setData] = useState({
    fName: "",
    lName: "",
    fatName: "",
    uName: "",
  });

  const [cardAdded, setCardAdded] = useState(false);
  const changeHandler = (e) => {
    setData((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  const submitted = () => {
    setCardAdded(true);
  };

  return (
    <>
      <form>
        <div className="container">
          <h1 className="text-center my-5">REGISTRATION FORM</h1>
          <div className="row my-5">
            <div className="col">
              <input
                type="text"
                name="fName"
                id="fn"
                className="form-control"
                placeholder="First name"
                onChange={changeHandler}
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="lName"
                id="ln"
                className="form-control"
                placeholder="Last name"
                onChange={changeHandler}
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <input
                type="text"
                name="fatName"
                id="ftn"
                className="form-control"
                placeholder="Father name"
                onChange={changeHandler}
                aria-label="Father name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="uName"
                id="un"
                placeholder="University name"
                onChange={changeHandler}
                aria-label="University name"
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary d-block mx-auto my-5"
            onClick={submitted}
          >
            SUBMIT
          </button>
        </div>

        <div className="container d-flex justify-content-center">
          {cardAdded ? (
            <Cards
              fName={Data.fName}
              lName={Data.lName}
              fatName={Data.fatName}
              uName={Data.uName}
            />
          ) : (
            <></>
          )}
        </div>
      </form>
    </>
  );
}

export default App;
