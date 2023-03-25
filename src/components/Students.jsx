import StudentItem from "./StudentItem";
import { connect } from "react-redux";

import React, { Component } from "react";

class Students extends Component {
   renderStudentList = () => {
      let { studentList, keyword } = this.props;

      studentList = studentList.filter((stu) => {
         return (
            stu.fullName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
         );
      });

      return studentList.map((stu) => {
         return <StudentItem key={stu.idStu} student={stu} />;
      });
   };

   render() {
      return (
         <div>
            <table className="table">
               <thead className="bg-dark text-white">
                  <tr>
                     <th>Mã SV</th>
                     <th>Họ tên</th>
                     <th>Số điện thoại</th>
                     <th>Email</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>{this.renderStudentList()}</tbody>
            </table>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      studentList: state.studentReducer.studentList,
      keyword: state.studentReducer.keyword,
   };
};

export default connect(mapStateToProps, null)(Students);
