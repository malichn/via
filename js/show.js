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
  var resultstring = "";
  
  if (!regresult) {

    resultstring = "結果をコピーしてはりつけてね";

  } else {

    var jaresult = regresult.map(res=>dict[res.replace(" -", "")]);
    var filteredresult = jaresult.filter(res => res != undefined);
    let nor = filteredresult.length;

    if (nor == 0) {

      resultstring = "強みが翻訳できません...\nコピー範囲がまちがっているかも？";

    } else if (nor < 24) {

      resultstring = "強みが 24個中 " + nor + "個しかみつかりません...\nコピー範囲がまちがっているかも？";

    } else {

      for (let i = 0; i < 24; i++) {

        resultstring += i+1;
        resultstring += " ";
        resultstring += dict[regresult[i].replace(" -", "")];
        resultstring += "\n";

      }
    }
  }
  
  resultOutput.value = resultstring;

}