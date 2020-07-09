

export const makeReducer = ({ initialState, actionsMap, customReducer }) => {
    const reducer = (prevState = initialState, action) => {
      if (typeof actionsMap === 'object') {
        const actionFunction = actionsMap[action.type]
        if (typeof actionFunction === 'function') {
          return actionFunction(prevState, action)
        }
      }
      if (customReducer) {
        return customReducer(prevState, action)
      }
      return prevState
    }
    reducer.initialState = initialState
    return reducer
  }