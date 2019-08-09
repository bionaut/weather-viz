export const formElementSpace = {
  height: 'elementSize',
  pl: 'padding.0',
  pr: 'padding.0',
}

export const formElementBorders = (error?: string | boolean) => ({
  border: '1px solid',
  borderRadius: 5,
  borderColor: error ? 'error' : 'border',
})
