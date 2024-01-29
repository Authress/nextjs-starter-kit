'use client';

import Link from "next/link";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { userIsCurrentlyLoggedIn } from "../authressClient";

export default function ProtectedPage() {
  useEffect(() => {
    const userIsLoggedInDynamic = userIsCurrentlyLoggedIn();
    if (!userIsLoggedInDynamic) {
      return redirect("/unauthorized");
    }
  }, []);

  const userIsLoggedIn = userIsCurrentlyLoggedIn();
  if (!userIsLoggedIn) {
    return null;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <h1>Authress Protected Page</h1>

        <div
          style={{
            border: '1px white solid',
            borderRadius: '10px',
            padding: '2rem',
          }}
        >
          <div>This page is protected with a route guard. The route guard checks for a valid user session before allowing the user to enter it. If the user has a valid session they will enter. Without a valid session the guard will redirect the user to log in with their selected provider.</div>

          <br></br>
          <Link style={{ marginRight: '1rem' }} href="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
