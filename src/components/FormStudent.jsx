import React, { Component } from "react";
import { actSubmitStudent } from "./duck/action";
import { connect } from "react-redux";

class FormStudent extends Component {
   constructor(props) {
      super(props);

      this.state = {
         idStu: "",
         fullName: "",
         phone: "",
         email: "",
      };
   }

   static getDerivedStateFromProps(nextProps, prevState) {
      console.log("prevState1", prevState);
      console.log("nextProps", nextProps);

      if (nextProps && nextProps.studentEdited) {
         if (nextProps.studentEdited.idStu !== prevState.idStu) {
            prevState = nextProps.studentEdited;
            return prevState;
         } else {
            console.log("prevState", prevState);

            return prevState;
         }
      }
      return null;
   }

   handleOnChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value,
      });
   };

   handleOnSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit(this.state);
      this.setState({
         idStu: "",
         fullName: "",
         phone: "",
         email: "",
      });
   };

   render() {
      return (
         <div>
            <h3 className="bg-dark text-white p-2">Thông tin sinh viên</h3>
            <form onSubmit={this.handleOnSubmit}>
               <div className="row">
                  <div className="form-group col">
                     <label>Mã SV</label>
                     <input
                        name="idStu"
                        type="text"
                        className="form-control"
                        value={this.state.idStu}
                        onChange={this.handleOnChange}
                        disabled={this.props.studentEdited ? true : false}
                     />
                  </div>
                  <div className="form-group col">
                     <label>Họ tên</label>
                     <input
                        name="fullName"
                        type="text"
                        className="form-control"
                        value={this.state.fullName}
                        onChange={this.handleOnChange}
                     />
                  </div>
               </div>
               <div className="row">
                  <div className="form-group col">
                     <label>Số điện thoại</label>
                     <input
                        name="phone"
                        type="text"
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.handleOnChange}
                     />
                  </div>
                  <div className="form-group col">
                     <label>Email</label>
                     <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                     />
                  </div>
               </div>
               <button className="btn btn-success" type="submit">
                  {this.props.studentEdited ? "Cập nhật" : "Thêm sinh viên"}
               </button>
            </form>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      studentEdited: state.studentReducer.studentEdited,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      handleSubmit: (payload) => {
         dispatch(actSubmitStudent(payload));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormStudent);
