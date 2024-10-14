//Sale image Component
import saleimg from '../assets/images/saleimg.jpg'

function Saleimage()
{
    return(
        <div class="sale-image">
            <img src={saleimg} alt="Sale Image"></img>
            <div className="sale-image__offer">
                <h2>Ready for an upgrade?</h2>
                <p>Explore our top-rated development courses. Skill up fast with features like coding exercises and practice tests.</p>
            </div>
        </div>
    );
}

export default Saleimage