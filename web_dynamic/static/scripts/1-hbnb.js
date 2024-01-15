/* global $ */
$(document).ready(function () {
  const ids = [];
  $("input").change(function () {
    if ($(this).is(":checked")) {
      ids.push(this.data-id);
    }
    else {
      ids.pop(this.data-id);
    }
  });
  $("div.amenities").text(ids);
  console.log(ids)
});
