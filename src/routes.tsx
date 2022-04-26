import { HashRouter, Route } from "react-router-dom";
import React from "react";


import { WalletProvider } from "./context/wallet";
import { ConnectionProvider } from "./utils/connection";
import { AccountsProvider } from "./utils/accounts";
import { CurrencyPairProvider } from "./utils/currencyPair";
import { ExchangeView } from "./components/exchange";

export function Routes() {
  return (
    <>
      <HashRouter basename={"/"}>
        <ConnectionProvider>
          <WalletProvider>
            <AccountsProvider>
              
                <CurrencyPairProvider>
                  <Route exact path="/" component={ExchangeView} />
                  <Route exact path="/add" component={ExchangeView} />
                  
                  
                </CurrencyPairProvider>
              
            </AccountsProvider>
          </WalletProvider>
        </ConnectionProvider>
      </HashRouter>
    </>
  );
}
