const sendFomr = () => {
  let form = __elemId('formSuscribe');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('paso la validacion');

      span.innerHTML = `Suscrito con éxito`;

      swal({
        content: span,
        icon: "success"
      });

      swal({
        content: span,
        icon: "error"
      });


    }
  });

}

const send = () => {

  let form = __elemId('formSuscribe');

  // let btn_submit = document.querySelector('#btn_send');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // let data_form = new FormData(form);
    let obj_form = serialize(form, { hash: true });

    var data_form = serialize(form);

    axios.post('http://localhost/lp_don_santiago/app/add.php', data_form)
      // axios.post('http://inoutlet.pe/deporte/app/add.php', data_form)
      .then(function (response) {
        // handle success
        console.log(response);
        let responseData = response.data;
        if (responseData.result) {
          document.forms['formSuscribe'].reset();

          span.innerHTML = response.data.data.message;

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

  });

}

// const init=()=>{
//   send();
// }

export {
  send
}
