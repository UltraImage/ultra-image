//=================================
// Panorama
//=================================
$(document).ready(function() {
    "use strict";

    //=============================================
    // Panorama
    var panorama = $("#panorama").ipanorama({
        theme: "ipnrm-theme-modern",
        autoLoad: true,
        autoRotate: false,
        popoverShowTrigger: "hover", // specify how popover is triggered (click, hover)
        popoverHideTrigger: "manual", // specify how popover is hidden (click, leave, grab, manual)
        popoverShowClass: "fx-perspectiveInLeft", // specify the css3 animation class for the popover show
        popoverHideClass: "fx-hinge", // specify the css3 animation class for the popover hide
        compass: true,
        hotSpotSetup: true,
        sceneId: "saloonFront",
        scenes: {
            saloonFront: {
                type: "cylinder",
                image: "images/panorama/panorama-front.jpg",
                title: "Salon - spredaj",
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: 71,
                        sceneId: "saloonBack",
                        popoverContent: 'Salon - zadaj'
                    }
                ]
            },
            saloonBack: {
                type: "cylinder",
                image: "images/panorama/panorama-back.jpg",
                title: "Salon - zadaj",
                hotSpots: [
                    {
                        pitch: 0,
                        yaw: -25,
                        sceneId: "saloonFront",
                        popoverContent: 'Salon - spredaj'
                    }
                ]
            }
        }
    });
    //=============================================


    //=============================================
    // Preloader
    $(window).load(function() {
        setTimeout(function() {
            $("body").addClass("page-loaded");
        }, 3000);
    });
    //=============================================
});