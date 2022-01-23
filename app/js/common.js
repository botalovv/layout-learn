$(function () {
  $(".logo-litera").each(function () {
    let ths = $(this);
    ths.html(ths.html().replace("i", "<span>i</span>"));
  });
});
