$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



new Vue({

    el: "#app",

    data: {
        name: "",
        family: "",
        email: "",
        text: "",
        txt_name: "",
        txt_family: "",
        txt_email: "",
    },
    computed: {
        count() {
            if (this.name == "" || this.family == "" || this.email == "" || this.text == "") {
                let btn = this.$refs.btn;
                btn.disabled = true;
            } else {
                let btn = this.$refs.btn;
                btn.disabled = false;
            }
        }
    },
    watch: {
        name() {
            this.count;
            if (this.name != "") {
                this.txt_name = "نام شما : ";
            } else {
                this.txt_name = "";
            }
        },
        family() {
            this.count;
            if (this.family != "") {
                this.txt_family = "نام خانوادگی شما : ";
            } else {
                this.txt_family = "";
            }
        },
        email() {
            this.count;
            if (this.email != "") {
                this.txt_email = "ایمیل شما : ";
            } else {
                this.txt_email = "";
            }
        },
        text() {
            this.count;
        },
    },
});



var modal = document.getElementById("myModal");

var tagA = document.getElementById("myA");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
tagA.onclick = function() {
    modal.style.display = "block";
    modalImg.src = 'images/front.jpg';
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}