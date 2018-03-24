/** We will need this
*   http://unicode.org/emoji/charts/full-emoji-list.html
*   http://www.palavras.net/
*/

const discardTokens = [ "ainda", "antes", "apenas", "apesar", "assim", "até", "cada", "como", "conforme", "consoante", "contudo", "depois", "desde", "embora", "enquanto", "entanto", "então", "entretanto", "isso", "logo", "mais", "mal", "maneira", "mas", "medida", "menos", "mesmo", "modo", "não", "nem", "nem", "no", "obstante", "ora", "ou", "para", "passo", "pois", "pois", "por", "por", "porém", "porque", "portanto", "posto", "proporção", "qual", "quando", "quanto", "que", "salvo", "segundo", "sem", "sempre", "ser", "também", "todas", "todavia", "uma", "vez", "vezes",  ]

const matchTokens = {
  fullMatch: {
    "aff": ["🙄"],
    "amo": ["😍", "😻", "😘", "😗", "😙", "😚"],
    "amor": ["😍", "😻", "😘", "😗", "😙", "😚"],
    "bem": ["☺"],
    "bravo": ["😤", "😤💦", "😖", "🙁", "😩", "😦", "😡", "🤬", "💣", "💢", "✋🛑", "☠"],
    "caso": ["💑"],
    "chef": ["👨‍🍳", "👩‍🍳"],
    "dado": ["🎲"],
    "data": ["📅", "🗓"],
    "feliz": ["😀", "😁", "😃", "😄", "😊", "🙂", "☺"],
    "fim": ["🙅‍♂️", "🙅‍♀️"],
    "já": ["⏰"],
    "parabens": ["🎈", "🎉", "🎊"],
    "puto": ["😤", "😤💦", "😖", "🙁", "😩", "😦", "😡", "🤬", "💣", "💢", "✋🛑", "☠"],
    "quer": ["😏"],
    "susto": ["😱"],
    "tiro": ["🔫"],
    "top": ["😂👌", "👌", "🔝"],
    "topper": ["😂👌", "👌", "🔝"],
    "ver": ["👀👀", "👀"],
    "zap": ["📞", "♣"],
  },
  partialMatch: {
    any: {
      "brasil": ["🇧🇷"], 
      "doid": ["🤪"],
    },
    prefix: {
      "alun": ["👨‍🎓", "👩‍🎓"],
      "anjo": ["😇"],
      "cozinh": ["👨‍🍳", "👩‍🍳"],
      "desculpa": ["😅"],
      "doen": ["😷", "🤒", "🤕", "🤢", "🤮", "🤧"],
      "festa": ["🎆", "🎇", "✨", "🎈", "🎉", "🎊"],
      "juiz": ["👨‍⚖️", "👩‍⚖️"],
      "louc": ["🤪"],
      "medic": ["👨‍⚕️", "👩‍⚕️"],
      "mentir": ["🤥", "🤫"],
      "ouv": ["👂"],
      "pistol": ["🔫"],
      "professor": ["👨‍🏫", "👩‍🏫"],
      "querid": ["☺"],
      "assust": ["😱"],
      "trist": ["☹", "🙁", "😖", "😞", "😟", "😢", "😭", "😭", "😭", "😩", "😿"],
      "vergonh": ["😳"],
      "vist": ["👀"],
    },
  },
}

const moodEmojis = {
  "angry": ["😤","😤💦","😖","🙁","😩","😦","😡","🤬","💣","💢","✋🛑","☠"],
  "happy": ["😀","😁","😂","😃","😄","😅","😆","😉","😊","😋","😎","☺","😛","😜","😝","👌"],
  "sad": ["☹","🙁","😖","😞","😟","😢","😭","😭","😭","😩","😿"],
  "sassy": ["😉","😎","😋","😘","😏","😜","😈","😻","🙊","👉👌","😼"],
}

module.exports = {
  discardTokens,
  matchTokens,
  moodEmojis,
}
