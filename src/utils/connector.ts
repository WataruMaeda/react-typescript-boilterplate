import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as appActions } from 'modules/app.module'
// add more actions here...

import { Dispatch, State } from './store'

export interface ConnectorProps {
  state: State
  actions: {}
  children: (props: { state: State; actions: {} }) => any
}

const Connector: React.FC<ConnectorProps> = ({ state, actions, children }) =>
  children({ state, actions })

const mapStateToProps = (state: State) => ({ state })
const mapDispatchToProps = (dispatch: Dispatch) => {
  const actionList = [
    { label: 'app', value: appActions },
    // add more actions here...
  ]

  return {
    actions: actionList.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.label]: bindActionCreators(cur.value, dispatch),
      }),
      {},
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Connector)
