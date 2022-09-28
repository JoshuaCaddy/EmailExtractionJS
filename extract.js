import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;
let emailCount = 0;
const regex = /(\S*)@(\w*\.\S*)/gm;
let emailDomains = [];

text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);
console.log(`Found ${emailCount} emails.`);
console.log(`Found ${emailDomains.length} different email domains.`);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;
    let matches = line.match(regex);
    if (matches !== null){
        //check to see if email domain is already been recorded
        for (let i = 0; i < matches.length; i++){
            emailCount++;
            if (emailDomains.includes(matches[i]) !== true ){
                emailDomains.push(matches[i]);
            }
        }
    }
}
console.log(emailDomains);