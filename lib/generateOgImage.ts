import { createCanvas, loadImage, registerFont } from 'canvas';
import { SITE_URI, HOSTNAME } from '../config/constants';
import { writeFileSync, existsSync } from 'fs';
import drawMultilineText from 'canvas-multiline-text';

registerFont('public/Inter.otf', { family: 'Inter' });

type OgImagePayload = {
  slug: string;
  title: string;
};

export const generateOgImage = async ({ slug, title }: OgImagePayload) => {
  const filepath = `public/og/${slug}.png`;

  if (!existsSync(filepath)) {
    const imgBuffer = await createImage({ title });

    writeFileSync(filepath, imgBuffer);
  }
};

export const createImage = async ({ title }: Pick<OgImagePayload, 'title'>) => {
  const width = 1200;
  const height = 630;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  context.fillStyle = '#fff';
  context.fillRect(0, 0, width, height);

  const image = await loadImage(`${SITE_URI}frame.png`);

  context.drawImage(image, 0, 0);

  context.textAlign = 'center';
  context.textBaseline = 'top';
  context.fillStyle = '#000';

  drawMultilineText(context, title, {
    rect: {
      x: 600,
      y: 380,
      width: canvas.width - 20,
      height: canvas.height - 170,
    },
    font: 'Inter',
    verbose: false,
    lineHeight: 1.4,
    minFontSize: 15,
    maxFontSize: 56,
  });

  context.fillStyle = '#044AFD';
  context.font = '22px Inter';
  context.fillText(HOSTNAME, 600, 580);

  return canvas.toBuffer('image/png');
};
