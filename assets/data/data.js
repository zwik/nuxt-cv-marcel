import intro from './introduction.md'

const data = {
  introduction: intro,
  skills: ['Javascript', 'Vue', 'Node', 'Tailwind', 'Git'],
  experience: [
    {
      title: 'BWise / Nasdaq / SAI Global',
      timespan: 'september 2012 - nu',
      description:
        'Eerste twee jaar als mobile frontend developer met Sencha Touch gewerkt waar we geprobeerd hebben mobile naar onze klanten te brengen. Helaas was de markt er nog niet klaar voor waardoor we de oude JSP frontend zijn gaan vervangen met Sencha Ext. Dit hebben ik ongeveer 5 jaar gedaan. Na Sencha Ext zijn we de frontend gaan vernieuwen met Vue.js. Naast ontwikkelen heb ik ook veel gewerkt aan de CI en CD straat met behulp van o.a. Jenkins, Docker en Puppet. Ik ben dus zeker niet vies van DevOps! We hebben hier twee overnames gehad.',
      tech: ['Javascript', 'Sencha', 'Vue', 'Tailwind', 'Git', 'Jenkins', 'Docker', 'Puppet']
    },
    {
      title: 'Zylom / GameHouse',
      timespan: 'mei 2008 - september 2012',
      description:
        'Verantwoordelijk voor vertaling in games dus veel contact met de oorspronkelijke ontwikkelaar(s) van de games. Naast vertaling was ik ook verantwoordelijk voor het implementeren van cheats en reclameblokken in onze (web) games. Hier is een overname geweest.',
      tech: ['Flash', 'Actionscript', 'Photoshop', 'C', 'C++']
    },
    {
      title: 'QBIX / QYN',
      timespan: 'augustus 2007 - mei 2008',
      description:
        'Begonnen als junior ontwikkelaar met Java om prototypes te ontwikellen voor reclamezuilen in bijvoorbeeld een supermarkt. Na de samensmelting van drie andere bedrijven zijn we ons meer gaan richten op narrowcasting doeleinden en hebben daar scheduling programmatuur voot ontwikkeld zodat de klant kan kiezen wanneer welke commercials getoond worden.',
      tech: ['Java', 'PHP']
    }
  ],
  strengths: [
    {
      title: 'Communicatief vaardig',
      copy: 'Luisterd aandachtig, is eerlijk en behandeld anderen respectvol.'
    },
    {
      title: 'Gewetensvol',
      copy: 'Schrijft duidelijke code, levert op tijd en is verantwoordelijk.'
    },
    {
      title: 'Kennisdeler',
      copy: 'Altijd nieuwschierig naar een nieuwe/betere manier, altijd behulpzaam en staat open om te delen.'
    }
  ],
  interests: [
    {
      title: 'Javascript!',
      description: 'Naast mijn profesionele carriere heb ik verschilde side projects om met de laatste en nieuwste technieken te kunnen leren.',
      tech: ['Javascript', 'Typescript', 'Vue', 'Node', 'Mongo', 'Docker']
    },
    {
      title: 'Hardlopen',
      description: 'Ik vind het heerlijk om na het werk even te resetten, ik train liever dan een wedstrijd, hoe harder hoe beter.'
    },
    {
      title: '(Astro) fotografie',
      description: 'Altijd al gefascineerd door de ruimte en na een avondje sterrenwacht verkocht aan astrofotografie. Veel techniek en lekker genieten van het donker. Naast astrofotografie vind ik het ook leuk om de normale kiekjes te maken.'
    }
  ]
}

export default data
