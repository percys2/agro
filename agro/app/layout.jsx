import "./globals.css";

export const metadata = {
  title: "Agro SaaS",
  description: "Plataforma de gestión agropecuaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
