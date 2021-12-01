const answer = (data, offset) => data.split('\n').map(v => +v).reduce((acc, value, index, arr) => index > offset - 1 && value > arr[index - offset] ? acc + 1 : acc, 0)


console.log('Answer 1 =', answer(document.body.innerText, 1), 'Answer 2 =', answer(document.body.innerText, 3));

// execute on the https://adventofcode.com/2021/day/1/input URL on a console window using f12 in browser to allow the function to get values
// done in console window because no IDE on this laptop yet 😢
