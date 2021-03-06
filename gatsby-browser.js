/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/style.scss"
import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import AppProvider from "./src/providers/app-provider";

// Wraps every page in a component
export function wrapPageElement({ element, props }) {

    return (
        <Auth0Provider
        domain={`${process.env.GATSBY_AUTH0_DOMAIN}`}
        clientId={`${process.env.GATSBY_AUTH0_CLIENT_ID}`}
        audience={`${process.env.GATSBY_AUTH0_API}`}
        useRefreshTokens={true}
        redirectUri={`${process.env.GATSBY_BASE_URL}callback`}
        >
            <AppProvider>{element}</AppProvider>
        </Auth0Provider>
    )
  }

