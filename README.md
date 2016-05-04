# 專案摘要

結合 Mocha + Chai + Sinon ＋ Selenium Server ，架構 Web 測試平台。


# 事前準備

使用本專案的產出物，您電腦的作業環境，須先備妥下列軟體，完成應有之安裝：

 * git
 * node
 * npm
 
 
# 安裝作業

循下列操作程序，完成本專案作業環境之安裝工作。
 
## 下載本專案及安裝專案所需之NPM模組 
 
```
 $ git clone git@github.com:AlanJui/mocha-test.git

 $ cd mocha-test

 $ npm install
```

## 安裝 Chrome Driver

為搭配 Selenium Server ，模擬在 Chrome Web Browser 進行測試，
需下載及安裝 WebDriver for Chrome。

### 下載

請透過 Web 瀏覽器，至此[下載網址](https://sites.google.com/a/chromium.org/chromedriver/downloads)
下載檔案。

 * chromedriver_linux32.zip	2016-01-26 06:47:39	2.64MB	
 * chromedriver_linux64.zip	2016-01-26 15:51:03	2.57MB	
 * chromedriver_mac32.zip	2016-01-26 07:59:08	3.55MB	
 * chromedriver_win32.zip	2016-01-26 06:47:03	2.48MB	

### 安裝

在 Mac 環境的使用者，執行以下指令:

```
 $ sudo mv chromedrvier /usr/local/bin
```

`注意`: 環境變數的 PATH ，必須有指定 `/usr/local/bin` ，
確定 chromedriver 可被作業系統找到。


# 執行作業

在 test 目錄中的 `browserSpec.js` 測試程式，其執行環境，
務必要有 Web Server 及 Selenium Server 兩項相互搭配，才能正常執行。

## 啟動 Selenium Server
 
執行以下指令。

```
 $ npm run test:web
```

## 啟動 Web Server
 
執行以下指令。

```
 $ npm run serve
```

## 執行測試

執行以下指令。

```
 $ npm test
```


# 參考資訊

## [Build Podcast 062 Mocha - YouTube 影片](https://www.youtube.com/watch?v=Q8Jl85FJz4E)

## [Build Podcast 062 Mocha - 網站](https://build-podcast.com/mocha/)

