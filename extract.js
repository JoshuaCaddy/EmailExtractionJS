import fs from 'fs';
let text = fs.readFileSync("sample.txt", "utf-8")

console.log("read", text.length, "characters.");

// example of information gathered
let lineCount = 0;
let emailCount = 0;
let regex = /\b(?<username>\w*)@(?<domain>(?:\w*\.)+\w+\b)/gm;
let domainList = {};


text.split("\n").forEach(
    processOneLine
)

console.log(`Processed ${lineCount} lines.`);

// extract information from one line
// and update global variables
function processOneLine(line) {
    // example of gathering information
    lineCount++;
    for (const match of line.matchAll(regex)){
        domainList[match.groups.domain] ||= 0;
        domainList[match.groups.domain]++;
    }
}
Object.entries(domainList).sort(
    (left, right) => left[1] - right[1]
).reverse().forEach(
    ([k,v]) =>console.log(k,v)
);