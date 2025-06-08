import Providers from "@/components/common/Providers";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

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
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Providers>
            <div style={{ minHeight: "100vh" }}>
              {children}
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
