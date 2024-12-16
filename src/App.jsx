import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl, threeFirstWords } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`}
          alt='Image extracted from first three word of cat fact'
        />
      )}
    </main>
  )
}
