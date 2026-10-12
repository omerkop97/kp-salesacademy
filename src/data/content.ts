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

// Quiz "Past sales bij jou?". Elk antwoord telt op bij een profiel.
// Er is geen fout antwoord: iedereen krijgt een positief profiel.
export type QuizProfile = 'verbinder' | 'doorzetter' | 'energiebron' | 'denker';

export const quizProfiles: Record<QuizProfile, { title: string; text: string }> = {
  verbinder: {
    title: 'De Verbinder',
    text: 'Jij voelt mensen goed aan en maakt makkelijk contact. Precies wat eerlijk verkopen draait: luisteren, begrijpen en mensen echt helpen.',
  },
  doorzetter: {
    title: 'De Doorzetter',
    text: 'Een nee houdt jou niet tegen. Je wilt doelen halen en jezelf elke dag verbeteren. Met die mindset groei je hier razendsnel.',
  },
  energiebron: {
    title: 'De Energiebron',
    text: 'Jij brengt sfeer, lef en enthousiasme. Mensen worden blij van jou, en dat is in sales goud waard.',
  },
  denker: {
    title: 'De Denker',
    text: 'Jij wilt snappen hoe iets werkt en zoekt de beste aanpak. Dat maakt je sterk in het uitleggen en overtuigen met echte argumenten.',
  },
};

export const quizQuestions: { q: string; answers: { label: string; profile?: QuizProfile; value?: string }[] }[] = [
  {
    q: 'Je komt op een feestje waar je bijna niemand kent. Wat doe je?',
    answers: [
      { label: 'Ik stel me gewoon voor aan een groepje', profile: 'verbinder' },
      { label: 'Binnen tien minuten maak ik een grap en sta ik te lachen', profile: 'energiebron' },
      { label: 'Ik kijk eerst even rond en kies dan wie ik aanspreek', profile: 'denker' },
    ],
  },
  {
    q: 'Iemand zegt nee tegen jouw idee. Jij denkt…',
    answers: [
      { label: 'Prima, volgende! Ik geef niet op', profile: 'doorzetter' },
      { label: 'Waarom eigenlijk? Ik wil het begrijpen', profile: 'denker' },
      { label: 'Misschien kan ik het beter uitleggen', profile: 'verbinder' },
    ],
  },
  {
    q: 'Wat motiveert jou het meest?',
    answers: [
      { label: 'Goed verdienen en doelen halen', profile: 'doorzetter' },
      { label: 'Samen met een team winnen', profile: 'energiebron' },
      { label: 'Mezelf ontwikkelen en nieuwe dingen leren', profile: 'denker' },
      { label: 'Andere mensen echt verder helpen', profile: 'verbinder' },
    ],
  },
  {
    q: 'Hoe omschrijven je vrienden jou?',
    answers: [
      { label: 'Sociaal en spontaan', profile: 'energiebron' },
      { label: 'Een goede luisteraar', profile: 'verbinder' },
      { label: 'Gedreven, geeft niet snel op', profile: 'doorzetter' },
      { label: 'Slim en nieuwsgierig', profile: 'denker' },
    ],
  },
  {
    q: 'Wanneer zou je willen beginnen?',
    answers: [
      { label: 'Zo snel mogelijk', value: 'Zo snel mogelijk' },
      { label: 'Binnen een maand', value: 'Binnen een maand' },
      { label: 'Ik wil eerst even kijken', value: 'Eerst kijken' },
    ],
  },
];

// Korte verticale video's (9:16) voor de sectie "Volg ons". Bestanden in public/video/.
// Voorbeeld: { src: '/video/dagstart.mp4', poster: '/video/dagstart.jpg', caption: 'Dagstart in Arnhem' }
export const socialVideos: { src: string; poster?: string; caption?: string }[] = [];

export const honestSales = [
  {
    title: 'Geen druk, wel een goed gesprek',
    text: 'Je luistert eerst en adviseert daarna.',
  },
  {
    title: 'Een nee is ook een antwoord',
    text: 'Niemand wordt overgehaald tegen zijn zin.',
  },
  {
    title: 'Duidelijk over wat het kost',
    text: 'Geen kleine lettertjes, geen verrassingen.',
  },
  {
    title: 'Tevreden klanten boven snelle deals',
    text: 'Daar bouw je echt iets mee op.',
  },
];

export const steps = [
  {
    title: 'Meeloopdag',
    text: 'Je loopt een dag vrijblijvend mee met het team. Zo zie je precies hoe het werkt, en leren wij jou kennen. Daarna beslis je zelf.',
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
  'Eerlijk verkopen',
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
    q: 'Moet ik mensen dingen aansmeren?',
    a: 'Nee, juist niet. We leren je eerlijk verkopen: goed luisteren, duidelijk uitleggen en een nee accepteren. Van klanten die écht blij zijn word jij beter, en zij ook.',
  },
  {
    q: 'Hoeveel kan ik verdienen?',
    a: 'Je inkomen bepaal je voor een groot deel zelf. Je verdient per verkoop, dus hoe beter je wordt, hoe meer je verdient. Tijdens je meeloopdag leggen we de beloning precies en eerlijk uit.',
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
    a: 'Laat alleen je naam en telefoonnummer achter, of stuur ons een WhatsApp. Binnen 24 uur bellen of appen we je om een meeloopdag te plannen. Je loopt een dag vrijblijvend mee en daarna beslis je zelf of het bij je past.',
  },
];
