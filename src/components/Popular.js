//Popular 
import sevenimg from "../assets/images/c7.jpg"
import eightimg from "../assets/images/c8.jpg"
import nineimg from "../assets/images/c9.jpg"
import tenimg from "../assets/images/c10.jpg"
import elevenimg from "../assets/images/c11.jpg"
import tweleimg from "../assets/images/c12.jpg"
import thirteenimg from "../assets/images/c13.jpg"
import fourteenimg from "../assets/images/c14.jpg"

function Popular() {
    return (
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best</p>
            <div class="popular__container">

                <div class="course-card">
                    <img src={sevenimg} alt="Course image"></img>
                        <h3>Complete React Developer (w/ Redux, Hooks, GraphQL)</h3>
                        <p>Andrei Neogoie</p>
                        <p>4.6 ⭐⭐⭐⭐</p>
                        <p>Free <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={eightimg} alt="Course image"></img>
                        <h3>Figma Design UI/UX Advanced</h3>
                        <p>Daniel</p>
                        <p>5.0 ⭐⭐⭐⭐⭐</p>
                        <p>889 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={nineimg} alt="Course image"></img>
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Vako Shvili</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>999 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={tenimg} alt="Course image"></img>
                        <h3>100 Days of Code:Python Programming</h3>
                        <p>DR.Anglela</p>
                        <p>4.9⭐⭐⭐⭐</p>
                        <p>559 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={elevenimg} alt="Course image"></img>
                        <h3>The Complete JavaScript Course 2024: From Zero to Expert!
                        </h3>
                        <p>Jonas Schmedtmann</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>449 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={tweleimg} alt="Course image"></img>
                        <h3>New Cloud Practition</h3>
                        <p>Stephane Maarek</p>
                        <p>5.0 ⭐⭐⭐⭐⭐</p>
                        <p>889 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={thirteenimg} alt="Course image"></img>
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Col Steele</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>599 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={fourteenimg} alt="Course image"></img>
                        <h3>Machine learning ML A-Z</h3>
                        <p>Azilie</p>
                        <p>4.9⭐⭐⭐⭐</p>
                        <p>free <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Popular