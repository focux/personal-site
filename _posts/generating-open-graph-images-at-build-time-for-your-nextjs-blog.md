---
title: 'Generating Open Graph images at build time for your Next.js blog'
date: '2020-05-27T03:29:18.105Z'
category: 'React'
time: '5 Min'
description: 'Right after finishing building my blog, I knew that I needed to add Open Graph images to my blog posts to make it look prettier when someone shares one of my posts on social networks, and yes, also for that thing called SEO.'
---

Right after finishing building my blog, I knew that I needed to add [Open Graph](https://ogp.me/)—forward, I might refer to it as OG—images to my blog posts to make it look prettier when someone shares one of my posts on social networks, and yes, also for that thing called SEO. I searched through the internet for a free solution to dynamically generate beautiful and customizable open graph images, found some services that stated to do what I wanted but for some reason, none of them convinced me. This is when I got my [Aha moment](https://en.wikipedia.org/wiki/Eureka_effect) and thought, that it shouldn't be difficult to build this script myself, and indeed it wasn't.

Before continuing, for those who don't know what Open Graph is, according to their website:

> The Open Graph protocol enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

## Generating our image

To generate our image we are going to use [node-canvas](https://www.npmjs.com/package/canvas) which is a [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) implementation for Node.js of the Canvas DOM API. I decided to use it because it's very easy to understand and if you already know how to use the DOM API then you will know how to use the Node.js implementation.

Let's start by creating a new file, called `generateOgImage` and creating a `createImage` function initalizing our canvas:

```typescript
import { createCanvas } from 'canvas';

// our function will receive, in this case, the title of the blog post
// as a parameter
export const createImage = async ({ title }) => {
  // dimension of our image
  const width = 1200;
  const height = 630;

  // create an empty canvas
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // fill our frame with a white background
  context.fillStyle = '#fff';
  context.fillRect(0, 0, width, height);
};
```

Now we have created a blank canvas, however, I'm sure that like me, you will want to use a custom-designed background for your OG images. You can easily do that using Canvas, [this is](/frame.png) the one that I used for mine but you can use whatever you want:

```typescript
import { createCanvas, loadImage } from 'canvas';

export const createImage = async ({ title }) => {
  // code removed for clarity
  ...

  // load and draw our background image
  const image = await loadImage(`https://focux.dev/og/frame.png`);
  context.drawImage(image, 0, 0);
};
```

We now have a Canvas with our custom-designed background, however, we still haven't added it one of the most important parts of the image, the post's title. If you have used Canvas before, you know that it doesn't support multiline text out of the box, in order to implement it, you usually have to do some manual calculations. To avoid doing that, we're going to use a package called [canvas-multiline-text](https://www.npmjs.com/package/canvas-multiline-text), it does all that work for us, helping us to have multiline titles, for those huge ones—which are most of them. Also, the position you use for the text _might_ be different depending on the background image you choose and where you want your title to be positioned. That being said, let's now add our title:

```typescript
import { createCanvas, loadImage } from 'canvas';
import drawMultilineText from 'canvas-multiline-text';

export const createImage = async ({ title }) => {
  // code removed for clarity
  ...

  // some format/styles for our text
  context.textAlign = 'center';
  context.textBaseline = 'top';
  context.fillStyle = '#000';

  // draw our title
  drawMultilineText(context, title, {
    rect: {
      x: 600,
      y: 380,
      width: canvas.width - 20,
      height: canvas.height - 170,
    },
    font: 'sans-serif',
    verbose: false,
    lineHeight: 1.4,
    minFontSize: 15,
    maxFontSize: 56,
  });
};
```

Last but not least, we're going to add a final touch to our image, we are going to put our hostname at the bottom of it and return our final result as a buffer:

```typescript
import { createCanvas, loadImage } from 'canvas';
import drawMultilineText from 'canvas-multiline-text';

export const createImage = async ({ title }) => {
  // code removed for clarity
  ...

  // add our hostname at the bottom of the image
  context.fillStyle = '#044AFD';
  context.font = '22px sans-serif';
  context.fillText('focux.dev', 600, 580);

  return canvas.toBuffer('image/png');
};
```

## Saving our image

Alright, now we have our function to generate a buffer containing our image but we still need to persist our image to the disk and serve it as a static asset. When using [Next.js](https://nextjs.org/), you can create a folder called `public` on the root of the project and is going to be served automatically by Next. To avoid having a bunch of unorganized assets on our public folder, let's create a new folder inside `public` called `og` where we will save our images—usually, you will want to add this folder to your `.gitignore`.

We're going to create a new function called `generateOgImage` which is going to generate our image using the function we already created before and save it using the Node.js filesystem module:

```typescript
...
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';

export const generateOgImage = async ({ slug, title }) => {
  // the path where our image is going to be saved.
  const dir = path.resolve('public', 'og');
  const filepath = path.resolve(dir, `${slug}.png`);

  // check if directory doesn't exist, if it doesn't, we create it
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  // check if the image already exists, if it does we don't need to generate it again
  if (!existsSync(filepath)) {
    const imgBuffer = await createImage({ title });

    writeFileSync(filepath, imgBuffer);
  }
};
```

## Generating our image at build time

Now we have everything that we need to generate our images at build time. We are going to use Next.js `getStaticProps` function to do that using the functions that we created early. It's very straight-forward to do it, so let's go to our post's page and add the code below to `getStaticProps`:

```typescript
export async function getStaticProps({ params }) {
  ...
  await generateOgImage({ slug: yourPostSlug, title: yourPostTitle });
  ...
}
```

Now your images are going to be generated every time you build your project or a blog post's page, if the image already exists, it will skip it—this useful for our dev environment. Let's now add our Open Graph image to our posts, we just need to add the URL of our image to our `image:og` meta tag, e.g.:

```jsx
...
// using Next.js head component, we add our OG meta tag
<Head>
    <meta property="og:image" content={`${HOSTNAME}/og/${slug}.png`} />
</Head>
...
```

## What to do next?

We have just learned how to generate our Open Graph images for our blog posts at build time, now our posts are going to have beautiful images when shared on social media. If you are wondering how to keep improving your image, you could make it look prettier loading a custom font, add more information about your post like the read time and more. Below is the code used for this post.

Go take a look at the code for this post on [Github](https://github.com/focux/personal-site/blob/master/lib/generateOgImage.ts)