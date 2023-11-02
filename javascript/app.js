const s = "Hello World"
const l = "   fly me   to   the moon  "

var lengthOfLastWord = function(s) {
    var val = s.split(' ')
    if(s.length<0){
        return 0
    }
    const result = val.filter(word=> word.trim() != "")
    console.log(result);
    return result[result.length-1].length
    
 };

console.log(lengthOfLastWord(l));