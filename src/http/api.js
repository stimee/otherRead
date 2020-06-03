export function login(params) {
  return this.$http.post('/api/login', params)
}
//阅豆数等，排行数据列表
export function initPage(params) {
  return this.$http.post('/api/initPage', params, { emulateJSON: true })
}
//获取用户信息
export function userInfo(params) {
  return this.$http.post('/api/userInfo', params, { emulateJSON: true })
}
//获取个人文章信息
export function articles(params) {
  return this.$http.post('/api/articles', params, { emulateJSON: true })
}
//发布文章
export function addArticle(params) {
  return this.$http.post('/api/addArticle', params)
}
