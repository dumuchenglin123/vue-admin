import request from '@/utils/request'

export function queryMenuData(query) {
  return request({
    url: '/menu',
    method: 'get',
    params: query
  })
}

export function addMenuData(data) {
  console.log(data, 4555555)
  return request({
    url: '/menu',
    method: 'post',
    data
  })
}

export function updateMenuData(id, data) {
  return request({
    url: `/menu/${id}`,
    method: 'put',
    data
  })
}
export function delMenuData(id, data) {
  return request({
    url: `/menu/${id}`,
    method: 'delete',
    data
  })
}
