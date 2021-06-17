var results = [], currentIndex;
var scanbotSDK, documentScanner, croppingView;
var cheatTimer = null;

$(document).ready(async function () {
  //DEFINE ENVS
  var makingUrl = "https://dev-edu-auto-marking.bappartners.com/marking";
  var scoringUrl = "https://dev-edu-gakutore-api.bappartners.com/scoring";
  var gakutoreUrl = "https://dev-edu-gakutore-web.bappartners.com";
  scanbotSDK = await ScanbotSDK.initialize({ licenseKey: Config.license() });
  cheatTimer = setInterval(async () => {
    scanbotSDK = await ScanbotSDK.initialize({ licenseKey: Config.license() });
  }, 60000);

  // var makingUrl = "CI_API_URL";
  // var scoringUrl = "CI_API_SCORING";
  // var gakutoreUrl = "CI_GAKUTORE_URL";

  var videoSelect = document.querySelector('select#listCamera');
  var video = document.getElementById('video');
  var arrayImages = [];
  var questions = [];
  var examCode= '';
  var totalAnswer = 0;
  var totalQuestion = 0
  var context = canvas.getContext('2d');
  $("#submit__files").attr('disabled', 'disabled');
  var listDevices = [];

   // NOTIFICATION FUNCTION
   function notify(type,message){
    (()=>{
      let n = document.createElement("div");
      let id = Math.random().toString(36).substr(2,10);
      n.setAttribute("id",id);
      n.classList.add("notification",type);
      n.innerText = message;
      document.getElementById("notification-area").appendChild(n);
      setTimeout(()=>{
        var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
        for(let i=0;i<notifications.length;i++){
          if(notifications[i].getAttribute("id") == id){
            notifications[i].remove();
            break;
          }
        }
      },5000);
    })();
  }
  
  function notifySuccess(message){
    notify("success", message);
  }
  function notifyError(message){
    notify("error", message);
  }
  function notifyInfo(message){
    notify("info", message);
  }

  //Toggle help
  $("#help").click(function(event) {
    const getElement = $(event.currentTarget).find('.header__help--explain');
    const checkStt = getElement.attr("class")
    const getImg = $(event.currentTarget).find('.header__help--icon').children('img');
    if(!checkStt.includes("hidden__content")) {
      getElement.addClass("hidden__content");
      getImg.attr('src', "./asset/images/HelpHide.svg");
    } else {
      getElement.removeClass("hidden__content");
      getImg.attr('src', "./asset/images/Help.svg");
    }
  })

  //Toggle info
  $("#info").click(function(event) {
    const getElement = $(event.currentTarget).find('.header__help--explain');
    const checkStt = getElement.attr("class")
    if(!checkStt.includes("hidden__content")) {
      getElement.addClass("hidden__content");
    } else {
      getElement.removeClass("hidden__content");
    }
  })

  // Accept camera
  $(document).on('load', getDevices().then(gotDevices));

  function getDevices() {
    return navigator.mediaDevices.enumerateDevices();
  }

  function gotDevices(deviceInfos) {
    window.deviceInfos = deviceInfos;
    for (const deviceInfo of deviceInfos) {
      const option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind === 'videoinput') {
        option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
        listDevices.push({deviceInfo});
        // videoSelect.appendChild(option);
        $(".dropdown__list").append(`
          <li class="dropdown__item">
            <span class="dropdown__text" data-value=${deviceInfo.deviceId}>${deviceInfo.label || `Camera ${videoSelect.length + 1}`}</span>
          </li>
        `)
      }
    }
  }

  $('.dropdown__select').on('click', () => {
    $('.dropdown__list').toggleClass('show');
  });

  const config = {
    containerId: Config.scannerContainerId(),
    acceptedAngleScore: 60,
    acceptedSizeScore: 60,
    autoCaptureSensitivity: 0.66,
    autoCaptureEnabled: true,
    ignoreBadAspectRatio: false,
    onDocumentDetected: onDocumentDetected,
    onError: onScannerError
  };

  documentScanner = await scanbotSDK.createDocumentScanner(config);
  documentScanner.disableAutoCapture();

  // TAKE PHOTO
  $('#snap').click(async function (event) {
    event.preventDefault();
  });

  async function onDocumentDetected(e) {
    try {
      results.push(e);
      const { cropped } = e;
      const blob = new Blob([cropped], {type: `image/png`});
      const imageBitmap = await createImageBitmap(blob, { resizeWidth: 2560, resizeHeight: 1920, resizeQuality: "high"});
      const canvas = document.querySelector('#canvas');
      await drawCanvas(canvas, imageBitmap);
      reloadDetectionResults();
    } catch (err) {
      notifyError(err);
    }
  }

  async function onScannerError(e) {
      console.log("Error:", e);
  }

  //DRAW IMAGE ON SLIDER
  async function drawCanvas(canvas, img) {
    let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, x, y, img.width, img.height);
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    var myCanvas = $("#canvas");
    const dataURL = await myCanvas.get(0).toDataURL('image/jpeg', 1.0);
    myCanvas.get(0).toBlob(pushToArray);
    previewImages(dataURL);
  }

  async function onDetectionResultClick(e) {
    const index = e.target.getAttribute("index");
    currentIndex = index;
    Utils.getElementByClassName("cropping-controller").style.display = "block";

    const options = {
        containerId: Config.croppingViewContainerId(),
        image: results[index].original,
        polygon: results[index].polygon,
        rotations: results[index].rotations ?? 0,
        disableScroll: true,
        style: {
            padding: 20,
            polygon: {
                color: "green",
                width: 4,
                handles: {
                    size: 14,
                    color: "white",
                    border: "1px solid lightgray"
                }
            },
            magneticLines: {
                // disabled: true,
                color: "red"
            }
        }
    };
    croppingView = await scanbotSDK.openCroppingView(options);
  }

  function reloadDetectionResults() {
    const items = document.getElementsByClassName("slider__item--img");
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.onclick = onDetectionResultClick;
    }
  }

  function pushToArray(dataURL) {
    arrayImages.push(dataURL);
  }

  // PREVIEW
  function previewImages(item) {
    const contentSlider = $('.slider__carousel');
    const findChild = contentSlider.children("");
    $('#submit__files').removeAttr('disabled');
    $(".overlay__loading").addClass("hidden__content");
    $("#content__img--loading").addClass("hidden__content");
    $("#scanbot-camera-container").removeClass("hidden__content");
    $('#snap').removeAttr('disabled');
    $(".btn__play").removeAttr('disabled');
    if(findChild.length > 0) {
      return contentSlider.append(`
        <div class="slider__item carousel-item">
          <img class="slider__item--img" src=${item} alt='item' index="${results.length - 1}" />
          <button class="btn btn-danger slider__item--btn" id="btn-delete">
            <img src="./asset/images/TrashSimple.svg" alt="camera" />
          </button> 
        </div>
      `)
    }
    return contentSlider.append(`
      <div class="slider__item carousel-item active">
        <img class="slider__item--img" src=${item} alt='item' index="${results.length - 1}" />
        <button class="btn btn-danger slider__item--btn" id="btn-delete">
          <img src="./asset/images/TrashSimple.svg" alt="camera" />
        </button> 
      </div>
    `)
  }

  // DELETE PHOTOS
  $('.slider__carousel').on("mouseenter", ".slider__item", async function(e) {
    e.preventDefault();
    const getIndex = await $(this).index();
    if(arrayImages.length > 0) {
      $(this).find(".slider__item--btn").click(function(event) {
        event.preventDefault();
        if(arrayImages.length >= 1) {
          if(getIndex === 0) {
            $(".slider__item:eq(1)").addClass("active");
            $(".slider__item:eq(0)").remove();
          } else {
            $(`.slider__item:eq(${getIndex})`).remove();
          }
        }
       return arrayImages.splice(getIndex, 1);
      });
    }
  });

  Utils.getElementByClassName("detect-button").onclick = async (e) => {
    await croppingView.detect();
  };

  Utils.getElementByClassName("rotate-button").onclick = async (e) => {
      await croppingView.rotate(1);
  };

  Utils.getElementByClassName("apply-button").onclick = async (e) => {
      const result = await croppingView.apply();
      croppingView.dispose();
      const index = currentIndex;
      results[index].filtered = undefined;
      results[index].cropped = result.image;
      results[index].polygon = result.polygon;
      results[index].rotations = result.rotations;

      Utils.getElementByClassName("cropping-controller").style.display = "none";

      const { image } = await Utils.renderDetectionResult(index);
      const items = document.getElementsByClassName("slider__item--img");
      items[index].src = image;
      const blob = new Blob([result.image], {type: `image/png`});
      pushToArray(blob)
  };

  Utils.getElementByClassName("back-button").onclick = () => {
    Utils.getElementByClassName("cropping-controller").style.display = "none";
  }

  // SEND TO SERVER
  $("#submit__files").click((e) => {
    e.preventDefault();
    $("#scanbot-camera-container").addClass("hidden__content");
    documentScanner.dispose();
    const getSrc =  $(`.slider__item:eq(${0})`).find('img').attr('src');
    $("#content__img").removeClass("hidden__content").attr("src", getSrc);
    sendApiMarking()
  })

  async function sendApiMarking() {
    $(".overlay").removeClass("hidden__content");
    $(".btn__play").addClass("hidden__content");
    $(".btn__pause").removeClass("hidden__content");
    $('#snap').attr('disabled', 'disabled');
    $(".btn__pause").attr('disabled', 'disabled')
    const formData = new FormData();
    for(let i = 0; i < arrayImages.length; i++) {
      formData.append(`files_${i}`, arrayImages[i]);
    }
    
    let respone = await fetch(`${makingUrl}`, {
      method: 'POST',
      body: formData,
    });

    let content = await respone.json();
    $(".overlay").addClass("hidden__content");
    if (content.message !== "SUCCESSFUL") {
      const splitString = content.message.split("_").join(" ");
      notifyError(splitString);
      setDefault();
      return;
    } else {
      $(".left__footer").addClass("hidden__content");
      $("#snap").addClass("hidden__content");
      $(".right__table").removeClass("hidden__content");
      $(".right__btn-grp").removeClass("hidden__content");
      $(".left__header").addClass("hidden__content");
      $("#scanbot-camera-container").addClass("hidden__content");
      $(".btn__play").addClass("hidden__content");
      $(".btn__pause").addClass("hidden__content");
      $(".slider__arrow").removeClass("hidden__content")
      $("#content__img--loading").addClass("hidden__content");
      $(".left__content").addClass("left__content--active")
      $("#content__img").removeClass("hidden__content").attr("src", content.detect_images_url[0]);
      $(".slider__item").remove();
      arrayImages = [];
      const contentSlider = $('.slider__carousel');
      if (!Array.isArray(Object.values(content.score))) {
        return
      }

      Object.values(content.score).forEach((score) => {
        questions.push({
          index: score.name,
          correct: score.right_answers,
          total: score.total
        });
        examCode = content.exam_code;
        totalAnswer += score.right_answers;
        totalQuestion += score.total
        $(".table__content")
          .append(`
            <div class="table__item">
              <span class="table__item--label">大問${score.name}</span>
              <div class="table__item--number">
                <span class="table__header--title">${score.right_answers}</span>
                <span class="table__header--title">/</span>
                <span class="table__header--title">${score.total}</span>
              </div>
            </div>
          `)
      });

      $(".table__header").append(`
        <div class="table__header--total">
          <span class="table__header--title">${totalAnswer}</span>
          <span class="table__header--title">/</span>
          <span class="table__header--title">${totalQuestion}</span>
        </div>
      `)

      content.detect_images_url.forEach((link, index) => {
        if(index === 0) {
          contentSlider.append(`
          <div class="slider__item carousel-item slider__item--img-unactive slider__item--img-active active ">
            <img class="slider__item--img" src=${link} alt='item' />
          </div>
        `)
        } else {
          contentSlider.append(`
            <div class="slider__item carousel-item slider__item--img-unactive">
              <img class="slider__item--img" src=${link} alt='item' />
            </div>
          `)
        }
      });
    }
  }

  //PREVIEW WITH SELECT IMAGE
  $("#next-arrow").on('click', function() {
    const getParent = $(".slider__carousel").find('.slider__item');
    if(getParent.length > 0) {
      let getElement = $(".slider__carousel").find('.slider__item--img-active');
      let getIndex = getElement.index();
      if(getIndex < getParent.length - 1) {
        $(`.slider__item:eq(${getIndex})`).removeClass('slider__item--img-active');
        $(`.slider__item:eq(${getIndex + 1})`).addClass('slider__item--img-active');
        const getSrc =  $(`.slider__item:eq(${getIndex + 1})`).find('img').attr('src');
        $("#content__img").removeClass("hidden__content").attr("src", getSrc);
      } else {
        $(`.slider__item:eq(${getIndex})`).removeClass('slider__item--img-active');
        $(`.slider__item:eq(0)`).addClass('slider__item--img-active');
        const getSrc =  $(`.slider__item:eq(${0})`).find('img').attr('src');
        $("#content__img").removeClass("hidden__content").attr("src", getSrc);
      }
    }
    
  })

  $("#prev-arrow").on('click', function() {
    const getParent = $(".slider__carousel").find('.slider__item');
    if(getParent.length > 0) {
      let getElement = $(".slider__carousel").find('.slider__item--img-active');
      let getIndex = getElement.index();
      if(getIndex === 0) {
        $(`.slider__item:eq(${getIndex})`).removeClass('slider__item--img-active');
        $(`.slider__item:eq(${getParent.length - 1})`).addClass('slider__item--img-active');
        const getSrc =  $(`.slider__item:eq(${getParent.length - 1})`).find('img').attr('src');
        $("#content__img").removeClass("hidden__content").attr("src", getSrc);
      } else {
        $(`.slider__item:eq(${getIndex})`).removeClass('slider__item--img-active');
        $(`.slider__item:eq(${getIndex - 1})`).addClass('slider__item--img-active');
        const getSrc =  $(`.slider__item:eq(${getIndex - 1})`).find('img').attr('src');
        $("#content__img").removeClass("hidden__content").attr("src", getSrc);
      }
    }
  })

  // SENDING SCORING
  $("#submit__scoring").click(async function() {
    let respone = await fetch(`${scoringUrl}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "examCode": examCode,
        "questions": questions
      })
    });
    let result = await respone.json();
    if (result.status !== 200) {
      const splitString = result.message.split("_").join(" ");
      notifyError(splitString);
      return
    }
    window.open(`${gakutoreUrl}/scoring?userId=${result.data.userId}`);
  })

  // EVENT RESULT CONVERT
  $("#submit__rescan").click(function (event) {
    event.preventDefault();
    setDefault();
  });

  function setDefault() {
    arrayImages = [];
    questions = [];
    examCode= '';
    $(".slider__item").remove();
    $(".table__item").remove();
    $(".left__footer").removeClass("hidden__content");
    $("#snap").removeClass("hidden__content");
    $('#snap').removeAttr('disabled');
    $(".left__content").removeClass("left__content--active")
    $(".right__table").addClass("hidden__content");
    $(".right__btn-grp").addClass("hidden__content");
    $(".left__header").removeClass("hidden__content");
    $(".btn__pause").addClass("hidden__content");
    $(".btn__play").removeClass("hidden__content");
    $("#scanbot-camera-container").removeClass("hidden__content");
    $(".slider__arrow").addClass("hidden__content")
    $("#content__img").addClass("hidden__content").attr("src", "");
    documentScanner = scanbotSDK.createDocumentScanner(config);
  }
});