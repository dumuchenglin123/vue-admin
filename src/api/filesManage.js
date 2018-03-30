import request from '@/utils/request'

export function queryData(query) {
  return request({
    url: '/file',
    method: 'get',
    params: query
  })
}

export function addData(data) {
  console.log(data,4555555)
  return request({
    url: '/file',
    method: 'post',
    data
  })
}

export function updateData(id, data) {
  return request({
    url: `/file/${id}`,
    method: 'put',
    data
  })
}
export function DelData(id, data) {
  return request({
    url: `/file/${id}`,
    method: 'delete',
    data
  })
}
