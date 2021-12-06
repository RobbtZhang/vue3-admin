import { getItem, setItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUTE_VALUE } from '@/constant'

export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

export function setTimeStamp() {
  return setItem(TIME_STAMP, Date.now())
}

export function isCheckTimeout() {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUTE_VALUE
}
