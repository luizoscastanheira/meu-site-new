import "./globals.css";

export const metadata = {
  title: "Luiz Otávio - Dev Web e Analista de Sistemas",
  description: "Esta é página pessoal de Luiz Otávio, Graduado em Análise e Desenvolvimento de Sistemas e programador fullstack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
