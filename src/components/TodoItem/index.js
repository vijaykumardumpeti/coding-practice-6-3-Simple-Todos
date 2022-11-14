// Write your code here

import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {eachObject, key, onDelete} = this.props

    const {id, title} = eachObject

    this.deleteFunction = () => {
      onDelete(id)
    }

    return (
      <li key={key} className="line">
        <div>
          <p className="para">{title}</p>
        </div>
        <div>
          <button onClick={this.deleteFunction} className="button" type="button">
            Delete
          </button>
        </div>
      </li>
    )
  }
}
export default TodoItem
