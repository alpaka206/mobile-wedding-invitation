// resize.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/gallery";
const thumbDir = "./public/gallery/thumb";
const fullDir = "./public/gallery/full";

// thumb, full 폴더 없으면 생성
[thumbDir, fullDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file);
  const fileName = path.parse(file).name;

  // 확장자 필터링 (webp만 처리)
  if (ext !== ".webp") return;

  const inputPath = path.join(inputDir, file);

  // 썸네일: 500px
  sharp(inputPath)
    .resize({ width: 500 })
    .toFile(path.join(thumbDir, `${fileName}.webp`))
    .then(() => console.log(`Thumb created: ${fileName}`))
    .catch(console.error);

  // 확대용: 1920px
  sharp(inputPath)
    .resize({ width: 1920 })
    .toFile(path.join(fullDir, `${fileName}.webp`))
    .then(() => console.log(`Full created: ${fileName}`))
    .catch(console.error);
});
