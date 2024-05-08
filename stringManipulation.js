// que 1 
function change_first_letter(a){

    let b=a , d=Array();
    console.log("Que_01) your input is ",b);
    d[0] = b[0].toUpperCase();
    // console.log(d[0]);
    for(let i=1;i<b.length;i++)
        {
            d[i] = b[i];
            // console.log(d[i]);
        }
        return d;
}

let c= change_first_letter("abhi");
console.log("Ans :- yout output is",c);



// que 2

function change_all_letter(a){
    console.log("Que_02) your input is ",a);
    return (a.toUpperCase());
}
let c1= change_all_letter("payal");
console.log("Ans :- your output is",c1);

// que 3
function isExist(sentence, word) {
    return sentence.includes(word);
  }
  let c2= isExist("payal",'k');
console.log("Que_03) occuence found ",c2);

// que 4

function Occurence(sentence, word) {
    let a1=sentence;
    const a2=word;
    let count=0;
    let a3=Array();
    console.log(a1);
    a3=a1.split(" ");
    console.log(a3);
    for (let i=0;i<a3.length;i++) {
         if (a3[i].includes(a2)){
                count++;
                console.log("",word,"found at position ",i+1);
         }
        }
        return count;
}
let c3= Occurence("Lorem ipsum dolor sit amet consectetur adipisicing amet. Adipisci, aliquid.","amet");
console.log("Que_04) occuence found ",c3);


// Que 5
function density(s,w){
    let b1=Array();
    b1=s.split(" ");
    console.log(b1);
    // console.log(b1.length);
    let count=0;
    for (let i=0;i<b1.length;i++) {
        if(b1[i].includes(w)){
            count++;
        }
    }
    return((count / b1.length)*100 );
}

console.log("Que_05) Density of that word is",density("my name is abhi. my name is abhi. my name is abhi","abhi"),"%");


//Que 6
function getExt(fileName) {
    // Split the file name by dot to get the parts
    const parts = fileName.split('.');

    // If there's only one part, it means there's no extension
    if (parts.length === 1) {
        return null;
    }

    // The extension is the last part of the split string
    const extension = parts[parts.length - 1];

    // Return the extension
    return extension;
}

// Example usage:
const fileName1 = "example.txt";
console.log("Que_06)",getExt(fileName1)); // Output: "txt"

const fileName2 = "document";
console.log("Que_06)",getExt(fileName2)); // Output: null


// Que 7
function rem_white_space(c1){
    console.log("Que_07)Before Removig white spaces the text is",c1);
    let c2=c1.replace(/ /gi,"");
    return c2;
}
console.log("Que_07) After Removing white space the text is",rem_white_space("  Lorem, ipsum  dolor sit amet consectetur adipisicing."))

// Que 8
function reverse(e) {
    // let d1=e.reverse();
    // console.log(d1);
    console.log("Que_08) Original word is",e);
    return e.split('').reverse().join('');
}

console.log("Que_08) reverse word is", reverse("abhi")); // Output: ihba

// Que 9
function countVowel(f){
    console.log("Que_09) INPUT :-",f);
    let f1=f.replace(/ /gi,"").toLowerCase();
    console.log("Que_09) work on given string :-",f1);
    // f1=f1.toLowerCase();
    let counts=0;
    for(let i=0;i<f1.length;i++){
        if(f1[i]=='a' || f1[i]=='e' || f1[i]=='i' || f1[i]=='o' || f1[i]=='u'){
            counts++;
        }
    }
    return counts;
}
console.log("Que_09) Total vowels count are",countVowel("Abhi   shek  shelke    FROM SATARA"));

//Que 10

function pallindrome(g){
    let g1=g;
    let g2=g1.split('').reverse().join('');
    if(g2===g1){
        console.log("Que_10) string is pallindrome");
    }
    else{
        console.log("Que_10) string is not pallindrome");
    }
}
pallindrome("abaa");
pallindrome("aba");

//Que 11
function truncateString(string, length) {
    if (string.length <= length) {
        return string;
    } else {
        return string.substring(0, length - 3) + "...";
    }
}
let inputString = "This is a long string that needs to be truncated.";
let truncatedString = truncateString(inputString, 20);
console.log("Que_11) ",truncatedString);

// Que 12

function maskString(inputString, sensitiveInfoStartIndex, sensitiveInfoLength, maskChar = '*') {
    // Check if the provided start index is within the string bounds
    if (sensitiveInfoStartIndex < 0 || sensitiveInfoStartIndex >= inputString.length) {
        return inputString; // Return the original string if start index is invalid
    }

    // Calculate the end index of the sensitive information
    const sensitiveInfoEndIndex = sensitiveInfoStartIndex + sensitiveInfoLength;

    // Check if the end index is within the string bounds
    if (sensitiveInfoEndIndex > inputString.length) {
        return inputString; // Return the original string if end index is beyond the string length
    }

    // Mask the sensitive information
    const maskedString = inputString.substring(0, sensitiveInfoStartIndex) +
        maskChar.repeat(sensitiveInfoLength) +
        inputString.substring(sensitiveInfoEndIndex);

    return maskedString;
}

// Example usage:
const inputString2 = "Your credit card number is 1234 5678 9012 3456.";
const sensitiveInfoStartIndex = 24; // Index where the credit card number starts
const sensitiveInfoLength = 19; // Length of the credit card number
const maskedString = maskString(inputString2, sensitiveInfoStartIndex, sensitiveInfoLength);
console.log("Que_12) ",maskedString);

// Que 13

function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input string against the regex
    return emailRegex.test(email);
}

// Example usage:
const email1 = "example@example.com";
const email2 = "invalid-email.com";
console.log("Que_13) Email verification is ",validateEmail(email1)); // Output: true
console.log("Que_13) Email verification is ",validateEmail(email2)); // Output: false

