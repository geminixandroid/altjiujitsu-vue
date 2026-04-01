const SITE_NAME = 'Алтайская Краевая Федерация Джиу-Джитсу'

export function setTitle(title) {
  document.title = title ? `${title} | ${SITE_NAME}` : `АКФД | ${SITE_NAME}`
}
