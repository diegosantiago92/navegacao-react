import "./globals.css";
import Topo from '@/componentes/Topo';

export const metadata = {
  title: "Navegação React",
  description: "Exemplo de navegação em múltiplas páginas com React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
      </body>
    </html>
  );
}
