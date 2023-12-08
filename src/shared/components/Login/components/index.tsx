'use client'
import styles from '../styles/index.module.css'
import FormItem from '@/shared/components/Common/Form/components/FormItem'
import useInput from '@/shared/hooks/inputs/useInput'
import { FormEvent, useEffect, useState } from 'react'
import { login } from '@/components/Login/services/login.service'

export default function LogIn() {
  const email = useInput('')
  const password = useInput('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const { error } = await login({
      email: email.value,
      password: password.value,
    })

    setIsLoading(false)

    if (error) {
      setErrorMsg(error)
    }
  }

  useEffect(() => {
    setErrorMsg((prev) => prev && null)
  }, [email.value, password.value])

  return (
    <div className={styles.login_wrapper}>
      <form action="" className={styles.login_form} onSubmit={handleLoginSubmit}>
        <h2 className={styles.login_title}>Login Page</h2>

        <FormItem
          label="Email"
          placeholder="Please enter your email"
          type="text"
          name="email"
          required={true}
          {...email}
        />
        <FormItem
          label="Password"
          placeholder="Please enter your password"
          type="password"
          name="password"
          required={true}
          {...password}
        />

        {errorMsg && <p className={styles.errorMsg}>{[...errorMsg]}</p>}

        <div className={styles.login_button_wrapper}>
          <button className={styles.login_button} type="submit">
            {isLoading ? 'Loading...' : 'Log In'}
          </button>
        </div>
      </form>
    </div>
  )
}
