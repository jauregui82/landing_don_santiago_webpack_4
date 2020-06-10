
const modal = (e) => {

  if (e !== undefined) {
    let elem = e.target;
    // console.log(elem);

    let elem_trigger = elem;

    if (!elem_trigger.classList.contains("modal-trigger")) {
      elem_trigger = e.target.parentElement;
    }

    if (elem_trigger == null) return;

    if (elem_trigger.classList.contains("modal-trigger")) {
      e.preventDefault();
      let href = elem_trigger.getAttribute("href");
      let id_modal = href.split("#")[1];

      // console.log(id_modal);

      let modalOverlay = document.getElementById(id_modal);
      modalOverlay.classList.add('js-modal--show');
      document.body.classList.add('not-overflow');
    }

    if (elem.classList.contains("modal-close")) {
      // console.log('close');
      let modalOverlay = elem.parentElement.parentElement;
      modalOverlay.classList.remove('js-modal--show');
      document.body.classList.remove('not-overflow');
    }

    if (elem.classList.contains("modal-window")) {
      // console.log('close');
      elem.classList.remove('js-modal--show');
      document.body.classList.remove('not-overflow');
    }
  }
}

const modalCustom = (e, btn_trigger = "modal-trigger", callback) => {

  if (e !== undefined) {
    let elem = e.target;
    // console.log(elem);

    let elem_trigger = elem;

    if (!elem_trigger.classList.contains(btn_trigger)) {
      elem_trigger = e.target.parentElement;
    }

    if (elem_trigger.classList.contains(btn_trigger)) {
      e.preventDefault();
      let href = elem_trigger.getAttribute("href");
      let id_modal = href.split("#")[1];

      // console.log(id_modal);
      callback(e);

      let modalOverlay = document.getElementById(id_modal);
      modalOverlay.classList.add('js-modal--show');
      document.body.classList.add('not-overflow');
    }

    if (elem.classList.contains("modal-close")) {
      // console.log('close');
      let modalOverlay = elem.parentElement.parentElement;
      modalOverlay.classList.remove('js-modal--show');
      document.body.classList.remove('not-overflow');
    }

    if (elem.classList.contains("modal-window")) {
      // console.log('close');
      elem.classList.remove('js-modal--show');
      document.body.classList.remove('not-overflow');
    }
  }
}

const dropdown = (e) => {

  if (e !== undefined) {
    let elem = e.target;
    // console.log(elem);

    if (elem.classList.contains('dropbtn')) {
      let next_elem = elem.nextElementSibling;

      if (next_elem.classList.contains('dropdown-content')) {
        next_elem.classList.toggle('show');
        document.getElementById('fa-dw').classList.toggle('hide-fa');
        document.getElementById('fa-up').classList.toggle('hide-fa');
      }
      // console.log(nex_elem);
    }

  }
}

const getParameterByName = (name) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const restDataForm = (idform, elemFile = null, elemMessage = null) => {
  // let text_message= document.querySelector('#message');
  document.forms[idform].reset();

  if (elemFile != null) elemFile.innerHTML = '';
  if (elemMessage != null) elemMessage.classList.remove("show");
}

const defaultRowTable = (colspan, message = "No se encontró ningun registro") => {
  return `
  <tr>
    <td colspan="${ colspan}" class="nothing-data">${message}</td>
  </tr>`;
}

const boxAlert = (e) => {
  if (e !== undefined) {
    let elem = e.target;

    // console.log(elem);
    if (elem.classList.contains("alert-close")) {
      let elem_box = e.target.parentElement.parentElement;
      elem_box.classList.toggle('hide');
    }

  }
}

const menu = () => {

  let btn_menu = document.querySelector("#toggle-menu"),
    menu = document.querySelector("#menu");

  if (btn_menu != null) {
    const toggle = () => {
      btn_menu.classList.toggle("menu-close");
      menu.classList.toggle("show");
      document.body.classList.toggle("o-hidden-y");
      menu.classList.add("transition");

      setTimeout(() => {
        menu.classList.remove("transition");
      }, 500);
    }

    btn_menu.addEventListener("click", () => {
      toggle();
      // console.log('holaaa');
    });
  }
}

const formatDate = (date) => {
  return moment(date).format('DD/MM/YYYY');
}


const closeMenu = (e) => {
  if (e !== undefined) {
    let elem = e.target;
    // console.log(elem);

    if (elem.classList.contains("menu-link") || elem.classList.contains("menu-link__text")) {
      let btn_menu = document.querySelector("#toggle-menu"),
        menu = document.querySelector("#menu");
      document.body.classList.remove("o-hidden-y");
      btn_menu.classList.remove("menu-close");
      menu.classList.remove("show");
    }
  }
}


const handleClickFile = (elemButton) => {
  // elemInputFile.click();
  let id_input = elemButton.dataset.input_file;
  // console.log(id_input);
  document.getElementById(id_input).click();
}

