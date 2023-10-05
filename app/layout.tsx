/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'
import { Slider } from './components/Slider'
import { Ring } from './components/Ring'

/* Instruments */
import './styles/globals.scss'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang='en' suppressHydrationWarning>
        <body className='font-sans antialiased'>
          <section className='flex min-h-screen flex-col overflow-hidden'>
            <main className='relative'>
              {props.children}
              <Slider />
              <Ring />
            </main>

            <footer className='flex items-end justify-between p-10'>
              <Nav />
              <div className='flex justify-center gap-1'>
                <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
                  React
                </a>
                <span>-</span>
                <a href='https://redux.js.org/' target='_blank' rel='noopener noreferrer'>
                  Redux
                </a>
                <span>-</span>
                <a href='https://redux-toolkit.js.org/' target='_blank' rel='noopener noreferrer'>
                  Redux Toolkit
                </a>
                <span>-</span>
                <a href='https://react-redux.js.org/' target='_blank' rel='noopener noreferrer'>
                  React Redux
                </a>
              </div>
            </footer>
          </section>
        </body>
      </html>
    </Providers>
  )
}
