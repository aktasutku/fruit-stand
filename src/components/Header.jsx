import React from "react";
import "./header.css";

import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import F from "../assets/icon_f.png";
import V from "../assets/icon_v.png";

const Header = () => {
  return (
    <div className="header">
      {/* LEFT */}
      <div className="header_left">
        <div className="header_left_icon">
          <img src={F} />
          <img src={V} />
        </div>
        <h4>STAND</h4>
      </div>

      {/* CENTER */}
      <div className="header_center">
        <div className="header_center_search">
          <input type="text" placeholder="Search" />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header_right">
        <AiOutlineShoppingCart className="header_right_cartIcon" />
        <FaRegUser className="header_rigtht_userIcon" />
      </div>
    </div>
  );
};

export default Header;
