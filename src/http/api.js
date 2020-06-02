export function login(params) {
  return this.$http.post('/api/login', params)
}

export function initPage(params) {
  return this.$http.post('/api/initPage', params, { emulateJSON: true })
}

export function userInfo(params) {
  return this.$http.post('/api/userInfo', params, { emulateJSON: true })
}
