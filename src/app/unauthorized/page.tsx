'use client';

import { useEffect, useState } from 'react';

import { login, userIsCurrentlyLoggedIn } from '../authressClient';
import Link from 'next/link';
import { redirect } from "next/navigation";

export default function Unauthorized() {
  async function loginAndRedirect() {
    await login();
    return redirect("/");
  }

  useEffect(() => {
    const userIsLoggedInDynamic = userIsCurrentlyLoggedIn();
    if (userIsLoggedInDynamic) {
      return redirect("/");
    }
  }, []);

  const userIsLoggedIn = userIsCurrentlyLoggedIn();
  if (userIsLoggedIn) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1>You are not logged in</h1>

        <div
          style={{
            border: '1px white solid',
            borderRadius: '10px',
            padding: '2rem',
          }}
        >
          <div>This page is displayed when a user attempts to navigate a protected page and they are not logged in. When this happens, it makes sense to automatically redirect them to the login page.</div>

          <br></br>
          <Link style={{ marginRight: '1rem' }} href="/">
            Back to Home
          </Link>
          <button style={{ marginRight: '1rem' }} onClick={loginAndRedirect}>
            Login
          </button>
          </div>
      </div>
    </div>
  );
}
