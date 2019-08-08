export const formElementSpace = {
  height: 'elementSize',
  pl: 'padding.0',
  pr: 'padding.0',
}

export const formElementBorders = (error?: string | boolean) => ({
  border: '2px solid',
  borderColor: error ? 'error' : 'border',
})
