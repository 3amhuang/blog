import request from '@/utils/request'
import config from '@/config'

export function login (payload) {
  return request({
    url: config.login,
    method: 'post',
    data: payload
  })
}

export async function fetchArticles (params) {
  return await request({
    url: config.articles,
    method: 'get',
    params: params
  })
}
