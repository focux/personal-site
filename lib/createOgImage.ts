import { createCanvas, loadImage, registerFont } from 'canvas';
import path from 'path';
const drawMultilineText = require('canvas-multiline-text');

const fontPath = path.join(process.env.PWD + '/public/Inter.otf');

registerFont(fontPath, { family: 'Inter' });

const URL = 'focux.dev';

export const createOgImage = async ({ title }: { title: string }) => {
  const width = 1200;
  const height = 630;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  context.fillStyle = '#fff';
  context.fillRect(0, 0, width, height);

  const imagePath = path.join(process.env.PWD + '/public/og-frame.png');
  const image = await loadImage(imagePath);

  context.drawImage(image, 0, 0);

  context.textAlign = 'center';
  context.textBaseline = 'top';
  context.fillStyle = '#000';

  drawMultilineText(context, title, {
    rect: {
      x: 600,
      y: 400,
      width: canvas.width - 20,
      height: canvas.height - 150,
    },
    font: 'Inter',
    verbose: false,
    lineHeight: 1.4,
    minFontSize: 15,
    maxFontSize: 56,
  });

  context.fillStyle = '#044AFD';
  context.font = 'bold 22pt Inter';
  context.fillText(URL, 600, 570);

  return canvas.toBuffer('image/png');
};
