'use strict';
var globalService = function($http, $httpParamSerializerJQLike) {
  globalFuncs.checkAndRedirectHTTPS();
  ajaxReq.http = $http;
  ajaxReq.postSerializer = $httpParamSerializerJQLike;
  ajaxReq.getETHvalue = nodes.ethPrice.getETHvalue;
  ajaxReq.getRates = nodes.ethPrice.getRates;
var tabs = {
  generateWallet: {
    id: 0,
    name: "NAV_GenerateWallet",
    url: "generate-wallet",
    cew: true,
    cx: false
  },
  myWallet: {
    id: 1,
    name: "NAV_MyWallets",
    url: "my-wallet",
    cew: false,
    cx: true
  },
  addWallet: {
    id: 2,
    name: "NAV_AddWallet",
    url: "add-wallet",
    cew: false,
    cx: true
  },
  sendTransaction: {
    id: 3,
    name: "NAV_SendEther",
    url: "send-transaction",
    cew: true,
    cx: true
  },
  swap: {
    id: 4,
    name: "NAV_Swap",
    url: "swap",
    cew: true,
    cx: true
  },
  offlineTransaction: {
    id: 5,
    name: "NAV_Offline",
    url:"offline-transaction",
    cew: true,
    cx: false
  },
  contracts: {
    id: 6,
    name: "NAV_Contracts",
    url: "contracts",
    cew: true,
    cx: true
  },
  /*ens: {
    id:7,
    name: "NAV_ENS",
    url: "ens",
    cew: true,
    cx: true
  },*/
  viewWalletInfo: {
    id: 7,
    name: "NAV_ViewWallet",
    url: "view-wallet-info",
    cew: true,
    cx: false
  },
  help: {
    id: 8,
    name: "NAV_Help",
    url: "help",
    cew: true,
    cx: true
  },
  signMsg: {
    id: 9,
    name: "NAV_SignMsg",
    url: "sign-message",
    cew: false,
    cx: false
  },
  bulkGenerate: {
    id: 10,
    name: "NAV_BulkGenerate",
    url: "bulk-generate",
    cew: false,
    cx: false
  }
};
var currentTab = 0;
if(typeof chrome != 'undefined')
  currentTab = chrome.windows === undefined ? 0 : 3;
return {
  tabs: tabs,
  currentTab: currentTab
};
};
module.exports = globalService;


