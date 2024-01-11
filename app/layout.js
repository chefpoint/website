/* * */

import '@/styles/reset.css';
import '@/styles/defaults.css';
import { Work_Sans } from 'next/font/google';

/* * */

const workSans = Work_Sans({ subsets: ['latin'] });

/* * */

export const metadata = {
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT || 3000}`),
  title: 'CHEF POINT',
  description: 'Leading F&B Solutions',
};

/* * */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
