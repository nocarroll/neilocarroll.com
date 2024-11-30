const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

const BUZZWORD_INTERVAL = 1800;

const buzzwords = [
  'JavaScript',
  'S3',
  'Cloudfront',
  'Docker',
  'GitHub Actions',
  'VueJS',
  'Vuex',
  'vue-router',
  'Vue v3',
  'React',
  'react-router',
  'Redux',
  'state management',
  'SSR',
  'Single Page Apps',
  'MVPs',
  'd3',
  'DevTools',
  'Data Viz',
  'Python',
  'Flask',
  'NodeJS',
  'ExpressJS',
  'lean software',
  'Agile',
  'API contracts',
  'CLI Tooling',
  'npm',
  'yarn',
  'Vite',
  'Webpack',
  'custom npm scripts',
  'serverless',
  'Sass/Scss',
  'StorybookJS',
  'clean code',
  'code review',
  'git branching',
  'E2E testing',
  'Jest',
  'unit testing',
  'TDD',
  'Cypress Cloud',
  'automated testing',
  'Lighthouse',
  'A11y',
  'DRY and WET',
  'git',
  'git rebase',
  'git rebase -i',
  'git reflog',
  'git tags',
  'function hoisting',
  'TypeScript',
  'ES6',
  'jQuery',
  'tabs vs spaces',
  'let vs const',
  '.map() and .reduce()',
  'cucumber',
  'gherkin',
  'Ruby on Rails',
  'mentoring',
  'technical leadership',
  '1-1 meetings',
  'husky',
  'lint-staged',
  'ESLint',
  'Prettier',
  'memoization',
  'virtualization',
  'debouncing',
  'lazy-loading',
  'transpilers',
  'Largest Contentful Paint',
  'First Contentful Paint',
  'tree shaking',
  'code splitting',
  'webpack plugins'
];

const body = document.body;

const savedTheme = localStorage.getItem('theme');
const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
setDarkModeAttribute(savedTheme || initialTheme);

window.onload = () => {
  initBuzzword();
  initLightswitch();
}

function initLightswitch() {
  const $lightswitch = document.getElementById('lightswitch');
  $lightswitch.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    setDarkModeAttribute(currentTheme !== THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK);
  });
}

function initBuzzword() {
  const shuffled = shuffleArray(buzzwords);
  const $buzzword = document.getElementById('buzzword');
  let i = 0;

  setInterval(() => {
    i++;
    $buzzword.innerText = shuffled[i % shuffled.length];
  }, BUZZWORD_INTERVAL);
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function setDarkModeAttribute(theme) {
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}