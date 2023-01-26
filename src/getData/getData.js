const axios = require('axios')
const mapArrToStrings = require("../mapArrToStrings/mapArrToStrings");

const getData = async () => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		const useIds = response.data.map(user => user.id)
		return mapArrToStrings(useIds)
	} catch (e) {
	}
}

console.log(getData());
module.exports = getData