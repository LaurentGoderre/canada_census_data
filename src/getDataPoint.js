function getIndex(indexes, arr) {
  var index = 0,
    i, j, t;

  for (i = 0; i < arr.length; i++){
    t = arr[i];

    for (j = i + 1; j < arr.length; j++) {
      t *= indexes[j].data.length;
    }
    index += t;
  }
  return index;
}

function getDataPoint(indexes, ind) {
  var isIndArray = Array.isArray(ind),
    arr = [],
    a, p, key;

  if ((isIndArray && indexes.length !== ind.length) || typeof ind !== "object")
    return null;

  for (a = 0; a < indexes.length; a++) {
    if (isIndArray) {
      key = ind[a];
    } else {
      key = ind[indexes[a].type];
    }
    p = indexes[a].data.indexOf(key);

    if (p === -1)
      return null;

    arr.push(p);
  }

  return getIndex(indexes, arr);
}

module.exports = getDataPoint;
