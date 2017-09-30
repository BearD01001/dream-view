export const TOGGLE_SETTING = 'TOGGLE_SETTING'

export function toggleSetting (status) {
  return {
    type: 'SETTING_DIALOG',
    status
  }
}
