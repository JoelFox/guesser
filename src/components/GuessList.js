import React, { memo } from 'react'
// import { Icon } from 'antd'

const GuessList = memo(({data, onRemove, onEdit}) => (
  <>
    {/* {data && data.map(guess => (
      <div key={guess.ref.id} className="note-row">
        <p 
          contentEditable
          suppressContentEditableWarning
          onChange={e => onEdit(e, guess.ref.id, e.currentTarget.textContent)}
          onBlur={e => onEdit(e, guess.ref.id, e.currentTarget.textContent)}
          onInput={e => onEdit(e, guess.ref.id, e.currentTarget.textContent)}
          >
            {guess.data.text}
        </p>

      </div>
    ))} */}
  </>
))

export default GuessList;