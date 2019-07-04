"use strict";
(function(){
    class Bicycle{
        constructor(){
            this.speed = 0;
        }
        applyBrake(x) {
            this.speed -= x;
            if (this.speed < 0){
                this.speed = 0;
            }
        }
        speedUp(y) {
            this.speed += y;
        }
    }
    class MountainBike extends Bicycle {
        constructor(){
            super();
            this.gear = 1;
        }
        setGear(x){
            this.gear = x;
        }
    }
    var bike = new Bicycle();
    var mountainBike = new MountainBike();
    console.log("Bicycle speed: " + bike.speed);
    bike.speedUp(10);

    console.log("Bicycle increased bike.speedUp(10) : " + bike.speed);
    bike.applyBrake(5);

    console.log("Bicycle decreased the current speed bike.applyBrake(5): " + bike.speed);
    bike.applyBrake(3);
    console.log("Bicycle decreased the current speed bike.applyBrake(3): " + bike.speed);

    console.log("Mountain bike gear: " + mountainBike.gear);
    mountainBike.setGear(40);

    console.log("Mountain bike set gear to setGear(40): " + mountainBike.gear);
    console.log("Mountain bike the current speed 0: " + mountainBike.speed);
    mountainBike.speedUp(20);

    console.log("Mountain bike increased speed speedUp(20): " + mountainBike.speed);
    mountainBike.applyBrake(10);
    console.log("Mountain bike decreased speed to applyBrake(10): " + mountainBike.speed);
})();