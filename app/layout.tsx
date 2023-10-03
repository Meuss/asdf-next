/* Components */
import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav'

/* Instruments */
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className="font-sans antialiased p-10 min-h-screen">
          <section className="h-100 flex flex-col">
            <Nav />
            <h1 className="text-center my-10">asdf-next</h1>

            <main>{props.children}</main>

            <footer className="text-center">
              <p>Links</p>
              <div className="flex gap-1 justify-center">
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  React
                </a>
                <span>-</span>
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                  Redux
                </a>
                <span>-</span>
                <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
                  Redux Toolkit
                </a>
                <span>-</span>
                <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
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
