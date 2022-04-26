import React from 'react'
import { Menu } from 'antd'
import { AccountInfo } from './accountInfo'
import { WalletConnect } from './walletConnect'
import { NavLink, useLocation } from 'react-router-dom'

export const AppBar = (props: { left?: JSX.Element; right?: JSX.Element }) => {
  const location = useLocation()

  let current = location.pathname

  if (location.pathname.includes('/trade')) {
    current = '/trade'
  }

  const TopBar = (
    <div className="App-Bar">
      <div className="App-Bar-left">
        <div className="App-logo" />
        <Menu mode="horizontal" selectedKeys={[current]}>
          <Menu.Item key="/home">
            <a href="https://1space.me/">Home</a>
          </Menu.Item>
          
          <Menu.Item key="/">
            <NavLink
              to={{
                pathname: '/'
              }}
              isActive={(match, location) => {
                return location.pathname.includes('/')
              }}
            >
              Swap
            </NavLink>
          </Menu.Item>
          <Menu.Item disabled key="/add">
            <NavLink
              to={{
                pathname: '/add'
              }}
              isActive={(match, location) => {
                return location.pathname.includes('/add')
              }}
            >
              Liquidity
            </NavLink>
          </Menu.Item>
          <Menu.Item disabled key="/dex">
            <a
              href="https://app.1space.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trading
            </a>
          </Menu.Item>
          
          <Menu.Item disabled key="/staking">
            <NavLink
              to={{
                pathname: '/staking'
              }}
            >
              Staking
            </NavLink>
          </Menu.Item>
          <Menu.Item disabled key="/toolkit">
            <NavLink
              to={{
                pathname: '/toolkit'
              }}
            >
              Farms
            </NavLink>
          </Menu.Item>
          
          
          <Menu.Item disabled key="nft">
            NFT
          </Menu.Item>
          <Menu.Item disabled key="/dashboard">
            <NavLink
              to={{
                pathname: '/dashboard'
              }}
            >
              Dashboard
            </NavLink>
          </Menu.Item>
          <Menu.Item disabled key="/doc">
            <a
              href="https://app.1space.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </Menu.Item>
        </Menu>
        {props.left}
      </div>
      <div className="App-Bar-right">
        <WalletConnect>
          <AccountInfo />
        </WalletConnect>
        {props.right}
      </div>
    </div>
  )

  return TopBar
}
