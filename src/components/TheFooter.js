import { Component } from '../core/vic'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    })
  }
  render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = /*HTML*/ `
      <div>
        <a href="${repository}">GitHub Repository</a>
      </div>
      <div>
        <a href="${github}">${new Date().getFullYear()} DASEUL</a>
      </div>
    `
  }
}
