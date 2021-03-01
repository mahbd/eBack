// import Form from "../form/form";
// import React from "react";
// import http from "../form/httpService";
// import {domainRoot} from "../constants";
//
// const endPoint = domainRoot + "/users/register/";
//
// class Register extends Form {
//   state = {
//     data: {email: "", username: "", password: "", message: ""},
//     errors: {},
//   };
//
//   handleSubmit = async (event) => {
//     const {password, email} = this.state.data;
//     event.preventDefault();
//     const errors = this.validate();
//     this.setState({errors: errors || {}});
//     if (errors) return;
//     try {
//       const info = {password: password, email: email};
//       await http.post(endPoint, info);
//       window.location = "/login"
//     } catch (ex) {
//       const errors = {...this.state.errors};
//       this.setState({errors});
//       return null;
//     }
//
//     window.location = "/home";
//   };
//
//   render() {
//     return (
//       <form className="mt-3 collapse review-form-box" id="formRegister">
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             {this.renderInput("email", "Email", "text")}
//           </div>
//           <div className="form-group col-md-6">
//             {this.renderInput("password", "Password", "password")}
//           </div>
//         </div>
//         {this.renderButton("Register", "hvr-hover")}
//       </form>
//     );
//   }
// }
//
// export default Register;
