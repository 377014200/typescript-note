import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux';
import { AppContainer } from 'react-hot-loader';

import 'antd/dist/antd.css'

import App from './view/App';
const render = function ( Component ) {
   const RootApp = (
      <AppContainer>
         <Provider store={ store }>
            <Component />
         </Provider>
      </AppContainer>
   );

   ReactDOM.render( RootApp, document.getElementById( 'root' ) );
};

render( App );

import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{ text }</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
            { tags.map( tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';

                if ( tag === 'loser' ) {
                    color = 'volcano';
                }
                return (
                    <Tag color={ color } key={ tag }>
                        { tag.toUpperCase() }
                    </Tag>
                );
            } ) }
         </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: ( text, record ) => (
            <span>
            <a>Invite { record.name }</a>
            <Divider type='vertical' />
            <a>Delete</a>
         </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

if ( module.hot ) {
   module.hot.accept( './view/App', () => {
      console.log( '[ 欲上青天揽明月 ] : Accepting the updated in react!' );
      render( App );
   } );
}