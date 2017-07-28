import Vue from 'vue'
import EnterSite from '@/pages/EnterSite'

describe('EnterSite.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Splash)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.entersite h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
