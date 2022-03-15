import styles from './styles/app.css';
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration} from 'remix';
import type {MetaFunction, LinksFunction} from 'remix';

export const meta: MetaFunction = () => {
  return {title: 'New Remix App'};
};

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
