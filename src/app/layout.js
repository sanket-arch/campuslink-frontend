import Providers from "@/common/Providers";
import "./globals.css";
import Sidebar from "@/common/Sidebar";

export const metadata = {
  title: "Campus Link",
  description: "A application for campus connections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '1rem' }}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
