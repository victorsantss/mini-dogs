import React from "react"
import { useSelector } from "react-redux"
import { Loading } from "./Helper/Loading"
import { Login } from "./Login/Login"
import { Photos } from "./Photos.js/Photos"

export const Content = () => {
  const { user, token } = useSelector(state => state.login)

  if (user.loading || token.loading) return <Loading />
  if (user.data) return <Photos />
  else return <Login />
}