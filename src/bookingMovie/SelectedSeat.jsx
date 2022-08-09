import React, { Component } from "react";
import { connect } from "react-redux";

export class SelectedSeat extends Component {
  handleClickDel = (e) => {
    this.props.dispatch({
      type: "UPDATE_STATUS",
      payload: e.target.value,
    });
  };
  handleClickConfirmTicket = () => {
    this.props.dispatch({
      type: "BOOK_TICKET",
    });
  };
  render() {
    let sum = 0;
    return (
      <div>
        <h1
          style={{
            color: "white",
            margin: "2rem",
          }}
        >
          Danh sách ghế bạn chọn
        </h1>
        <ul className="text-start text-white row">
          <li className="col-4 d-flex align-items-center">
            <div className="gheDuocChon me-2"></div>
            <span>Ghế đã đặt</span>
          </li>
          <li className="col-4 d-flex align-items-center">
            <div className="gheDangChon me-2"></div>
            <span>Ghế đang chọn</span>
          </li>
          <li className="col-4 d-flex align-items-center">
            <div className="ghe me-2"></div>
            <span>Ghế chưa đặt</span>
          </li>
        </ul>

        <table className="selectedChar w-100">
          <thead className="text-warning">
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.seatList.map((rowSeat) => {
              return rowSeat.danhSachGhe.map((seat, index) => {
                if (seat.dangChon) {
                  sum += seat.gia;
                  return (
                    <tr key={index}>
                      <td style={{ color: "white" }}>{seat.soGhe}</td>
                      <td style={{ color: "white" }}>$ {seat.gia}</td>
                      <td>
                        <button
                          style={{
                            color: "white",
                            fontSize: 20,
                            backgroundColor: "red",
                            border: "3px solid orange",
                            borderRadius: 5,
                            margin: "2px 0",
                            padding: "0 5px",
                          }}
                          value={seat.soGhe}
                          onClick={this.handleClickDel}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                }
              });
            })}
            <tr>
              <td style={{ color: "white" }}>Tổng tiền</td>
              <td style={{ color: "orange" }}>{sum}</td>
              <td>
                <button
                  onClick={this.handleClickConfirmTicket}
                  className="btn btn-success text-warning"
                >
                  Đặt vé
                </button>
              </td>
            </tr>
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

export default connect(mapStateToProps)(SelectedSeat);
