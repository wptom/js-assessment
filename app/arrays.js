exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    //console.log(item);
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      // console.log(element,index,item);
      // console.log(element === item);
      
      if (element === item) {
        return index;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let summary = 0;

    for (let index = 0; index < arr.length; index++) {
      summary += arr[index];
    }

    return summary;

  },

  remove: function(arr, item) {
    for (let index = 0; index < arr.length; index++) {
      let el = arr[index]

      if (el === item) {
        arr.splice(index, 1)
        index--;
      }
    }

    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let index = 0; index < arr.length; index++) {
      let el = arr[index]

      if (el === item) {
        arr.splice(index, 1)
        index--;
      }
    }

    return arr
  },

  append: function(arr, item) {
    arr.push(item)

    return arr
  },

  truncate: function(arr) {
    arr.pop()

    return arr

  },

  prepend: function(arr, item) {
    arr.unshift(item)

    return arr
  },

  curtail: function(arr) {
    arr.shift()

    return arr
  },

  concat: function(arr1, arr2) {
    let concatenatedArr = arr1.concat(arr2);

    return concatenatedArr
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)

    return arr

  },

  count: function(arr, item) {
    let count = 0;

    for (let index = 0; index < arr.length; index++) {
      let el = arr[index]

      if (el === item) count++;
    }

    return count
  },

  duplicates: function(arr) { // 1, 3, 4
    //console.log(arr)
    var object = {};
    var result = [];

    arr.forEach(function (item) {
      // check if item exists in the object array already
      // if it is a first occurence in the array, assign it value = 0
      if(!object[item]) object[item] = 0;
          //console.log(object[item])
          // OTHERWISE count how many duplicates it has
          object[item] += 1;
    })

    //console.log(object)

    for (var prop in object) {
      //console.log(prop)
        if(object[prop] >= 2) {
            result.push(prop);
        }
    }
    
    resultArr = Array.from(Object.keys(result).map(i => parseInt(result[i])))

    return resultArr;
  },

  square: function(arr) {
    for (let index = 0; index < arr.length; index++) {
      let itemSquare = arr[index] * arr[index];

      arr.splice(index, 1, itemSquare)
    }

    return arr
  },

  findAllOccurrences: function(arr, target) {
    let occurArr = new Array;

    for (let index = 0; index < arr.length; index++) {
      let el = arr[index]

      if (el === target) {
        occurArr.push(index)
      }
    }

    return occurArr
  }
};
