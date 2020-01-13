function convertToEmoji(codepoint){
    return String.fromCodePoint(codepoint);
}

//taking codepoint input and rendering as an emoji.

console.log(convertToEmoji(0x1F600));

function convertToCP(emoji){
  return "0x" + emoji.codePointAt(0).toString(16);
}

//taking emoji value and rendering as codepoint

console.log(convertToCP('😀'));

//when emojis are rendered in HTML, they do not console.log out in codepoint value.  
function convertDom(){
 document.getElementById("codePt").innerHTML = '😀';
 document.getElementById("emoji").innerHTML = '0x1F600';
}
