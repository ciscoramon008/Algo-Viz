import { useState } from 'react'

const useOption = initialValue => {
    const [ selected, setSelected ] = useState(initialValue || '')

    const changeSelected = e => {
        setSelected(e.target.value);
    }

    return [ selected, changeSelected ]
}

export default useOption