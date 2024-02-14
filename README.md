## arras-io-auto
A Chrome extension that automatically inputs your Arras.io builds on respawn.

#### Features:
- (+) Allows the use of multiple builds without needing to input them every time
- (+) Setups can automatically switch auto-fire/auto-rotation/enable-override.
- (+) Can choose the next build sequentially/randomly
- (+) Based on the Arras.io application's MessageEvents.
- (-) Requires chrome debugger sessions to work
#### How to install:
1. Clone the repository
2. Open the chrome://extensions tab. Turn on the Developer mode. 
3. Click "Load unpacked"; Choose the extension's main folder in the popup window.

#### Extension's popup options:
- Enabled: `boolean` (enable/disable the extension)
- List of arras.io builds: `Array[str]` separator: `\n` 
  - example build: `jjjj33333333444444444555555566666666677777777781`
  - At the moment, only upgrades that have keycodes assigned to them are supported  
- Choice: [`"sequential"` / `"random"`] : choose next build index in sequential/random order.

#### Preview:
