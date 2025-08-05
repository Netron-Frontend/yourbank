import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YourBanK",
  description: "Created by Ivan Makarevich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
