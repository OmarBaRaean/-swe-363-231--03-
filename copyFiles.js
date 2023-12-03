const fs = require('fs');
const path = require('path');

// Validate command-line arguments
if (process.argv.length < 4) {
 console.error('Usage: node app.js <source directory> <target directory>');
 process.exit(1);
}

const sourceDir = process.argv[2];
const targetDir = process.argv[3];

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
 fs.mkdirSync(targetDir, { recursive: true });
}

// Read the contents of the source directory
fs.readdir(sourceDir, (err, files) => {
 if (err) {
    console.error(`Error reading directory: ${err}`);
    process.exit(1);
 }

 // Filter for files with specific extensions (e.g., .txt, .jpg)
 const allowedExtensions = ['.txt', '.jpg'];
 const filteredFiles = files.filter(file =>
    allowedExtensions.some(ext => path.extname(file) === ext)
 );

 // Copy the filtered files to the target directory while preserving their original names
 filteredFiles.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    fs.copyFile(sourcePath, targetPath, err => {
      if (err) {
        console.error(`Error copying file: ${err}`);
      } else {
        console.log(`Copied ${sourcePath} to ${targetPath}`);
      }
    });
 });
});