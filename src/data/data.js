export const whatsappNumber = "5491169603403";

export const departments = [
  {
    id: "7",
    title: "Departamento 7",
    capacity: "Hasta 3 personas",
    price: "85.000",
    images: Array.from({ length: 15 }, (_, i) => `/depto7/img (${i + 1}).jpg`),
    description:
      "Departamento acogedor con vista directa al mar. Ideal para parejas o familias pequeñas.",
    size: "45 m²",
    badge: "Frente al mar",
    features: ["Vista al mar", "Cocina equipada", "Wi-Fi"],
  },
  {
    id: "12",
    title: "Departamento 12",
    capacity: "Hasta 6 personas",
    price: "95.000",
    images: Array.from({ length: 15 }, (_, i) => `/depto12/img (${i + 1}).jpg`),
    description:
      "Amplio departamento ideal para familias. Espacios integrados y gran luminosidad.",
    size: "85 m²",
    badge: "Ideal familias",
    features: ["3 ambientes", "Parrilla", "Cochera"],
  },
  {
    id: "13",
    title: "Departamento 13",
    capacity: "Hasta 6 personas",
    price: "95.000",
    images: Array.from({ length: 2 }, (_, i) => `/depto13/img (${i + 1}).jpg`),
    description:
      "Espacioso y completamente equipado. La mejor vista panorámica y todos los servicios.",
    size: "85 m²",
    badge: "Amplio",
    features: ["Balcón terraza", "Gas natural", "Smart TV"],
  },
  {
    id: "intermedio",
    title: "Departamento Intermedio",
    capacity: "Hasta 4-5 personas",
    price: "Consultar",
    images: Array.from({ length: 14 }, (_, i) => `/depto6/img (${i + 1}).jpeg`),
    description:
      "Tamaño intermedio. Equilibrio perfecto entre espacio y confort.",
    size: "65 m²",
    badge: "Intermedio",
    features: ["Equipamiento completo", "Céntrico"],
  },
];

export const services = [
  { icon: "fa-wifi", label: "Wi-Fi Alta Velocidad" },
  { icon: "fa-tv", label: "Smart TV" },
  { icon: "fa-car", label: "Cochera Cubierta" },
  { icon: "fa-fire", label: "Gas Natural" },
  { icon: "fa-snowflake", label: "Heladera con Freezer" },
  { icon: "fa-utensils", label: "Cocina Equipada" },
  { icon: "fa-wind", label: "Ventiladores" },
  { icon: "fa-braille", label: "Parrilla" },
];

export const heroImages = [
  {
    src: "/paisajes/hero-1.jpg",
    alt: "Vista panorámica de la playa al amanecer",
  },
  {
    src: "/paisajes/hero-2.jpg",
    alt: "Interior luminoso de un departamento con vista al mar",
  },
  { src: "/paisajes/hero-3.jpg", alt: "Balcón con vista al mar y mobiliario" },
  {
    src: "/paisajes/hero-4.jpg",
    alt: "Vista desde abajo del atardecer en la playa",
  },
  {
    src: "/paisajes/hero-5.jpg",
    alt: "Departamento playero visto desde afuera",
  },
  {
    src: "/paisajes/hero-6.jpg",
    alt: "Paisaje del atarceder en la playa",
  },
  {
    src: "/paisajes/hero-7.jpg",
    alt: "Vista panorámica de la playa de día",
  },
];
