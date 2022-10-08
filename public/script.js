$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
});
function sidebarResize() {
        if ($(window).width() >= 768) {
            $("#wrapper").addClass("toggled");
        } else {
            $("#wrapper").removeClass("toggled");
        }
    }
    
    $(window).resize(sidebarResize);
    sidebarResize();
    $("#success-alert").hide();
    $("#delete-alert").hide();
    $("#file-alert").hide();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.get('status') == "sukses"){
        showAlert1();
    }if(urlParams.get('status') == "delet"){
        showAlert2();
    }if(urlParams.get('status') == "fileerr"){
        showAlert3();
    }
    
        function showAlert1() {
          $("#success-alert").fadeTo(1500, 500).slideUp(500, function() {
            $("#success-alert").slideUp(500);
          });
        };
        function showAlert2() {
          $("#delete-alert").fadeTo(1500, 500).slideUp(500, function() {
            $("#delete-alert").slideUp(500);
          });
        };
        function showAlert3() {
            $("#file-alert").fadeTo(1500, 500).slideUp(500, function() {
              $("#file-alert").slideUp(500);
            });
          };
