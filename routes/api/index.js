var router = require('express').Router();



router.get('/nav2/api/v2/graph/myTrips', function(req, res, next) {
  
  return res.json({
    "data": {
      "userBookingsByPassenger": [
        {
          "recordLocator": "P2SZNI",
          "bookingStatus": "Confirmed",
          "firstName": "sachin",
          "lastName": "gupta",
          "segments": [
            {
              "journeyIndex": 0,
              "identifier": {
                "carrierCode": "MK",
                "identifier": "8091",
                "opSuffix": null
              },
              "designator": {
                "arrival": "2022-04-07T10:00:00",
                "departure": "2022-04-07T09:00:00",
                "destination": "LHR",
                "origin": "AMS"
              },
              "legs": [
                {
                  "status": "Normal",
                  "liftStatus": "Default",
                  "unitDesignator": null,
                  "designator": {
                    "arrival": "2022-04-07T10:00:00",
                    "departure": "2022-04-07T09:00:00",
                    "destination": "LHR",
                    "origin": "AMS"
                  },
                  "arrivalTimeUtc": "2022-04-07T09:00:00Z",
                  "departureTimeUtc": "2022-04-07T07:00:00Z"
                }
              ]
            }
          ]
        },
        {
          "recordLocator": "Z8QGUW",
          "bookingStatus": "Confirmed",
          "firstName": "sachin",
          "lastName": "gupta",
          "segments": [
            {
              "journeyIndex": 0,
              "identifier": {
                "carrierCode": "MK",
                "identifier": "8093",
                "opSuffix": null
              },
              "designator": {
                "arrival": "2022-04-07T14:00:00",
                "departure": "2022-04-07T13:00:00",
                "destination": "LHR",
                "origin": "AMS"
              },
              "legs": [
                {
                  "status": "Normal",
                  "liftStatus": "Default",
                  "unitDesignator": null,
                  "designator": {
                    "arrival": "2022-04-07T14:00:00",
                    "departure": "2022-04-07T13:00:00",
                    "destination": "LHR",
                    "origin": "AMS"
                  },
                  "arrivalTimeUtc": "2022-04-07T13:00:00Z",
                  "departureTimeUtc": "2022-04-07T11:00:00Z"
                }
              ]
            },
            {
              "journeyIndex": 1,
              "identifier": {
                "carrierCode": "MK",
                "identifier": "8090",
                "opSuffix": null
              },
              "designator": {
                "arrival": "2022-05-16T12:00:00",
                "departure": "2022-05-16T09:00:00",
                "destination": "AMS",
                "origin": "LHR"
              },
              "legs": [
                {
                  "status": "Normal",
                  "liftStatus": "Default",
                  "unitDesignator": null,
                  "designator": {
                    "arrival": "2022-05-16T12:00:00",
                    "departure": "2022-05-16T09:00:00",
                    "destination": "AMS",
                    "origin": "LHR"
                  },
                  "arrivalTimeUtc": "2022-05-16T10:00:00Z",
                  "departureTimeUtc": "2022-05-16T08:00:00Z"
                }
              ]
            }
          ]
        }
      ]
    }
  });
});

