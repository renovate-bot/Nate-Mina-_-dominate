import express from 'express';
import cors from 'cors';
import { createReadStream } from 'fs';
import { stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve video files
app.get('/videos/:filename', async (req, res) => {
  const videoPath = path.join(__dirname, '../../videos', req.params.filename);
  
  try {
    const stats = await stat(videoPath);
    const range = req.headers.range;

    if (!range) {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': 'video/mp4',
      });
      createReadStream(videoPath).pipe(res);
      return;
    }

    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
    const chunksize = (end - start) + 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stats.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    });

    createReadStream(videoPath, { start, end }).pipe(res);
  } catch (error) {
    res.status(404).send('Video not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});