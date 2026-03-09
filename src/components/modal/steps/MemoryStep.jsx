import React, { useState } from 'react'

export default function MemoryStep({ onNext }) {
  const [openAccordion, setOpenAccordion] = useState(null)

  const memories = [
    {
      id: 1,
      title: "💕 Наша первая встреча",
      content: "Тот самый вечер когда ты позвала меня на озеро, именно от туда всё началось... 💕"
    },
    {
      id: 2,
      title: "❤️ Твоя красота",
      content: "Ты у меня самая прекрасная и самая любимая ❤️"
    },
    {
      id: 5,
      title: "💕 Твоя нежность",
      content: "Твоя нежность делает мир вокруг ярче и добрее... 💕"
    },
    {
      id: 3,
      title: "🍽️ Твоя любимая еда",
      content: "Помню, как мы вместе готовили всё что сможем, начиная от спринг роллов заканчивая пиццей или синабонами ❤️"
    },
    {
      id: 4,
      title: "✨ Наше будущее",
      content: "Я хочу его провести с тобой и только с тобой... ✨"
    },
  ]

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className="step-content memory-step">
      <h2 className="step-title">📖 Наши воспоминания</h2>
      <p className="step-subtitle">Нажми на воспоминание, чтобы открыть:</p>
      
      <div className="accordion-container">
        {memories.map((memory) => (
          <div key={memory.id} className="accordion-item">
            <button 
              className={`accordion-header ${openAccordion === memory.id ? 'active' : ''}`}
              onClick={() => toggleAccordion(memory.id)}
            >
              {memory.title}
              <span className="accordion-icon">
                {openAccordion === memory.id ? '▼' : '▶'}
              </span>
            </button>
            
            {openAccordion === memory.id && (
              <div className="accordion-content">
                <p>{memory.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="button-next" onClick={onNext}>
        Дальше ✨
      </button>
    </div>
  )
}