import * as React from 'react'
import './BizButton.scss'

interface BizButtonProps {
  children: React.ReactNode
}

const BizButton: React.FC<BizButtonProps> = ({ children }: BizButtonProps) => {
  return <button className="biz-button">{children}</button>
}

export default BizButton
