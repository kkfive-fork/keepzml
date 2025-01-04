import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = `${index}、${createRandomMessage()}`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
