import type { Metadata } from "next"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import ApolloProvider from "@beatforge/web/apollo/ApolloProvider"

export const metadata: Metadata = {
  title: "BeatForge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ApolloProvider>
        <body className={GeistSans.className}>{children}</body>
      </ApolloProvider>
    </html>
  )
}
