import React, { Component } from "react";
import { icons } from "assets/icons/icons-svg";
import "./styles/delete.scss";

class Delete extends Component {
  state = {
    message: {},
  };

  displayMessageBox = () => {
    const message = { ...this.state.message };
    message.display = true;
    this.setState({ message });
  };

  hiddenMessageBox = () => {
    const message = { display: false };
    this.setState({ message });
  };

  handleDelete = () => {
    const { onDelete, list, item } = this.props;
    const message = { display: false };
    this.setState({ message });
    onDelete(item, list);
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <div onClick={this.displayMessageBox} className=" btn-delete">
          {icons.iconDelete}
        </div>
        {message.display && (
          <div className="box-message">
            <div className="box-message-wrapper">
              <h2>Bạn có chắc chắn muốn xóa mục vừa chọn ?</h2>
              <div className="box-message-btn">
                <button className="box-message-btn--cancel" onClick={this.hiddenMessageBox}>Hủy</button>
                <button className="box-message-btn--delete" onClick={this.handleDelete}>Xóa</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Delete;
