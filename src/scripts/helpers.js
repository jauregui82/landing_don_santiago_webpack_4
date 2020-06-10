
const __elemId = (elem) => document.getElementById(elem);
const __elem = (elem) => document.querySelector(elem);
const __elems = (elems) => document.querySelectorAll(elems);

const nullIf = (value) => (value == undefined || value == null || value.trim().length == 0);
const nullIfArr = (value) => ((value == undefined || value == null || value == '') || value.length == 0);
const nullIfValue = (value, textNull = '') => (value == null || value.trim().length == 0 ? textNull : value);

// ed ui
// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
  }
};


const createCustomElement = (element, attributes, children) => {
  let customElement = document.createElement(element);
  if (children !== undefined) Array.prototype.forEach.call(children, el => {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });

  addAttributes(customElement, attributes);
  return customElement;
};

const acceptImages = ['png', 'PNG', 'jpg', 'jpeg', 'gif', 'svg'];

// const acceptDoc= ['xls','xlsx','ppt','pptx','doc','docx','pdf'];

// const acceptComprimidos= ['zip', 'rar'];

// const acceptOtros= ['ai', 'psd'];


const acceptFiles = [
  {
    ext: 'xls',
    icon: 'file-excel'
  },
  {
    ext: 'xlsx',
    icon: 'file-excel'
  },
  {
    ext: 'ppt',
    icon: 'file-powerpoint'
  },
  {
    ext: 'pptx',
    icon: 'file-powerpoint'
  },
  {
    ext: 'doc',
    icon: 'file-word'
  },
  {
    ext: 'docx',
    icon: 'file-word'
  },
  {
    ext: 'pdf',
    icon: 'file-pdf'
  },
  {
    ext: 'zip',
    icon: 'file-archive'
  },
  {
    ext: 'rar',
    icon: 'file-archive'
  }
];

const acceptFilesIcons = [
  {
    ext: 'xls',
    icon: 'file-excel'
  },
  {
    ext: 'xlsx',
    icon: 'file-excel'
  },
  {
    ext: 'ppt',
    icon: 'file-powerpoint'
  },
  {
    ext: 'pptx',
    icon: 'file-powerpoint'
  },
  {
    ext: 'doc',
    icon: 'file-word'
  },
  {
    ext: 'docx',
    icon: 'file-word'
  },
  {
    ext: 'pdf',
    icon: 'file-pdf'
  },
  {
    ext: 'ai',
    icon: 'file-ai'
  },
  {
    ext: 'psd',
    icon: 'file-ps'
  },
  {
    ext: 'zip',
    icon: 'file-zip'
  },
  {
    ext: 'rar',
    icon: 'file-rar'
  }
];



const acceptFilesImg = [
  {
    ext: 'xls',
    img: 'excel.png'
  },
  {
    ext: 'xlsx',
    img: 'excel.png'
  },
  {
    ext: 'ppt',
    img: 'powerpoint.png'
  },
  {
    ext: 'pptx',
    img: 'powerpoint.png'
  },
  {
    ext: 'doc',
    img: 'word.png'
  },
  {
    ext: 'docx',
    img: 'word.png'
  },
  {
    ext: 'pdf',
    img: 'pdf.png'
  },
  {
    ext: 'zip',
    img: 'zip.png'
  },
  {
    ext: 'rar',
    img: 'rar.png'
  },
  {
    ext: 'ai',
    img: 'ai.png'
  },
  {
    ext: 'psd',
    img: 'ps.png'
  }
];





const acceptFilesImgDoc = [
  {
    ext: 'xls',
    img: 'excel.png'
  },
  {
    ext: 'xlsx',
    img: 'excel.png'
  },
  {
    ext: 'ppt',
    img: 'powerpoint.png'
  },
  {
    ext: 'pptx',
    img: 'powerpoint.png'
  },
  {
    ext: 'doc',
    img: 'word.png'
  },
  {
    ext: 'docx',
    img: 'word.png'
  },
  {
    ext: 'pdf',
    img: 'pdf.png'
  }
];

const acceptFilesImgComprimidos = [
  {
    ext: 'zip',
    img: 'zip.png'
  },
  {
    ext: 'rar',
    img: 'rar.png'
  }
];

const acceptFilesImgOtros = [
  {
    ext: 'ai',
    img: 'ai.png'
  },
  {
    ext: 'psd',
    img: 'ps.png'
  }
];


const convertFormDataToJson = (formData) => {
  let object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });

  let json = JSON.stringify(object);

  return JSON.parse(json);
}

export {
  __elemId,
  __elem,
  __elems,
  createCustomElement,
  addAttributes,
  acceptImages,
  acceptFiles,
  acceptFilesIcons,
  acceptFilesImg,
  nullIf,
  nullIfArr,
  nullIfValue,
  acceptFilesImgDoc,
  acceptFilesImgComprimidos,
  acceptFilesImgOtros,
  convertFormDataToJson
}
