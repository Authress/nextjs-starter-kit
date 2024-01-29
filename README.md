# Authress Starter Kit: Next.js

This repository is a repo template that contains a Nex.js example that uses Authress to Login. You can either [Fork](https://github.com/new?template_name=nextjs-starter-kit&template_owner=Authress) this repository to start with the template, or directly clone it above.

## Getting Started

1. Fork this template repository to start a new Next.js project: [Fork this template](https://github.com/Authress/nextjs-starter-kit/fork)
2. Clone the new repository:

```sh
git clone git@github.com:Authress/nextjs-starter-kit.git
```

3. Run `npm install` and then `npm run start`. (Or use yarn/pnpm to install dependencies and then `start` the site.)
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### File Directory

* `src/app`
  * `page.tsx` - Landing page which has login and logout buttons
  * `authressClient.tsx` - Configuration for Authress for users to login
  * `protected/page.tsx` - Page protected by user login via the login guard defined in the `main.tsx` file