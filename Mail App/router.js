export default class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener('hashchange', () => {
      debugger;
      this.render();
    });
  }

  activeRoute() {
    return window.location.hash.slice(1);
  }

  render() {
    debugger;
    this.node.innerHTML = "";
    let currentRoute = this.activeRoute();
    let el = document.createElement('p');
    el.innerHTML = currentRoute;
    this.node.appendChild(el);
  }
}
