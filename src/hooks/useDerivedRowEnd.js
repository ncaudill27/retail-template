import React from 'react'

const useDerivedRowEnd = ({imgHeight, copyHeight}) => {
  const [gridRowEnd, setGridRowEnd] = React.useState('span 21')

  React.useEffect(() => {
    const rowEnd = Math.floor(imgHeight / 20 + copyHeight / 20 + 2)
    setGridRowEnd(`span ${rowEnd}`)
  }, [imgHeight, copyHeight])
  
  return gridRowEnd
}

export default useDerivedRowEnd