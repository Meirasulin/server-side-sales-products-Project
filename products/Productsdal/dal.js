const fs = require("fs");
const path = require("path");
const location = path.join(__dirname, "../ProductsDB/prudacts.json");
const filePath = location;
const getAllPrudacts = () => {
  const rawData = fs.readFileSync(filePath);
  const products = JSON.parse(rawData);
  return products;
};

const updateFile = (newProductsList) => {
  const modifiedData = JSON.stringify(newProductsList);
  fs.writeFileSync(filePath, modifiedData);
};

module.exports = { getAllPrudacts, updateFile };
