function reducer(accumulator,value,index,array) {
  //Mean
  var sum = accumulator + value;
  if(index == (array.length-1)) {
    return sum/array.length;
  }
     return sum;
}

var nums = [12,13,54,67,21];

var mean = nums.reduce(reducer,0);
console.log(mean);


console.log(nums.map(function (v) {
  return v*2;
}));

console.log(nums.filter(function (v) {
  return v%2===0;
}));

function reducer2(coll,value) {
  //Sum and Multiply
  
  if(value%2===0) {
   coll.push(value*2);
  }
     return coll;
}

var MapFilter = nums.reduce(reducer2,[]);
console.log(MapFilter);

var items = [
  'grain',
  'fruit',
  'vegetable',
  'fruit',
  'vegetable',
  'vegetable',
];

function reducer3(arr,val) {
  if(!arr[val]) {
    arr[val]=1;
  } else {
    arr[val]++;
  }
  return arr;
}

console.log(items.reduce(reducer3,{}));

//Flatten Array

var nArr = [[1,2,3],[4,5,6],[7,8,9]];

console.log(nArr.reduce(function(a,v){
  return a.concat(v);
},[]));

//Reduce Right

console.log(nArr.reduceRight(function(a,v){
  return a.concat(v);
},[]));

// Flat Map
