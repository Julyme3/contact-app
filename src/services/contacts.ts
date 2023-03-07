import type { IContact } from '@/types/contact'
import data from '@/services/data.json'

const readInvoices = async (): Promise<IContact[]> => {
  // call api
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 100)
  })
}

export default {
  readInvoices
}
