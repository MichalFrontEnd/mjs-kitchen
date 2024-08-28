import './globals.css';
import { MainHeader }  from '@/components/organisms/main-header'

import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


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