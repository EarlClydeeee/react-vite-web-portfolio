import { createFileRoute } from '@tanstack/react-router'
import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Footer } from '../components/Footer'
import { ScrollProgress } from '../components/ScrollProgress'
import { CursorFollower } from '../components/CursorFollower'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div id="home" className="min-h-screen bg-black text-white relative">
      {/* Custom Cursor */}
      <CursorFollower />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
