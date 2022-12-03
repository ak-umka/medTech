import RightMenu from 'components/RightMenu'
import MyRouter from 'router/router'
import { store } from './store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <main className="main container-fluid">
          <div className="row">
            <div className="col-2">
              <RightMenu />
            </div>
            <div className="col py-3">
              <MyRouter />
            </div>
          </div>
        </main>
      </Provider>
    </>
  )
}

export default App
