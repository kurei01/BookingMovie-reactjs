import React, { Component } from "react";
import { connect } from "react-redux/es/exports";
import SeatList from "./SeatList";
import SelectedSeat from "./SelectedSeat";
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div className="bookingMovie container-fluid">
        <div className="row text-center">
          <div className="col-7">
            <h1
              style={{
                color: "yellow",
              }}
            >
              BOOKING MOVIE TuwsnAnh.VN
            </h1>
            <p style={{ color: "white", fontSize: 25, marginBottom: 0 }}>
              screen
            </p>
            <div className="screen"></div>
            <SeatList />
          </div>
          <div className="col-5">
            <SelectedSeat />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
