
import Typography from 'typography'
import WordpressGithub from 'typography-theme-github'

import './global.css'


WordpressGithub.overrideThemeStyles = () => ({
  blockquote: {
    color: 'inherit',
    borderLeftColor: 'inherit',
    opacity: '0.8'
  }
})

const typography = new Typography(WordpressGithub)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale