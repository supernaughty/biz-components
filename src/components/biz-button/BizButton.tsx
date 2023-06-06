import * as React from 'react'
import './BizButton.scss'

interface BizButtonProps {
  children: React.ReactNode
}

const BizButton: React.FC<BizButtonProps> = ({ children }: BizButtonProps) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false)
  const handleMouseOver = (): void => {
    setIsMouseOver(true)
  }
  const handleMouseLeave = (): void => {
    setIsMouseOver(false)
  }
  return (
    <button
      className={`biz-button ${isMouseOver ? 'mouseover' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}

export default BizButton
