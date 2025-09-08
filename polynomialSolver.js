const fs = require("fs");

function solvePolynomial(fileName) {
  const data = fs.readFileSync(fileName, "utf-8");
  const json = JSON.parse(data);

  const n = json.keys.n;
  const k = json.keys.k;

  let roots = [];

  // Decode roots
  Object.keys(json).forEach((key) => {
    if (key === "keys") return;
    const base = parseInt(json[key].base);
    const value = json[key].value;

    // Convert to BigInt for large numbers
    const decimalValue = BigInt(parseInt(value, base).toString());
    roots.push(decimalValue);
  });

  // Compute constant term P using first k roots
  let product = 1n;
  for (let i = 0; i < k; i++) {
    product *= roots[i];
  }

  // Apply sign (-1)^k
  if (k % 2 !== 0) {
    product = -product;
  }

  console.log(`Result for ${fileName}:`);
  console.log("Constant P =", product.toString());
  console.log("---------------------------------------------------");
}

// Run both test cases one after another
solvePolynomial("test1.json");
solvePolynomial("test2.json");
