import Immutable from 'immutable'

const defaultItems = Immutable.List()

export const getInitialItems = () => {
  const storedListJSON = localStorage.getItem('channels')
  return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : defaultItems
}
