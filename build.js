const fs = require("fs");

console.log("========== REACT BUILD ==========");
console.log("Building React application...");

if (!fs.existsSync("src/App.js")) {
    console.error("React application files not found!");
    process.exit(1);
}

if (!fs.existsSync("public/index.html")) {
    console.error("HTML file not found!");
    process.exit(1);
}

fs.mkdirSync("build", { recursive: true });

fs.copyFileSync(
    "public/index.html",
    "build/index.html"
);

console.log("React application build completed successfully!");
console.log("Build output created in: build/");
