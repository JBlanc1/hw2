// Your code goes here:
// let imageSwap = function(event) {
// window.alert("Hey There")
// }
let imageSwap = function(event)
{
  // console.log(event)
    $("#thumbnails img").click(function()
  {
      $("#main-image").attr('src',$(this).attr('src').replace
      ("thumbnails","main-image"));

  })
}

jQuery("#thumbnails").on("click", imageSwap)
