import React from 'react'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter();
  const {
    query:{setList}
  } = router

  const props = {
    setList
  }
  return (
    <div>{props.setList}</div>
  )
}

export default About