import Vue from 'vue'
import Splash from '@/components/Splash'

describe('Splash.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Splash)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.splash h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
