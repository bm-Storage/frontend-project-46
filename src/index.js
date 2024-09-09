import  parseFile  from "../src/parser.js";
import { getFullPath, readFile, extractFormat } from "./util.js";

export default (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);

  const data1 = parseFile(readFile(fullPath1), extractFormat(filepath1));
  const data2 = parseFile(readFile(fullPath2), extractFormat(fullPath2));

  console.log(data1, data2);
};
