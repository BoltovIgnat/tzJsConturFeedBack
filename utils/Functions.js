function formatDate(dateObj) {
	const year = dateObj.getFullYear();
	const month = dateObj.getMonth() + 1;
	const date = dateObj.getDate();
	return `${year}-${month}-${date}`;
}

async function asyncForEach(array, callback) {
	for (let index = 0; index < array.length; index++) {
		await callback(array[index], index, array);
	}
}

function sortByDate(a, b) {
	return a.date - b.date;
}

module.exports = {
	formatDate,
	asyncForEach,
	sortByDate
};