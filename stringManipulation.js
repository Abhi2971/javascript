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
