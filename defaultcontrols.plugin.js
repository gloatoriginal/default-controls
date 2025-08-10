/**
 * @name DefaultControls
 * @description Default controls to video
 * @version 1.0.0
 * @author Gloat
 * @updateUrl https://raw.githubusercontent.com/gloatoriginal/default-controls/refs/heads/main/defaultcontrols.plugin.js
 */

function setControls() {
  let videoPlayer = document.querySelector("video");
  let bottomControl = document.querySelector('[class*="control-bar-layer-"]');

  if (!videoPlayer || !bottomControl) {
    console.log("Required elements not found, waiting...");
    return;
  }
  if (videoPlayer.controls == true && bottomControl.hidden != false) {
	console.log("Controls already showing and bottomcontrol is hidden");
    return;
  }

  videoPlayer.setAttribute("preload", "metadata");
  videoPlayer.controls = true;
  
  bottomControl.hidden = true;
  
}

function checkControls() {
  if (
    (document.querySelector("video") && document.querySelector('[class*="control-bar-layer-"]'))
  ) {
    setControls();
  } else {
	console.log("video: " + document.querySelector("video"))
	console.log("control bar: " + document.querySelector('[class*="control-bar-layer-"]'))
  }
}

window.onload = function () {
	checkControls()
}
setInterval(checkControls, 2500);
