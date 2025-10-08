/* Code Adapted from tutorials within:
 * JavaScript & jQuery: The Missing Manual
 *  by David Sawyer McFarland
 *  Copyright © 2014 Sawyer McFarland Media, Inc. All rights reserved.
 *  Printed in the United States of America.
 *  Published by O’Reilly Media, Inc.,
 *  1005 Gravenstein Highway North, Sebastopol, CA 95472.
 */
(function () {
  "use strict";

$(document).ready(function () {
  $('.answer').hide();
  $('.main h2').click(function(){
    let $answer = $(this).next('.answer');
    if( $answer.is(':hidden')) {
      $answer.slideDown();
      $(this).addClass('close');
    } else {
      $answer.fadeOut();
      $(this).removeClass('close');
    }
  }); // end click
}); // end ready


}()); // end 'use strict'