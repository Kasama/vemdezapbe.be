/** We will need this
*   http://unicode.org/emoji/charts/full-emoji-list.html
*/

const discardTokens = [ "ainda", "antes", "apenas", "apesar", "assim", "até", "cada", "como", "conforme", "consoante", "contudo", "depois", "desde", "embora", "enquanto", "entanto", "então", "entretanto", "isso", "logo", "mais", "mal", "maneira", "mas", "medida", "menos", "mesmo", "modo", "não", "nem", "nem", "no", "obstante", "ora", "ou", "para", "passo", "pois", "pois", "por", "por", "porém", "porque", "portanto", "posto", "proporção", "qual", "quando", "quanto", "que", "salvo", "segundo", "sem", "sempre", "ser", "também", "todas", "todavia", "uma", "vez", "vezes",  ]

const specificTokens = {
  "aff": ["🙄"],
  "aluna": ["👩‍🎓"],
  "aluno": ["👨‍🎓", "👩‍🎓"],
  "anjo": ["😇"],
  "amo": ["😍", "😻", "😘", "😗", "😙", "😚"],
  "amor": ["😍", "😻", "😘", "😗", "😙", "😚"],
  "bem": ["☺"],
  "brasil": ["🇧🇷"], 
  "bravo": ["😤", "😤💦", "😖", "🙁", "😩", "😦", "😡", "🤬", "💣", "💢", "✋🛑", "☠"],
  "caso": ["💑"],
  "chef": ["👨‍🍳", "👩‍🍳"],
  "cozinheira": ["👩‍🍳"],
  "cozinheiro": ["👨‍🍳", "👩‍🍳"],
  "dado": ["🎲"],
  "desculpa": ["😅"],
  "doente": ["😷", "🤒", "🤕", "🤢", "🤮", "🤧"],
  "doido": ["🤪"],
  "feliz": ["😀", "😁", "😃", "😄", "😊", "🙂", "☺"],
  "festa": ["🎆", "🎇", "✨", "🎈", "🎉", "🎊"],
  "fim": ["🙅‍♂️", "🙅‍♀️"],
  "já": ["⏰"],
  "juiz": ["👨‍⚖️", "👩‍⚖️"],
  "juiza": ["👩‍⚖️"],
  "louco": ["🤪"],
  "medica": ["👩‍⚕️"],
  "medico": ["👨‍⚕️", "👩‍⚕️"],
  "mentira": ["🤥", "🤫"],
  "ouvir": ["👂"],
  "ouve": ["👂"],
  "pistola": ["🔫"],
  "professor": ["👨‍🏫", "👩‍🏫"],
  "professora": ["👩‍🏫"],
  "puto": ["😤", "😤💦", "😖", "🙁", "😩", "😦", "😡", "🤬", "💣", "💢", "✋🛑", "☠"],
  "quer": ["😏"],
  "susto": ["😱"],
  "tiro": ["🔫"],
  "top": ["😂👌", "👌", "🔝"],
  "topper": ["😂👌", "👌", "🔝"],
  "triste": ["☹", "🙁", "😖", "😞", "😟", "😢", "😭", "😭", "😭", "😩", "😿"],
  "ver": ["👀👀", "👀"],
  "vergonha": ["😳"],
  "visto": ["👀"],
  "zap": ["📞", "♣"],
}

const moodEmojis = {
  "angry": ["😤","😤💦","😖","🙁","😩","😦","😡","🤬","💣","💢","✋🛑","☠"],
  "happy": ["😀","😁","😂","😃","😄","😅","😆","😉","😊","😋","😎","☺","😛","😜","😝","👌"],
  "sad": ["☹","🙁","😖","😞","😟","😢","😭","😭","😭","😩","😿"],
  "sassy": ["😉","😎","😋","😘","😏","😜","😈","😻","🙊","👉👌","😼"],
}

module.exports = {
  discardTokens,
  moodEmojis,
  specificTokens,
}
