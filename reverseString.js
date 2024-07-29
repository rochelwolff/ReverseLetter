//Instructions: Given an input string s, reverse the order of the words.
//A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
//Return a string of the words in reverse order concatenated by a single space.

let reverseWords = function(s){
    let words= s.split(' ');
    words.reverse();
let reversestr= words.join (' ');
console.log(reversestr);
}

reverseWords('pink is my favorite color')


//reverseWords('the sky is blue') => "blue is sky the"
//reverseWords('  hello world  ') => 'world hello'
//reverseWords('a good example ') => 'example good a'
