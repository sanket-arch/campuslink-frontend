import Providers from "@/components/common/Providers";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import Sidebar from "@/components/common/Sidebar";

export const metadata = {
  title: "Campus Link",
  description: "A application for campus connections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div style={{ display: "flex", minHeight: "100vh" }}>
              <Sidebar />
              <main style={{ flex: 1, padding: "1rem" }}>{children}</main>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
