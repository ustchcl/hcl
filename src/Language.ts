import { Div, Span } from './DomNode'
import { Log } from './Utils'

class LetBind extends HTMLElement {
  root: HTMLDivElement
  constructor() {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const div = document.createElement('div')
    this.root = div
    const style = document.createElement('style')

    shadow.append(style)
    shadow.append(div)
  }

  connectedCallback() {
    console.log('a let bind declared')
    const to = this.getAttribute('to') ?? "void"
    const vars = this.getAttribute('vars') ?? ""
    const variableArr = vars.split(",").filter(x => x.length > 0)
    Log.error(to, variableArr)

    // new Div({
    //   children: [to, ...variableArr].map(elm => new Span({children: new Text()}))
    // })
  }
}

customElements.define("let-bind", LetBind)

