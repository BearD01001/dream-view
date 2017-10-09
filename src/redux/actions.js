export const TOGGLE_SETTING = 'TOGGLE_SETTING'

export function toggleSetting (status) {
  return {
    type: TOGGLE_SETTING,
    status,
  }
}
