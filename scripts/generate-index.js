const fs = require('fs');
const path = require('path');

const contentDirs = ['dsa', 'frontend-knowledge', 'interview-resources'];
const outputFile = 'content.json';
const rootDir = path.resolve(__dirname, '..');

const index = {};

function getTitle(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^#\s+(.*)/);
    return match ? match[1].trim() : path.basename(filePath, '.md');
  } catch (e) {
    return path.basename(filePath, '.md');
  }
}

function scanDir(dir, relativePath) {
  const absolutePath = path.join(rootDir, relativePath);
  if (!fs.existsSync(absolutePath)) return {};

  const items = fs.readdirSync(absolutePath, { withFileTypes: true });
  const result = {};

  for (const item of items) {
    const itemPath = path.join(relativePath, item.name);
    
    if (item.name.startsWith('.') || item.name === 'node_modules') continue;

    if (item.isDirectory()) {
      const children = scanDir(path.join(absolutePath, item.name), itemPath);
      if (Object.keys(children).length > 0) {
        result[item.name] = children;
      }
    } else if (item.isFile() && item.name.endsWith('.md')) {
      result[item.name] = {
        path: itemPath,
        title: getTitle(path.join(rootDir, itemPath))
      };
    }
  }
  return result;
}

console.log('Scanning directories...');
for (const dir of contentDirs) {
  console.log(`Scanning ${dir}...`);
  index[dir] = scanDir(path.join(rootDir, dir), dir);
}

fs.writeFileSync(path.join(rootDir, outputFile), JSON.stringify(index, null, 2));
console.log(`Generated ${outputFile}`);
