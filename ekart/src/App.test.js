import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginUser } from './components/LoginUser';
import { Main } from './components/Main.jsx';
import Dashboard from './components/Dashboard.jsx';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Product from './components/Product';
import Header from './components/Header';
import ProductDes from './components/Productdes';
import FeedBack from './components/Feedback';
import Rater from './components/Rater';
import { Signup } from './components/signup';
import Recommendations from './components/recomm';
import { Wishlist } from './components/WishList';
import { UserProfile } from './components/UserProfile';
import SearchPage from './components/SearchPage.jsx';
import { SearchBoxComponent } from './components/Search.jsx';
import ReturnedOrders from './components/ReturnedOrders';
import OrderHistory from './components/OrderHistory';
import {OpenOrders} from './components/OpenOrders';
import {Notify} from './components/Notify';
import {Cart} from './components/Cart';
import {Card} from './components/Card';
import {CardHolder} from './components/CardHolder';
import {Address} from './components/Address';
import {AddressRow} from './components/AddressRow'
import AddAddress from './components/AddAddress';

describe('Testing LoginUser component', () => {
  it('Testing JSX - Have a form', () => {
    const wrapper = shallow(<LoginUser />)
    expect(wrapper.find("form")).toHaveLength(1);
  })
  it('Testing JSX - Have input fields', () => {
    const wrapper = shallow(<LoginUser />)
    expect(wrapper.find("input")).toHaveLength(2);
  })
  it('Testing JSX - Have input fields', () => {
    const wrapper = shallow(<LoginUser />)
    expect(wrapper.find("button")).toHaveLength(1);
  })
  it('Testing whether create an account link is present', () => {
    const wrapper = shallow(<LoginUser />)
    expect(wrapper.find(Link).get(0).props.to).toEqual('/signup');
  })
  it('Testing valid credentials', () => {
    const historyMock = { push: jest.fn() };
    let onLogin = jest.fn();
    const wrapper = mount(<MemoryRouter>
      <LoginUser history={historyMock} onLogin={onLogin} />
    </MemoryRouter>)
    let form = wrapper.find('form')
    form.simulate('submit')
    expect(historyMock.push.mock.calls[0]).toEqual(['/recommedation']);
  })
})
let pathMap = {};
describe('Testing Main component routes', () => {
  beforeAll(() => {
    let onMount = jest.fn();
    const wrapper = shallow(<Main onMount={onMount} />)
    pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  })
  it('should show Signup component for /signup router', () => {
    console.log(pathMap)
    expect(pathMap['/signup'].WrappedComponent).toBe(Signup);
  })
  it('should show Login component for /login router', () => {
    expect(pathMap['/login'].WrappedComponent).toBe(LoginUser);
  })
})

describe('Testing', () => {
  it('Testing Dashboard component', () => {
    const mockStore = configureStore();
    const initialState = {
      UserReducer: {},
      ProductReducer: {
        Products: [{
          "_id": "laptop1",
          "name": "macbook air",
          "description": "latest macbbok by apple",
          "category": "laptop",
          "image_url": "/images/macbookAir.jpg",
          "price": 80000,
          "feedback": [{
            "comment": "Super laptop",
            "rating": "4.5",
            "user_name": "Ganesh",
            "added_date": "2017-05-18"
          }],
          "isDeal": "false",
          "deals": {
            "deal_date": "2017-05-19",
            "deal_name": "Super Deal",
            "deal_discount": "70"
          },
          "avg_rating": 4.5
        },
        {
          "_id": "laptop2",
          "name": "Acer Predator",
          "description": "Limited Edition. Awesome gaming laptop",
          "category": "laptop",
          "image_url": "/images/acerPredator.jpg",
          "price": 600000,
          "feedback": [{
            "comment": "WOWSOME",
            "rating": "5",
            "user_name": "Sachin",
            "added_date": "2017-05-17"
          }],
          "isDeal": "false",
          "deals": {
            "deal_date": "",
            "deal_name": "",
            "deal_discount": ""
          },
          "avg_rating": 5
        }, {
          "_id": "laptop3",
          "name": "Lenovo Thinkpad",
          "description": " Approved By NASA for use in space",
          "category": "laptop",
          "image_url": "/images/thinkpad.jpg",
          "price": 55000,
          "feedback": [{
            "comment": "Good Laptop",
            "rating": "4",
            "user_name": "Shanti",
            "added_date": "2017-05-01"
          }],
          "isDeal": "false",
          "deals": {
            "deal_date": "",
            "deal_name": "",
            "deal_discount": ""
          },
          "avg_rating": 4
        }]
      }
    };

    const store = mockStore(initialState);
    const wrapper = mount(
      <Dashboard store={store} />
    );
    expect(wrapper.find('.otherHead')).toHaveLength(2)//doubt
  })
})

