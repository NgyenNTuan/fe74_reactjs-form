import React, { Component } from "react";
import FormStudent from "./FormStudent";
import Students from "./Students";
import Search from "./Search";

class index extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <FormStudent />
               </div>
            </div>
            <div className="row mt-4">
               <div className="col-12">
                  <Search />
                  <Students />
               </div>
            </div>
         </div>
      );
   }
}

export default index;
