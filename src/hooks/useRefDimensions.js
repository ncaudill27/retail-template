import * as React from "react"

const useRefHeight = ref => {
  const [height, setHeight] = React.useState(null)
  const [width, setWidth] = React.useState(null)

  React.useEffect(() => {
    if (ref !== undefined) {
      setHeight(ref.current.getBoundingClientRect().height)
      setWidth(ref.current.getBoundingClientRect().width)
    }
  }, [ref])

  return { height, width }
}

export default useRefHeight
