async function getOPR() {
  try {
    // const teamNumIn = document.getElementById("input-TeamNumber").value;
    // const yearIn = document.getElementById("input-Year").value;
    // const evenCodeIn = document.getElementById("input-EventCode").value;

    const searchBtn = document.getElementById("search-btn");
    searchBtn.className = "searching-btn";
    searchBtn.textContent = "Searching...";

    const teamNumIn = 16321;
    const yearIn = 2025;
    const evenCodeIn = "FPEWESND";

    const url = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/matches/${evenCodeIn}/?teamNumber=${teamNumIn}`;
    const headers = new Headers();
    const token = btoa("fishygabi:462385BA-5EE8-4C15-931A-373A07844478");
    headers.append("Authorization", "Basic " + token);
    headers.append("Accept", "application/json");

    const response = await fetch(url, { headers: headers });
    const json = await response.json();
    console.log(json);
    // console.log();

    matchesContainer.replaceChildren();

    for (let i = 0; i < json.matches.length; i++) {
      const matchesContainer = document.getElementById("matchesContainer");
      matchesContainer.className = "matchesContainer";

      const matchContainer = document.createElement("div");
      matchContainer.className = "matchContainer";

      const blueStats = document.createElement("div");
      blueStats.className = "blueStats";
      const redStats = document.createElement("div");
      redStats.className = "redStats";

      const blueScoreHolder = document.createElement("div");
      blueScoreHolder.className = "blueScoreHolder";

      const blueScore = document.createElement("h3");
      blueScore.className = "blueScore";

      const redScoreHolder = document.createElement("div");
      redScoreHolder.className = "redScoreHolder";

      const redScore = document.createElement("h3");
      redScore.className = "redScore";

      const teams = json.matches[i].teams;

      const redAlliance2 = document.createElement("div");
      redAlliance2.className = "alliance";
      const redAlliance1 = document.createElement("div");
      redAlliance1.className = "alliance";
      const blueAlliance1 = document.createElement("div");
      blueAlliance1.className = "alliance";
      const blueAlliance2 = document.createElement("div");
      blueAlliance2.className = "alliance";

      const redAlliance2Num = document.createElement("p");
      const redAlliance1Num = document.createElement("p");
      const blueAlliance1Num = document.createElement("p");
      const blueAlliance2Num = document.createElement("p");

      const redAlliance2Name = document.createElement("p");
      const redAlliance1Name = document.createElement("p");
      const blueAlliance1Name = document.createElement("p");
      const blueAlliance2Name = document.createElement("p");

      // const newUrl1 = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[0].teamNumber}`;
      // const newUrl2 = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[1].teamNumber}`;
      // const newUrl3 = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[2].teamNumber}`;
      // const newUrl4 = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[3].teamNumber}`;

      // var responseNums1 = await fetch(newUrl1, { headers: headers });
      // responseNums1 = await responseNums1.json();
      // var responseNums2 = await fetch(newUrl2, { headers: headers });
      // responseNums2 = await responseNums2.json();
      // var responseNums3 = await fetch(newUrl3, { headers: headers });
      // responseNums3 = await responseNums3.json();
      // var responseNums4 = await fetch(newUrl4, { headers: headers });
      // responseNums4 = await responseNums4.json();

      for (let j = 0; j < 4; j++) {
        if (teams[j].station == "Red1") {
          redAlliance1Num.className = "numAlliances";
          redAlliance1Num.textContent = json.matches[i].teams[j].teamNumber;
          console.log(teams[j]);

          const newUrl = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[j].teamNumber}`;

          var responseNums = await fetch(newUrl, { headers: headers });
          responseNums = await responseNums.json();

          redAlliance1Name.className = "nameAlliances";
          redAlliance1Name.textContent = responseNums.teams[0].nameShort;
        } else if (teams[j].station == "Red2") {
          redAlliance2Num.className = "numAlliances";
          redAlliance2Num.textContent = json.matches[i].teams[j].teamNumber;

          const newUrl = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[j].teamNumber}`;

          var responseNums = await fetch(newUrl, { headers: headers });
          responseNums = await responseNums.json();

          redAlliance2Name.className = "nameAlliances";
          redAlliance2Name.textContent = responseNums.teams[0].nameShort;
        } else if (teams[j].station == "Blue1") {
          blueAlliance1Num.className = "numAlliances";
          blueAlliance1Num.textContent = json.matches[i].teams[j].teamNumber;

          const newUrl = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[j].teamNumber}`;

          var responseNums = await fetch(newUrl, { headers: headers });
          responseNums = await responseNums.json();

          blueAlliance1Name.className = "nameAlliances";
          blueAlliance1Name.textContent = responseNums.teams[0].nameShort;
        } else {
          blueAlliance2Num.className = "numAlliances";
          blueAlliance2Num.textContent = json.matches[i].teams[j].teamNumber;

          const newUrl = `https://ftc-api.firstinspires.org/v2.0/${yearIn}/teams/?teamNumber=${json.matches[i].teams[j].teamNumber}`;

          var responseNums = await fetch(newUrl, { headers: headers });
          responseNums = await responseNums.json();

          blueAlliance2Name.className = "nameAlliances";
          blueAlliance2Name.textContent = responseNums.teams[0].nameShort;
        }
      }

      const blueAlliance = document.createElement("div");
      blueAlliance.className = "blueAlliance";
      const redAlliance = document.createElement("div");
      redAlliance.className = "redAlliance";

      blueScoreHolder.append(blueScore);
      redScoreHolder.append(redScore);

      blueStats.append(blueScoreHolder);
      redStats.append(redScoreHolder);

      blueAlliance1.append(blueAlliance1Num);
      blueAlliance1.append(blueAlliance1Name);

      blueAlliance2.append(blueAlliance2Num);
      blueAlliance2.append(blueAlliance2Name);

      redAlliance1.append(redAlliance1Num);
      redAlliance1.append(redAlliance1Name);

      redAlliance2.append(redAlliance2Num);
      redAlliance2.append(redAlliance2Name);

      blueAlliance.append(blueAlliance1);
      blueAlliance.append(blueAlliance2);

      redAlliance.append(redAlliance1);
      redAlliance.append(redAlliance2);

      blueStats.append(blueAlliance);

      redStats.append(redAlliance);

      matchContainer.append(blueStats);
      matchContainer.append(redStats);

      matchesContainer.append(matchContainer);

      blueScore.textContent = json.matches[i].scoreBlueFinal;
      redScore.textContent = json.matches[i].scoreRedFinal;
    }
    searchBtn.className = "search-btn";
    searchBtn.textContent = "Search";
  } catch (error) {
    console.log(error);
  }
}
