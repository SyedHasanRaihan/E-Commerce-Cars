import Image from "next/image";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { RiShoppingBag2Line } from "react-icons/ri";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from "antd";

const Navbar = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
        //   disabled: true,
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item (disabled)
            </a>
          ),
        //   disabled: true,
        },
        {
          key: "4",
        //   danger: true,
          label: "a danger item",
        },
      ]}
    />
  );
  return (
    <div className="flex justify-between items-center w-full h-20 bg-[#262626] px-12">
      <div className="flex items-center justify-center">
        <div className="relative w-[168px] h-[39px]">
          <Image
            src="/assets/logo/Logo.png"
            width="100%"
            height="100%"
            alt="logo"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className="px-5">
          <HiMenu size={30} color="white" />
        </div>
      </div>
      <div className="flex items-center justify-between bg-white rounded-3xl w-[100%] h-[45px] px-4 py-2 mx-2 mr-8">
        <div className="flex items-center px-2">
          <Dropdown className="w-[230px]" overlay={menu}>
            <a onClick={(e) => e.preventDefault()} className="flex justify-between items-center text-[#262626]">
              {/* <Space className="flex justify-between items-center"> */}
                <span>All Categories</span>
                <DownOutlined />
              {/* </Space> */}
            </a>
          </Dropdown>
        </div>
        <div className="w-full">
          <input className="w-full border-none outline-none h-4" type="search" />
        </div>
        <div>
          <FiSearch size={23} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center rounded-3xl font-bold tracking-wider w-[170px] bg-[#FED700] px-8 py-2 mr-4">
          <div>My Account</div>
          <FaAngleDown />
        </div>
        <div className="px-4 text-white">
          <IoIosGitCompare size={30} />
        </div>
        <div className="px-4 text-white">
          <FiHeart size={30} />
        </div>
        <div className="px-4 text-white">
          <RiShoppingBag2Line size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
