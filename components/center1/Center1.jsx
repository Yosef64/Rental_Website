"use client";
import React, { Fragment, useState } from "react";
import {Dropdown, Menu, Flex, Button, Space, Tooltip} from "antd";
import { DownOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import {types,locations} from "@/components/center1/container";
import "./c1.scss";

export default function Center1(props) {
  const [type, setType] = useState("All type");
  const [location, setLocation] = useState("Neighborhood");
  const buttonStyle2 =
  {
    width:"50px",
    borderBottomRightRadius:"5px",
    borderTopRightRadius:"5px",
    backgroundColor:"#6a9567",
      color:"white"
  }
  const buttonStyle1 = {
    borderBottomLeftRadius:"5px",
    borderTopLeftRadius:"5px",
      fontFamily:'"Poppins",sans-serif',
  }

  const boxStyle = {
    width: "80%",
    paddingLeft:50,
    height: 120,
    borderRadius: 6,

  };


  return (
      <div className="cen1">
        <div className="c1-container">
        <div className="c1-left">
          <div className="f-pg">
            Find Your <span>Perfect Home </span>
            <br />
            With Us
          </div>

          <Flex className="flex-drop" style={boxStyle} align="center">
            <Dropdown
                overlay={
                  <Menu selectable defaultSelectedKeys={['1']}>
                    {types.map((type) => (
                        <Menu.Item key={type.key} onClick={() => setType(type.label)}>
                          {type.label}
                        </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomRight"
            >
              <Button style={buttonStyle1} className="button">
                {type} <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown
                overlay={
                  <Menu selectable defaultSelectedKeys={['1']}>
                    {locations.map((type) => (
                        <Menu.Item key={type.key} onClick={() => setLocation(type.label)}>
                          {type.label}
                        </Menu.Item>
                    ))}
                  </Menu>
                }
            >
              <Button  className="button">{location} {<DownOutlined/>}</Button>
            </Dropdown>
            <Tooltip title="search">
              <Button style={buttonStyle2} className="button search" type="primary" shape="square" icon={<SearchOutlined />} />
            </Tooltip>
          </Flex>
        </div>
        <div className="c1-right" >
          <img src="/try-hd.png" alt="something is wrong!" />
        </div>
      </div>
    </div>
  );
}
