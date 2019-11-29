var fs  = require("fs")
var newLineArray = fs.readFileSync('./text.txt').toString().split('\n')
var spaceArray = []
for (i = 0; i < newLineArray.length; i++) {
    spaceArray.push(newLineArray[i].split(' '))
}
var characterArray = []
for (i = 0; i<spaceArray.length; i++) {
    var item = spaceArray[i]
    for (j = 0; j<item.length; j++) {
        characterArray.push(item[j])
    }
}


module.exports = {
    charArray: () => {
        return characterArray
    }
}