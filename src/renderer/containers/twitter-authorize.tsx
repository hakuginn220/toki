import Authorize, { IProps } from '@/components/organisms/authorize'
import { IState, openAuthorize } from '@/modules/accounts'
import twitter from '@/utils/twitter'
import { shell } from 'electron'
import { MouseEvent } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'

const mapStateToProps: MapStateToProps<{}, IProps, IState> = () => ({})

const mapDispatchToProps: MapDispatchToProps<
  {
    onAuthorize: (event: MouseEvent<HTMLButtonElement>) => void
  },
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
  mapStateToProps,
  mapDispatchToProps
)(Authorize)
