import axios from 'axios'
function build (url:String, method:String, data:any, params = null, contentType = 'application/json') {
  const headers:any = { 'Content-Type': contentType }

  // token
  var token = localStorage.getItem('token')

  if (token != null) {
    headers.Authorization = 'Bearer ' + token
  }

  var options:any = { url: url, method: method, headers: headers }
  if (params != null) options.params = params
  if (data != null) options.data = data

  return axios(options)
}

async function callback (obj:any) {
  return await obj.then(function (response:any) {
      if(response.status===200){
        return response.data
      }
    })
    .catch(function (error:any) {
      if (error.response) {
        console.log(error.response)
      }
      return error.response
    })
}

export async function Get (url:String, params:any, contentType = 'application/json') {
  var obj = build(url, 'get', null, params, contentType)
  return await callback(obj)
}

export async function Post (url:String, data:any, contentType = 'application/json') {
  var obj = build(url, 'post', data, null, contentType)
  return await callback(obj)
}

export async function Put (url:String, data:any, contentType = 'application/json') {
  var obj = build(url, 'put', data, null, contentType)
  return await callback(obj)
}

export async function Delete (url:String, data:any, params:any, contentType = 'application/json') {
  var obj = build(url, 'delete', data, params, contentType)
  return await callback(obj)
}

export async function Patch (url:String, data:any, contentType = 'application/json') {
  var obj = build(url, 'patch', data, null, contentType)
  return await callback(obj)
}
