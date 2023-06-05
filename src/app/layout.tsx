import './globals.css'
import { Inter, Roboto_Flex as Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
export const metadata = {
  title: 'Santri sports',
  description: 'Loja de materiais esportivos'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-[#EAEAEA] font-Primary`}>
        {children}
      </body>
    </html>
  )
}
