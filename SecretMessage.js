let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length)
secretMessage.pop()
console.log(secretMessage.length)

secretMessage.push("to","Program")

secretMessage[secretMessage.indexOf('easily')] = 'right'
console.log(secretMessage)

secretMessage.shift()
console.log(secretMessage)

secretMessage.unshift('Programming')
console.log(secretMessage)

secretMessage.forEach(element => {
    if(element==='get' || element ==='right' || element==='the' || element==='first' || element==='time,') {
      secretMessage[secretMessage.indexOf(element)] = 'know';
    }
});

console.log(secretMessage.join(' '))