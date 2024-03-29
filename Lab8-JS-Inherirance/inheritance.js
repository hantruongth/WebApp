"use strict";
(function(){
    function createBicyclePrototye() {
        let speed = 0; 
        return {
            speed: function(){
                return speed;
            },
            applyBrake: function(x) {
                speed -= x;
                if (speed < 0){
                    speed = 0;
                }
            },
            speedUp: function(y) {
                speed += y;
            }
        }
    }
    function createMountainBikeProtoype(prototype) {
        let obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function(x){
            this.gear = x;
        }
        return obj;
    }
    function start() {
        let bicyclePrototype = createBicyclePrototye();
        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
        let bikeProto = Object.create(bicyclePrototype);
        let mountainBikeProto = Object.create(mountainBikePrototype);
        console.log("BikeProto Speed: " + bikeProto.speed());
        //
        bikeProto.speedUp(4);
        console.log("BikeProto.speedUp(4) : " + bikeProto.speed());
        //
        bikeProto.applyBrake(3);
        console.log("BikeProto.applyBrake(3): " + bikeProto.speed());
        //
        bikeProto.applyBrake(2);
        console.log("BikeProto.applyBrake(2): " + bikeProto.speed());
        //
        console.log("Bike has gear: " + mountainBikeProto.gear);
        mountainBikeProto.setGear(30);
        //
        console.log("SetGear(30): " + mountainBikeProto.gear);
        console.log("Speed 0: " + mountainBikeProto.speed());
        //
        mountainBikeProto.speedUp(40);
        console.log("SpeedUp(40): " + mountainBikeProto.speed());
        //
        mountainBikeProto.applyBrake(10);
        console.log("ApplyBrake(10): " + mountainBikeProto.speed());
    }
    start();
})();