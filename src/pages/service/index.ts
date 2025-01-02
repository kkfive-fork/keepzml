import {getAccesstoken, getUserInfo, AccessToken, refreshToken, UserInfo} from './api'

export async function getAuth() {
  let access_token = localStorage.getItem('access_token')
  let refresh_token = localStorage.getItem('refresh_token')
  let open_id = localStorage.getItem('open_id')
  
  const usp = new URLSearchParams(window.location.search.slice(1))
  const query = Object.fromEntries(usp.entries())
  const code = query.code

  if (!access_token && !code) {
    return {isLogin: false}
  }

  let res = {} as AccessToken;

  // 验证之后返回回调
  if (!access_token && code) {
    res = await getAccesstoken(code)
  } else {
    res =await refreshToken(refresh_token || '')
  }

  if (res.status_code != 0) {
    console.error(res.status_msg)
    localStorage.setItem('access_token', '')
    return {isLogin: false}
  }

  access_token = res.access_token
  refresh_token = res.access_token
  open_id = res.open_id
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('refresh_token', refresh_token)
  localStorage.setItem('open_id', open_id)
  
  const userinfo = await getUserInfo()
  return {isLogin: true, access_token, open_id, ...userinfo}
}

export interface StoreUserInfo extends UserInfo {
  isLogin?: boolean
}

export interface Option {
  [key: string]: string
}

let userinfo = {} as StoreUserInfo

export function getUserinfo() {
  return userinfo
}

export function setUserInfo(option: Option) {
  userinfo = {...userinfo, ...option}
}
