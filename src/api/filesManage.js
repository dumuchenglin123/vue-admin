import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/files/list',
    method: 'get',
    params: query
  })
}

export function addData(data) {
  return request({
    url: '/files/add',
    method: 'post',
    data
  })
}
