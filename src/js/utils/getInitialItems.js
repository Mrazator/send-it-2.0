import Immutable from 'immutable'
import { uuid } from './uuid'

const defaultItems = Immutable.List([
  {
    id: uuid(),
    name: "#channel1",
    customData: "custom data of channel1"
  },
  {
    id: uuid(),
    name: "#channel2",
    customData: "custom data of channel2"
  },
  {
    id: uuid(),
    name: "#channel3",
    customData: "custom data of channel3"
  }
])

export const getInitialItems = () => {
  const storedListJSON = localStorage.getItem('channelList')
  return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : defaultItems
}