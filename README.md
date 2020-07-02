# Trip Calc Demo

## Design decisions

### Library
**Gatsby**

I wanted to use static sites, since they require miminal compute power to serve because the pages are pre-rendered.  This opens up a lot of cheap hosting options.  I've been wanting to learn Gatsby because the plugin system and GraphQL, so this seemed like a good opportunity to try it.  I'm aware of other static site options like Next.js and would like to analyze the tradeoffs between all of them in the future.

**Material UI**

Time crunched, so I wanted to use something I was familiar with.  It's not a good fit for projects where you want to really customize the look and feel, but for something where you need a nice experience immediately?  The built-in animations make components like TextField feel great out-of-the-box.

**UX**

My original design had a "calculate" button to get the amount owed.  However, that seemed like a lot of extra work for the user, which is why I decided to try and calculate this in real-time.

### Design
Mobile-first, because it's easier to scale a mobile design up than a desktop one down.

### Hosting
Github pages are tied to my username, (mtakemoto.github.io), which made it seem more suited to a personal site.  It would have also required me to set up Travis-CI and learn their YAML syntax (possible but would rather not waste time on a limited demo)

I settled on Netlify because of a couple of factors:
1. Built-in CI/CD.  It was almost too easy.
1. Automatic HTTPS
1. Gatsby integration out of the box
1. Free tier!
1. Easily customizable sub-domain names

## Code limitations
For the problem, my implementation works for any number of people so long as they all owe money to one person.  This breaks if you have more than one person that is owed money.  For example, if you have "Alice: $10", "Bob: $5", "Charlie: $11", the split would be $8.67 each.  Since both Alice and Charlie have spent more than the split, the simple implemenation doesn't work.

## Future improvements
- Add the option to remove a person or one of their expenses.
- Handle the limitations above
- Explore using hooks to simplify state management
- Remove all the Gatsby boilerplate stuff that I'm not using
- Unify the styling between Gatsby and Material UI more
- Remove unnecessary re-renders on typing
- Add form validation to only allow for typing numbers into the "amount" box
- Make sure all numbers are properly rounded/truncated to two decimal places