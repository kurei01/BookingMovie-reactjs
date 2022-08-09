import React, { Component } from "react";
import { connect } from "react-redux";

export class Seat extends Component {
  handleClick = (e) => {
    console.log(this.props.seat);
    this.props.dispatch({
      type: "UPDATE_STATUS",
      payload: e.target.value,
    });
  };
  render() {
    const { hang, danhSachGhe } = this.props.seat;
    return (
      <tr>
        <td className="firstChar">{hang}</td>
        {danhSachGhe.map((item, index) => {
          if (!item.daDat) {
            if (item.dangChon) {
              return (
                <td key={index}>
                  <button
                    value={item.soGhe}
                    onClick={this.handleClick}
                    className="gheDangChon"
                  >
                    {item.soGhe}
                  </button>
                </td>
              );
            }
            return (
              <td key={index}>
                <button
                  value={item.soGhe}
                  onClick={this.handleClick}
                  className="ghe"
                >
                  {item.soGhe}
                </button>
              </td>
            );
          }
          return (
            <td key={index}>
              <button disabled className="gheDuocChon">
                {item.soGhe}
              </button>
            </td>
          );
        })}
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.seat.seatList,
  };
};

export default connect(mapStateToProps)(Seat);
