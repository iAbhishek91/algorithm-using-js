/*
asked by amazon
given number of steps to go to first floor

you may take either one or two step at a time.

write a function to find the number of way we can go to the top of the stairs
*/


/*
NOTE: there is better way of doing this stair case problem
But understanding this recursion pattern is very very imp
The best solution is to solve similar to dynamic programming, (check number of possible route follow a pattern)
paths(n) = paths(n-1) + paths(n-2)
*/
function stairsMoves1or2(n) {
  const arr = [];
  _backtrack(arr,"0" ,0 ,n);
  return arr;
}


function _backtrack(arr, currPath, currStair, max) {
  if(currStair === max) {
    arr.push(currPath);
    return;
  }

  // this can solve lots of problem where we have to find all the combination with two(any static) decision

  // execute always without condition as we can always take one step
  _backtrack(arr, currPath + (currStair + 1), (currStair + 1), max);
  
  // execute if eligible.
  if(currStair + 2 <= max) _backtrack(arr, currPath + (currStair + 2), (currStair + 2), max);
  
}
console.log(stairsMoves1or2(3));

//--------------------------------------------------------
function stairsMoves1or2or3(n) {
  const arr = [];
  _backtrack1(arr,"0" ,0 ,n);
  return arr;
}


function _backtrack1(arr, currPath, currStair, max) {
  if(currStair === max) {
    arr.push(currPath);
    return;
  }

  // this can solve lots of problem where we have to find all the combination with three(any static) decision

  // execute always without condition as we can always take one step
  _backtrack1(arr, currPath + (currStair + 1), (currStair + 1), max);
  
  // execute if eligible.
  if(currStair + 2 <= max) _backtrack1(arr, currPath + (currStair + 2), (currStair + 2), max);

  if(currStair + 3 <= max) _backtrack1(arr, currPath + (currStair + 3), (currStair + 3), max);
  
}

console.log(stairsMoves1or2or3(3));


//------------------------------------------------------------------------

function stairsMovesDynamic(n, validMoves) {
  const arr = [];
  _backtrack2(arr,"0" ,0 ,n , validMoves);
  return arr;
}


function _backtrack2(arr, currPath, currStair, max, validMoves) {
  if(currStair === max) {
    arr.push(currPath);
    return;
  }

  for(let i = 0; i < validMoves.length; i += 1) {
    const move = validMoves[i];
  
    if(currStair + move <= max) _backtrack2(arr, currPath + (currStair + move), (currStair + move), max, validMoves);
  }
}

console.log(stairsMovesDynamic(3, [1, 2, 3, 4]));