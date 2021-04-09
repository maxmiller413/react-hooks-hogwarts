import hogs from "../porkers_data"
import HogCard from "./HogCard"

function HogList({ hogs }) {

    console.log(hogs)


    return (

        <div className="ui grid container">
            {hogs.map((hog) => {

              return (
                <HogCard 
                    key={hog.name}
                    hog={hog}
                />
                )  
            })}

        </div>
    
    )

    

}

export default HogList