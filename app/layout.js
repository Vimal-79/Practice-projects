import "./globals.css";

export const metadata = {
  title: "Link in bio tool: Everything you are, in one simple link | Linktree",
  description: "Join 70M+ creators and sell, share &amp; curate everything you do online. One bio link—your Linktree—brings it all together for your audience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
