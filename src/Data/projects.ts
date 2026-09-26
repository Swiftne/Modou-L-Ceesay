export type Project = {
  number: string
  title: string
  type: string
  year: string
  tone: string
  description: string
  url?: string
  image?: string
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Expense Tracker',
    type: 'Expense tracking app',
    year: '2025',
    tone: 'project-sage',
    description: 'A simple and intuitive expense tracking app that helps users manage their finances effectively, providing insights into spending habits and budgeting.',
    url: 'https://expense-tracker-ten-mauve-11.vercel.app/',
    image: '/projects/Expense-tracker.png',
  },
  {
    number: '02',
    title: 'Weather-Skyline Dashboard',
    type: 'Weather dashboard',
    year: '2026',
    tone: 'project-coral',
    description: 'A real-time weather dashboard that provides users with accurate and up-to-date weather information for their location.',
    url: 'https://weather-dashboard-skyline.vercel.app/',
    image: '/projects/Weather-skyline-dashboard.png',
  },
  {
    number: '03',
    title: 'After Hours',
    type: 'Independent identity',
    year: '2024',
    tone: 'project-blue',
    description: 'A visual identity for a late-night radio show built around bold voices and even bolder detours.',
    url: 'https://after-hours.vercel.app/',
    image: '',
  },
]