import * as request from '@/utils/request'
const server = import.meta.env.VITE_APP_SERVER
const server1 = import.meta.env.VITE_APP_SERVER2

// export function Login (data: any) {
//   return request.Post(`${server}/users/login`, data)
// }

export function Login (data: any) {
  return request.Post(`/api/xtop/xtop.agencyTrackingFs.queryTracking/1.0`, data)
}

export function Protected (query: any) {
  return request.Get(`${server}/users/protected`, query)
}

export function Login1 (data: any) {
  return request.Post(`${server1}/api/user/token`, data)
}

export function Protected1 (query: any) {
  return request.Get(`${server1}/api/user/info`, query)
}

export function getCpu (query: any) {
  return request.Get(`${server1}/api/admin/get_cpu`, query)
}

export function getDisk (query: any) {
  return request.Get(`${server1}/api/admin/get_disk`, query)
}