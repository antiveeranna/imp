//const path = require("path");
import fs from "fs/promises";
import got from "got";

const URL_PREFIX =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTGIiNMQtlntW17iD7oILAoZFHV9JkOuNMCtS5SV93a4p56VD1YgjJZVouYNAinQT6tij-P0-WTHMAH/pub?gid=";
const URL_SUFIX = "&single=true&output=csv";

const sheets = [
  { name: "locations", gid: "0" },
  { name: "relations", gid: "1204171896" },
  { name: "attributes", gid: "1514613525" },
  { name: "characters", gid: "1123232234"},
  { name: "emotions", gid: "560011507"},
  { name: "objects", gid: "1086079166"}
];

async function updateDatabase() {
  let out = "let inspiration = {};\n";
  let json = {};

  for (let sheet of sheets) {
    console.log("Fetching and updating", sheet.name);
    let URL = URL_PREFIX + sheet.gid + URL_SUFIX;
    const data = await got(URL);

    // trim all whitespace, empty lines
    const words = data.body
      .split(/\n/)
      .map((el) => el.trim())
      .filter((el) => el);

    console.log("Got", words.length, sheet.name);

    out =
      out +
      `inspiration['${sheet.name}'] = ${JSON.stringify(words, null, 4)};\n`;

    json[sheet.name] = words;
  }

  await fs.writeFile("./dist/inspiratsioon.js", out);
  await fs.writeFile("./dist/inspiratsioon.json", JSON.stringify(json, null, 4));
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
