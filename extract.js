import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;
let emailCount = 0;
const regex = /@\w*\.com/gm;
let emailTypes = 0;
let emailDomains = [];

text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);
console.log(`Found ${emailCount} emails.`);
console.log(`Found ${emailTypes} different email domains.`);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;
    if (line.match(regex) !== null){
        emailCount++;
        let text = (line.match(regex)).toString();
        console.log(text);
        //check to see if email domain is already been recorded
        if (emailDomains.includes(text) !== true ){
            emailDomains.push(text);
            emailTypes++;
        }
    }
    // add code here to find emails in the line
}
console.log(emailDomains);