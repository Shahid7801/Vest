import "../Style/WeDo.css"
import Proj from "../assets/proj.webp"
import Proj1 from "../assets/proj1.webp"
import Proj2 from "../assets/proj3.webp"

const WeDo = () => {
    return (
        <div className="WeDo">
            <h1>What We Do</h1>
            <div className="wedo-1">
                <div className="wedo-box"><img src={Proj} alt="loading"/><p>Builds Industrial Projects</p></div>
                <div className="wedo-box"><img src={Proj1} alt="loading"/><p>Interior Build</p></div>
                <div className="wedo-box"><img src={Proj2} alt="loading"/><p>Construction</p></div>
            </div>
        </div>
    )
}
export default WeDo;