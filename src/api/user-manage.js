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
