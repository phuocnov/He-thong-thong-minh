import React from 'react'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import Button from '@atlaskit/button'
import Icon from '@atlaskit/icon'
import styled from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'
import Taste from './Taste'
export default function TasteList({tasteList}) {
  return (
    <>
      {
        tasteList.map(taste => (<Taste  taste={taste}/>))
      }
    </>
  )
}
