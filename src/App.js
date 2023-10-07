import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { UseSelector, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from './Store/ui-slice';

function App() {

  const cartShow = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch()
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'sending data..'
      }));
      const response = await window.fetch('https://react-http-7e672-default-rtdb.firebaseio.com/products.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
        }
      });

      if (!response.ok) {
        throw new Error('something went wrong!!')
      }

      const responseData = response.json();
      dispatch(uiActions.showNotification({
        status: 'succes',
        title: 'Succes..',
        message: 'sended succesfully..'
      }));
    }

    sendCartData().catch(error=>{
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'sending data..'
      }));
    })
  }, [cart])

  return (
    <Layout>
      {
        cartShow
        &&
        <Cart />
      }
      <Products />
    </Layout>
  );
}

export default App;
