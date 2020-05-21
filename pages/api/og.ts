import { IncomingMessage, ServerResponse } from 'http';
import { createOgImage } from '../../lib/createOgImage';
import url from 'url';
import { registerFont } from 'canvas';
const https = require('https');
const fs = require('fs');

const downloadFontIfDontExist = async () => {
  return new Promise((resolve) => {
    if (!fs.existsSync('Inter.otf')) {
      const file = fs.createWriteStream('Inter.otf');
      https.get('https://focux.dev/Inter.otf', function (response) {
        response.pipe(file);

        response.on('end', () => {
          registerFont('Inter.otf', { family: 'Inter' });
          resolve();
        });
      });
    } else {
      resolve();
    }
  });
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url, true).query;

  await downloadFontIfDontExist();
  if (queryObject.title && typeof queryObject.title === 'string') {
    const buffer = await createOgImage({
      title: queryObject.title as string,
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    res.end(buffer);
  } else {
    res.statusCode = 400;
    res.end();
  }
};
