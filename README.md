<p align="center">
    <img src="https://github.com/Authress/authress-sdk.cs/assets/5056218/924fb776-9588-4d4a-adf7-33682fa29356" height="300px" alt="Authress Media Banner">
</p>

# Authress Starter Kit: Next.js

<div>

 ![Next.js](./public/next.svg)

</div>

<p align="center">
    <a href="./LICENSE" alt="Apache-2.0"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></a>
    <a href="https://authress.io/community" alt="authress community"><img src="https://img.shields.io/badge/Community-Authress-fbaf0b.svg"></a>
</p>

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