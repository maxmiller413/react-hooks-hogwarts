import React, {useState} from "react"
import HogDetails from "./HogDetails"

function HogCard({ hog }) {

const [details, setDetails] = useState(false)
const [isHidden, setIsHidden] = useState(false)

function handleDetailsClick() {

    setDetails((Details) => !Details);
}
    if (isHidden) return null

    return (
        <div height={"300px"} width={"300px"} className="pigTile">
            <p> {hog.name} </p>
            <img height={"100px"} src={hog.image} alt={hog.name}/>
            <div>
                {details ? <HogDetails hog={hog}/> : null} 
            </div>
            <button onClick={() => setIsHidden(true)} >
                Hide Me{" "}
                <span role="img" aria-label="snout">
                    🐽
                </span>
            </button>
            <button onClick={handleDetailsClick}>  
                <span role="img" aria-label="snout">
                    Details
                </span>
            </button>
            
        </div>
    )
}

export default HogCard