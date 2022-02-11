import Router from 'vue-router'

const component = (name) => () =>
  import(`./${name}.vue`).then((module) => module.default)

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config,
  store
) {
  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes: [
      {
        name: 'home',
        path: '/',
        component: component('home/index'),
      },

      {
        name: 'stream',
        path: '/stream',
        component: component('stream/index'),
      },

      {
        name: 'live',
        path: '/live',
        component: component('live/index'),
      },
    ],
  })
}
