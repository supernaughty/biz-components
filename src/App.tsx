import * as React from 'react'
import BizButton from 'components/biz-button/BizButton'

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <h1>Biz Components</h1>
        <BizButton>Button1</BizButton>
        <BizButton>Button2</BizButton>
      </div>
    )
  }
}

export default App
