var APP_DATA = {
  "scenes": [
    {
      "id": "0-ap204174-panorama",
      "name": "AP204174-Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.056624771849858035,
          "pitch": -0.05496694243019462,
          "rotation": 6.283185307179586,
          "target": "1-ap204199-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ap204199-panorama",
      "name": "AP204199-Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03777225737557188,
          "pitch": 0.09880572196009219,
          "rotation": 0,
          "target": "2-ap204224-panorama"
        },
        {
          "yaw": 3.011946196805697,
          "pitch": 0.5311081099044301,
          "rotation": 0,
          "target": "0-ap204174-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ap204224-panorama",
      "name": "AP204224-Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.1411067631124965,
        "pitch": 0.011729488893147177,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 3.0580804174862557,
          "pitch": 0.37160940176514146,
          "rotation": 0,
          "target": "1-ap204199-panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Istituto Ottico Sardo, Via manno 63, Cagliari",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
