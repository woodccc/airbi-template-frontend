import { mount } from '@vue/test-utils'
import AppIcon from '@/components/simple/AppIcon'

test('should return correct separator in config', () => {
  const wrapper = mount(AppIcon)
  expect(wrapper.isVueInstance()).toBeTruthy()
})