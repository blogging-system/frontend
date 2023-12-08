import './../shared/styles/global.css'
import Navbar from '@/shared/layouts/Navbar/components'
import { Inter } from 'next/font/google'
import ReduxProvider from '@/shared/rtk/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
