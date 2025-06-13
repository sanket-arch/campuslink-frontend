import Providers from "@/components/common/Providers";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import ToastManager from "@/components/common/ToastManager";
import LayoutShell from "@/components/common/LayoutShell";

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
            <LayoutShell>{children}</LayoutShell>
            <ToastManager />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
