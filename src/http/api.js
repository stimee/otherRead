export function login(params) {
  return this.$http.post('/login', params)
}

export function initPage(params) {
  return this.$http.post('/initPage', params, { emulateJSON: true })
}

export function userInfo(params) {
  return this.$http.post('/userInfo', params, { emulateJSON: true })
}
