type DomNodeParams = {
  children?: DomNode[];
  style?: string;
  className?: string;
  attributes?: { [key: string]: string };
}

export abstract class DomNode {
  constructor(public data?: DomNodeParams) { }

  public abstract render(): Node;

  protected _render(tag: string) {
    const _div = document.createElement(tag)

    this.data.children.forEach(elm => {
      _div.appendChild(elm.render())
    })

    _div.setAttribute("style", this.data.style)
    _div.setAttribute("class", this.data.className)

    return _div
  }
}

export class Row {

}

export class Column {


}

export class TextS {

}


export class Div extends DomNode {
  constructor(data?: DomNodeParams) {
    super(data)
  }

  render() {
    return this._render('div')
  }
}


export class Span extends DomNode {
  constructor(data: DomNodeParams) {
    super(data)
  }

  render() {
    return this._render('span')
  }
}


export class Text extends DomNode {
  constructor(public text: string) {
    super()
  }

  render() {
    const _text = document.createTextNode(this.text)
    return _text
  }
}

