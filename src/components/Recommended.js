//Recommended Component
import oneimg from "../assets/images/c1.jpg"
import twoimg from "../assets/images/c2.jpg"
import threeimg from "../assets/images/c3.jpg"
import fourimg from "../assets/images/c4.jpg"


function Recommended() {
    return (
        <div class="recommended">
            <h1 class="recommended__title">Recommended for you</h1>
            <p class="recommended__p">Pick the best fit</p>
            <div class="recommended__container">
                <div class="course-card">
                    <img src={oneimg} alt="Course image"></img>
                    <h3>2023 Python Data Visualisation Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={twoimg} alt="Course image"></img>
                    <h3>Web Development Bootstrap 2023</h3>
                    <p>Albart</p>
                    <p>5.0 ⭐⭐⭐⭐⭐</p>
                    <p>Free <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={threeimg} alt="Course image"></img>
                    <h3>Master UI/UX Designing with Figma</h3>
                    <p>Thomas</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>999 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={fourimg} alt="Course image"></img>
                    <h3>Basic to Advance Progamming Bootcamp</h3>
                    <p>Steeve</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>559 <del>1999</del></p>
                </div>
            </div>
        </div>
    );
}

export default Recommended