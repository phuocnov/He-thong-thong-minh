import React from 'react'
import Taste from './Taste'
export default function TasteList({tasteList}) {
  return (
    <>
      {
        tasteList.map((taste, index) => (<Taste  taste={taste} key={'taste-' + index}/>))
      }
    </>
  )
}
