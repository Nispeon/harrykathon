export default function auth(to, from, next) {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    next()
  } else {
    next('/login')
  }
}
