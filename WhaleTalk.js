const input = "turpentine and turtles";
const input2 = 'Hi, Human'
const input3 = "turpentine and turtles";
const input4 = 'a whale of a deal!'

const vowels = ['a','e','i','o','u'];

resultArray = [];

// iterate the input variable
function whaletalk(input){
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if (input[i]==vowels[j]){
                resultArray.push(input[i].toUpperCase());
            }
        }
        if(input[i]=='e'){
            resultArray.push(input[i].toUpperCase());
        }
        if(input[i]=='u'){
            resultArray.push(input[i].toUpperCase());
        }
    }
    console.log(resultArray.join(''));
}

whaletalk(input4);
