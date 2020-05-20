---
title: 'How to build better Tailwind components in React'
date: '2020-05-21T03:29:18.105Z'
category: 'React'
time: '5 Min'
---


After feeling the need to have a place to write my thoughts and my journey in my developer career, finally, I found the time and the inspiration to build my website and blog. I write this as a disclaimer for my _likely_ poor writing skills.

As you might already know—if you saw my home page—I work at [BenchApp](https://benchapp.com) building tools to better manage sport teams. Currently, we're working migrating a legacy PHP app to React and Node.js and one of the very first decisions we had to take, was regarding what tech stack—styling library, routing, state management, etc—we were going to use to build our new app, the only decision that wasn't very straight forward was the one regarding the styling library, however, we ended up using [Tailwind CSS](https://tailwindcss.com) and [Tailwind UI](https://tailwindui.com). So far, it's been a very pleasant experience, I thought I would hate the verbosity of huge classes lists but I have to admit that I've fallen in love with the simplicity of the utility-first classes approach that Tailwind uses.

## Understanding the problem

Besides all the good things I could say about Tailwind, one of the walls that we hit when working with it, was how difficult it was to build stateful components, because we have to write a lot of boilerplate code to handle the different classes for each state. To understand this problem, let's build a very simple avatar component using Tailwind:

```jsx
const Avatar = ({ size, className: classNameProp, status, src  }) => {
  // we initialize our className var
  let imageClassName = classNameProp || '';

  // common classes
  imageClassName += ' rounded-full bg-gray-400 relative';

  // we add the class name depending on the size prop.
  switch (size) {
    case 'sm':
      imageClassName += ' h-10 w-10';
      break;

    default:
    case 'md':
      imageClassName += ' h-12 w-12';
      break;

    case 'lg':
      imageClassName += ' h-14 w-14';
      break;
  }

  // we initializa the status badge with the common clases
  let statusBadgeClassName =
    'absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid';

  switch (status) {
    case 'online':
      statusBadgeClassName += 'bg-green-400';
      break;

    default:
    case 'offline':
      statusBadgeClassName += 'bg-gray-300';
      break;

    case 'away':
      statusBadgeClassName += 'bg-orange-400';
      break;
  }

  return (
    <div className="relative">
      <img className={imageClassName} src={src} alt="some alt" />
      <span className={statusBadgeClassName} />
    </div>
  );
};
```

## Building our class name helper

As you can see above, there are too many things that can be improve to make the code more readable, maintainable and with less boilerplate and verbosity for our component. We need a way to handle the classes and activate them depending on what state the component is, one of the things that I like of Vue it's the way they handle classes, one of the possible parameters that you can pass to the Vue `class` prop is an object which contains the different classes names and whether they are active or not, the object looks very similar to this:

```typescript
{
    'disabled-class': isDisabled,
    'loading-class': isLoading,
}
```

As you see, using the Vue approach we could write a more readable and simple avatar component. There's a package that you can use to do that, it's called [classnames](https://www.npmjs.com/package/classnames), although this time we're going to build our own just for the sake of this article and because it's very easy to do it.

```typescript
export const getClassName = (classes) => {
    // we get the name of the classes, remove leading/trailing spaces and undefined classes
  const names = Object.keys(classes)
    .map((v) => v.trim())
    .filter((v) => v);
 
  let activeClasses = '';

  // we loop through all the classes and check if they are active
  // if they are, we add it to the classes list
  for (const name of names) {
    if (classes[name]) {
      activeClasses += ` ${name}`;
    }
  }

  // we return the class name
  return activeClasses.trim();
};

```

## Rewriting our component

Now, let's re-write our Avatar component using our brand new class utility and let's see how it looks now:

```jsx
const Avatar = ({ size = 'sm', className: classNameProp, status = 'offline', src  }) => {
  const imageClassName = getClassName({
      'h10 w-10': size === 'sm',
      'h-12 w-12': size === 'md',
      'h-14 w-14': size === 'lg',
      'rounded-full bg-gray-400 relative': true // common classes
  });

  const statusBadgeClassName = getClassName({
      'bg-green-400': status === 'online',
      'bg-gray-300': status === 'offline',
      'bg-orange-400': status === 'away',
      'absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full text-white shadow-solid': true
  })

  return (
    <div className="relative">
      <img className={imageClassName} src={src} alt="some alt" />
      <span className={statusBadgeClassName} />
    </div>
  );
};
```

Can you tell the difference between our old and new component!? Of course you can! I truly believe we have accomplished our main goals here—readability, maintainability, no boilerplate.

## Wrapping up

This way of building components have improve _a lot_ our code at work. If you still are not using Tailwind, I totally recommend you to give it a try, I know you will love it as I do. If you have doubts whether to use a [CSS-IN-JS](https://en.wikipedia.org/wiki/CSS-in-JS) approach or utility classes, I can't tell you that one is better than the other, just use the one you feel comfortable writing and maintining and if you want, you can even use both to solve some problems—mostly related to selectors—that you can rarely encounter in Tailwind.




