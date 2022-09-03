import { Horse } from '@services'

export const paginate = (list: Horse[], page: number, perPage: number): Horse[] => {
  const currentPageNumber = page * perPage - perPage

  return [...list].splice(currentPageNumber, perPage)
}
