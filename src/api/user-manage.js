import request from '@/utils/request'

// 获取用户列表数据
export const getUserManageList = data => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

// 导入用户列表数据
export const userBatchImport = data => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

// 删除用户列表数据
export const deleteUser = id => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

// 获取所有用户列表数据
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

// 获取用户详情
export const userDetail = id => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}
