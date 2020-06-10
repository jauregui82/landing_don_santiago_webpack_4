import swal from 'sweetalert';
import { __elem, __elemId } from "../helpers";
import { swiperItems } from "../modules/swiper";
import Axios from 'axios';
var span = document.createElement("span");


const slider = () => {
  let elem_slider = __elem('#slider');

  swiperItems(elem_slider)
}

const validate = () => {
  let name = __elem('input[name=name]');
  let email = __elem('input[name=email]');
  let date = __elem('input[name=date]');
  let result = true;

  if (name.value.trim().length == 0) {
    name.style.border = "solid 2px #ff0000";
    name.nextElementSibling.classList.add('error');
    result = false;
  }
  else {
    name.nextElementSibling.classList.remove('error');
    name.style.border = " solid 2px #01864D";
  }

  if (email.value.trim().length == 0) {
    email.style.border = "solid 2px #ff0000";
    email.nextElementSibling.classList.add('error');
    result = false;
  }
  else {
    email.nextElementSibling.classList.remove('error');
    email.style.border = " solid 2px #01864D";
  }

  if (date.value.trim().length == 0) {
    date.style.border = "solid 2px #ff0000";
    date.nextElementSibling.classList.add('error');
    result = false;
  }
  else {
    date.nextElementSibling.classList.remove('error');
    date.style.border = " solid 2px #01864D";
  }
  return result;
}

const keyUp = (elem) => {

  if (elem.value.trim().length == 0) {
    elem.style.border = "solid 2px #ff0000";
    elem.nextElementSibling.classList.add('error');
  }
  else {
    elem.nextElementSibling.classList.remove('error');
    elem.style.border = " solid 2px #01864D";
  }
}

const change = (elem) => {
  elem.addEventListener('change', (e) => {
    e.preventDefault();
    if (elem.value.trim().length == 0) {
      elem.style.border = "solid 2px #ff0000";
      elem.nextElementSibling.classList.add('error');
    }
    else {
      elem.nextElementSibling.classList.remove('error');
      elem.style.border = " solid 2px #01864D";
    }
  });
}


const sendFomr = () => {
  let form = __elemId('formSuscribe');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validate()) {
      // console.log('paso la validacion');
      // let data_form = new FormData(form);
      // let obj_form = serialize(form, { hash: true });

      var data_form = new FormData(form);

      Axios.post('http://localhost/lp_don_santiago/app/add.php', data_form)
        // axios.post('http://inoutlet.pe/deporte/app/add.php', data_form)
        .then(function (response) {
          // handle success
          // console.log(response);
          let responseData = response.data;
          if (responseData.result) {
            // console.log(response);

            document.forms['formSuscribe'].reset();

            span.innerHTML = response.data.message;

            swal({
              content: span,
              icon: "success"
            });

          } else {
            // stateControlForm(form_subscribe, btn_submit);
            span.innerHTML = "No se pudo agragar";
            swal({
              content: span,
              icon: "error"
            });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }
  });

}
const init = () => {
  // slider();
  sendFomr();
  window.keyUp = keyUp;
  window.change = change;
}
export { init, slider }
