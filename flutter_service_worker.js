'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "330d9af4d59114f84793ddef64010db1",
"index.html": "389821bd8d2f0db9584e8a0651116a08",
"/": "389821bd8d2f0db9584e8a0651116a08",
"icons/Icon-maskable-512.png": "eb656963a16234949ecf7e4ceba4160d",
"icons/Icon-maskable-192.png": "cf01fdb9db99963216b80072c54ef5ba",
"icons/Icon-192.png": "cf01fdb9db99963216b80072c54ef5ba",
"icons/Icon-512.png": "eb656963a16234949ecf7e4ceba4160d",
"main.dart.js": "49875fccbb01a573ea0126f64c9d48e9",
"favicon.png": "a5bc81ca4dc46bbaecbf8bcf13a47483",
"flutter_bootstrap.js": "29294b61aa5084a014a34c9089b45ec5",
"manifest.json": "3339b1d32cfc8f2bb9d4e2f98ec02052",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/logotype_lightmode.png": "c0963e59da7cb6e864d34d01a59af55e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/NOTICES": "8deaa4fbb20bba42aaedcf25ce400508",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/vocabulary.json": "704332bd327f40e8c3f34bfbd8d3062a",
"assets/logotype_darkmode.png": "4c3573e28e5ae524d906d47b75810b31",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "db01e04129a0e3a6f57bcc58e602417e",
".git/logs/HEAD": "c0c2d3e65de7d357be1866caf62a7707",
".git/logs/refs/remotes/origin/master": "ab8cac8b4e269acba978f215f441f6f2",
".git/logs/refs/heads/master": "c0c2d3e65de7d357be1866caf62a7707",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/config": "6e7633bed3dc6842277e6485ef6b9c89",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/a8/8851865a5c30074e370fbd70aae1ddd7c9e392": "a040b976c8c73fe0bb3e5fe1ff4a61cd",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/6d/094fe2fd967b07d4aa70f46afea20e21829ca0": "d967c6fa979835f64e5af64e0dc2e2ac",
".git/objects/10/24adaa6ffec5bc0ca2a2e54e42ca2999059425": "70a4c74972f1d46d34d4b9602ce181c4",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/9f/a3c7543708dcb7f5a6c13a6a72af7d050efc04": "5ff6d5565bd557d62d004af4f60ba6ce",
".git/objects/84/6b02f585b685e7466e5470127f6aef4b1f5ee6": "9dc7698afacad5ff4046faec0acb8105",
".git/objects/fa/fba9959d1d0c064a6a3717044eed63b7f4b7b0": "d6987519ae6b2f7a058732a50e91abed",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/729ce72066cbede3049a62ae99490874fe579f": "ad06992f1b35a8315717e1cd0be53c90",
".git/objects/30/cd97533d1007616243cfe480e1dd2b3a21a64f": "d92b55f679f19aca8e2b4ad1449ee56c",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0d/9f3d0dfbf7e5a346e004f89dcae71e63b2e4e5": "f5728849e3a718d131eb83f897cf61cd",
".git/objects/7b/750530804bed90d63e81c28f551ac34e1d9026": "20d13da142e5dc56f50a18415afc227f",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/58/daa95d8f8b467ffe6a415b750b75fdf9d3c80b": "709107391a6f54dc9317f3b9148d71dc",
".git/objects/a1/5e51c81d319eb8187cacd2884a48862b196450": "70acaa7492df4f531413d7ad885d9512",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4c/97d6b75cf2169204cf802e51576ef8f3cf3345": "1b907dd7b53cbee7a9d9415f1a4e4230",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/7c/8e512e6f5540f20b4b69d511b1bcc3c2b3285e": "c0be016c64d7aa2c8de795c9bd893511",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/7a5810d8a7061c2c872533ecbb7da8a8abf89e": "eaa90bc1e30b2dacc68b6f170f10993d",
".git/objects/47/d897d06941d889425cecfe6d8c938a59549521": "5096edbb7c2b4a98f3ec3df2f3e68438",
".git/objects/47/6bb0744e7b720495abbb8793bfa933ffe1a458": "2d1363beb33eec52fef317c79e33e737",
".git/objects/5b/69649613835140418c312f138d5e13d3f0d1fb": "5b335b9cfa986da14b48b301edebbde9",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/c6/f3a44e3a50378ee951624293cebca13d6c9517": "e700b0ad194798ef7b2795e8b5c16167",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/38c707d7feaae04b64d0670e7f77077d7f3b98": "d63ec5737891dbf45d4e21cffc185a3d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/91/30b16e16f120f40409891b17f6fccdcd4d0547": "89e50c278579d903d7b7c6380ad379ca",
".git/objects/96/a50f8cd44d4cb4b797939732fe96ff3daf8317": "03965c2b6d6339f02d757723b15d6526",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/43/f6ddc31d18b98ccee45edc00e544eff879910a": "e46d9122d1bb09734a604368c01af0e0",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/b0034c427dde0f3f46c470b6fb03eac0480d11": "04cd97fdf15a9279f2d5af0a21e3e7ac",
".git/objects/29/905a22a8956587e670bfee18e839452a475215": "8c868512e613afd1bf113df059ccd087",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/22/3899caf9f3361502629308c85c122357bb9452": "8c0983f9eafa3c3537575bc9d77bcf90",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/a4/81d2de2668ce9cdcd56ec0163c25b638ec1b74": "f60b62a5c0dee24d472383280cffb946",
".git/objects/25/428e6c175f18bf8c9501cf9bbacd1fc4464ad1": "e78b10d99bac37d5172b426c17e85948",
".git/objects/5c/e7c8b6ee80ed7478eeb86faed7281d40d6bff0": "2991c51086acc92b906104f692720fa2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/0f/d7a85352b7b07309e5854730b060e3f0d9b75f": "0c1ed4abf476533c4ad62c515eed3afa",
".git/objects/50/bda3659c3f9c9fbf4cada9e7583f7adbcc1d21": "70f97504553e4030dad9e52d69eaff61",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/565910e9e93b766920843177a9d4d694396fbe": "9d6b8470686c408087c4c9b8340eabad",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/d9/43f08e1c7a0a87a6f9a517dc396edb7e1e9a9b": "ee2cfb86a1b03a7dd226d97ddf97da79",
".git/COMMIT_EDITMSG": "81c1609efa3374bde0725942c129d056",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/master": "75e1ed53f2c14119980625883731156d",
".git/refs/heads/master": "75e1ed53f2c14119980625883731156d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
