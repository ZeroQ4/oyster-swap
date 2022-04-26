import React from "react";
import { Button, Card, Popover } from "antd";
import { TradeEntry } from "./trade";
import { AddToLiquidity } from "./pool/add";
import { Settings } from "./settings";
import { SettingOutlined } from "@ant-design/icons";
import { AppBar } from "./appBar";
import { useHistory, useLocation } from "react-router-dom";
import Social from "./social";

export const ExchangeView = (props: {}) => {
  const tabStyle: React.CSSProperties = { width: 120 };
  const tradeTab = {
    
    key: "trade",
    tab: <div style={tabStyle}>Trade</div>,
    render: () => {
      return <TradeEntry />;
    },
  };
    

  const location = useLocation();
  const history = useHistory();
  const activeTab = location.pathname.indexOf("add") < 0 ? "trade" : "pool";

  const handleTabChange = (key: any) => {
    if (activeTab !== key) {
      if (key === "trade") {
        history.push("/");
      } else {
        history.push("/add");
      }
    }
  };

  return (
    <>
      <AppBar
        right={
          <Popover
            placement="topRight"
            title="Slippage"
            content={<Settings />}
            trigger="click"
          >
            <Button
              shape="circle"
              size="large"
              type="text"
              icon={<SettingOutlined />}
            />
          </Popover>
        }
      />
       <div>
       

        <Card
          className="exchange-card"
          headStyle={{ padding: 0 }}
          bodyStyle={{ position: "relative", padding: '0 0px 20px' }}
        >
          {tradeTab.render()}
        </Card>

        

        

        <Social />
      </div>
    </>
  );
};
