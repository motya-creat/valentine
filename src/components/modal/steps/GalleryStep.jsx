import React, { useState } from 'react'
import photo1 from '../../../../public/images/photo1.jpg'
import photo2 from '../../../../public/images/photo2.jpg'
import photo3 from '../../../../public/images/photo3.jpg'
import photo4 from '../../../../public/images/photo4.png'
import photo6 from '../../../../public/images/photo5.jpg'


export default function GalleryStep({ onNext }) {

    const photos = [
        {
            id: 1,
            url: photo1,
            title: "...",
        },
        {
            id: 2,
            url: photo2,
            title: "...",
        },
        {
            id: 3,
            url: photo3,
            title: "...",
        },
        {
            id: 4,
            url: photo4,
            title: "...",
        },
        {
            id: 5,
            url: "https://sun9-61.userapi.com/s/v1/ig2/00VMzwglh2FEmYNCdo_helluRhUF7a9RRnOvPYBtT5sby26Crri1ifIbsaXySnJN1z0lxP8bgYfY9tVPF6JXX70F.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
            title: "...",
        },
        {
            id: 6,
            url: photo6,
            title: "...",
        }
    ]

    return (
    <div className="step-content gallery-step">
        <h2 className="step-title">📸 Наш фотоальбом</h2>
        <p className="step-subtitle">Нажми на фото, чтобы увеличить</p>

        <div className="gallery-grid-container">
            <div className="gallery-grid">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="gallery-grid-item"
                    >
                        <img src={photo.url} alt={photo.title} />
                    </div>
                ))}
            </div>
        </div>

        <button className="button-next" onClick={onNext}>
            Дальше ✨
        </button>
    </div>
)
}