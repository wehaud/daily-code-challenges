// Task: Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces. Rules for a smiling face: Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ; A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~ Every smiling face must have a smiling mouth that should be marked with either ) or D No additional characters are allowed except for those mentioned. Valid smiley face examples: :) :D ;-D :~) Invalid smiley faces: ;( :> :} :]
// Difficulty: medium
// Solved on: 29.04.2025
// Feelings: Я подумала, что можно было бы решить с регулярными выражениями, но я не знаю как их писать, поэтому решила, как смогла, но теперь я буду учить регулярные выражения!!

function countSmileys(arr) {
  let smileCount = 0;
  arr.forEach(function(value) {
    if (value[0] != ":" && value[0] != ";") return;
    if (value[1] === ")" || value[1] === "D") {
      smileCount += 1;
      return;
    }
    if (value[2]) {
      if ((value[2] === ")" || value[2] === "D") && (value[1] === "-" || value[1] === "~")) {
        smileCount += 1;
        return;
      }  
    }    
  });
  return smileCount;
}
