import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  let navigate = useNavigate()

  React.useEffect(() => {
    navigate('/listings')
  }, [])

  return null
}
