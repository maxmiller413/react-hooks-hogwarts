import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {

  // const [displayHogs, setDisplayHogs] = useState(hogs)

  
  const [showGreased, setShowGreased] = useState(false)
  const [showSorted, setSorteded] = useState("name")

  const hogsToDisplay = hogs
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((hog1, hog2) => {
      if(showSorted === 'weight'){
        return (hog2.weight - hog1.weight)
      }
      else {
        return (hog1.name.localeCompare(hog2.name))
      }
      
    })



    
  
  return (
    <div className="App">
      <Nav />
      <Filter 
        showGreased={showGreased}
        onChangeShowGreased={setShowGreased}
        showSorted={showSorted}
        onSorteded={setSorteded}
      />
      <HogList hogs={hogsToDisplay} />
      
      
    </div>
  );
}

export default App;
