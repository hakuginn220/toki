import Authorize, { IProps } from '@/components/organisms/authorize'
import { openAuthorize } from '@/modules/accounts'
import twitter from '@/utils/twitter'
import { shell } from 'electron'
import { connect, MapDispatchToProps } from 'react-redux'

interface IDispatchProps {
  onAuthorize: IProps['onAuthorize']
}

const mapDispatchToProps: MapDispatchToProps<
  IDispatchProps,
  IProps
> = dispatch => ({
  onAuthorize() {
    twitter.getAuthorizeURL().then(url => {
      shell.openExternal(url)
      dispatch(openAuthorize())
    })
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Authorize)
