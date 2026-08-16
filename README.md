# Student Portal

Yet another student portal — except this one doesn't 502 during registration week.

If you've ever refreshed IMS forty times in the last ten minutes of a deadline and watched it fail anyway, this exists so that particular flavor of suffering doesn't have to be a rite of passage forever. Consider it a small act of revenge against every "Server Busy" screen that has ever ruined a perfectly good Sunday night.

## What's in here

- Courses, grades, and a GPA bar that — unlike most GPAs on this campus — actually fills up
- A dashboard where you can search the user table instead of squinting at every row
- A settings page with a "Delete Account" button that asks if you're sure first, a courtesy IMS has never once extended to anyone

Built with Astro, Tailwind, and Bun, mostly because `bun install` finishing before the next mess meal felt like a reasonable bar to clear.

## Running it

```sh
bun install
bun run dev
```

Opens on `localhost:4321`. No VPN, no "you are not authorized," no CAPTCHA that fails on principle.

For a production build:

```sh
bun run build
```

## The look

Brutalist, on purpose — thick borders, hard shadows, zero gradients. If it looks like it was designed to survive a server room with questionable AC, good, that's the intent. Closer to an engineering drawing than a SaaS landing page.

## Why does this repo have so many commits for a student portal?

Because a nine-part Git lab said so. Every branch here was earned the hard way — stashes actually stashed, conflicts actually resolved by hand, zero `--force` in sight. If you're grading this: hi, thanks for reading this far.
