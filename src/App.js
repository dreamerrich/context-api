import './App.css';
import React, { useState, createContext, useContext } from "react"
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const languages = ["JavaScript", "Python"]
const LanguageContext = createContext({
    languages,
    language: languages[0],
    setLanguage: () => {},
})

function App() {
    const [language, setLanguage] = useState(languages[0])
    return (
        <LanguageContext.Provider value={{ languages, language, setLanguage }}>
            <MainSection />
        </LanguageContext.Provider>
    )
}

function MainSection() {
    const { languages, language, setLanguage } = useContext(LanguageContext)
    const currentIndex = languages.indexOf(language)
    const toggleLanguage = () => {
        if (currentIndex === languages.length - 1) {
            setLanguage(languages[0])
        } else {
            setLanguage(languages[currentIndex + 1])
        }
    }
    return (
        <div>
            <h2 id="favoriteLanguage">{`Favorite programing language: ${language}`}</h2> &nbsp; &nbsp;
            <button id="changeFavorite" onClick={toggleLanguage}>
                Toggle language
            </button>
        </div>
    )
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"))