const handleChangeFile = (elemFile) => {
  var file = elemFile.value;
  var fileName = file.split("\\");
  // console.log(fileName);

  let id_text = elemFile.dataset.text_file;

  if (elemFile.files.length == 0) {
    document.getElementById(id_text).innerHTML = '';
  }
  else {
    document.getElementById(id_text).innerHTML = (elemFile.files.length == 1 ? elemFile.files[0].name : `Se agregaron ${elemFile.files.length} archivo(s)`);
  }
}


const handleChangeFilePreviewImg = (elemFile) => {
  let file = elemFile.value;
  let fileName = file.split("\\");

  let content_images = elemFile.dataset.content;

  let elemContent = document.getElementById(content_images);

  // console.log(elemFile.files.length);

  let html = ``;

  for (let i = 0; i < elemFile.files.length; i++) {
    let reader = new FileReader();
    let src_img = null;

    reader.onload = function () {
      // console.log("IMAGEN: " + reader.result);
      src_img = reader.result;
      elemContent = document.getElementById(content_images);

      elemContent.innerHTML += `
        <div class="item-img-preview">
          <img class="preview-img" src="${ src_img}"/>
        </div>
      `;
    }

    reader.readAsDataURL(elemFile.files[i]);
  }

  // console.log(html);

  document.getElementById(content_images).innerHTML = html;

  // document.getElementById(id_content).innerHTML=`
  //   <div class="item-img-preview">
  //     <img class="preview-img" src="${ urlStorage }/${ item.imagen }"/>
  //   </div>
  // `;

  // if (el.files.length == 0) {
  //   document.getElementById(id_text).innerHTML = '';
  // }
  // else {
  //   document.getElementById(id_text).innerHTML = (el.files.length == 1 ? el.files[0].name : `Se agregaron ${el.files.length} archivo(s)`);
  // }
}

const handleChangeFileImg = (elemFile) => {

  let reader = new FileReader();

  reader.onload = function () {
    let preview = document.getElementById('preview'),
      image = document.createElement('img');

    if (preview && image) {
      image.src = reader.result;

      preview.innerHTML = '';
      preview.append(image);
    }
  };

  reader.readAsDataURL(elemFile.files[0]);

}

const removeSelectedFile = (elem) => {
  let input_file = document.getElementById(elem.dataset.input_file);
  let content_preview = document.getElementById(elem.dataset.content_preview);

  // console.log(input_file.files);

  input_file.value = '';
  content_preview.innerHTML = '';

  // console.log(input_file.files);
}

const stateControlForm = (form, btn_submit, text_submit = "Enviar", send_text_submit = "Enviando...") => {
  for (let i = 0; i < form.elements.length - 1; i++) {
    form.elements[i].disabled = !form.elements[i].disabled;
  }

  btn_submit.disabled = !btn_submit.disabled;
  btn_submit.value = (!btn_submit.disabled ? text_submit : send_text_submit);
}

const resetDataForm = (form) => {

  let inputs = form.elements;

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.value = "";
    input.removeAttribute('disabled');

    // console.log(input.nextSibling);

    if (input.nextSibling != null && input.nextSibling.nodeName != "#text") {
      let elemNext = input.nextSibling;
      if (elemNext.classList.contains("messages")) {
        elemNext.classList.remove('error');
      }
    }
  }

}

const getValueElement = (elem) => {
  if (elem.nodeName == 'INPUT' || elem.nodeName == 'TEXTAREA') {
    return elem.value.trim();
  }

  else return null;
}

const validateForm = (form, class_validate = ".validate", input_err = "err", label_err = "error") => {
  let inputs = form.querySelectorAll(".validate");
  // console.log(inputs);
  let error = false;

  for (var i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    // console.log(input);

    let elem_next= null;
    if(input.nextElementSibling) elem_next = input.nextElementSibling;

    // console.log('indice: '+ (i + 1));
    // console.log(getValueElement(input.nodeName));

    if (getValueElement(input)!= null && getValueElement(input).length == 0) {
      // input.classList.add(input_err);
      if (elem_next != null) elem_next.classList.add(label_err);
      error = true;
    } else {
      // input.classList.remove(input_err);
      if (elem_next != null) elem_next.classList.remove(label_err);
    }
  }

  // console.log(error);
  return error;
}





export {
  modal,
  modalCustom,
  dropdown,
  getParameterByName,
  restDataForm,
  defaultRowTable,
  boxAlert,
  menu,
  closeMenu,
  handleClickFile,
  handleChangeFile,
  stateControlForm,
  validateForm,
  // handleClickFileImg
  handleChangeFileImg,
  handleChangeFilePreviewImg,
  formatDate,
  resetDataForm,
  removeSelectedFile
}
