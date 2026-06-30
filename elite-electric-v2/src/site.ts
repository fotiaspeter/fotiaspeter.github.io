export const SITE = {
  name: 'Elite Electric Services',
  shortName: 'Elite Electric',
  owner: 'Dimitry Lag',
  phone: '0412 345 678',
  phoneHref: 'tel:+61412345678',
  email: 'enquiries@eliteelectricservices.com.au',
  emailHref: 'mailto:enquiries@eliteelectricservices.com.au',
  area: 'Melbourne & all of Victoria',
  hours: '7 days · 24/7 for emergencies',
  licence: 'REC 36000',
  established: 2025,
} as const

export const NAV_LINKS = [
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
] as const

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
