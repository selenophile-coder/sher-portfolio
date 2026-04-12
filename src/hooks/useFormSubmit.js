import { useState } from 'react'

export const useFormSubmit = () => {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submitForm = async (formData) => {
    setLoading(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: formData.access_key,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Message from Reach Me Page'
        })
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        return true
      } else {
        setStatus('error')
        return false
      }
    } catch (error) {
      setStatus('error')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submitForm, status, loading }
}