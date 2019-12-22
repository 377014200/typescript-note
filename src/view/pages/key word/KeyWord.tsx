import antdLazy from '@/view/utils';
import React, { lazy } from 'react';
import { Table } from 'antd';

import { S } from 'types/alias';
// import {Table} from 'antd';
var a:S = '234';
const dataSource = [
   {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: 'dsfdsfsdgsdfgsfd'
   },
   {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
   },
];

const columns = [
   {
      title: '姓',
      dataIndex: 'name',
      key: 'name',
   },
   {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
   },
   {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
   },
];

export default class KeyWord extends React.Component {
   render() {
      return <Table dataSource={ dataSource } columns={ columns } />;
   }
}