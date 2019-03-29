function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var nswtrainlinkManager =
/*#__PURE__*/
function () {
  function nswtrainlinkManager(footprintCore, settingsProvider) {
    _classCallCheck(this, nswtrainlinkManager);

    this.footprintCore = footprintCore;
    this.settingsProvider = settingsProvider;
    this.subtree = true;
    this.MODE = ["nswtrainlink"];
    this.dataSource = "australia"; //select one of the emission information sources from trainEmissions.json

    this.stations = {
      arrive: "",
      depart: ""
    };
    this.validator = new TrainsValidator("nswtrainlink");
    this.footprintCore.storeDataSource(this.dataSource);
    this.footprintCore.storeTrainSpeed("australia");
  }

  _createClass(nswtrainlinkManager, [{
    key: "setStyle",
    value: function setStyle(emission) {
      emission.style.fontSize = "x-small";
      emission.style.padding = "0";
      return emission;
    }
  }, {
    key: "insertInDom",
    value: function insertInDom(emission, element) {
      element = this.validator.querySelector("td:nth-child(3)", element);
      emission = this.setStyle(emission);
      console.log(emission);

      if (element.getElementsByClassName("carbon").length === 0) {
        element.appendChild(emission);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (document.querySelectorAll(".tableSeparatorLine").length === 0) return;
      this.validator.querySelectorAll(".tableSeparatorLine").forEach(function (row) {
        if (row.getElementsByClassName("carbon").length != 0) return;
        var trainName = trainSpeedData["nswtrainlink"] ? "nswtrainlink" : "average";
        var trainDurationArray = this.validator.querySelector("td:nth-child(4) .tdPad", row).textContent.trim().split(" ");
        var trainDuration = parseInt(trainDurationArray[0], 10) + parseInt(trainDurationArray[1], 10) / 60;
        debugger;
        distanceBetween = trainSpeedData[trainName] * trainDuration;
        this.insertInDom(this.footprintCore.getEmission([this.MODE]), row); //There is only 1 type of train
      });
    }
  }]);

  return nswtrainlinkManager;
}();

var WebsiteManager = nswtrainlinkManager;