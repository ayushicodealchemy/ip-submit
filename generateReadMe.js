const { readFileSync, writeFileSync } = require('fs');

const template = readFileSync('./template.md');
const readmeData = JSON.parse(readFileSync('./readme.json'));

const createObject = (json, tab = 1) => {
  let data = '{<br/>';
  Object.keys(json).forEach((e) => {
    const d = typeof json[e] === 'object' ? createObject(json[e], tab + 1) : json[e];
    data += `${Array(tab).fill(' &nbsp; ').join('')}${e}:${d}<br/>`;
  });
  return `${data}${Array(tab - 1)
    .fill(' &nbsp; ')
    .join('')}}${tab - 1 ? ',' : ''}`;
};

const createdTable = Object.keys(readmeData)
  .map(
    (e) =>
      `### ${e} [Extends Field](#field)\n|Name|Description|e.g.|\n|:---|:---|:---|\n` +
      readmeData[e].data.map((e) => `| ${e.map((e) => `${e} |`).join('')}`).join('\n') +
      `\n|rules|Validation rule for this field.|<pre>${createObject(readmeData[e].rules)}</pre>|`,
  )
  .join('\n');

writeFileSync('./README.md', template + createdTable);
