/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css';
import { createInertiaApp } from '@inertiajs/svelte'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  title: (title: any) => `${title} - ${appName}`,

  resolve: (name: any) => {
    return resolvePageComponent(
      `../pages/${name}.svelte`,
      import.meta.glob('../pages/**/*.svelte'),
    )
  },

  setup({ el, App, props }: any) {

    new App({ target: el, props, hydrate: true })

  },
})