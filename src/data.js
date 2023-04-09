import { nanoid } from 'nanoid'

const arr = []
for (let i = 0; i < 100; i++) {
  const id = nanoid()
  arr.push({
    name: `Group_____${i}`,
    id: id,
    members: (i + 1) * 132,
    selected: false
  })
}

export default arr
