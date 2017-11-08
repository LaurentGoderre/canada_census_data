var getDataPoint = require("./getDataPoint");

function censusData(data) {
	return {
		getData: function() {
			return data;
		},
		getDataPoint: function(ind) {
			var point = getDataPoint(data.indexes, ind);
			return data.data[point];
		}
	};
}

module.exports = censusData;
