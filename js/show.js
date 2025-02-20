function showResult() {

  let resultInput = document.getElementById('input');
  let resultOutput = document.getElementById('output');
  let resultbutton = document.getElementById('transButton');

  var dict = {
    "Appreciation of beauty and excellence": "美や卓越性の鑑識(審美心)",
    "Bravery and valor": "勇敢",
    "Capacity to love and be loved": "愛する力・愛される力",
    "Caution, prudence, and discretion": "慎重さ・思慮深さ",
    "Citizenship, teamwork, and loyalty": "チームワーク",
    "Creativity, ingenuity, and originality": "創造性・独創性",
    "Curiosity and interest in the world": "好奇心・興味",
    "Fairness, equity, and justice": "平等・公平",
    "Forgiveness and mercy": "寛容性",
    "Gratitude": "感謝",
    "Honesty, authenticity, and genuineness": "正直さ・誠実性",
    "Hope, optimism, and future-mindedness": "希望・楽観性",
    "Humor and playfulness": "ユーモア、遊戯心",
    "Industry, diligence, and perseverance": "根気",
    "Judgment, critical thinking, and open-mindedness": "判断",
    "Kindness and generosity": "優しさ・親切心",
    "Leadership": "リーダーシップ",
    "Love of learning": "向学心",
    "Modesty and humility": "謙虚",
    "Perspective wisdom": "視点・視野",
    "Self-control and self-regulation": "自己統制",
    "Social intelligence": "社会的知能",
    "Spirituality, sense of purpose, and faith": "精神性",
    "Zest, enthusiasm, and energy": "熱意"
  };

  var result = resultInput.value;
  var regresult = result.match(/(Appreciation|Bravery|Capacity|Caution|Citizenship|Creativity|Curiosity|Fairness|Forgiveness|Gratitude|Honesty|Hope|Humor|Industry|Judgment|Kindness|Leadership|Love|Modesty|Perspective|Self-control|Social|Spirituality|Zest).+-/g);
  var enresult = regresult.map(res=>res.replace(" -", ""));
  var jaresult = regresult.map(res=>dict[res.replace(" -", "")]);
  var filteredresult = jaresult.filter(res => res != undefined);
  var num_of_strength = Math.min(filteredresult.length, 24);
  var resultstring = "";

  for (let i = 0; i < num_of_strength; i++) {

    resultstring += i+1;
    resultstring += ",\"";
    resultstring += enresult[i];
    resultstring += "\",\"";   
    resultstring += filteredresult[i];
    resultstring += "\"";

    if (i < num_of_strength-1) {
      resultstring += "\r\n";
    }
  }

  resultOutput.value = resultstring;

}

function downloadResult() {

  let resultOutput = document.getElementById('output');
  var result = resultOutput.value;

  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, result], { type: "text/csv" });

  const objectUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  const fileName = "result.csv";

  downloadLink.download = fileName;
  downloadLink.href = objectUrl;
  downloadLink.click();
  downloadLink.remove();

}