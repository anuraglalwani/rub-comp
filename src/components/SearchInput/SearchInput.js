import React from 'react'
import { Select } from 'antd';
// import 'antd/dist/antd.css'; 
import "./SearchInput.scss";
const { Option } = Select;
function SearchInput() {
  return (
    <div> <Select 
    showSearch
    style={{
      width: 200,
     //outline:"0.3px solid  #1890ff",     
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select></div>
  )
}

export default SearchInput


