/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang='en'>
        <body className='min-h-screen p-10 font-sans antialiased'>
          <section className='h-100 flex flex-col'>
            <Nav />
            <h1 className='my-10 text-center'>asdf-next</h1>

            <main>{props.children}</main>

            <footer className='text-center'>
              <p>Links</p>
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
