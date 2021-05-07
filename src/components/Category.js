
import React, { Component } from "react";

class Category extends Component {
    onDelete = () => {
      // console.log('customer ', this.props.customer.id);
      this.props.onDelete(this.props.Category.id);
    };
  
    onEdit = () => {
      // console.log('customer ', this.props.customer.id);
      this.props.onEdit(this.props.Category);
    };
  
    render() {
      const { cate_id, cate_name, description, cate_status } = this.props.customer;
      return (
        <tr>
          <td style={{ textAlign: "center" }}>{id}</td>
          <td>{`${cate_name} ${description}`}</td>
          <td>{cate_status}</td>
          <td>
            <button className="mini ui blue button" onClick={this.onEdit}>
              Edit
            </button>
            <button className="mini ui red button" onClick={this.onDelete}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
  }
  
  export default Category;
