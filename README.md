## arras-io-auto
A Chrome extension that automatically inputs your Arras.io builds on respawn.

#### Features:
- Allows use multiple builds without needing to input them every time
- Can choose the next build sequentially/randomly
- Setups can automatically switch auto-fire/auto-rotation/enable-override.

#### How to install:
1. Clone this repository
2. Open the chrome://extensions tab. Turn on the Developer mode. 
3. Click "Load unpacked" and choose the extension's main folder in the popup window.

#### Extension's popup window options:
- Enabled: `boolean` (enable/disable the extension)
- List of arras.io builds: `Array[str]` separator: `\n` 
  - example build: `jjjj33333333444444444555555566666666677777777781`
- Choice: [`"sequential"` / `"random"`] : execute builds on respawn in sequential/random order.

#### Preview:
