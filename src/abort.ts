let controller: AbortController

export function getController() {
  if (!controller) {
    controller = new AbortController()
  }
  return controller
}
