export interface IContact {
  id: string
  name: string
  phone: string
  email: string
  tags?: string[]
}

export type ContactKeyUnion = keyof IContact
