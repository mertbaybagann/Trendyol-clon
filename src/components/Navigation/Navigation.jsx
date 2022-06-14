import React from "react";
import { Navbar } from "./Navbar";
import { NavbarCampaign } from "./NavbarCampaign";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-wrapper">
        <nav>
          <Navbar />
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

// return (
//   <div key={index} className="normal-column">
//     <div className="category-box">
//       <Link to="">{menu.name}</Link>
//       <ul className="sub-item-list">
//         {menu.submenu.map((submenu, index) => {
//           return (
//             <li className="sub-item">
//               <Link to={submenu.path}>
//                 {submenu.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   </div>
// );