describe('Testing Product component', () => {
  it('Testing productname is rendered', () => {
    let proname = "macbook air"
    const wrapper = mount(<Product proname={proname} />)
    wrapper.find('.prodName').text(proname)
  })
  it('Testing routing is happening', () => {
    const historyMock = { push: jest.fn() };
    let id = "laptop1"
    const wrapper = mount(<MemoryRouter><Product id={id} history={historyMock} /></MemoryRouter>)
    wrapper.find('.caption').simulate('click')
    expect(historyMock.push.mock.calls[0]).toEqual(['/productdesc/laptop1']);
  })
})
describe('Testing Header component', () => {
  it('Links rendered', () => {
    const mockStore = configureStore();
    const initialState = {
      ProductReducer: {},
      UserReducer: {
        _id: "kavya.hvr@gmail.com",
        name: "kavya Ramakrishna",
        mobile_no: 9945123717,
        password: "Abc@1234",
        notification: [{ notification_id: "OrderPlaced_kavya.hvr@gmail.com1574861310477", notification_seen: true, notification_text: "Order was placed successfully. Your Id is: kavya.hvr@gmail.com1574861310477", _id: "5dde79ff3feb6b1e24a2cc26" }, { notification_id: "cancelled_kavya.hvr@gmail.com1574861310477", notification_seen: true, notification_text: "Order was cancelled successfully for Order Id: kavya.hvr@gmail.com1574861310477", _id: "5ddeac66ad3cba34a01f76f6" }],
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        card_details: [
          {
            card_type: "Credit",
            card_number: "1234123412341234",
            expiration_date: {
              month: 11,
              year: 2023
            },
            _id: "5dde79fe3feb6b1e24a2cc24"
          }
        ],
        address: [
          {
            name: "abc",
            contactNo: 9098765432,
            line1: "1st Cross, 6th Main",
            line2: "Neeladri Investments Layout",
            city: "Electronic City",
            state: "Karnataka",
            zipcode: 560100
          },
          {
            name: "PQR",
            contactNo: 9591836008,
            line1: "Line1",
            line2: "Line2",
            city: "Bangalore",
            state: "Goa",
            zipcode: 560070
          }
        ],
        wishlist: []
      }
    }
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><MemoryRouter><Header /></MemoryRouter></Provider>)
    let listItems = wrapper.find(Link)
    expect(listItems).toHaveLength(4)// doubt
  })
})

