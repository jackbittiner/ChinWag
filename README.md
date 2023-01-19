# Chin Wag

Chin Wag is a chat app that renders all your favourite conversations from all
your favourite people. Imagine whatsapp, but you're not getting tracked by
Mark Zuckerberg.

## Requirements

| Requirememt                                                                                                                                                                                                                                                                 | Status | 
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Spend around 2 hours                                                                                                                                                                                                                                                        | ✅      | 
| Parse the JSON in to memory, the entire application should run off in-memory state                                                                                                                                                                                          | ✅      | 
| Render a sorted list of the conversations on the left of the screen (sorted by last_updated, newest at the top)                                                                                                                                                             | ✅      | 
| When clicking on a conversation → Render a sorted list of messages on the right of the screen (sorted by last_updated, oldest at the top)                                                                                                                                   | ✅      | 
| Show a basic 'reply' section at the bottom with a text field and 'Send' button to add a new message to the conversation                                                                                                                                                     | ❌      | 
| On typing a message in the textfield and clicking 'Send', the textfield should be cleared and the message should be added to the bottom of the list of messages along with the correct date                                                                                 | ❌      | 
| For each message, show the date (formatted however you prefer) and the text of the message on a second line                                                                                                                                                                 | ✅      | 
| Optional: "Editing a message": When clicking on a message → Add the text of the message into the textfield in the 'reply' section and change the button from 'Send' to 'Edit'. On clicking 'Edit', edit the message that was selected and change the button back to 'Send'. | ❌      | 
| Optional: Apply some styles with CSS                                                                                                                                                                                                                                        | 🤷     | 

## How to run locally

```shell
 git clone https://github.com/jackbittiner/ChinWag.git
 cd ChinWag
 yarn install
 yarn run dev
 
 // Open up http://localhost:5173/ in your browser.
 // There should be a link in your terminal window
```

Go on, click on one of those conversations would ya.

## How to run tests

```shell
  yarn test
```

So green! (hopefully)

## Technologies used

**React** - well... it is a React tech test after all.

**Typescript** - I love Typescript, it's great!

**Mock Service Worker (MSW)** - An API mocking library. It's amazing for local development and testing. If you'd like to
learn more I wrote [this nifty blog](https://medium.com/cazoo/mock-service-worker-in-the-browser-7e4033a25d8b) on how to
set it up. I first discovered it from [this even niftier blog](https://kentcdodds.com/blog/stop-mocking-fetch) from Kent
C Dodds. In this project I'm using the service worker to intercept calls to a `/getConversation` endpoint and using a
mock server in my tests which you can find at `./src/mocks/server.ts`

**Vite** - This was my first time using Vite to start a new React project and I would highly recommend it. It's so quick
and the
Hot Module Replacement is fantastic. Create React App is dead, Long live Vite!

**Vitest** - I also thought I would try out Vitest, a test framework run on Vite. Honestly it's also pretty great and
may use it again in the future.

**React Testing Library** - For super tasty tests on your React components

**Tailwind** - A utility css framework. It was my first time using it too. I'd heard a lot about it when I recently went
to
the React Advanced conference. I have mixed opinions. I like the simplicity of it and it's easy to pick up but if you
don't know the shorthand classNames then something like
this `className="text-blue-500 font-bold uppercase p-3 m-3 block"` may look a little funky.

## Things I'm happy about

I think the code is pretty clean and relatively well tested.

I think the below code is pretty cool:

```typescript jsx
interface LastUpdatedObject {
    last_updated: string;
}

export function sortByLastUpdated<Type extends LastUpdatedObject[]>(
    objectToSort: Type
): Type {
    return objectToSort.sort(compare);
}
```

I haven't done this Typescript trick before. Basically it allows the `sortByLastUpdated` to take in any type as long as
it contains the `last_updated` property. This meant it could be reused for both the Conversations and the Messages
without having to specify their exact types. And the best thing about it is that it returns the same type that is passed
in. Pretty cool right?

I have learnt some new technologies in the process. Perhaps I shouldn't be using unfamiliar things in a timed tech test
but I just treated this as an opportunity to learn some new cool thing So thank you for that.

I used a TDD approach for my component tests. It's great knowing you don't even need to run the application locally in
order to prove that you've got things working.

## Things that I could have done better

I probably could have spent my time more effectively. 2 hours seems like a long time, but it really flies by. I think
potentially using MSW was overkill, but it was somewhat of an attempt to show you how I would actually go ahead building
a product like this. I did not get on to the Sending a Message part of the tech test, but I'm very happy with the code
quality of what I did finish. It was a toss up between rushing to completion, but having worse code, or taking my time
and being happy with what's there. And I think I made the right decision.

I'll be honest now. I didn't TDD the sort function. In the interest of time I just wrote one test and then the entire
functionality. This isn't how I typically like to work but I wanted to get more done. I hope you'll forgive me...

It could do with a lick of paint.

## Conclusion

Well thank you so much for taking the time to review this tech test. I hope it's up to scratch. I'm pretty happy with
the result but it would've been nice to complete it in its entirety but hey ho. I hope to hear from you soon! Thanks JB