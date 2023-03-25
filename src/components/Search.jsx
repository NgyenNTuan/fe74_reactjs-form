import React, { Component } from "react";
import { connect } from "react-redux";
import { actSearchStudent } from "./duck/action";

class Search extends Component {
   handleOnChange = (e) => {
      this.props.onSearchStudent(e.target.value);
   };
   render() {
      return (
         <div>
            <label>Tìm kiếm (họ tên)</label>
            <input
               type="text"
               className="form-control mb-3 w-50"
               onChange={this.handleOnChange}
            />
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSearchStudent: (payload) => {
         dispatch(actSearchStudent(payload));
      },
   };
};

export default connect(null, mapDispatchToProps)(Search);
