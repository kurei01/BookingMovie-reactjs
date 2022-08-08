import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./Seat";

export class SeatList extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr className="rowNumber">
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>

            {this.props.seatList?.map((item, index) => {
              if (item.hang !== "") {
                return <Seat key={index} seat={item} />;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.seat.seatList,
  };
};

export default connect(mapStateToProps)(SeatList);
