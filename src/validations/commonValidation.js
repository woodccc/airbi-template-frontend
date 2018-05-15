export function basicFormInputRules({ formItemLabel = '', min = 1, max = 15 }) {
  return [
    { required: true, message: `请输入${formItemLabel}`, trigger: ['change', 'blur'] },
    { min, max, message: `${formItemLabel}长度在 ${min} 到 ${max} 个字符`, trigger: ['change', 'blur'] },
    { validator: validateIllegalLetter, trigger: ['change', 'blur'] }
  ]
}

export function emailRules() {
  return [
    { required: true, message: '请输入邮箱地址', trigger: ['change', 'blur'] },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['change', 'blur'] }
  ]
}

export function phoneNumberRules({ required = true }) {
  return [
    { required, message: '请输入手机号', trigger: ['change', 'blur'] },
    { validator: validatePhoneNumberIsEleven, trigger: ['change', 'blur'] }
  ]
}

function validatePhoneNumberIsEleven(rule, value, callback) {
  if (value.length > 0 && value.length !== 11) {
    callback(new Error('请输入11位手机号!'))
  } else {
    callback()
  }
}

function validateIllegalLetter(rule, value, callback) {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/

  if (!reg.test(value)) {
    callback(new Error('只能输入字母、数字、汉字'))
  } else {
    callback()
  }
}
