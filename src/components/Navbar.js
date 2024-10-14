//Navbar Component  //My Learning after p course tag

import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__s1">
                    <h1 className="navbar__s1__title">Udemy</h1>
                </div>
                <div className="navbar__s2">
                    <IoIosSearch style={{ color: "#000000" }} />
                    <input type="text" placeholder="Search for anything here,Tech, Business, Art..." />
                </div>
                <div className="navbar__s3"></div>
                <p className="course">Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <div className="iconsthree">
                    <FaShoppingCart style={{ color: "#000000" }} />
                    <FaBell style={{ color: "#000000" }} />
                    <FaUser style={{ color: "#000000" }} />
                </div>
                <div className="navbar__s4">
                    <IoMenu />
                </div>
            </div>
        </nav>
    );
}

export default Navbar