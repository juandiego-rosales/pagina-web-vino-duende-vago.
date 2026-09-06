'use client'

import { useState } from 'react'

const products = {
  Mora: { title: 'Mora', eyebrow: 'Vino de mora', description: 'El sabor que nunca pasa de moda.', detail: 'Suave, aromático e ideal para compartir.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-0HBjeal2pjQj6SwsBIHToVqKKUKWaW.jpeg' },
  Piña: { title: 'Piña', eyebrow: 'Vino de piña', description: 'Un sabor tropical que invita a celebrar.', detail: 'Fresco, frutal y perfecto para descubrir algo diferente.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-wPpIipvf5y2oH8HLnz9x82VnAON22s.jpeg' },
  Araza: { title: 'Araza', eyebrow: 'Vino de araza', description: 'Una experiencia diferente en cada copa.', detail: 'Exótico, refrescante y muy aromático.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-m2cZW3SG5YEO8lX4IoZVd0DqbDdUUh.jpeg' },
  Naranjilla: { title: 'Naranjilla', eyebrow: 'Vino de naranjilla', description: 'Una fruta muy nuestra, transformada en vino.', detail: 'Auténtico, frutal y sorprendente.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-s2Gp4VeJ5LtcqhEFSUAQzZQWpFC2yo.jpeg' },
  Combos: { title: 'Combos para celebrar', eyebrow: 'Regalos artesanales', description: 'Detalles especiales para cada ocasión.', detail: 'Cumpleaños, San Valentín, Día del Padre y más.', price: 'Desde $10.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-gdI0x9EY4Ey525sEJwOO1NzxLKwWBB.png' },
} as const

const categories = Object.keys(products) as Array<keyof typeof products>

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof products>('Mora')
  const [added, setAdded] = useState(false)
  // HMR can preserve an older selection such as "Moro" after the catalog changes.
  // Always resolve to a valid product so the preview never renders an undefined item.
  const product = products[activeCategory] ?? products.Mora

  return (
    <main className="site-shell">
      <header className="site-header">
        <h1>Duende vago</h1>
        <p>Vino artesanal</p>
      </header>

      <nav className="category-nav" aria-label="Categorías de productos">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? 'category-button active' : 'category-button'}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="search-row" aria-label="Buscar productos">
        <span className="search-icon" aria-hidden="true" />
        <label className="sr-only" htmlFor="product-search">Buscar productos</label>
        <input id="product-search" type="search" placeholder="Buscar" />
      </section>

      <section className="product-area" aria-labelledby="product-title">
        <article className="product-card">
          <div>
            <p className="product-eyebrow">{product.eyebrow}</p>
            <h2 id="product-title">{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.detail}</p>
            <p>Precio: {product.price}</p>
          </div>
          <button className="add-button" type="button" onClick={() => setAdded(true)}>
            {added ? 'Agregado' : 'Agregar al carrito.'}
          </button>
        </article>

        <div className="product-visual">
          <img className="product-image" src={product.image} alt={`Botella de ${product.title}`} />
          <span className="visual-caption">Hecho lento · disfrutado sin prisa</span>
        </div>
      </section>

      <footer className="browser-footer" aria-hidden="true">
        <span className="play-circle">▶</span>
        <span className="progress-line" />
        <span className="volume">◖</span>
      </footer>
    </main>
  )
}
