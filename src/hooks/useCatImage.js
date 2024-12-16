import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const [threeFirstWords, setthreeFirstWords] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    setthreeFirstWords(threeFirstWords)
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data)
      })
  }, [fact])

  return { imageUrl, threeFirstWords }
}
