function navbar(){

    return `
     <div id="navbar">
     <input type="text"  id="search" placeholder="Search food here!!">
     <button id="getbutton">search</button>
     <div id="options">
    
        <h3><a href="./show.html"> get receipe </a></h3>
        <h3><a href="./random.html"> show latest receipe.</a></h3>
        
    </div>
    </div>
   <div id="data"></div>`

    
    
}
export default navbar;