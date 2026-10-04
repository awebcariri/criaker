const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const filesToCompress = [
  "public/assets/depoimentos/comgelo-bill.mp4",
  "public/assets/depoimentos/kariri-com-k-feedback.mp4",
  "public/assets/depoimentos/kariri-com-k.mp4",
  "public/assets/depoimentos/yolanda-gifoni.mp4",
  "public/assets/video-covers/Designer_grafico.mp4",
  "public/assets/video-covers/Gestao_de_Eventos.mp4",
  "public/assets/video-covers/Planejamento_Estrategico.MOV"
];

async function compressVideo(filePath) {
  const absolutePath = path.resolve(filePath);
  const tempPath = absolutePath.replace(/\.(mp4|MOV)$/i, '-compressed.mp4');

  if (!fs.existsSync(absolutePath)) {
    console.log(`Skipping ${filePath} (not found)`);
    return;
  }

  console.log(`Compressing ${filePath}...`);
  return new Promise((resolve, reject) => {
    ffmpeg(absolutePath)
      .outputOptions([
        '-c:v libx264',
        '-crf 24',         // Better quality than 28
        '-preset fast',
        '-vf scale=-2:1080' // Keep it at 1080p for sharpness
      ])
      .save(tempPath)
      .on('end', () => {
        console.log(`Finished ${filePath}`);
        // Swap files
        fs.renameSync(tempPath, absolutePath);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error on ${filePath}:`, err);
        reject(err);
      });
  });
}

async function run() {
  for (const file of filesToCompress) {
    try {
      await compressVideo(file);
    } catch (err) {
      console.error(err);
    }
  }
  console.log('All done!');
}

run();
