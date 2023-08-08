import {Component} from 'react'

import Withdrawcomponent from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {yourbalance: 2000}

  FunctionsFirst = value => {
    const cash = parseInt(value)
    this.setState(prevState => ({yourbalance: prevState.yourbalance - cash}))
  }

  render() {
    const {denominationsList} = this.props
    const {yourbalance} = this.state
    return (
      <div className="main-bg">
        <div className="blue-bg">
          <div className="profile">
            <p className="round">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-bg">
            <p className="balance">Your Balance</p>
            <div className="amount-bg">
              <p className="bal">{yourbalance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="last-one">
            <p className="first">Withdraw</p>
            <p className="second">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="unlist">
            {denominationsList.map(eachItem => (
              <Withdrawcomponent
                AmountEach={eachItem}
                FunctionsFirst={this.FunctionsFirst}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
