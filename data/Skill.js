/**
 * Created by St.Nann on 03-Aug-17.
 */
module.exports = {
  os: [
    {
      name: 'Windows',
      value: 90,
      image: require('../src/img/icon/skill/os/windows.png')
    },
    {
      name: 'Linux',
      value: 60,
      image: require('../src/img/icon/skill/os/linux.png')
    },
    {
      name: 'IOS',
      value: 50,
      image: require('../src/img/icon/skill/os/ios.svg')
    }
  ],
  languages: [
    {
      programing: [
        {
          name: 'JAVA',
          value: 90
        },
        {
          name: 'C',
          value: 70
        },
        {
          name: 'HTML',
          value: 100
        },
        {
          name: 'JAVA SCRIPT',
          value: 90
        },
        {
          name: 'CSS (CSS, SASS)',
          value: 95
        }
      ],
      general: [
        {
          name: 'THAI',
          value: 100
        },
        {
          name: 'ENGLISH',
          value: 80
        },
        {
          name: 'JAPANESE',
          value: 60
        }
      ]
    }
  ],
  frameworks: [
    {
      frontend: [
        {
          name: 'VUE.JS (VUE, VUEX)',
          value: 90
        },
        {
          name: 'VUETIFY',
          value: 100
        },
        {
          name: 'BOOTSTRAP',
          value: 95
        }
      ],
      backend: [
        {
          name: 'PHP LARAVEL',
          value: 40
        },
        {
          name: 'KOA.JS',
          value: 60
        }
      ]
    }
  ]
}