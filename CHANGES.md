# Changelog



## [2.2.0](https://github.com/patternslib/pat-leaflet/compare/2.1.1...2.2.0) (2024-08-27)


### Features


* Add option "useCluster" for switching marker cluster on or off. ([57d1242](https://github.com/patternslib/pat-leaflet/commit/57d124212504aee9e77399aaf361dcd0d0d514f7))



### Bug Fixes


* Stamen Toner has moved to Stadia Maps payed service. ([9849b14](https://github.com/patternslib/pat-leaflet/commit/9849b14c190f2f7b5f46cb30c8b22c19cec89aed))



### Maintenance


* dependency upgrades ([67e11f0](https://github.com/patternslib/pat-leaflet/commit/67e11f05f6e6f136bead72594ca9b591965882ee))


* Explicitly set the module federation bundle name for clarity. ([2f18a99](https://github.com/patternslib/pat-leaflet/commit/2f18a996546e21f599af17f44fb4949aa3bbd40c))


* Update documentation. ([24ac976](https://github.com/patternslib/pat-leaflet/commit/24ac976ce15f36d53f1e0d83bd54f90bd485e53c))


* Upgrade dependencies. ([2aee74c](https://github.com/patternslib/pat-leaflet/commit/2aee74c5d22a1d114d4db2640362fe4f57b76e0d))


* Use new style class options. ([a157701](https://github.com/patternslib/pat-leaflet/commit/a157701c67c07d1f7375b2fe74da4014c17d653a))


## [2.1.1](https://github.com/patternslib/pat-leaflet/compare/2.1.0...2.1.1) (2023-02-14)


### Features


* add options references ([6aa12b3](https://github.com/patternslib/pat-leaflet/commit/6aa12b35cb842d7bd72eb900640b94327081bc90))


### Bug Fixes


* zoom level with markers ([dd58ddc](https://github.com/patternslib/pat-leaflet/commit/dd58ddc7f697bbc5bb116d65276077cac42c3761))


### Maintenance


* Upgrade dependencies. ([ddad0ab](https://github.com/patternslib/pat-leaflet/commit/ddad0ab95721d6ecabd8552bc4925e3431895208))


## [2.1.0](https://github.com/patternslib/pat-leaflet/compare/2.0.0...2.1.0) (2022-12-23)


### Breaking Changes


* parse `data-geojson` attribute always as JSON object and implement new option `geojson_ajaxurl` for remote geojson data ([f0eaf4f](https://github.com/patternslib/pat-leaflet/commit/f0eaf4f320e7c810f2efc9373f47d599449356c5))


### Maintenance


* Change to class based pattern. ([6a10fb0](https://github.com/patternslib/pat-leaflet/commit/6a10fb0f8ba5b08d75a207e1b8d0ccd3a6f4f8b2))

* Include dist/ and src/ directories in the npm package. ([613fe86](https://github.com/patternslib/pat-leaflet/commit/613fe869f4c12bd96cd6579d5d00bce4b08998b4))This includes the compiled bundle in the npm package and makes it
available via:

https://cdn.jsdelivr.net/npm/@patternslib/pat-leaflet@2.1.0/dist/bundle.min.js
and
https://unpkg.com/@patternslib/pat-leaflet@2.1.0/dist/bundle.min.js

* Refine browserlist with official recommendation. ([9520efe](https://github.com/patternslib/pat-leaflet/commit/9520efeb7f0b350b87c92b0b9545febe1fdf2b5f))

* Set map height to minimum 400 pixel, so that is easier to override. ([442bde5](https://github.com/patternslib/pat-leaflet/commit/442bde54dd8077bf9da0d4db0388b8cd31ec191a))

* Upgrade dependencies. ([ce5b3a3](https://github.com/patternslib/pat-leaflet/commit/ce5b3a376ac7681c96f92467f163da94dd5073b1))


## [2.0.0](https://github.com/patternslib/pat-leaflet/compare/1.4.0...2.0.0) (2022-09-27)


### Breaking Changes


* Upgrade Pattern to ES6 based Patternslib. ([1f073b6](https://github.com/patternslib/pat-leaflet/commit/1f073b687b67080586749732b2e07dba1ffce618))


### Maintenance


* Add infrastructure files. ([9780063](https://github.com/patternslib/pat-leaflet/commit/978006397336c6c8573a9514ed4f629eed464f1e))

* Modernize - Reduce dependency on jQuery. ([81fd1a0](https://github.com/patternslib/pat-leaflet/commit/81fd1a03d691d74528d9b265d95a69bca87a9ce7))

* Modernize - replace ``self`` with ``this``. ([40d2bcd](https://github.com/patternslib/pat-leaflet/commit/40d2bcdc922a47cade23a2095e94b01733533c44))

* Modernize - replace $.ajax with fetch. ([4f89206](https://github.com/patternslib/pat-leaflet/commit/4f8920650f4406496a9b9c89aaff7d7475f6292b))

* Modernize - Use const/let instead of var. ([6471b64](https://github.com/patternslib/pat-leaflet/commit/6471b64d18b5c852363af57451a9a9cc9369af9a))

* Modernize - Use dynamic imports and import only what is needed. ([d26ded3](https://github.com/patternslib/pat-leaflet/commit/d26ded3ad8cd84797c93eae55f828c04779a5014))

* Modernize - Use Patternslib code style functions. ([a4fae68](https://github.com/patternslib/pat-leaflet/commit/a4fae68e379b37687293ee59294a1a9c281236f6))


## **1.4.0**

* Fix a problem with ``map_layers`` option when it's a list of ids and no title was generated for the baseLayers object.
  [thet]

* Add some nicer, opinionated styles for the popup close button.
  [thet]

* Add option to add some padding to ``fitBounds`` with a default of ``20``.
  This brings search result on corners more in the map.
  [thet]

* Add ``extraClasses`` property to marker icons creation.
  This allows for extra classes like a marker uuid to work with.
  [thet]

* Add feature to load external ``geoJSON`` data via AJAX
  [petschki]


## **1.3.0**

* Add ``maxClusterRadius`` option for the marker cluster plugin. Default is 80 (pixels).
  [thet]

* Add ``color`` options to feature properties to explicitly set the marker color.
  ``color`` must be one of the predefined colors ``blue``, ``red``, ``darkred``, ``orange``, ``green``, ``darkgreen``, ``blue``, ``purple``, ``darkpurple``, ``cadetblue`` from https://github.com/lvoogdt/Leaflet.awesome-markers
  [thet]

* Add ``create_marker`` factory function instead of predefining "awesome marker" instances.
  [thet]


## **1.2.0**

* Fire ``moveend`` and ``zoomend`` on the pattern root element.
  [thet]


## **1.1.0**

* Allow optional arguments in pat-leaflet for tile providers that require registration (Fix https://github.com/plone/plone.patternslib/issues/24)
  [pbauer]

* Update bower dependencies to last working versions.
  [thet]


## **1.0.0 (2017-02-24)**

* Initial release.
  [thet]


## **0.0.1 (2016-01-11)**

* Start of everything.
  [thet]
