import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ctf.xfer.hr',
  integrations: [starlight({
    title: 'KibSec',
    customCss: [
      './src/styles/custom.css',
    ],
    social: {
      github: 'https://github.com/x-fer/kiberneticka_sigurnost',
      discord: 'https://discord.com/invite/E7ad4UGbrG'
    },
    sidebar: [{
      label: 'Vještina',
      collapsed: true,
      items: [{
        label: 'O vještini',
        link: '/lekcije/vjestina/o_vjestini',
        badge: 'New'
      },{
        label: 'Predavanja',
        link: '/lekcije/vjestina/predavanja',
        badge: 'New'
      }, {
        label: 'Bodovanje',
        link: '/lekcije/vjestina/bodovanje',
        badge: 'New'
      }, {
        label: 'O materijalima',
        link: '/lekcije/vjestina/o_materijalima',
        badge: 'New'
      }, {
        label: 'FAQ',
        link: '/lekcije/vjestina/faq',
        badge: 'New'
      }]
    }, {
      label: 'OSINT',
      collapsed: true,
      items: [{
        label: 'O OSINT-u',
        link: '/lekcije/osint/o_osintu',
      }]
    }, {
      label: 'Forenzika',
      collapsed: true,
      items: [{
        label: 'O forenzici',
        link: '/lekcije/forenzika/o_forenzici'
      }]
    }, {
      label: 'Kriptografija',
      collapsed: true,
      items: [{
        label: 'O kriptografiji',
        link: '/lekcije/kriptografija/o_kriptografiji'
      }]
    }, {
      label: 'Web',
      collapsed: true,
      items: [{
        label: 'O webu',
        link: '/lekcije/web/o_webu'
      }]
    }, {
      label: 'Reverzno inženjerstvo',
      collapsed: true,
      items: [{
        label: 'O reverznom inženjerstvu',
        link: '/lekcije/rev/o_reversingu'
      }]
    }, {
      label: 'Binary',
      collapsed: true,
      items: [{
        label: 'O binary exploitation',
        link: '/lekcije/bin/o_binaryju'
      }]
    }, {
      label: 'Etičko hakiranje',
      collapsed: true,
      items: [{
        label: 'O etičkom hakiranju',
        link: '/lekcije/eticko/o_etickom_hakiranju'
      }]
    },{
      label: 'Hardversko hakiranje',
      collapsed: true,
      items: [{
        label: 'O hardverskom hakiranju',
        link: '/lekcije/hardversko/o_hardverskom_hakiranju'
      }]
    }]
  }), tailwind()]
});