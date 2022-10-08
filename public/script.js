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

let btnGroup = document.getElementById("ukuran-group");
let btnChild = btnGroup.getElementsByClassName("btn-ukuran");

for (let i = 0; i < btnChild.length; i++) {
  btnChild[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("btn-ukuran-active");
    current[0].className = current[0].className.replace(" btn-ukuran-active", "");
    this.className += " btn-ukuran-active";
  });
}

function sortData(value){
  const listCars = document.getElementById("container-car")
  let newdata = JSON.parse(datacar)
  while (listCars.hasChildNodes()) {
    listCars.removeChild(listCars.firstChild);
  }

  if(value.value == "all"){
    newdata.forEach(car => {
        const node = document.createElement("div");
        node.className = "col-md-4";
        node.innerHTML = `<div class="modal fade" id="delete-modal${car.id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" style="width: 380px;">
            <div class="modal-body text-center">
              <form id="modals${car.id}" action="/cars/web/?_method=DELETE" method="post">
              <input type="text" id="id" name="id" value="${car.id}" hidden>
              </form>
              <img src="/icons/img-delete.png" alt="">
              <div class="mt-3" style="font-size: 18;font-weight:700">
                <a>Menghapus Data Mobil</a>
              </div>
              <div class="text-center mt-3" style="font-size: 14px;">
                <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
              </div>
            </div>
            <div class="modal-footer mx-auto border-0">
              <button type="submit" form="modals${car.id}" class="btn btn-outline-primary btn1" style="background-color: white;font-size: 14px;font-weight:700;width: 87px;">Ya</button>
              <button type="button" class="btn btn-outline-primary btn1" data-bs-dismiss="modal" style="background-color: white;font-size: 14px;font-weight:700;width: 87px;">Tidak</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="card shadow-sm" style="padding: 20px;border-radius: 8px;width: 300px">
          <img src="${car.image}" class="card-img-top mx-auto" style="width: 270px;height: 160px">
          <div class="card-body p-0 mt-3">
            <h6 class="card-title" style="font-weight: 400;">${car.nama.charAt(0).toUpperCase() + car.nama.slice(1)}</h6>
            <a class="text-weight-bold mt-3" style="text-decoration: none;color: black;font-size: 16px;font-weight: 700">Rp ${ car.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") } / hari</a>
            <div class="mt-3">
              <a style="font-size: 14px;"><img src="/icons/fi_clock.png" class="icon-cars"> Updated at ${moment(car.updatedAt).format('D MMM YYYY, hh:mm')}</a>
            </div>
          </div>
          <div class="card-footer p-0 mt-3 bg-white text-center d-flex" style="border-top: none">
            <a id="delete" class="btn btn-danger btn-block float-left col-md-6" data-bs-toggle="modal" data-bs-target="#delete-modal${car.id}" type="button" style="border-color: #FA2C5A;background-color: white;color: #FA2C5A;margin-right: 5px;"><img src="/icons/fi_trash-2.png"> Delete</a>
            <a href="/edit-cars/${car.id}" id="edit" class="btn btn-success btn-block float-right col-md-6" type="button" style="background-color: #5CB85F;border-color: #5CB85F;margin-left: 5px;"><img src="/icons/fi_edit.png"> Edit</a>
          </div>
        </div>    
      </div>`
        listCars.appendChild(node);
    });
  }else{
    newdata.filter(a =>{return a.ukuran == value.value}).forEach(car => {
      const node = document.createElement("div");
      node.className = "col-md-4";
      node.innerHTML = `<div class="modal fade" id="delete-modal${car.id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="width: 380px;">
          <div class="modal-body text-center">
            <form id="modals${car.id}" action="/cars/web/?_method=DELETE" method="post">
            <input type="text" id="id" name="id" value="${car.id}" hidden>
            </form>
            <img src="/icons/img-delete.png" alt="">
            <div class="mt-3" style="font-size: 18;font-weight:700">
              <a>Menghapus Data Mobil</a>
            </div>
            <div class="text-center mt-3" style="font-size: 14px;">
              <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
            </div>
          </div>
          <div class="modal-footer mx-auto border-0">
            <button type="submit" form="modals${car.id}" class="btn btn-outline-primary btn1" style="background-color: white;font-size: 14px;font-weight:700;width: 87px;">Ya</button>
            <button type="button" class="btn btn-outline-primary btn1" data-bs-dismiss="modal" style="background-color: white;font-size: 14px;font-weight:700;width: 87px;">Tidak</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div class="card shadow-sm" style="padding: 20px;border-radius: 8px;width: 300px">
        <img src="${car.image}" class="card-img-top mx-auto" style="width: 270px;height: 160px">
        <div class="card-body p-0 mt-3">
          <h6 class="card-title" style="font-weight: 400;">${car.nama.charAt(0).toUpperCase() + car.nama.slice(1)}</h6>
          <a class="text-weight-bold mt-3" style="text-decoration: none;color: black;font-size: 16px;font-weight: 700">Rp ${ car.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") } / hari</a>
          <div class="mt-3">
            <a style="font-size: 14px;"><img src="/icons/fi_clock.png" class="icon-cars"> Updated at ${moment(car.updatedAt).format('D MMM YYYY, hh:mm')}</a>
          </div>
        </div>
        <div class="card-footer p-0 mt-3 bg-white text-center d-flex" style="border-top: none">
          <a id="delete" class="btn btn-danger btn-block float-left col-md-6" data-bs-toggle="modal" data-bs-target="#delete-modal${car.id}" type="button" style="border-color: #FA2C5A;background-color: white;color: #FA2C5A;margin-right: 5px;"><img src="/icons/fi_trash-2.png"> Delete</a>
          <a href="/edit-cars/${car.id}" id="edit" class="btn btn-success btn-block float-right col-md-6" type="button" style="background-color: #5CB85F;border-color: #5CB85F;margin-left: 5px;"><img src="/icons/fi_edit.png"> Edit</a>
        </div>
      </div>    
    </div>`
      listCars.appendChild(node);
  });
  }
}
