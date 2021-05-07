import React, { Component, component } from "react";
import Category from './Category';

class CategoriesList extends Component {
    render() {
        const categories = this.props.categories;
        return (
            <div className="data">
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th style={{ width: "50px", textAlign: "center" }}>#</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th style={{ width: "148px" }}>Action</th>
                  </tr>
                </thead>
      
                <tbody>
                  {categories.map(Category => {
                    return (
                      <Category
                        key={Category.cate_id}
                        customer={Category}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
    }
}
export default CategoriesList;
