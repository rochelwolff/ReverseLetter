//Instructions: Given an input string l, reverse the order of the letters.
//A letters is defined as a sequence of non-space characters. The letters in l will not be separated by any space.
//Return a string of letters in reverse order.

let reverseLetter = function(l){
   let letter=l.split('');
    letter.reverse();
    let word=letter.join('');
    console.log(word);
}

reverseLetter('yellow')

//reverseLetter('please') => "esaelp"
//reverseLetter('  word  ') => 'drow'
//reverseLetter('hannah') => 'hannah'
