export const SITE = {
  name: 'Elite Electric',
  phone: '(02) 8000 4357',
  phoneHref: 'tel:+61280004357',
  email: 'hello@eliteelectric.com',
  area: 'Greater Metro & Surrounding Suburbs',
  hours: 'Mon–Sun · 24 Hours',
} as const

export const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why' },
  { label: 'Reviews', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
] as const

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
