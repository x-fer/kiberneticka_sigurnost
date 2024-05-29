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
      discord: 'https://discord.gg/UsvJaG7BhT'
    },
    sidebar: [{
      label: 'Radionice',
      collapsed: true,
      items: [{
        label: 'O radionicama',
        link: '/lekcije/radionice/o_radionici',
      },{
        label: 'Predavanja',
        link: '/lekcije/radionice/predavanja',
      }, {
        label: 'Bodovanje',
        link: '/lekcije/radionice/bodovanje',
      }, {
        label: 'O materijalima',
        link: '/lekcije/radionice/o_materijalima',
      }, {
        label: 'FAQ',
        link: '/lekcije/radionice/faq',
      }]
    }, {
      label: 'OSINT i miscellaneous',
      collapsed: true,
      items: [{
        label: 'O OSINT-u',
        link: '/lekcije/osint/o_osintu'
      },{
        label: 'ASCII',
        link: '/lekcije/osint/ascii'
      },{
        label: 'Base64',
        link: '/lekcije/osint/base64'
      },{
        label: 'Netcat',
        link: '/lekcije/osint/netcat'
      },{
        label: 'QR',
        link: '/lekcije/osint/qr'
      },{
        label: 'Morse Code',
        link: '/lekcije/osint/morsecode'
      },{
        label: 'Eye i what3words',
        link: '/lekcije/osint/eye'
      },{
        label: 'Strings',
        link: '/lekcije/osint/strings'
      },{
        label: 'Zvuk',
        link: '/lekcije/osint/zvuk'
      }]
    }, {
      label: 'Forenzika',
      collapsed: true,
      items: [{
        label: 'O forenzici',
        link: '/lekcije/forenzika/o_forenzici',
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
        link: '/lekcije/web/o_webu',
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
        link: '/lekcije/bin/o_binaryju',
        badge: 'New'
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
  }), tailwind()],
});