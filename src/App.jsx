import './App.css'
import { useState } from 'react'
import { FloatingHearts } from './features/floating-hearts/ui/FloatingHearts'
import WelcomeStep from './components/modal/steps/WelcomeStep.jsx'
import MemoryStep from './components/modal/steps/MemoryStep.jsx'
import GalleryStep from './components/modal/steps/GalleryStep.jsx'
import CongratsStep from './components/modal/steps/CongratsStep.jsx'

function App() {
  const [step, setStep] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const handleNext = () => {
    setStep(prevStep => prevStep + 1)
  }

  const handleGetGift = () => {
    setIsFinished(true)
  }

  const handleRestart = () => {
    setStep(0)
    setIsFinished(false)
  }

  if (isFinished) {
    return (
      <div className="app-container finished">
        <FloatingHearts />
        <div className="finished-message">
          <div className="finished-content">
            <span className="big-emoji">💝</span>
            <h1>Подарок получен!</h1>
            <p>Ты забрала всё моё сердечко ❤️</p>
            <button className="restart-button" onClick={handleRestart}>
              Пройти заново 🔄
            </button>
          </div>
        </div>
      </div>
    )
  }

  const steps = [
    <WelcomeStep key="welcome" onNext={handleNext} />,
    <MemoryStep key="memory" onNext={handleNext} />,
    <GalleryStep key="gallery" onNext={handleNext} />,
    <CongratsStep key="congrats" onGetGift={handleGetGift} />
  ]

  return (
    <div className="app-container">
      <FloatingHearts />

      <div className="step-wrapper">
        {steps[step]}
      </div>
    </div>
  )
}

export default App