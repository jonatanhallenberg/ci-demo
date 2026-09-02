import { it, expect } from 'vitest'
import { greeting } from './greeting'

it('hälsar med förnamnet', () => {
  expect(greeting('Anna Andersson')).toBe('Hej Anna!')
})

it('skickar in ett undefined namn', () => {
  expect(greeting(undefined)).toBe('Hej Anna!')
})
