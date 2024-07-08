import './globals.css';
import { MainHeader }  from '@/components/organisms/main-header'

export const metadata = {
  title: 'MJs Kitchen',
  description: 'Our online cookbook of created and found vegan recipes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}