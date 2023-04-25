import { Component } from '../core/vic'

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /*HTML*/ `
      <h1>
        Page Not Found
      </h1>
    `
  }
}
