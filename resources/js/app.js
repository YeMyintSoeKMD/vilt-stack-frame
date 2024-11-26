import '../css/app.css';
import './bootstrap';
import 'preline'

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { Layout } from './Composables/modules'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    // title: (title) => `${title} - ${appName}`,
    title: (title) => `${appName}`,

    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        // return pages[`./Pages/${name}.vue`]
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = name.startsWith('Admin/') ? Layout : undefined
        return page
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.config.globalProperties.$route = route;
        app.use(plugin);
        app.use(ZiggyVue)
        app.use(VueSweetalert2);
        app.mount(el);


    },
    progress: {
        color: '#4B5563',
    },
});