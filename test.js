const fs = require("fs");

console.log("========== TEST ==========");

if (fs.existsSync("src/App.js")) {
    console.log("React application test passed!");
    process.exit(0);
} else {
    console.error("React application test failed!");
    process.exit(1);
}