describe('Testing productdes component', () => {
  const mockStore = configureStore();
  const initialState = {
    ProductReducer: {
      Products: [{
        "_id": "laptop1",
        "name": "macbook air",
        "description": "latest macbbok by apple",
        "category": "laptop",
        "image_url": "/images/macbookAir.jpg",
        "price": 80000,
        "feedback": [{
          "comment": "Super laptop",
          "rating": "4.5",
          "user_name": "Ganesh",
          "added_date": "2017-05-18"
        }, {
          "comment": "WOWSOME",
          "rating": "5",
          "user_name": "Sachin",
          "added_date": "2017-05-17"
        }],
        "isDeal": "false",
        "deals": {
          "deal_date": "2017-05-19",
          "deal_name": "Super Deal",
          "deal_discount": "70"
        },
        "avg_rating": 4.5
      },
      {
        "_id": "laptop2",
        "name": "Acer Predator",
        "description": "Limited Edition. Awesome gaming laptop",
        "category": "laptop",
        "image_url": "/images/acerPredator.jpg",
        "price": 600000,
        "feedback": [{
          "comment": "WOWSOME",
          "rating": "5",
          "user_name": "Sachin",
          "added_date": "2017-05-17"
        }, {
          "comment": "AWESOME",
          "rating": "4",
          "user_name": "Ganesh",
          "added_date": "2019-05-17"
        }],
        "isDeal": "false",
        "deals": {
          "deal_date": "",
          "deal_name": "",
          "deal_discount": ""
        },
        "avg_rating": 5
      }]
    },
    UserReducer: {
      _id: "kavya.hvr@gmail.com",
      name: "kavya Ramakrishna",
      mobile_no: 9945123717,
      password: "Abc@1234",
      notification: [{ notification_id: "OrderPlaced_kavya.hvr@gmail.com1574861310477", notification_seen: true, notification_text: "Order was placed successfully. Your Id is: kavya.hvr@gmail.com1574861310477", _id: "5dde79ff3feb6b1e24a2cc26" }, { notification_id: "cancelled_kavya.hvr@gmail.com1574861310477", notification_seen: true, notification_text: "Order was cancelled successfully for Order Id: kavya.hvr@gmail.com1574861310477", _id: "5ddeac66ad3cba34a01f76f6" }],
      cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
      order_history: [{ order_date: "2019-11-27T13:28:30.477Z", order_id: "kavya.hvr@gmail.com1574861310477", order_status: "cancelled", payment_detail: [{ card_number: "1234567891264567", card_type: "Credit", expiration_date: { month: 11, year: 2 } }], product_details: [{ categories: "laptop", deals: [{ deal_discount: 70, deal_name: "Super Deal", _id: "5dde573c90122b4b98110001", description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", quantity: 4, _id: "laptop1" }] }], shipping_address: { city: "Bangalore", line1: "line1", line2: "line2", name: 0, phoneNumber: 9591836008, state: "Karnataka", zipcode: 560070 } }],
      card_details: [
        {
          card_type: "Credit",
          card_number: "1234123412341234",
          expiration_date: {
            month: 11,
            year: 2023
          },
          _id: "5dde79fe3feb6b1e24a2cc24"
        }
      ],
      address: [
        {
          name: "abc",
          contactNo: 9098765432,
          line1: "1st Cross, 6th Main",
          line2: "Neeladri Investments Layout",
          city: "Electronic City",
          state: "Karnataka",
          zipcode: 560100
        },
        {
          name: "PQR",
          contactNo: 9591836008,
          line1: "Line1",
          line2: "Line2",
          city: "Bangalore",
          state: "Goa",
          zipcode: 560070
        }
      ],
      wishlist: []
    }
  }
  it('Testing whether Rater component is rendered', () => {
    const store = mockStore(initialState);
    // const wrapper = mount(<Provider store={store}><MemoryRouter><ProductDes /></MemoryRouter></Provider>)
    const match = { params: { id: "laptop1" } }
    const wrapper = mount(<ProductDes store={store} match={match} />)
    let childContainer = wrapper.find("Rater")
    expect(childContainer).toHaveLength(4)
  })
  it('Testing whether Feedback component is rendered', () => {
    const store = mockStore(initialState);
    // const wrapper = mount(<Provider store={store}><MemoryRouter><ProductDes /></MemoryRouter></Provider>)
    const match = { params: { id: "laptop1" } }
    const wrapper = mount(<ProductDes store={store} match={match} />)
    let childContainer = wrapper.find("FeedBack")
    expect(childContainer).toHaveLength(2)
  })
})

describe('Testing Feedback component', () => {
  it('Testing the feedback component props', () => {
    let rating = '4.5'
    let username = 'Ganesh'
    let comment = 'Awesome'
    const props = { rating: rating, username: username, comment: comment }
    const wrapper = mount(<FeedBack rating={rating} username={username} comment={comment} />)
    expect(wrapper.props()).toEqual(props)
  })
})

describe('Testing Rater component', () => {
  it('Testing items are rendered', () => {
    let onSelected = jest.fn()
    let value = 4
    const wrapper = mount(<Rater onSelected={onSelected} value={value} />)
    console.log(wrapper.find('.rating').length)
    expect(wrapper.find('.filled')).toHaveLength(4)
  })
})

describe('Testing signup component', () => {
//   it('Testing whether the state is set in handleSignup method', () => {
//     const wrapper = mount(<Signup />)
//     const event = { preventDefault: () => { } }
//     wrapper.instance().handleSignup(event)
//     console.log(wrapper.state())
//     expect(wrapper.state('invalid')).toBeTruthy()
//   })
  it('Testing whether the state is set in handleSignup method', () => {
    const wrapper = mount(<Signup />)
    console.log(wrapper.state())
    expect(wrapper.state('match')).toBeTruthy()
  })
})
describe('Testing Recommendations component', () => {
  const mockStore = configureStore();

  it('Testing whether recommended products are rendered', () => {
    const initialState = {
      ProductReducer: {
        Products: [{
          "_id": "laptop1",
          "name": "macbook air",
          "description": "latest macbbok by apple",
          "category": "laptop",
          "image_url": "/images/macbookAir.jpg",
          "price": 80000,
          "feedback": [{
            "comment": "Super laptop",
            "rating": "4.5",
            "user_name": "Ganesh",
            "added_date": "2017-05-18"
          }, {
            "comment": "WOWSOME",
            "rating": "5",
            "user_name": "Sachin",
            "added_date": "2017-05-17"
          }],
          "isDeal": "false",
          "deals": {
            "deal_date": "2017-05-19",
            "deal_name": "Super Deal",
            "deal_discount": "70"
          },
          "avg_rating": 4.5
        }]
      },
      UserReducer: {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        order_history: [{ order_date: "2019-11-27T13:28:30.477Z", order_id: "kavya.hvr@gmail.com1574861310477", order_status: "cancelled", payment_detail: [{ card_number: "1234567891264567", card_type: "Credit", expiration_date: { month: 11, year: 2 } }], product_details: [{ categories: "laptop", deals: [{ deal_discount: 70, deal_name: "Super Deal", _id: "5dde573c90122b4b98110001", description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", quantity: 4, _id: "laptop1" }] }], shipping_address: { city: "Bangalore", line1: "line1", line2: "line2", name: 0, phoneNumber: 9591836008, state: "Karnataka", zipcode: 560070 } }],
      }
    }
    const store = mockStore(initialState);
    const wrapper = mount(<Recommendations store={store} />)
    expect(wrapper.find('#rows')).toHaveLength(1)
  })
  it('Testing whether the text is rendered where there is no order history', () => {
    const initialState = {
      ProductReducer: {
        Products: [{
          "_id": "laptop1",
          "name": "macbook air",
          "description": "latest macbbok by apple",
          "category": "laptop",
          "image_url": "/images/macbookAir.jpg",
          "price": 80000,
          "feedback": [{
            "comment": "Super laptop",
            "rating": "4.5",
            "user_name": "Ganesh",
            "added_date": "2017-05-18"
          }, {
            "comment": "WOWSOME",
            "rating": "5",
            "user_name": "Sachin",
            "added_date": "2017-05-17"
          }],
          "isDeal": "false",
          "deals": {
            "deal_date": "2017-05-19",
            "deal_name": "Super Deal",
            "deal_discount": "70"
          },
          "avg_rating": 4.5
        }]
      },
      UserReducer: {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        order_history: [],
      }
    }
    const store = mockStore(initialState);
    const wrapper = mount(<Recommendations store={store} />)
    let dealHead = wrapper.find('#rows')
    expect(dealHead.text()).toContain('You Havent purchased anything from us. Please Chekout the amazing deals')
  })
})
describe('Testing wishlist component', () => {
  it('Testing whether wishlist items are rendered', () => {
    let state = {
      wishlist: [
        { categories: "laptop", description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 1, _id: "laptop1" },
        { categories: "laptop", description: "latest high end with i7 6th generation CPU. 8 GB RAM", image_url: "/images/hp.jpeg", name: "HP EliteBook", price: 21800, quantity: 1, _id: "laptop6" }
      ]
    }
    const wrapper = mount(<Wishlist state={state} />)
    let childContainer = wrapper.find('Product')
    expect(childContainer).toHaveLength(2)
  })
})
describe('Testing UserProfile component', () => {
  it('Testing name state is updated', () => {
    let state = { _id: 'kavya.hvr@gmail.com' }
    const wrapper = shallow(<UserProfile state={state} />)
    const event = { target: { value: 'Kavya' } }
    wrapper.instance().NameChange(event)
    expect(wrapper.state('name')).toEqual('Kavya')
  })
  it('Testing name routing is happening', () => {
    const historyMock = { push: jest.fn() };
    let state = { _id: 'kavya.hvr@gmail.com' }
    const wrapper = shallow(<UserProfile history={historyMock} state={state} />)
    wrapper.instance().handleCancel()
    expect(historyMock.push.mock.calls[0]).toEqual(['/landingPage']);
  })
})
describe('Testing SearchPage component', () => {
  it('Testing whether the products are rendered according to the search term', () => {
    let products = [{
      "_id": "laptop1",
      "name": "macbook air",
      "description": "latest macbbok by apple",
      "category": "laptop",
      "image_url": "/images/macbookAir.jpg",
      "price": 80000,
      "feedback": [{
        "comment": "Super laptop",
        "rating": "4.5",
        "user_name": "Ganesh",
        "added_date": "2017-05-18"
      }],
      "isDeal": "true",
      "deals": {
        "deal_date": "2017-05-19",
        "deal_name": "Super Deal",
        "deal_discount": "70"
      },
      "avg_rating": 4.5
    },
    {
      "_id": "laptop2",
      "name": "Acer Predator",
      "description": "Limited Edition. Awesome gaming laptop",
      "category": "laptop",
      "image_url": "/images/acerPredator.jpg",
      "price": 600000,
      "feedback": [{
        "comment": "WOWSOME",
        "rating": "5",
        "user_name": "Sachin",
        "added_date": "2017-05-17"
      }],
      "isDeal": "false",
      "deals": {
        "deal_date": "",
        "deal_name": "",
        "deal_discount": ""
      },
      "avg_rating": 5
    }]
    const match = { params: { searchtext: "macbook" } }
    const wrapper = mount(<SearchPage match={match} />)
    wrapper.setState({ products: products })
    expect(wrapper.find('Product')).toHaveLength(2)
  })
  it('Testing whether the products are rendered according to the search term', () => {
    let products = []
    const match = { params: { searchtext: "samsung" } }
    const wrapper = mount(<SearchPage match={match} />)
    wrapper.setState({ products: products })
    expect(wrapper.find('Product')).toHaveLength(0)
  })
})
describe('Testing SearchBoxComponent component', () => {
  it('Testing routing1 in SearchBoxComponent component', () => {
    const historyMock = { push: jest.fn() };
    const wrapper = mount(<SearchBoxComponent history={historyMock} />)
    wrapper.instance().onchange()
    expect(historyMock.push.mock.calls[0]).toEqual(['/searching']);
  })
  it('Testing routing2 in SearchBoxComponent component', () => {
    const historyMock = { push: jest.fn() };
    const wrapper = mount(<SearchBoxComponent history={historyMock} />)
    wrapper.instance().onSearch()
    expect(historyMock.push.mock.calls[0]).toEqual(['/searchPage/']);
  })
})
describe('Testing ReturnedOrders component', () => {
  const mockStore = configureStore();
  it('Testing returned orders are rendered', () => {
    const initialState = {
      ProductReducer: {},
      UserReducer: {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        order_history: [{ order_date: "2019-11-27T13:28:30.477Z", order_id: "kavya.hvr@gmail.com1574861310477", order_status: "cancelled", payment_detail: [{ card_number: "1234567891264567", card_type: "Credit", expiration_date: { month: 11, year: 2 } }], product_details: [{ categories: "laptop", deals: [{ deal_discount: 70, deal_name: "Super Deal", _id: "5dde573c90122b4b98110001", description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", quantity: 4, _id: "laptop1" }] }], shipping_address: { city: "Bangalore", line1: "line1", line2: "line2", name: 0, phoneNumber: 9591836008, state: "Karnataka", zipcode: 560070 } }]
      }
    }
    const store = mockStore(initialState);
    const wrapper = mount(<ReturnedOrders store={store}/>)
    let tbody = wrapper.find('tbody')
    expect(tbody).toHaveLength(1)
  })
})

describe('Testing OpenOrders component',()=>{
  it('Testing orders are rendered',()=>{
    let orderHistory = [{ order_date: "2019-11-27T13:28:30.477Z", order_id: "kavya.hvr@gmail.com1574861310477", order_status: "cancelled", payment_detail: [{ card_number: "1234567891264567", card_type: "Credit", expiration_date: { month: 11, year: 2 } }], product_details: [{ categories: "laptop", deals: [{ deal_discount: 70, deal_name: "Super Deal", _id: "5dde573c90122b4b98110001", description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", quantity: 4, _id: "laptop1" }] }], shipping_address: { city: "Bangalore", line1: "line1", line2: "line2", name: 0, phoneNumber: 9591836008, state: "Karnataka", zipcode: 560070 } }]
    const wrapper = mount(<OpenOrders orderHistory={orderHistory}/>)
    let tbody = wrapper.find('tbody')
    expect(tbody).toHaveLength(1)
  })
})
describe('Testing Notification component',()=>{
  it('Testing Notify component notifications',()=>{
    let notification = [{ notification_id: "OrderPlaced_kavya.hvr@gmail.com1574861310477", notification_seen: true, notification_text: "Order was placed successfully. Your Id is: kavya.hvr@gmail.com1574861310477", _id: "5dde79ff3feb6b1e24a2cc26" }, { notification_id: "cancelled_kavya.hvr@gmail.com1574861310477", notification_seen: true, notification_text: "Order was cancelled successfully for Order Id: kavya.hvr@gmail.com1574861310477", _id: "5ddeac66ad3cba34a01f76f6" }]
    const wrapper = mount(<Notify notification={notification}/>)
    let tbody = wrapper.find('tbody')
    expect(tbody).toHaveLength(1)
  })
})
describe('Testing Cart component',()=>{
  it('Testing whether the cart items are rendered',()=>{
    let UserReducer = {
      cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }]
    }
    const wrapper = mount(<Cart UserReducer={UserReducer}/>)
    let tbody = wrapper.find('tbody')
    expect(tbody).toHaveLength(1)
  })
  it('Testing whether the cart items are rendered',()=>{
    let UserReducer = {
      cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }]
    }
    const historyMock = { push: jest.fn() };
    const wrapper = mount(<Cart UserReducer={UserReducer} history={historyMock}/>)
    wrapper.instance().handleCheckOut()
    expect(historyMock.push.mock.calls[0]).toEqual(['/login']);
  })
})
describe('Testing Card Component',()=>{
  it('Testing whether the card component is rendering form',()=>{
    let expDate = "2019-11"
    let number = "1234567891264567"
    let type = "Credit"
    const wrapper = mount(<Card expDate={expDate} number={number} type={type}/>)
    wrapper.setState({modify:true})
    let form = wrapper.find('form')
    expect(form).toHaveLength(1)
  })
  it('Testing whether the card component is rendering table',()=>{
    let expDate = "2019-11"
    let number = "1234567891264567"
    let type = "Credit"
    const wrapper = mount(<Card expDate={expDate} number={number} type={type}/>)
    wrapper.setState({modify:false})
    let form = wrapper.find('table')
    expect(form).toHaveLength(1)
  })
})
describe('Testing CardHolder component',()=>{
  const mockStore = configureStore();
  it('Testing whether the card details are rendered',()=>{
    let initialState= {
      ProductReducer : {},
      UserReducer : {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        card_details: [
          {
            card_type: "Credit",
            card_number: "1234123412341234",
            expiration_date: {
              month: 11,
              year: 2023
            },
            _id: "5dde79fe3feb6b1e24a2cc24"
          }
        ]
      }
    }
    let state = { card_details: [
      {
        card_type: "Credit",
        card_number: "1234123412341234",
        expiration_date: {
          month: 11,
          year: 2023
        },
        _id: "5dde79fe3feb6b1e24a2cc24"
      }
    ]}
    const store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><CardHolder state={state}/></Provider>)
    let child = wrapper.find("Card")
    expect(child).toHaveLength(1)
  })
  it('Testing whether the button is rendered when add state is false',()=>{
    let initialState= {
      ProductReducer : {},
      UserReducer : {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        card_details: [
          {
            card_type: "Credit",
            card_number: "1234123412341234",
            expiration_date: {
              month: 11,
              year: 2023
            },
            _id: "5dde79fe3feb6b1e24a2cc24"
          }
        ]
      }
    }
    let state = { card_details: [
      {
        card_type: "Credit",
        card_number: "1234123412341234",
        expiration_date: {
          month: 11,
          year: 2023
        },
        _id: "5dde79fe3feb6b1e24a2cc24"
      }
    ]}
    const store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><CardHolder state={state}/></Provider>)
    let input = wrapper.find("input")
    expect(input).toHaveLength(3)
  })
})
describe('Testing Address component',()=>{
  const mockStore = configureStore();
  it('Testing whether address rows are rendered',()=>{
    let initialState= {
      ProductReducer : {},
      UserReducer : {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        card_details: [
          {
            card_type: "Credit",
            card_number: "1234123412341234",
            expiration_date: {
              month: 11,
              year: 2023
            },
            _id: "5dde79fe3feb6b1e24a2cc24"
          }
        ]
      }
    }
    let address =  [
      {
        name: "abc",
        contactNo: 9098765432,
        line1: "1st Cross, 6th Main",
        line2: "Neeladri Investments Layout",
        city: "Electronic City",
        state: "Karnataka",
        zipcode: 560100
      },
      {
        name: "PQR",
        contactNo: 9591836008,
        line1: "Line1",
        line2: "Line2",
        city: "Bangalore",
        state: "Goa",
        zipcode: 560070
      }
    ]
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><Address address={address}/></Provider>)
    expect(wrapper.find("AddressRow")).toHaveLength(2)
  })
  it('Testing whether add address component is rendered',()=>{
    let initialState= {
      ProductReducer : {},
      UserReducer : {
        cart: [{ categories: "laptop", deals: [{ _id: "5ddeab10ac7aba43f86b9ea0", deal_name: "Super Deal", deal_discount: 70 }], description: "latest macbbok by apple", image_url: "/images/macbookAir.jpg", name: "macbook air", price: 24000, quantity: 4, _id: "laptop1" }],
        card_details: [
          {
            card_type: "Credit",
            card_number: "1234123412341234",
            expiration_date: {
              month: 11,
              year: 2023
            },
            _id: "5dde79fe3feb6b1e24a2cc24"
          }
        ]
      }
    }
    let address =  [
      {
        name: "abc",
        contactNo: 9098765432,
        line1: "1st Cross, 6th Main",
        line2: "Neeladri Investments Layout",
        city: "Electronic City",
        state: "Karnataka",
        zipcode: 560100
      },
      {
        name: "PQR",
        contactNo: 9591836008,
        line1: "Line1",
        line2: "Line2",
        city: "Bangalore",
        state: "Goa",
        zipcode: 560070
      }
    ]
    const store = mockStore(initialState);
    const wrapper = mount(<Provider store={store}><Address address={address}/></Provider>)
    expect(wrapper.find("AddAddress")).toHaveLength(0)
  })
})
describe("Testing AddressRow component",()=>{
  it('To check whether table is rendered',()=>{
    let statesOfIndia = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Pondicherry","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
    const wrapper = mount(<AddressRow statesOfIndia={statesOfIndia}/>)
    let table = wrapper.find('table')
    expect(table).toHaveLength(1)
  })
  it('To check whether the form is rendered',()=>{
    let onGetCard = jest.fn()
    let statesOfIndia = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Pondicherry","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
    const wrapper = mount(<AddressRow statesOfIndia={statesOfIndia} onGetCard={onGetCard}/>)
    wrapper.instance().showForm()
    console.log(wrapper.state())
    let form = wrapper.find('form')
    expect(form).toBeTruthy()
  })
  it('To check whether the state is updated',()=>{
    let onGetCard = jest.fn()
    let statesOfIndia = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Punjab","Pondicherry","Rajasthan","Sikkim","Tamil Nadu","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
    const wrapper = mount(<AddressRow statesOfIndia={statesOfIndia} onGetCard={onGetCard}/>)
    wrapper.instance().showForm()
    expect(wrapper.state('enableSave')).toBeTruthy()
  })
})
describe('Testing AddAddress component',()=>{
  let statesOfIndia = ["Andhra Pradesh","Arunachal Pradesh"]
  it('Testing whether the states are rendered',()=>{
    const wrapper = mount(<AddAddress statesOfIndia={statesOfIndia}/>)
    let states = wrapper.find('option')
    expect(states).toHaveLength(2)
  })
})
