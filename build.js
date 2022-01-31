import path from "path";
import fs from "fs/promises";
import got from "got";

const LOCATIONS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTGIiNMQtlntW17iD7oILAoZFHV9JkOuNMCtS5SV93a4p56VD1YgjJZVouYNAinQT6tij-P0-WTHMAH/pub?gid=0&single=true&output=csv';
const locdata = await got(LOCATIONS_URL);


// trim all whitespace, empty lines
const parsedlocations = locdata.body.split(/\n/).map(el => el.trim()).filter(el => el);

const out = 'const locations = ' + JSON.stringify(parsedlocations, null, 4) + ';';

await fs.writeFile('./dist/inspiratsioon.js', out);
console.log('Done');