# Testing Server Actions in Next.js

With <em>React Server Component (RSC)</em> support and server rendering by default with this version of Next.js (13.4), one can easily write <em>server code</em> such as directly connecting to and querying a database without needing to go through an API.

To do any kind of <em>server mutation</em> from a client component one would need to use <em>server actions</em> in tandem with the `useTransition()` hook, which as of 2023-08-03, are experimental.

Due to Next.js 'soft-navigation', using the `<Link>` tag means that initiating a server action that would mutate data on multiple pages tends to only <em>show</em> the mutation properly on the page in which the mutation was initiated, and navigating to other pages where the data <em>should</em> be different actually won't be without a refresh (and make sure your cache is set to revalidate frequently or not cache at all since by default all `fetch()` calls are cached)

** Be sure not to define those server actions in the files of client components as that could leak secrets. 