var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
 var array1 = ['Cake', 'Cookies', 'Coffee'];  
 [...array1, 'Ice cream'];
 array2 = ['Ice cream',... array1];
 return array2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 var array1 = ['Cake', 'Cookies', 'Coffee'];
 array1.unshift('Ice cream')
 return array1
}

function addElementToEndOfArray(array, element) {
  var array1 = ['Cake', 'Cookies', 'Coffee'];
  array1.push('Ice cream')
  return array1
}

function destructivelyAddElementToEndOfArray(array, element) {
  var array1 = ['Cake', 'Cookies', 'Coffee'];
  array1.push('Ice cream')
  return array1
}

function accessElementInArray(array, index) {
  var array1 = ['Cake', 'Cookies', 'Coffee'];
  return [index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array1 = ['Cake', 'Cookies', 'Coffee']
  array1.shift()
}