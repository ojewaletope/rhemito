// import React from "react";
// import BillsType from "./BillsType";
// import BillDetails from "./billdetails/BillDetails";

// class BillContent extends React.Component {
//   state = {
//     showBillsContent: false
//   };

//   displayBillsDetails = e => {
//     e.preventDefault();
//     this.setState({
//       showBillsContent: !this.state.showBillsContent
//     });
//   };
//   render() {
//     const { toggleBillsLogin, toggleBillsBeneficiary } = this.props;
//     return (
//       <div className="billcontents">
//         {this.state.showBillsContent ? (
//           <BillDetails
//             toggleBillsLogin={toggleBillsLogin}
//             toggleBillsBenficiary={toggleBillsBeneficiary}
//           />
//         ) : (
//           <BillsType displayBillsDetails={this.displayBillsDetails} />
//         )}
//       </div>
//     );
//   }
// }
// export default BillContent;
