import React from 'react'

export default function WelcomeStep({ onNext }) {
  return (
    <div className="modal">
        <div className="modal-wrap">
          <div className="title">
            <h1>Привет, любимая</h1>
            <p>Я сделал это специально для тебя!</p>
            <p>Пройди этапы, чтобы получить подарок</p>
          </div>
          <button className='button-next' onClick={onNext}>Начать игру ❤️</button>
        </div>
      </div>
  )
}