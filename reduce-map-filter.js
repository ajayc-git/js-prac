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


function increment(value)  {return value + 1;}
function decrement(value)  {return value - 1;}
function double(value)  {return value * 2;}
function halve(value)  {return value / 2;}

var pipeline = [
  increment,
  double,
  decrement,
  halve,
  decrement,
  double
];

var initial_value = 5;
var final_value = pipeline.reduce(function(final,fn) {
  //console.log("Function is %s - Arg is %s",fn,final)
  return fn(final);
},initial_value);

console.log(final_value);

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce(function(movies,movie){
  return movie.cast.reduce(function(actors,actor){
    if(actors.indexOf(actor) === -1){
      actors.push(actor);
    }
    return actors;
      
  },movies);
},[]);

console.log(stars);
