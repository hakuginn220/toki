import Home, { IProps } from '@/components/templates/home'
import { connect, MapDispatchToProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

interface IDispatchProps {
  onChangeAccount: IProps['onChangeAccount']
  onMoveLogin: IProps['onMoveLogin']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  RouteComponentProps
> = (dispatch, props) => ({
  onChangeAccount(id) {
    window.console.log(id)
  },
  onMoveLogin() {
    props.history.push('/login')
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
