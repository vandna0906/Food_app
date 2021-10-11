

import {showData,appendIt} from "/randomFrem.js";
let cont = document.getElementById("data");
let getdata = showData("https://www.themealdb.com/api/json/v1/1/random.php");
getdata.then(({ meals }) => {
    appendIt(meals,data)
});
