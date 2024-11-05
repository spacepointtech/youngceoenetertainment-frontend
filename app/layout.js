// 'use client'; // Needed for client-side hooks 
// import { usePathname } from 'next/navigation';
// import Navbar from '@/components/Navbar';
// import '@/app/globals.css';

// export default function Layout({ children }) {
//   const pathname = usePathname(); // Get the current path

//   // Hide Navbar 
//   const hideNavbar = ['/login', '/signup', '/reset', '/upgrade', '/upgrade-duo', '/upgrade-label', '/subscription', '/pre-save', '/smart-links']
//     .includes(pathname) || pathname.startsWith('/dashboard');

//   return (
//     <html lang="en">
//       <head>
//         <title>Young CEO Entertainment</title>
//         <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
//       </head>
//       <body>
//         {!hideNavbar && <Navbar />}
//         {children}
//       </body>
//     </html>
//   );
// }


'use client'; // Needed for client-side hooks
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';
import Script from 'next/script';

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Hide Navbar 
  const hideNavbar = ['/login', '/signup', '/reset', '/upgrade', '/upgrade-duo', '/upgrade-label', '/subscription', '/pre-save', '/smart-links']
    .includes(pathname) || pathname.startsWith('/dashboard');

  const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
  const measurementId = 'G-KMBJ4CMN3N'; // Replace with your actual Measurement ID

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Only send data to GA if not on localhost
            ${isLocalhost ? '' : `gtag('config', '${measurementId}');`}
          `}
        </Script>
      </head>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
