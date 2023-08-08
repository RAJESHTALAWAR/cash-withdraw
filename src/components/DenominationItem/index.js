import {Component} from 'react'

import './index.css'

class Withdrawcomponent extends Component {
  render() {
    const {AmountEach, FunctionsFirst} = this.props
    const {value} = AmountEach
    const FunctionsSecond = () => {
      FunctionsFirst(value)
    }
    return (
      <li className="box">
        <button className="buttons" type="button" onClick={FunctionsSecond}>
          {value}
        </button>
      </li>
    )
  }
}
export default Withdrawcomponent
