// prevent reload for each view
const navigateTo = (url) => {
  history.pushState(null, null, url)
  router()
}

const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('Home') },
    { path: '/api', view: () => console.log('API') },
    { path: '/settings', view: () => console.log('Settings') },
  ]

  const possibleMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname == route.path,
    }
  })

  let match = possibleMatches.find((possibleMatch) => possibleMatch.isMatch)

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    }
  }

  console.log(match.route.view())
}

// when using back buttons or change popstate otherwise
window.addEventListener("popstate", router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    // checks if it is link from own nav, otherwise keep default behavior
    if (e.target.matches('[data-link]')) {
      e.preventDefault()
      navigateTo(e.target.href)
    }
  })

  router()
})
