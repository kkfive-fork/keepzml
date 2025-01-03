import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import list__ from './list.jsx?raw'
import userinfo__ from './userinfo.jsx?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'List': list__,
        'Userinfo': userinfo__,
        'api': api__ 
      }}
      caseRender={<Case />}
    />
  )
}