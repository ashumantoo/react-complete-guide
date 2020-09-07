import React, { PureComponent } from 'react';

/**==========================================================================================
 *                                    PURE COMPONENT
 *  1. A Pure Component implements the 'shouldComponentUpdate' lifecycle method by performing
 *     a shallow comparison on the props and state of the component.
 * 
 *  2. If there is no difference, the component is not re-rendered -- performance boost
 * 
 *  3. It is good idea to ensure that all the children components are also pure to avoid
 *     unexpected behaviour.
 * 
 *  4. Never mutate the state. Always return a new Object that reflect the new state because
 *     array and objects refers a location in the memory not the actual array element.
 * 
 */

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component render');
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
