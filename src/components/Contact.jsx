import React, { useEffect, useRef } from 'react'
import 'animate.css'

import { personalInfo } from '../data/portfolioData'

const Contact = () => {
  const emailRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            'animate__animated',
            'animate__fadeInRight'
          )
          entry.target.classList.remove('opacity-0')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (emailRef.current) {
      observer.observe(emailRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl">
        <h3 className="text-3xl text-blue-800 mb-8 font-bold">
          Contacto
        </h3>

        <p className="text-neutral-600 text-lg mb-12 leading-relaxed">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
          Estoy disponible para colaboraciones y nuevas oportunidades.
        </p>

        <div className="space-y-4">
          <div
            ref={emailRef}
            className="opacity-0 gap-4 text-lg"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-bold hover:text-neutral-600 transition-colors text-1xl"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
