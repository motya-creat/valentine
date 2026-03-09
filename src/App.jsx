import './App.css'
import { useState } from 'react'
import { FloatingHearts } from './features/floating-hearts/ui/FloatingHearts'
import WelcomeStep from './components/modal/steps/WelcomeStep.jsx'
import MemoryStep from './components/modal/steps/MemoryStep.jsx'
import GalleryStep from './components/modal/steps/GalleryStep.jsx'
import CongratsStep from './components/modal/steps/CongratsStep.jsx'

function App() {
  const [step, setStep] = useState(0)
  const [setIsFinished] = useState(false)

  const handleNext = () => {
    setStep(prevStep => prevStep + 1)
  }

  const handleGetGift = () => {
    setIsFinished(true)
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