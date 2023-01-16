/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6dc6c3fe25342b3de20fba1b9c436be6"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.4f68a55e.css",
    "revision": "6dc52cb94a1ddd507e35b82867a7ddbc"
  },
  {
    "url": "assets/img/relscheme.20f4bef6.png",
    "revision": "20f4bef68d64bf57625c3b91cc2d2821"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c6526174.js",
    "revision": "cee0c0c4b7f97f7f8e49ad9ccfe6213a"
  },
  {
    "url": "assets/js/11.406fe9ce.js",
    "revision": "dc535171e9e88e0627884d1752cd9d68"
  },
  {
    "url": "assets/js/12.5ec2a0d0.js",
    "revision": "5f47a90be13823e0c8fb655b67ac62d3"
  },
  {
    "url": "assets/js/13.5d96e793.js",
    "revision": "0ac8d2b41abaae508cd9e25103f9c028"
  },
  {
    "url": "assets/js/14.5125b6f4.js",
    "revision": "a9d20175fc8057511c31549bd691a6e9"
  },
  {
    "url": "assets/js/15.7c1e8ab3.js",
    "revision": "2fc0e18ae6c6906df98076ec4f77c40b"
  },
  {
    "url": "assets/js/16.a90184b8.js",
    "revision": "1b81bca68b7ea38c4037266f41e54119"
  },
  {
    "url": "assets/js/17.b937fd85.js",
    "revision": "16c2173a65ba120ef221180b4cfbfcf9"
  },
  {
    "url": "assets/js/18.b3f02c4e.js",
    "revision": "4b5c6f3744dfc41bdf69734d78ad901e"
  },
  {
    "url": "assets/js/19.627be896.js",
    "revision": "8943138e77dfec339bc7fea5deb3f84a"
  },
  {
    "url": "assets/js/2.f734c411.js",
    "revision": "9e183e86e35ab3df29b43cf550c69530"
  },
  {
    "url": "assets/js/20.e010ae7a.js",
    "revision": "7b569f1a8d5b9386fec2584480eca241"
  },
  {
    "url": "assets/js/21.4e274f2a.js",
    "revision": "d363d4eff85f7ea296eae0dc618c7274"
  },
  {
    "url": "assets/js/22.90d8a0fb.js",
    "revision": "2679cb425d3ab0c37234ff88554eabb5"
  },
  {
    "url": "assets/js/23.e1b2e17c.js",
    "revision": "e547164b53839f5e08be8a9ce56d67e8"
  },
  {
    "url": "assets/js/24.18c49556.js",
    "revision": "8327aa2fec6cb11ede1bc37cb04f999c"
  },
  {
    "url": "assets/js/26.6eebb66c.js",
    "revision": "c3a04e9016b9d59bd232297f93899973"
  },
  {
    "url": "assets/js/3.69123e2e.js",
    "revision": "bcfea314a739856ed4d0cfe4edbad8a5"
  },
  {
    "url": "assets/js/4.4673fb57.js",
    "revision": "9d285ce69f0e0ba3760f2193503bae40"
  },
  {
    "url": "assets/js/5.9f7ae5a0.js",
    "revision": "ba36708c2544836a4adef260cb6f5f07"
  },
  {
    "url": "assets/js/6.fd7fd5c3.js",
    "revision": "2fb61070dab5fbb1eef4918be6d5e5d9"
  },
  {
    "url": "assets/js/7.3e7c85fe.js",
    "revision": "e7af6fdad9d51cee6661683a0f7078b1"
  },
  {
    "url": "assets/js/8.61e0d779.js",
    "revision": "b47df70fce4056f3f9de91324074b52e"
  },
  {
    "url": "assets/js/9.80022914.js",
    "revision": "ec2d18cb2e938be21588f451ee40b5c1"
  },
  {
    "url": "assets/js/app.e2c0914a.js",
    "revision": "dc422b5fc2c501a09688f5b70e33fba4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0cff1ea4d930217c4c4bf8ad68570b59"
  },
  {
    "url": "design/index.html",
    "revision": "5f199b7c166c4324eb8e7b824c3cd343"
  },
  {
    "url": "index.html",
    "revision": "9583884d44d0ca68d0ecf9533ef050db"
  },
  {
    "url": "intro/index.html",
    "revision": "7c550e3632fd14e68bbd2f92fab5708d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b57096f84f8ec006d3b64ddd592293be"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "a146caabd4b070ef11838aa919bb720a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "da38a618847428578c303882c7604721"
  },
  {
    "url": "software/index.html",
    "revision": "bbb8da877b52603320b982fa0bd66d7d"
  },
  {
    "url": "test/index.html",
    "revision": "7259fc9490d811091317cd3661a53158"
  },
  {
    "url": "use cases/index.html",
    "revision": "5a0c4c6d04c1ea16f0f3d4533298d35f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
