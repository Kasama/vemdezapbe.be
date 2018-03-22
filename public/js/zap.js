const zapStrengthShow = value => {
  const zapEmojisPerStrength = [1, 2, 3, 4, 8]
  const emojiArray = {
    angry: ["steaming", "skullandbones", "angry", "stop", "under18", "bomb", "bomb", "cursing"],
    happy: ["crazy", "surprised", "sunglasses", "muscle", "lol", "okay", "okay", "top"],
    sad: ["crazy", "surprised", "sunglasses", "muscle", "lol", "okay", "okay", "top"],
    sassy: ["crazy", "surprised", "sunglasses", "muscle", "lol", "okay", "okay", "top"],
  }
  const strengthTitleArray = [
    "Zap força fraca",
    "Zap força média",
    "Isso que é zap bb",
    "Zap monstrão",
    "Zap topper d+"
  ]
  const mood = $(".mood-button.active").data("mood")
  const finalZap = `
    <div class="mb10">${strengthTitleArray[value]}</div>
    ${emojiArray[mood].slice(0, zapEmojisPerStrength[value]).map(
      emoji => `<img class="emoji" src="images/emojis/${emoji}.png" alt="${emoji}"/>`
    ).join(" ")}
  `

  $("#strength-show").html(finalZap)
}

$(function() {
  $("#strength-slider").on("input change", e => {
    zapStrengthShow(e.target.value)
  })

  $(".mood-button").on("click", function() {
    $(".mood-button").removeClass("active")
    $(this).addClass("active")
    zapStrengthShow($("#strength-slider").val())
  })

  $("#ZAP").on("click", () => {
    const zap = $("#text-box").val() || "Zapeia esse texto bb que vai ficar top demais"
    const mood = $(".mood-button.active").data("mood")
    const strength = $("#strength-slider").val() + 1

    $.post("/api/v1.0", { zap, mood, strength }, res => {
      $("#text-box").val(res.zap)
    })
  })
})