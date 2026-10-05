// Teksten voor de homepage. Later te verplaatsen naar een CMS (Keystatic).
import { listCities, serviceArea } from './site';

export const pillars = [
  {
    title: 'Verdien terwijl je leert',
    text: 'Vanaf je eerste week verdien je geld. Hoe meer je leert, hoe meer je verdient. Jij bepaalt het tempo, wij helpen je op weg.',
  },
  {
    title: 'Groei door te doen',
    text: 'Geen saaie theorie. Je leert in de praktijk: gesprekken voeren, overtuigen en omgaan met een nee. Met dagelijkse coaching word je elke week beter.',
  },
  {
    title: 'Winnen doe je samen',
    text: 'Je werkt met jonge, ambitieuze mensen die net als jij vooruit willen. We trainen samen, dagen elkaar uit en vieren elk succes als team.',
  },
];

export const steps = [
  {
    title: 'Kennismaken',
    text: 'Een kort, informeel gesprek. Geen sollicitatiestress: we willen vooral weten wie je bent en wat jij wilt bereiken.',
  },
  {
    title: 'Training',
    text: 'Je leert de basis van sales, oefent gesprekken met je team en krijgt directe feedback. Zo sta je sterk voordat je begint.',
  },
  {
    title: 'Je eerste sale',
    text: 'Samen met een ervaren leider ga je op pad. Je past alles direct toe en sluit stap voor stap je eerste deal.',
  },
];

export const careerPath = [
  {
    role: 'Sales Representative',
    text: 'Je leert het vak, bouwt zelfvertrouwen op en verdient vanaf week één.',
  },
  {
    role: 'Leader',
    text: 'Heb je het vak onder de knie? Dan help je nieuwe collega’s op weg.',
  },
  {
    role: 'Teamleader',
    text: 'Smaakt het naar meer? Dan begeleid je je eigen team. Helemaal op jouw tempo.',
  },
];

export const dayInLife = [
  { title: 'Start met je team', text: 'Doelen van de dag, energie erin en een korte training.' },
  { title: 'Rollenspel & coaching', text: 'Je oefent gesprekken en krijgt tips van je leider.' },
  { title: 'Op pad', text: 'Samen naar het werkgebied, waar je klanten spreekt.' },
  { title: 'Afsluiten', text: 'Resultaten delen, successen vieren en leren van de dag.' },
];

export const highlights = [
  'Geen ervaring nodig',
  'Verdienen vanaf week één',
  'Dagelijkse coaching',
  'Jong & ambitieus team',
  'Doorgroeien als jij dat wilt',
];

// Ervaringen van teamleden (alleen functie, geen naam).
export const testimonials = [
  {
    quote: 'Ik had nog nooit iets verkocht. Na een paar weken stond ik zelfverzekerd voor de deur en nu train ik zelf nieuwe mensen.',
    role: 'Leader',
  },
  {
    quote: 'Hier word je echt beter. Elke dag feedback, elke dag een nieuw doel. En het team voelt als familie.',
    role: 'Sales Representative',
  },
  {
    quote: 'Ik kwam voor een bijbaan en vond een plek waar ik goed verdien en mezelf blijf ontwikkelen.',
    role: 'Teamleader',
  },
];

export const faq = [
  {
    q: 'Waar zijn jullie gevestigd?',
    a: `We zijn actief vanuit Arnhem en werken in de hele regio, waaronder ${listCities(serviceArea.filter((c) => c !== 'Arnhem'))}. Woon je in de buurt? Dan ben je welkom in het team.`,
  },
  {
    q: 'Heb ik saleservaring nodig?',
    a: 'Nee. De juiste mindset is veel belangrijker dan ervaring. Ben je gemotiveerd, wil je leren en vind je het leuk om met mensen te praten? Dan leren wij je de rest.',
  },
  {
    q: 'Wat ga ik precies doen?',
    a: 'Je spreekt namens sterke merken klanten aan, op straat of aan de deur, en helpt ze aan een product of dienst die bij ze past. Je doet dit samen met je team en altijd met begeleiding in het begin.',
  },
  {
    q: 'Hoeveel kan ik verdienen?',
    a: 'Je inkomen bepaal je voor een groot deel zelf. Je verdient per verkoop, dus hoe beter je wordt, hoe meer je verdient. In het kennismakingsgesprek leggen we de beloning precies en eerlijk uit.',
  },
  {
    q: 'Krijg ik training en coaching?',
    a: 'Absoluut. Je krijgt vanaf dag één persoonlijke begeleiding, praktische trainingen en coaching van ervaren leiders. Jouw groei staat centraal.',
  },
  {
    q: 'Hoe ziet een werkdag eruit?',
    a: 'Je start samen met je team, bespreekt de doelen en volgt een korte training. Daarna ga je op pad. Aan het einde van de dag sluit je samen af. Samen werken, veel lachen en elke dag een beetje beter worden.',
  },
  {
    q: 'Hoe verloopt het solliciteren?',
    a: 'Laat je gegevens achter of stuur ons een WhatsApp. We nemen binnen 48 uur contact op voor een kort, informeel kennismakingsgesprek.',
  },
];
