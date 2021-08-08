type DomNodeParams = {
  children: DomNode[];
  style: string;
  className: string;
  attributes: {[key: string]: string};
}

export abstract class DomNode {
  constructor(public data: DomNodeParams) {}

  public abstract toNode(): Node;
}

export function div(params: DomNodeParams) {
  const _div = document.createElement("div")

  params.children.forEach(elm => {
    _div.appendChild(elm.toNode())
  })
  
  _div.setAttribute("style", params.style)
  _div.setAttribute("class", params.className)
}

