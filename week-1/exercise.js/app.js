const fs = require("fs");

const kglBranches = {
  mainBranch: "KGL Head Office",
  kampala: "KGL Kampala",
  entebbe: "KGL Entebbe",

};

const jsonData = JSON.stringify(kglBranches);

fs.writeFile("kgl_config.json", jsonData, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created successfully!");
  }
});


fs.readFile("kgl_config.json", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);      
    return;
    } else {
        // console.log("File:", data.toString());
        const config = JSON.parse(data);
        console.log("KGL Branches:", config);
    }   
});