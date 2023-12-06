import type { Metadata } from 'next';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BEATFORGE_API_URL,
  cache: new InMemoryCache(),
});

export const metadata: Metadata = {
  title: 'BeatForge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ApolloProvider client={apolloClient}>
        <body className={GeistSans.className}>{children}</body>
      </ApolloProvider>
    </html>
  );
}
