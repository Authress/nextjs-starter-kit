'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';

import { login, logout, makeApiCallWithUserToken, authressLoginClient } from './authressClient';
import Link from "next/link";

export default function App() {
  const [userProfile, setUserProfile] = useState({});
  const [authressApiUrlIsSet, setAuthressApiUrlIsSet] = useState(true);

  useEffect(() => {
    async function func() {
      if (authressLoginClient) {
        authressLoginClient.userSessionExists().then((userIsLoggedIn) => {
          setUserProfile(authressLoginClient!.getUserIdentity());
          console.log('User is Logged In', userIsLoggedIn, userProfile);
        });
      }
    }

    func();
  }, [userProfile]);

  useEffect(() => {
    setAuthressApiUrlIsSet(!!authressLoginClient);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', textAlign: 'center' }}>
          <a href="https://authress.io" target="_blank">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/logo.svg"
              alt="Authress Logo"
              width={180}
              height={37}
              priority
            />
          </a>
          <h1 style={{ marginRight: '2.5rem' }}>+</h1>
          <a href="https://authress.io/knowledge-base/docs/SDKs/javascript#starter-kits" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Image
                className=""
                src="/next.svg"
                alt="Next.js Logo"
                width={240}
                height={37}
                priority
              />
            </div>
          </a>
        </div>
        
        <h1>Authress + Next.js</h1>
        <br></br>

        <div
          style={{
            border: '1px white solid',
            borderRadius: '10px',
            padding: '2rem',
          }}
        >
          {authressApiUrlIsSet ? (
            <div>
              {!userProfile ? 
                <button style={{ marginRight: '1rem' }} onClick={login}>
                  Login
                </button>
                : <button style={{ marginRight: '1rem' }} onClick={logout}>
                  Logout
                </button>
              }
              <button style={{ marginRight: '1rem' }}>
                <Link href="/protected">
                  Go to Authress Protected Route Page
                </Link>
              </button>

              {userProfile ?
                <button style={{ marginRight: '1rem' }} onClick={makeApiCallWithUserToken}>
                  Call your service API
                </button>
                : ''
              }

              <br></br>
              <br></br>

              <div style={{ textAlign: 'left' }}>
                <span>User Profile:</span>
                <pre style={{ whiteSpace: 'break-spaces', overflowWrap: 'break-word' }}>{JSON.stringify(userProfile || 'Not logged in', null, 2)}</pre>
              </div>

              <br></br>
            </div>
          ) : (
            <div>
              <div>
                Authress Account Host URL is missing from your configuration.<br></br>Specify the <strong>AuthressApiUrl</strong> at the top of the <code style={{ color: '#dc3545' }}>src/app/authressClient.tsx</code> file.
                <br /><br />
                If you need an account, sign up for free at <a href="https://authress.io/app/#/signup">Authress.io</a>!
              </div>
            </div>
          )}
        </div>
        <p>Click on the Authress logo to learn more</p>
      </div>
    </div>
  );
}