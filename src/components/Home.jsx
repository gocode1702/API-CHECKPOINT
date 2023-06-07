import React from "react";
import Product from "./Product";
// import { Link } from "react-router-dom"; import ModalHome from
// "../modalRedux/ModalHome"; import Breadcrumb from
// "react-bootstrap/Breadcrumb"; import Media from
// "../../../../social-media/Media"; import { MDBBtn, MDBContainer, MDBIcon }
// from "mdb-react-ui-kit"; import { Link } from "react-router-dom"; import
// ModalDoc from "../../../../../modal/ModalHome/modalDocumentation/ModalDoc";

function HomeRd({ data }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {data.Products.map((e, key) => (
          <Product details={e} key={key} />
        ))}
        {/* {console.log(data)} */}
      </div>
    </div>
  );
}

export default HomeRd;

// export default function HomeRd({data}) {
//     let mybutton;
//     window.onscroll = function () {
//         mybutton = document.getElementById("btn-back-to-top");
//         scrollFunction(mybutton);
//     };
//     function scrollFunction(mybutton) {
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             mybutton.style.display = "block";
//         } else {
//             mybutton.style.display = "none";
//         }
//     }

//     function backToTop() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     }
//     return (
//         <div className="container-fluid">
//             <Navba/>
//             <div className="row">
//                 {data.map((e, key) => (<Product details={e} key={key}/>))}
//                 {/* {console.log(data)} */}
//             </div>
//         </div>
//     );
// }

// <div>       <div className="container-fluid">         <div className="row">
// <div className="bg" />           <div className="details">             <h1
// style={{ color: "white" }}>this is my first Redux-test</h1>
// <p>Feautres Redux </p>           </div>           <div
// className="illustration">             <ModalHome />             <Breadcrumb>
// <Breadcrumb.Item href="#">                 <Link to="/">Home</Link>
// </Breadcrumb.Item>               <Breadcrumb.Item
// href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
// Library               </Breadcrumb.Item>               <Breadcrumb.Item
// active>Data</Breadcrumb.Item>             </Breadcrumb>           </div>
// </div>       </div>       <Media />     </div>
