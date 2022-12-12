import React from "react"
import Select from "react-select"

const ModalFindBy = (props) => {

    return (
        <Select
            closeMenuOnSelect={false}
            isMulti
            onChange={props.setDataState}
            value={props.dataState}
            options={props.optionsData}
        >
        </Select>
    )
}

export default ModalFindBy