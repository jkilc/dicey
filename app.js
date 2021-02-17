$(document).ready(function () {

    class Die {
        constructor() {
            //  this.newDie()
            this.newDie = $('<div class="die"></div>')
            this.rollNum = Math.floor((Math.random() * 6) + 1);
            this.newDie.text(this.rollNum)
            this.roll()
            this.reRoll()
            this.remove()
            $('#diceCon').append(this.newDie)
        }

        newDie() {
            $('<div class="die"></div>').appendTo('#diceCon');
            this.roll()
        }

        roll() {
            this.newDie.text(this.rollNum);
        }

        reRoll() {
            this.newDie.click(() => {
                this.newDie.text(Math.floor((Math.random() * 6) + 1));
            });
        }

        remove() {
            this.newDie.dblclick(() => {
            this.newDie.remove()
            });
        }



    }
    

    $('#butGen').click(() => new Die());
    $('#rerollBut').click(function() {
        Die.this.newDie.text(Math.floor((Math.random() * 6) + 1));
        });

    // $("#butGen").click(function() {
    //         console.log("clicky");
    //         $('<div>hello</div>').appendTo('#diceCon');
    //     });

    // $('.butGen').click(() => {
    //     console.log('clickyclikc')
    // });


    
});

    // class Die {

    //     newDie() {
    //         $('<div class="die"></div>').appendTo('#diceCon');
    //         let dieBody  = document.getElementsByClassName("die")
    //         dieBody.innerHTML = Math.floor((Math.random() * 6) + 1);
    //     }

    // }


    // $("#butGen").click(Die.newDie());




    //    function newDie() {
    //         $('<div class="die"></div>').appendTo('#diceCon');
    //         let dieBody  = document.getElementsByClassName("die")
    //         let dieNum = dieBody.innerHTML = Math.floor((Math.random() * 6) + 1)
    //         console.log(dieNum)
    //     }
    //     $("#butGen").click(newDie);


    // $("#butGen").click(function() {
    //     $('<div class="die"></div>').appendTo('#diceCon');
    //     let dieBody  = document.getElementsByClassName("die")
    //     let dieNum = Math.floor((Math.random() * 6) + 1)
    //     dieBody.innerHTML = dieNum
    //     console.log(dieNum)
    // })



// $("#butGen").click(function() {
//     console.log("clicky");
//     $('<div>hello</div>').appendTo('#diceCon');
// });
