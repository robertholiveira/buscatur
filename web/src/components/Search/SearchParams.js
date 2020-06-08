// default data for filter elements
export const priceInit = {
  0: 'R$ 0',
  5000: 'R$ 5000',
};

export const getAmenities = {
  id: 1,
  name: 'Destaques',
  identifier: 'destaques',
  options: [
    { label: 'Wi-Fi', value: 'wifi' },
    { label: 'Café da manhã incluso', value: 'cafe' },
    { label: 'Almoço incluso', value: 'almoco' },
    { label: 'Jantar incluso', value: 'jantar' },
    { label: 'Piscina na hospedagem', value: 'piscina' },
    { label: 'Ar-condicionado nos quartos', value: 'arcondicionado' },
    { label: 'Guia turístico incluso', value: 'guia' },
    { label: 'Passeios inclusos', value: 'passeios' },
  ],
};

export const getPropertyType = {
  id: 2,
  name: 'Tipo de quartos',
  identifier: 'tipo-de-quarto',
  options: [
    { label: 'Compartilhado', value: 'compartilhado' },
    { label: 'Privado', value: 'privado' }
  ],
};
