import React from 'react';

/**===================================================================================
 *                                React.memo()
 *  1. React.memo() is higher order component, which does the same thing which pure
 *     component does.
 * 
 *  2. only difference is, pure component can only be used with the class based component
 *     and React.memo() can only be used in function based component.
 */

function MemoComp({ name }) {
  console.log('Memo Component render');
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
