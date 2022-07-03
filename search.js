const searchedList = document.getElementById("searchedList");
const searchBar = document.getElementById("searchBar");
let dataForSearch = []
searchBar.addEventListener("keyup", (e) => {
	const searchString = e.target.value;
	const filteredData = dataForSearch.filter((value) => {
		return value.name.toLowerCase().includes(searchString) || value.house.toLowerCase().includes(searchString);
	});
    displayDataSearched(filteredData);
    // console.log(filteredData)
});

const loadDataSearch = async () => {
	try {
		const res = await fetch(`http://hp-api.herokuapp.com/api/characters`);
		dataForSearch = await res.json();
		// displayDataSearched(dataForSearch);
		// console.log(dataForSearch);
	} catch (err) {
		console.error(err);
	}
};

const displayDataSearched = (datas) => {
	const htmlString = datas
		.map((value) => {
			return `
        <div class="col-3 border m-3 p-3 rounded" style="background-color: white;opacity: 0.9;"> 
        <h2>${value.name}</h2>
        <p>house: ${value.house}</p>
        </div>
        `;
		})
		.join("");
        searchedList.innerHTML = htmlString
};

loadDataSearch();
