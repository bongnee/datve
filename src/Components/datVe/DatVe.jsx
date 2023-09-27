import React, { Component } from "react";
import "./index.css";

export default class DatVe extends Component {
  render() {
    return (
      <div className="datVe ">
        <h1 className="h1 text-center">MOVIE SEAT SELECTION</h1>
        <div className="container overlay">
          <p>Fill The Required Details Below And Select Your Seats</p>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Number of Seats </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>

            <button className="btn btn-danger">Start Selecting</button>
          </form>



          <ul className="seat">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox emptyBox">Empty Seat</li>
          </ul>
        </div>
      </div>
    );
  }
}
