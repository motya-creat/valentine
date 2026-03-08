import React, { useEffect, useState } from 'react';
import styles  from './FloatingHearts.module.css';

interface Heart {
  id: number;
  left: number;
  emoji: string;
  duration: number;
  delay: number;
}

const EMOJIS = ['❤️', '🧡', '💖', '💋', '✨', '💓', '💕', '🩷', '🌸', '🌷','🎀', '💐', '❤️‍🔥', '💘', '💞', '💝'];

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 19 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      duration: 7 + Math.random() * 8,
      delay: Math.random() * -15,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className={styles.container}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};