router.post('/nav2/api/v2/graph/ssrAvailability', function(req, res, next) {
  return res.json({"data":{"ssrAvailabilityv2":{"journeySsrs":[{"journeyKey":"TUt_ODA5MX4gfn5BTVN_MDQvMDcvMjAyMiAwOTowMH5MSFJ_MDQvMDcvMjAyMiAxMDowMH5_","ssrs":[{"available":null,"feeCode":null,"inventoryControlled":false,"limitPerPassenger":1,"name":"Wheelchair","nest":null,"ssrCode":"WCHR","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MSFNQ0ZCUkZRLSFXQ0hSISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":3,"feeCode":"PETC","inventoryControlled":true,"limitPerPassenger":1,"name":"Pet In Cabin","nest":"PETC","ssrCode":"PETC","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":32.09,"ssrKey":"MSFNQ0ZCUkZRLSFQRVRDISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"PERS","inventoryControlled":false,"limitPerPassenger":1,"name":"Personal Item","nest":null,"ssrCode":"PERS","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MSFNQ0ZCUkZRLSFQRVJTISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":5,"feeCode":null,"inventoryControlled":true,"limitPerPassenger":1,"name":"Meet and Assist","nest":"UMNR","ssrCode":"MAAS","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MSFNQ0ZCUkZRLSFNQUFTISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":1,"name":"Low Calerie Meal","nest":null,"ssrCode":"LCML","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MSFNQ0ZCUkZRLSFMQ01MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":null,"inventoryControlled":false,"limitPerPassenger":1,"name":"Deaf","nest":null,"ssrCode":"DEAF","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MSFNQ0ZCUkZRLSFERUFGISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"COBF","inventoryControlled":false,"limitPerPassenger":1,"name":"Carry on Bag","nest":null,"ssrCode":"COB1","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MSFNQ0ZCUkZRLSFDT0IxISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":null,"inventoryControlled":false,"limitPerPassenger":1,"name":"Blind","nest":null,"ssrCode":"BLND","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MSFNQ0ZCUkZRLSFCTE5EISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"3BAG","inventoryControlled":false,"limitPerPassenger":1,"name":"Third Bag","nest":null,"ssrCode":"3BAG","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MSFNQ0ZCUkZRLSEzQkFHISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"2BAG","inventoryControlled":false,"limitPerPassenger":1,"name":"Second Bag","nest":null,"ssrCode":"2BAG","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":26.19,"ssrKey":"MSFNQ0ZCUkZRLSEyQkFHISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"1BAG","inventoryControlled":false,"limitPerPassenger":1,"name":"First Bag","nest":null,"ssrCode":"1BAG","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":26.67,"ssrKey":"MSFNQ0ZCUkZRLSExQkFHISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]}]}],"legSsrs":[{"legKey":"NjM3ODQ5MTg4MDAwMDAwMDAwIU1LITgwOTEhICFBTVMhTEhSITEyNDQ3NDY-","ssrs":[{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":1,"name":"Seafood meal","nest":null,"ssrCode":"SFML","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MiFNQ0ZCUkZRLSFTRk1MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":1,"name":"Standard Meal","nest":null,"ssrCode":"MEAL","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MiFNQ0ZCUkZRLSFNRUFMISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":0,"name":"Kosher Meal","nest":null,"ssrCode":"KSML","ssrType":"TravelLineMeal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MiFNQ0ZCUkZRLSFLU01MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":1,"name":"Gluten-Free Meal","nest":null,"ssrCode":"GFML","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MiFNQ0ZCUkZRLSFHRk1MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":3,"name":"Chicken Meal","nest":null,"ssrCode":"CKML","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MiFNQ0ZCUkZRLSFDS01MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"SNX","inventoryControlled":false,"limitPerPassenger":1,"name":"Pringles","nest":null,"ssrCode":"CHIP","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":1.28,"ssrKey":"MiFNQ0ZCUkZRLSFDSElQISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"SNX","inventoryControlled":false,"limitPerPassenger":1,"name":"Mars Bar","nest":null,"ssrCode":"CBR","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":1.28,"ssrKey":"MiFNQ0ZCUkZRLSFDQlIhIUxIUiFNSyE2Mzc4NDg4NjQwMDAwMDAwMDAhQU1TITgwOTEhIA--"}}]},{"available":null,"feeCode":"SNX","inventoryControlled":false,"limitPerPassenger":1,"name":"Bottle of Water","nest":null,"ssrCode":"BWAT","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":1.28,"ssrKey":"MiFNQ0ZCUkZRLSFCV0FUISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":1,"name":"Beef Meal","nest":null,"ssrCode":"BFML","ssrType":"Meal","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MiFNQ0ZCUkZRLSFCRk1MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]}]}],"segmentSsrs":[{"segmentKey":"TUt_ODA5MX4gfn5BTVN_MDQvMDcvMjAyMiAwOTowMH5MSFJ_MDQvMDcvMjAyMiAxMDowMH5_","ssrs":[{"available":null,"feeCode":null,"inventoryControlled":false,"limitPerPassenger":1,"name":"Wheelchair","nest":null,"ssrCode":"WCHR","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MCFNQ0ZCUkZRLSFXQ0hSISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":3,"feeCode":"PETC","inventoryControlled":true,"limitPerPassenger":1,"name":"Pet In Cabin","nest":"PETC","ssrCode":"PETC","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":32.09,"ssrKey":"MCFNQ0ZCUkZRLSFQRVRDISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"PERS","inventoryControlled":false,"limitPerPassenger":1,"name":"Personal Item","nest":null,"ssrCode":"PERS","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MCFNQ0ZCUkZRLSFQRVJTISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":5,"feeCode":null,"inventoryControlled":true,"limitPerPassenger":1,"name":"Meet and Assist","nest":"UMNR","ssrCode":"MAAS","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MCFNQ0ZCUkZRLSFNQUFTISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"MEAL","inventoryControlled":false,"limitPerPassenger":1,"name":"Low Calerie Meal","nest":null,"ssrCode":"LCML","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MCFNQ0ZCUkZRLSFMQ01MISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":null,"inventoryControlled":false,"limitPerPassenger":1,"name":"Deaf","nest":null,"ssrCode":"DEAF","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MCFNQ0ZCUkZRLSFERUFGISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"COBF","inventoryControlled":false,"limitPerPassenger":1,"name":"Carry on Bag","nest":null,"ssrCode":"COB1","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":16.37,"ssrKey":"MCFNQ0ZCUkZRLSFDT0IxISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":null,"inventoryControlled":false,"limitPerPassenger":1,"name":"Blind","nest":null,"ssrCode":"BLND","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MCFNQ0ZCUkZRLSFCTE5EISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"3BAG","inventoryControlled":false,"limitPerPassenger":1,"name":"Third Bag","nest":null,"ssrCode":"3BAG","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":0.0,"ssrKey":"MCFNQ0ZCUkZRLSEzQkFHISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"2BAG","inventoryControlled":false,"limitPerPassenger":1,"name":"Second Bag","nest":null,"ssrCode":"2BAG","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":26.19,"ssrKey":"MCFNQ0ZCUkZRLSEyQkFHISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]},{"available":null,"feeCode":"1BAG","inventoryControlled":false,"limitPerPassenger":1,"name":"First Bag","nest":null,"ssrCode":"1BAG","ssrType":"Standard","passengersAvailability":[{"passengerKey":"MCFBRFQ-","value":{"passengerKey":"MCFBRFQ-","price":26.67,"ssrKey":"MCFNQ0ZCUkZRLSExQkFHISFMSFIhTUshNjM3ODQ4ODY0MDAwMDAwMDAwIUFNUyE4MDkxISA-"}}]}]}]}}})
});

module.exports = router;