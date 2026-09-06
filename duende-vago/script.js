const products = {
  Mora: { eyebrow: 'Vino de mora', description: 'El sabor que nunca pasa de moda.', detail: 'Suave, aromático e ideal para compartir.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-0HBjeal2pjQj6SwsBIHToVqKKUKWaW.jpeg' },
  Piña: { eyebrow: 'Vino de piña', description: 'Un sabor tropical que invita a celebrar.', detail: 'Fresco, frutal y perfecto para descubrir algo diferente.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-wPpIipvf5y2oH8HLnz9x82VnAON22s.jpeg' },
  Araza: { eyebrow: 'Vino de araza', description: 'Una experiencia diferente en cada copa.', detail: 'Exótico, refrescante y muy aromático.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-m2cZW3SG5YEO8lX4IoZVd0DqbDdUUh.jpeg' },
  Naranjilla: { eyebrow: 'Vino de naranjilla', description: 'Una fruta muy nuestra, transformada en vino.', detail: 'Auténtico, frutal y sorprendente.', price: '$12.00', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-s2Gp4VeJ5LtcqhEFSUAQzZQWpFC2yo.jpeg' },
  Combos: { eyebrow: 'Regalos artesanales', description: 'Detalles especiales para cada ocasión.', detail: 'Cumpleaños, San Valentín, Día del Padre y más.', price: 'Desde $10.00', image: 'public/11.jpeg' }
};

const title = document.querySelector('#product-title');
const eyebrow = document.querySelector('#product-eyebrow');
const description = document.querySelector('#product-description');
const detail = document.querySelector('#product-detail');
const price = document.querySelector('#product-price');
const image = document.querySelector('#product-image');
const addButton = document.querySelector('#add-button');
const comboPhotos = ['public/11.jpeg', 'public/12.jpeg', 'public/13.jpeg', 'public/14.jpeg'];
const comboControls = document.querySelector('#combo-controls');
const comboDots = document.querySelector('#combo-dots');
let comboIndex = 0;
let comboInterval;

function showComboPhoto(index) {
  comboIndex = (index + comboPhotos.length) % comboPhotos.length;
  image.src = comboPhotos[comboIndex];
  image.alt = `Foto ${comboIndex + 1} de los combos Duende vago`;
  document.querySelectorAll('.combo-dot').forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === comboIndex);
  });
}

comboPhotos.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.className = 'combo-dot';
  dot.type = 'button';
  dot.setAttribute('aria-label', `Mostrar foto de combo ${index + 1}`);
  dot.addEventListener('click', () => showComboPhoto(index));
  comboDots.append(dot);
});
document.querySelector('#combo-previous').addEventListener('click', () => showComboPhoto(comboIndex - 1));
document.querySelector('#combo-next').addEventListener('click', () => showComboPhoto(comboIndex + 1));
const carouselImage = document.querySelector('#carousel-image');
const carouselPhotos = [
  'public/1.jpeg',
  'public/2.jpeg',
  'public/3.jpeg',
  'public/4.jpeg'
];
let carouselIndex = 0;

function showCarouselPhoto(index) {
  carouselImage.classList.add('is-changing');
  window.setTimeout(() => {
    carouselIndex = (index + carouselPhotos.length) % carouselPhotos.length;
    carouselImage.src = carouselPhotos[carouselIndex];
    carouselImage.alt = `Foto ${carouselIndex + 1} del vino Duende vago`;
    carouselImage.classList.remove('is-changing');
  }, 1200);
}

window.setInterval(() => showCarouselPhoto(carouselIndex + 1), 7000);

document.querySelectorAll('.category-button').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const product = products[category];
    if (!product) return;

    document.querySelector('.category-button.active').classList.remove('active');
    button.classList.add('active');
    title.textContent = category;
    eyebrow.textContent = product.eyebrow;
    description.textContent = product.description;
    detail.textContent = product.detail;
    price.textContent = `Precio: ${product.price}`;
    image.src = product.image;
    image.alt = `Botella de ${category}`;
    addButton.textContent = 'Agregar al carrito.';

    window.clearInterval(comboInterval);
    comboControls.classList.toggle('visible', category === 'Combos');
    if (category === 'Combos') {
      comboIndex = 0;
      showComboPhoto(0);
      comboInterval = window.setInterval(() => {
        showComboPhoto(comboIndex + 1);
      }, 6000);
    }
  });
});

addButton.addEventListener('click', () => {
  addButton.textContent = 'Agregado';
});