function getIndex(indexes, arr) {
  var index = 0,
    i, j, t;

  if (arr.length !== indexes.length)
    throw "Accessor length does not match indexes length";

  for (i = 0; i < arr.length; i++){
    t = arr[i];

    for (j = i + 1; j < arr.length; j++) {
      t *= indexes[j].data.length;
    }
    index += t;
  }
  return index;
}

function getDataPoint(indexes, arr) {
  var ind = [],
    a, p;
  if (indexes.length !== arr.length)
    return null;
  for (a = 0; a < arr.length; a++) {
    p = indexes[a].data.indexOf(arr[a])
    if (p !== -1) {
      ind.push(p);
    } else {
      return null;
    }
  }

  return getIndex(indexes, ind);
}

module.exports = getDataPoint;
