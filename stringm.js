// question 1
i
function isPalindrome(str) {

    let formattedStr = str.toLowerCase();


    let start = 0;
    let end = formattedStr.length - 1;

    while (start < end) {
        if (formattedStr[start] !== formattedStr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}


console.log(isPalindrome("dad"));
console.log(isPalindrome("madam"));



//question2 anagram

alert("check if a word is anagram")
let word1 = prompt("enter a word to check if it is anagram");
let word2 = prompt("enter a second word to check if it is anagram with the first");

function isAnagram(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (word1.length !== word2.length) {
        return false;
    }


    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}



if (isAnagram(word1, word2)) {
    console.log(word1 + ' and ' + word2 + ' are anagrams.');
} else {
    console.log(word1 + ' and ' + word2 + ' are not anagrams.');
}

//question 3

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

let string1 = '';
let string2 = 'Hello';

console.log(isBlank(string1));
console.log(isBlank(string2));


//question 4

function protect_email(email) {

    let parts = email.split('@');
    let username = parts[0];
    let domain = parts[1];
    let firstChar = username.charAt(0);
    let hiddenUsername = firstChar + '...';
    return hiddenUsername + '@' + domain;
}

let email = "robin_singh@example.com";
console.log(protect_email(email));


//question 5

function reverseWords(str) {

    if (typeof str !== 'string') {
        return "It must be a string.";
    }

    let words = str.split(' ');
    let reversedWords = words.reverse();
    let reversedString = reversedWords.join(' ');
    return reversedString;
}


console.log(reverseWords("JavaScript Exercises"));
console.log(reverseWords("abc"));

