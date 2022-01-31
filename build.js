//const path = require("path");
import fs from "fs/promises";
import got from "got";

const URL_PREFIX =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGIiNMQtlntW17iD7oILAoZFHV9JkOuNMCtS5SV93a4p56VD1YgjJZVouYNAinQT6tij-P0-WTHMAH/pub?gid=";
const URL_SUFIX = "&single=true&output=csv";

//const LOCATIONS_URL =
//  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGIiNMQtlntW17iD7oILAoZFHV9JkOuNMCtS5SV93a4p56VD1YgjJZVouYNAinQT6tij-P0-WTHMAH/pub?gid=0&single=true&output=csv";

//const RELATIONS_URL =
//  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGIiNMQtlntW17iD7oILAoZFHV9JkOuNMCtS5SV93a4p56VD1YgjJZVouYNAinQT6tij-P0-WTHMAH/pub?gid=1204171896&single=true&output=csv";

//const LOCATION_SHEET = "0";
//const RELATIONS_SHEET = "1204171896";

const sheets = [
  { name: "locations", gid: "0" },
  { name: "relations", gid: "1204171896" },
];

async function updateDatabase() {
  let out = "";

  for (let sheet of sheets) {
    console.log("Fetching and updating", sheet.name);
    let URL = URL_PREFIX + sheet.gid + URL_SUFIX;
    const data = await got(URL);

    // trim all whitespace, empty lines
    const words = data.body
      .split(/\n/)
      .map((el) => el.trim())
      .filter((el) => el);

    console.log("Got", words.length - 1, sheet.name);

    out = out + `const ${sheet.name} = ${JSON.stringify(words, null, 4)};\n`;
  }

  await fs.writeFile("./dist/inspiratsioon.js", out);
}

async function copyIndex() {
  console.log("Processing index.html");
  const index = await fs.readFile("./src/index.html", "utf-8");
  const processed = index.replaceAll("./dist", "");
  await fs.writeFile("./dist/index.html", processed);
  console.log("Done");
}

await updateDatabase();
await copyIndex();
