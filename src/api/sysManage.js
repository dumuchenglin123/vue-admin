import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/sys',
    method: 'get',
    params: query
  })
}

export function addData(data) {
  return request({
    url: '/sys',
    method: 'post',
    data
  })
}

export function updateData(id, data) {
  return request({
    url: `/sys/${id}`,
    method: 'put',
    data
  })
}
export function DelData(id, data) {
  return request({
    url: `/sys/${id}`,
    method: 'delete',
    data
  })
}
