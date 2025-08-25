import events from "@patternslib/patternslib/src/core/events";
import Pattern from "./leaflet";

describe("pat-leaflet", () => {
    afterEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `<div class="pat-leaflet" />`;
        const el = document.querySelector(".pat-leaflet");

        const instance = new Pattern(el);
        await events.await_pattern_init(instance);

        expect(document.querySelector(".pat-leaflet.leaflet-container")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-pane")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-in")).toBeTruthy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-out")).toBeTruthy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-fullscreen")).toBeTruthy(); // prettier-ignore
    });

    it("minimal configuration", async () => {
        const coords = {
            lat: 47.33325135,
            lng: 9.6458777466926851,
        };
        document.body.innerHTML = `<div class="pat-leaflet" data-pat-leaflet='{
            "fullscreencontrol": false,
            "locatecontrol": false,
            "zoomcontrol": false,
            "geosearch": false,
            "latitude": ${coords.lat},
            "longitude": ${coords.lng}
        }' />`;
        const el = document.querySelector(".pat-leaflet");

        const instance = new Pattern(el);
        await events.await_pattern_init(instance);

        expect(document.querySelector(".pat-leaflet.leaflet-container")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-pane")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-in")).toBeFalsy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-out")).toBeFalsy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-fullscreen")).toBeFalsy(); // prettier-ignore

        // check correct position
        expect(el["pattern-leaflet"].options.latitude).toBe(coords.lat);
        expect(el["pattern-leaflet"].options.longitude).toBe(coords.lng);
    });

    it("load remote geojson", async () => {
        const coords = {
            lat: 47.33325135,
            lng: 9.6458777466926851,
        };
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        type: "FeatureCollection",
                        features: [
                            {
                                type: "Feature",
                                properties: {
                                    popup: "<h6>Location</h6>",
                                    color: "red",
                                },
                                geometry: {
                                    type: "Point",
                                    coordinates: [coords.lng, coords.lat],
                                },
                            },
                        ],
                    }),
            }),
        );

        document.body.innerHTML = `<div class="pat-leaflet" data-pat-leaflet='{
            "fullscreencontrol": false,
            "locatecontrol": false,
            "zoomcontrol": false,
            "geosearch": false,
            "geojson_ajaxurl": "http://test.url/geodata.json"
        }' />`;
        const el = document.querySelector(".pat-leaflet");

        const instance = new Pattern(el);
        await events.await_pattern_init(instance);

        expect(document.querySelector(".pat-leaflet.leaflet-container")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-pane")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-in")).toBeFalsy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-out")).toBeFalsy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-control-zoom-fullscreen")).toBeFalsy(); // prettier-ignore
        expect(document.querySelector(".pat-leaflet .leaflet-marker-pane")).toBeTruthy();
        expect(document.querySelector(".pat-leaflet .leaflet-popup-pane")).toBeTruthy();
    });
});
