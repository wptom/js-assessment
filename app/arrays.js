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
    console.log(arr, item)

    for (let index = 0; index < arr.length; index++) {
      
    }
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
