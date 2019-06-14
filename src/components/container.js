import React from 'react'
import webpack from '../assets/webpack.svg'
export default function container() {
  return (
    <div class="container">
      <h1 style={{"font-size": "2rem"}}>React webpack boilerplate</h1>
      <img src ={webpack} />
    </div>
  )
}
