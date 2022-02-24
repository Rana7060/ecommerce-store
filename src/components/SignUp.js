import React from "react";

const SignUp = () => {
  return (
    <div className="mt-5 p-5 container center-div form-signup">
      <form className="row g-3 needs-validation border p-3" novalidate>
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            // value="Mark"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustom02"
            // value="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom04" className="form-label">
            State
          </label>
          <select className="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Baalback</option>
            <option>Zahleh</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label for="validationCustom05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
