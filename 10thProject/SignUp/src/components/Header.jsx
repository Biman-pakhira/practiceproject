import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark" style={{padding:"20px"}}>
        <div className="container-fluid" data-bs-theme="dark">
          <NavLink to='/checkout' className="navbar-brand">eCart</NavLink>
          <div className="text-white fs-4">
              <Badge color="secondary" badgeContent={4}>
                <FaShoppingCart style={{cursor:"pointer"}} onClick={()=>navigate('/checkout')}/>
              </Badge>
          </div>
        </div>
      </nav>
    </div>
  )}
export default Header
