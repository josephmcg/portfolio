import React, { useState } from "react"
import DarkModeToggle from "react-dark-mode-toggle"

import useDarkMode from "use-dark-mode"

export default () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false)

  const darkMode = useDarkMode(false)

  return (
    <DarkModeToggle
      onChange={() => {
        setIsDarkMode(!isDarkMode)
        darkMode.toggle()
      }}
      checked={darkMode.value}
      size={80}
    />
  )
}
