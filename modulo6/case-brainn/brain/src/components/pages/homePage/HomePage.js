// import { useState } from 'react'
// import React, { useEffect, useState } from 'react'
// import BASE_URL from '../../../services/baseURL'
// import { getLotery } from '../../../services/callAPI'
import {
  NavBar,
  StyleHomePage,
  Img,
  SelectCamp,
  NameLotery,
  Contest,
  NumberContest
} from './styleHomePage'
import { imageMega } from '../../assets/image'
import { Lotery } from '../../../services/callAPI'

export default function HomePage() {
  return (
    <StyleHomePage>
      <NavBar>
        <SelectCamp>
          <option>{Lotery}</option>
        </SelectCamp>
        <NameLotery>MEGA-SENA</NameLotery>
        <Img>{imageMega}</Img>
        <Contest>concurso</Contest>
        <NumberContest>4531 – 07/04/2020</NumberContest>
      </NavBar>

      <div>
        <h1>local Numbers</h1>
      </div>
    </StyleHomePage>
  )
}
