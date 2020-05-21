import { IncomingMessage, ServerResponse } from 'http';
import { createOgImage } from '../../lib/createOgImage';
import url from 'url';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url, true).query;
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
