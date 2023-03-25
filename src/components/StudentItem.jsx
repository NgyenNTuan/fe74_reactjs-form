import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteStudent, actEditStudent } from "./duck/action";

class StudentItem extends Component {
   render() {
      const { student } = this.props;
      return (
         <tr>
            <td>{student.idStu}</td>
            <td>{student.fullName}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>
               <button
                  className="btn btn-info mr-2"
                  onClick={() => {
                     this.props.onEditStudent(student);
                  }}
               >
                  Sửa
               </button>
               <button
                  className="btn btn-danger"
                  onClick={() => {
                     this.props.onDeleteStudent(student.idStu);
                  }}
               >
                  Xóa
               </button>
            </td>
         </tr>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onDeleteStudent: (payload) => {
         dispatch(actDeleteStudent(payload));
      },
      onEditStudent: (payload) => {
         dispatch(actEditStudent(payload));
      },
   };
};

export default connect(null, mapDispatchToProps)(StudentItem);
