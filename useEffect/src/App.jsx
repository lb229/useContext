import { useState } from 'react'
import { Welcome } from './components/Welcome'
import { Clock } from './components/Clock'
import { LanguageContext } from './components/LanguageContext'







export function App() {
  const [language, setLanguage] = useState('en')

  function handleSetLanguage(language){
    setLanguage(language)
  }


  return (
    <div>
      <button onClick={() => handleSetLanguage('en')}>EN</button>
      <button onClick={() => handleSetLanguage ('it')}>IT</button>
   
    <div>
      <Welcome />
      <hr />
      <LanguageContext.Provider value={language}>
      <Clock />
      </LanguageContext.Provider>
    </div>
    </div>
  )
}
