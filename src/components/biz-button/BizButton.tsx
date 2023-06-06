import * as React from 'react'

interface BizButtonProps {
  children: React.ReactNode
}

const BizButton: React.FC<BizButtonProps> = ({ children }: BizButtonProps) => {
  return <button>{children}</button>
}

export default BizButton
