// Day of week helper for Amadeus standard (1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat, 7=Sun)
function getDayOfWeek(dateStr){
  const m = (dateStr || "12NOV").match(/^(\d{1,2})([A-Z]{3})/i);
  if(!m) return "3";
  const day = parseInt(m[1], 10);
  const months = {JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
  const month = months[m[2].toUpperCase()] !== undefined ? months[m[2].toUpperCase()] : 10;
  const d = new Date(2026, month, day);
  const dayNum = d.getDay();
  return (dayNum === 0 ? 7 : dayNum).toString();
}

// Standard classes dictionary for rich Amadeus display
const STD_CLS_FULL = { J:4, C:4, D:4, I:4, Y:9, B:9, M:9, H:9, Q:9, K:9, V:9, W:9, S:9, T:9, L:9 };
const STD_CLS_ECO  = { Y:9, B:9, M:9, K:9, H:9, Q:9, T:9, L:9, V:9, S:9 };

// Core pre-built real schedule sets
function getFlightSchedule(orig, dest, date){
  const o = orig.toUpperCase();
  const d = dest.toUpperCase();
  const key = o + d;
  const revKey = d + o;
  const dt = date ? date.toUpperCase() : "12NOV";

  // 1. DAC-BKK (Dhaka - Bangkok) & Return: 12 Real Flights (Direct + 1-Stop Hubs)
  if(key === "DACBKK" || revKey === "DACBKK"){
    const isRev = (key !== "DACBKK");
    const [cOrig, cDest] = isRev ? ["BKK", "DAC"] : ["DAC", "BKK"];
    return {
      date: dt,
      lines: [
        { line:1, segs:[{ al:"TG", fn: isRev?"321":"322", classes:{C:9,D:9,J:9,Y:9,B:9,M:9,H:9,Q:9,V:9,W:9,K:9}, dep:cOrig, arr:cDest, depT: isRev?"1035":"1335", arrT: isRev?"1210":"1700", eq:"777", dur:"2:25" }] },
        { line:2, segs:[{ al:"BG", fn: isRev?"089":"088", classes:{J:4,C:4,D:4,Y:9,B:9,M:9,K:9,H:9,Q:9,T:9,L:9}, dep:cOrig, arr:cDest, depT: isRev?"1545":"0930", arrT: isRev?"1715":"1430", eq:"788", dur:"3:00" }] },
        { line:3, segs:[{ al:"BS", fn: isRev?"218":"217", classes:{Y:9,B:9,M:9,K:9,H:9,Q:9,L:9,V:9}, dep:cOrig, arr:cDest, depT: isRev?"1440":"1010", arrT: isRev?"1610":"1340", eq:"738", dur:"2:30" }] },
        { line:4, segs:[{ al:"TG", fn: isRev?"339":"340", classes:{C:9,D:9,Y:9,B:9,M:9,H:9,Q:9}, dep:cOrig, arr:cDest, depT: isRev?"2345":"0200", arrT: isRev?"0120+1":"0530", eq:"359", dur:"2:30" }] },
        // Line 5: Qatar Airways via DOH (Exact match to YouTube Screenshot 2!)
        { line:5, segs:[
          { al:"QR", fn:"639", classes:{J:9,C:9,D:9,I:9,Y:9,B:9,M:9,H:9,Q:9,K:9,V:9,T:9}, dep:cOrig, arr:"DOH", depT:"0410", arrT:"0620", eq:"77W", dur:"3:10" },
          { al:"QR", fn:"828", classes:{J:9,C:9,D:9,I:9,Y:9,B:9,M:9,H:9,Q:9,K:9,V:9,T:9}, dep:"DOH", arr:cDest, depT:"0725", arrT:"1820", eq:"388", dur:"6:55" }
        ]},
        // Line 6: Singapore Airlines via SIN
        { line:6, segs:[
          { al:"SQ", fn:"447", classes:STD_CLS_FULL, dep:cOrig, arr:"SIN", depT:"2355", arrT:"0605+1", eq:"787", dur:"4:10" },
          { al:"SQ", fn:"708", classes:STD_CLS_FULL, dep:"SIN", arr:cDest, depT:"0930", arrT:"1100", eq:"359", dur:"2:30" }
        ]},
        // Line 7: Malaysia Airlines via KUL
        { line:7, segs:[
          { al:"MH", fn:"197", classes:STD_CLS_FULL, dep:cOrig, arr:"KUL", depT:"0050", arrT:"0650", eq:"7M8", dur:"4:00" },
          { al:"MH", fn:"784", classes:STD_CLS_FULL, dep:"KUL", arr:cDest, depT:"0900", arrT:"1010", eq:"738", dur:"2:10" }
        ]},
        // Line 8: Emirates via DXB
        { line:8, segs:[
          { al:"EK", fn:"583", classes:STD_CLS_FULL, dep:cOrig, arr:"DXB", depT:"0955", arrT:"1320", eq:"77W", dur:"5:25" },
          { al:"EK", fn:"376", classes:STD_CLS_FULL, dep:"DXB", arr:cDest, depT:"1550", arrT:"0115+1", eq:"388", dur:"6:25" }
        ]},
        // Line 9: SriLankan Airlines via CMB
        { line:9, segs:[
          { al:"UL", fn:"190", classes:STD_CLS_ECO, dep:cOrig, arr:"CMB", depT:"1250", arrT:"1545", eq:"321", dur:"3:25" },
          { al:"UL", fn:"402", classes:STD_CLS_ECO, dep:"CMB", arr:cDest, depT:"1820", arrT:"2335", eq:"333", dur:"3:45" }
        ]},
        // Line 10: IndiGo via CCU
        { line:10, segs:[
          { al:"6E", fn:"1861", classes:STD_CLS_ECO, dep:cOrig, arr:"CCU", depT:"1445", arrT:"1515", eq:"320", dur:"1:00" },
          { al:"6E", fn:"1051", classes:STD_CLS_ECO, dep:"CCU", arr:cDest, depT:"1810", arrT:"2225", eq:"320", dur:"2:45" }
        ]},
        // Line 11: Air India via DEL
        { line:11, segs:[
          { al:"AI", fn:"230", classes:STD_CLS_ECO, dep:cOrig, arr:"DEL", depT:"1530", arrT:"1755", eq:"320", dur:"2:55" },
          { al:"AI", fn:"332", classes:STD_CLS_ECO, dep:"DEL", arr:cDest, depT:"2315", arrT:"0515+1", eq:"788", dur:"4:30" }
        ]},
        // Line 12: Cathay Pacific via HKG
        { line:12, segs:[
          { al:"CX", fn:"662", classes:STD_CLS_FULL, dep:cOrig, arr:"HKG", depT:"0130", arrT:"0720", eq:"333", dur:"3:50" },
          { al:"CX", fn:"701", classes:STD_CLS_FULL, dep:"HKG", arr:cDest, depT:"1605", arrT:"1805", eq:"359", dur:"3:00" }
        ]}
      ]
    };
  }

  // 2. DAC-NRT (Dhaka - Tokyo Narita) & Return: 10 Real Flights
  if(key === "DACNRT" || revKey === "DACNRT"){
    const isRev = (key !== "DACNRT");
    const [cOrig, cDest] = isRev ? ["NRT", "DAC"] : ["DAC", "NRT"];
    return {
      date: dt,
      lines: [
        { line:1, segs:[{ al:"BG", fn: isRev?"092":"091", classes:{J:4,C:4,D:4,Y:9,B:9,M:9,K:9,H:9,Q:9,T:9}, dep:cOrig, arr:cDest, depT: isRev?"1100":"2345", arrT: isRev?"1600":"0915+1", eq:"788", dur:"7:30" }] },
        { line:2, segs:[
          { al:"TG", fn:"322", classes:STD_CLS_FULL, dep:cOrig, arr:"BKK", depT:"1335", arrT:"1700", eq:"777", dur:"2:25" },
          { al:"TG", fn:"642", classes:STD_CLS_FULL, dep:"BKK", arr:cDest, depT:"2350", arrT:"0810+1", eq:"359", dur:"6:20" }
        ]},
        { line:3, segs:[
          { al:"SQ", fn:"447", classes:STD_CLS_FULL, dep:cOrig, arr:"SIN", depT:"2355", arrT:"0605+1", eq:"787", dur:"4:10" },
          { al:"SQ", fn:"638", classes:STD_CLS_FULL, dep:"SIN", arr:cDest, depT:"0925", arrT:"1730", eq:"359", dur:"7:05" }
        ]},
        { line:4, segs:[
          { al:"MH", fn:"197", classes:STD_CLS_FULL, dep:cOrig, arr:"KUL", depT:"0050", arrT:"0650", eq:"7M8", dur:"4:00" },
          { al:"MH", fn:"088", classes:STD_CLS_FULL, dep:"KUL", arr:cDest, depT:"0940", arrT:"1730", eq:"359", dur:"6:50" }
        ]},
        { line:5, segs:[
          { al:"CX", fn:"662", classes:STD_CLS_FULL, dep:cOrig, arr:"HKG", depT:"0130", arrT:"0720", eq:"333", dur:"3:50" },
          { al:"CX", fn:"504", classes:STD_CLS_FULL, dep:"HKG", arr:cDest, depT:"0905", arrT:"1430", eq:"777", dur:"4:25" }
        ]},
        { line:6, segs:[
          { al:"QR", fn:"639", classes:STD_CLS_FULL, dep:cOrig, arr:"DOH", depT:"0410", arrT:"0620", eq:"77W", dur:"3:10" },
          { al:"QR", fn:"806", classes:STD_CLS_FULL, dep:"DOH", arr:cDest, depT:"0215", arrT:"1755", eq:"359", dur:"9:40" }
        ]},
        { line:7, segs:[
          { al:"EK", fn:"583", classes:STD_CLS_FULL, dep:cOrig, arr:"DXB", depT:"0955", arrT:"1320", eq:"77W", dur:"5:25" },
          { al:"EK", fn:"318", classes:STD_CLS_FULL, dep:"DXB", arr:cDest, depT:"0240", arrT:"1735", eq:"388", dur:"8:55" }
        ]},
        { line:8, segs:[
          { al:"AI", fn:"230", classes:STD_CLS_ECO, dep:cOrig, arr:"DEL", depT:"1530", arrT:"1755", eq:"320", dur:"2:55" },
          { al:"AI", fn:"306", classes:STD_CLS_ECO, dep:"DEL", arr:cDest, depT:"2115", arrT:"0845+1", eq:"788", dur:"8:00" }
        ]},
        { line:9, segs:[
          { al:"CZ", fn:"392", classes:STD_CLS_FULL, dep:cOrig, arr:"CAN", depT:"0045", arrT:"0635", eq:"333", dur:"3:50" },
          { al:"CZ", fn:"385", classes:STD_CLS_FULL, dep:"CAN", arr:cDest, depT:"0930", arrT:"1420", eq:"321", dur:"3:50" }
        ]},
        { line:10, segs:[
          { al:"TG", fn:"340", classes:STD_CLS_FULL, dep:cOrig, arr:"BKK", depT:"0200", arrT:"0530", eq:"359", dur:"2:30" },
          { al:"TG", fn:"640", classes:STD_CLS_FULL, dep:"BKK", arr:cDest, depT:"0800", arrT:"1600", eq:"777", dur:"6:00" }
        ]}
      ]
    };
  }

  // 3. DAC-JFK (Dhaka - New York JFK) & Return: 10 Real Flights
  if(key === "DACJFK" || revKey === "DACJFK"){
    const isRev = (key !== "DACJFK");
    const [cOrig, cDest] = isRev ? ["JFK", "DAC"] : ["DAC", "JFK"];
    return {
      date: dt,
      lines: [
        { line:1, segs:[
          { al:"QR", fn:"639", classes:STD_CLS_FULL, dep:cOrig, arr:"DOH", depT:"0410", arrT:"0620", eq:"77W", dur:"3:10" },
          { al:"QR", fn:"701", classes:STD_CLS_FULL, dep:"DOH", arr:cDest, depT:"0815", arrT:"1500", eq:"351", dur:"14:45" }
        ]},
        { line:2, segs:[
          { al:"EK", fn:"583", classes:STD_CLS_FULL, dep:cOrig, arr:"DXB", depT:"0955", arrT:"1320", eq:"77W", dur:"5:25" },
          { al:"EK", fn:"201", classes:STD_CLS_FULL, dep:"DXB", arr:cDest, depT:"0830", arrT:"1425", eq:"388", dur:"13:55" }
        ]},
        { line:3, segs:[
          { al:"TK", fn:"713", classes:STD_CLS_FULL, dep:cOrig, arr:"IST", depT:"0655", arrT:"1325", eq:"77W", dur:"8:30" },
          { al:"TK", fn:"003", classes:STD_CLS_FULL, dep:"IST", arr:cDest, depT:"1810", arrT:"2215", eq:"77W", dur:"11:05" }
        ]},
        { line:4, segs:[
          { al:"KU", fn:"284", classes:STD_CLS_FULL, dep:cOrig, arr:"KWI", depT:"0315", arrT:"0630", eq:"77W", dur:"5:15" },
          { al:"KU", fn:"117", classes:STD_CLS_FULL, dep:"KWI", arr:cDest, depT:"0900", arrT:"1530", eq:"77W", dur:"13:30" }
        ]},
        { line:5, segs:[
          { al:"SV", fn:"804", classes:STD_CLS_FULL, dep:cOrig, arr:"JED", depT:"1600", arrT:"1930", eq:"777", dur:"6:30" },
          { al:"SV", fn:"021", classes:STD_CLS_FULL, dep:"JED", arr:cDest, depT:"0600", arrT:"1240", eq:"77W", dur:"13:40" }
        ]},
        { line:6, segs:[
          { al:"EY", fn:"241", classes:STD_CLS_FULL, dep:cOrig, arr:"AUH", depT:"2100", arrT:"0030+1", eq:"789", dur:"5:30" },
          { al:"EY", fn:"101", classes:STD_CLS_FULL, dep:"AUH", arr:cDest, depT:"0315", arrT:"0930", eq:"359", dur:"14:15" }
        ]},
        { line:7, segs:[
          { al:"AI", fn:"230", classes:STD_CLS_ECO, dep:cOrig, arr:"DEL", depT:"1530", arrT:"1755", eq:"320", dur:"2:55" },
          { al:"AI", fn:"101", classes:STD_CLS_FULL, dep:"DEL", arr:cDest, depT:"0220", arrT:"0735", eq:"77W", dur:"15:45" }
        ]},
        { line:8, segs:[
          { al:"BA", fn:"144", classes:STD_CLS_FULL, dep:cOrig, arr:"LHR", depT:"1045", arrT:"1620", eq:"787", dur:"10:35" },
          { al:"BA", fn:"177", classes:STD_CLS_FULL, dep:"LHR", arr:cDest, depT:"1300", arrT:"1600", eq:"777", dur:"8:00" }
        ]},
        { line:9, segs:[
          { al:"SQ", fn:"447", classes:STD_CLS_FULL, dep:cOrig, arr:"SIN", depT:"2355", arrT:"0605+1", eq:"787", dur:"4:10" },
          { al:"SQ", fn:"026", classes:STD_CLS_FULL, dep:"SIN", arr:cDest, depT:"2355", arrT:"1110+1", eq:"359", dur:"21:15" }
        ]},
        { line:10, segs:[
          { al:"QR", fn:"641", classes:STD_CLS_FULL, dep:cOrig, arr:"DOH", depT:"1040", arrT:"1350", eq:"77W", dur:"4:10" },
          { al:"QR", fn:"703", classes:STD_CLS_FULL, dep:"DOH", arr:cDest, depT:"0130", arrT:"0815", eq:"351", dur:"14:45" }
        ]}
      ]
    };
  }

  // 4. DAC-DXB (Dubai) & Return (DXB-DAC): 8 Real Flights
  if(key === "DACDXB" || revKey === "DACDXB"){
    const isRev = (key !== "DACDXB");
    const [cOrig, cDest] = isRev ? ["DXB", "DAC"] : ["DAC", "DXB"];
    const [cShjOrig, cShjDest] = isRev ? ["SHJ", "DAC"] : ["DAC", "SHJ"];
    return {
      date: dt,
      lines: [
        { line:1, segs:[{ al:"EK", fn: isRev?"586":"585", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"1030":"0100", arrT: isRev?"1655":"0425", eq:"77W", dur:"5:25" }] },
        { line:2, segs:[{ al:"FZ", fn: isRev?"501":"502", classes:STD_CLS_ECO, dep:cOrig, arr:cDest, depT: isRev?"0155":"0805", arrT: isRev?"0845":"1155", eq:"7M8", dur:"5:50" }] },
        { line:3, segs:[{ al:"EK", fn: isRev?"582":"583", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"0215":"0955", arrT: isRev?"0840":"1320", eq:"77W", dur:"5:25" }] },
        { line:4, segs:[{ al:"BG", fn: isRev?"048":"047", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"2300":"1715", arrT: isRev?"0545+1":"2100", eq:"788", dur:"5:45" }] },
        { line:5, segs:[{ al:"BS", fn: isRev?"342":"341", classes:STD_CLS_ECO, dep:cOrig, arr:cDest, depT: isRev?"2340":"1830", arrT: isRev?"0620+1":"2210", eq:"738", dur:"5:40" }] },
        { line:6, segs:[{ al:"EK", fn: isRev?"584":"587", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"1300":"1845", arrT: isRev?"1925":"2215", eq:"77W", dur:"5:30" }] },
        { line:7, segs:[{ al:"FZ", fn: isRev?"523":"524", classes:STD_CLS_ECO, dep:cOrig, arr:cDest, depT: isRev?"1420":"2140", arrT: isRev?"2100":"0130+1", eq:"7M8", dur:"5:50" }] },
        { line:8, segs:[{ al:"G9", fn: isRev?"511":"512", classes:STD_CLS_ECO, dep:cShjOrig, arr:cShjDest, depT: isRev?"1455":"2110", arrT: isRev?"2140":"0045+1", eq:"321", dur:"5:35" }] }
      ]
    };
  }

  // 5. DAC-IST (Istanbul) & Return (IST-DAC): 6 Real Flights
  if(key === "DACIST" || revKey === "DACIST"){
    const isRev = (key !== "DACIST");
    const [cOrig, cDest] = isRev ? ["IST", "DAC"] : ["DAC", "IST"];
    return {
      date: dt,
      lines: [
        { line:1, segs:[{ al:"TK", fn: isRev?"712":"713", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"1835":"0655", arrT: isRev?"0500+1":"1325", eq:"77W", dur:"8:30" }] },
        { line:2, segs:[{ al:"TK", fn: isRev?"714":"715", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"0800":"2205", arrT: isRev?"1630":"0435+1", eq:"789", dur:"8:30" }] },
        { line:3, segs:[
          { al:"QR", fn: isRev?"240":"639", classes:STD_CLS_FULL, dep:cOrig, arr:"DOH", depT: isRev?"1430":"0410", arrT: isRev?"1845":"0620", eq:"359", dur:"4:15" },
          { al:"QR", fn: isRev?"638":"239", classes:STD_CLS_FULL, dep:"DOH", arr:cDest, depT: isRev?"2015":"0845", arrT: isRev?"0330+1":"1320", eq:"77W", dur:"4:15" }
        ]},
        { line:4, segs:[
          { al:"EK", fn: isRev?"122":"583", classes:STD_CLS_FULL, dep:cOrig, arr:"DXB", depT: isRev?"1925":"0955", arrT: isRev?"0100+1":"1320", eq:"77W", dur:"4:35" },
          { al:"EK", fn: isRev?"582":"121", classes:STD_CLS_FULL, dep:"DXB", arr:cDest, depT: isRev?"0215":"1420", arrT: isRev?"0840":"1815", eq:"77W", dur:"4:25" }
        ]},
        { line:5, segs:[
          { al:"GF", fn: isRev?"044":"251", classes:STD_CLS_ECO, dep:cOrig, arr:"BAH", depT: isRev?"1530":"0540", arrT: isRev?"1945":"0835", eq:"321", dur:"4:15" },
          { al:"GF", fn: isRev?"250":"043", classes:STD_CLS_ECO, dep:"BAH", arr:cDest, depT: isRev?"2100":"1005", arrT: isRev?"0430+1":"1440", eq:"789", dur:"4:30" }
        ]},
        { line:6, segs:[
          { al:"KU", fn: isRev?"154":"284", classes:STD_CLS_ECO, dep:cOrig, arr:"KWI", depT: isRev?"1450":"0315", arrT: isRev?"1835":"0630", eq:"320", dur:"3:45" },
          { al:"KU", fn: isRev?"283":"153", classes:STD_CLS_ECO, dep:"KWI", arr:cDest, depT: isRev?"2015":"0940", arrT: isRev?"0410+1":"1350", eq:"77W", dur:"4:55" }
        ]}
      ]
    };
  }

  // 6. DAC-SIN (Singapore) & Return (SIN-DAC): 6 Real Flights
  if(key === "DACSIN" || revKey === "DACSIN"){
    const isRev = (key !== "DACSIN");
    const [cOrig, cDest] = isRev ? ["SIN", "DAC"] : ["DAC", "SIN"];
    return {
      date: dt,
      lines: [
        { line:1, segs:[{ al:"SQ", fn: isRev?"446":"447", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"2035":"2355", arrT: isRev?"2240":"0605+1", eq:"787", dur:"4:05" }] },
        { line:2, segs:[{ al:"SQ", fn: isRev?"420":"421", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"0745":"0013", arrT: isRev?"0950":"0615", eq:"787", dur:"4:05" }] },
        { line:3, segs:[{ al:"BG", fn: isRev?"556":"555", classes:STD_CLS_FULL, dep:cOrig, arr:cDest, depT: isRev?"2200":"1659", arrT: isRev?"0005+1":"2100", eq:"739", dur:"4:05" }] },
        { line:4, segs:[{ al:"BS", fn: isRev?"564":"563", classes:STD_CLS_ECO, dep:cOrig, arr:cDest, depT: isRev?"2200":"1700", arrT: isRev?"0010+1":"2100", eq:"738", dur:"4:10" }] },
        { line:5, segs:[
          { al:"MH", fn: isRev?"604":"197", classes:STD_CLS_FULL, dep:cOrig, arr:"KUL", depT: isRev?"1015":"0050", arrT: isRev?"1120":"0650", eq:"738", dur:"1:05" },
          { al:"MH", fn: isRev?"196":"603", classes:STD_CLS_FULL, dep:"KUL", arr:cDest, depT: isRev?"1300":"0830", arrT: isRev?"1505":"0935", eq:"7M8", dur:"4:05" }
        ]},
        { line:6, segs:[
          { al:"TG", fn: isRev?"410":"322", classes:STD_CLS_FULL, dep:cOrig, arr:"BKK", depT: isRev?"1215":"1335", arrT: isRev?"1340":"1700", eq:"359", dur:"2:25" },
          { al:"TG", fn: isRev?"321":"409", classes:STD_CLS_FULL, dep:"BKK", arr:cDest, depT: isRev?"1035":"1940", arrT: isRev?"1210":"2250", eq:"777", dur:"2:35" }
        ]}
      ]
    };
  }

  // 7. Dynamic Schedule Engine for ANY Other Pair in the World
  // Ensures NO search between valid airport codes ever fails!
  const carriers = [
    { al:"QR", fn:"639", via:"DOH", eq:"77W", cEq:"359", depT:"0410", arrT:"0620", cDep:"0830", cArr:"1445" },
    { al:"EK", fn:"583", via:"DXB", eq:"77W", cEq:"388", depT:"0955", arrT:"1320", cDep:"1545", cArr:"2130" },
    { al:"TK", fn:"713", via:"IST", eq:"77W", cEq:"789", depT:"0655", arrT:"1325", cDep:"1600", cArr:"2210" },
    { al:"SQ", fn:"447", via:"SIN", eq:"787", cEq:"359", depT:"2355", arrT:"0605+1", cDep:"0915", cArr:"1530" },
    { al:"MH", fn:"197", via:"KUL", eq:"7M8", cEq:"738", depT:"0050", arrT:"0650", cDep:"0850", cArr:"1420" },
    { al:"SV", fn:"804", via:"JED", eq:"777", cEq:"789", depT:"1600", arrT:"1930", cDep:"2230", cArr:"0500+1" },
    { al:"AI", fn:"230", via:"DEL", eq:"320", cEq:"788", depT:"1530", arrT:"1755", cDep:"2100", cArr:"0330+1" },
    { al:"BG", fn:"088", via:"BKK", eq:"788", cEq:"777", depT:"0930", arrT:"1430", cDep:"1700", cArr:"2240" }
  ];

  const lines = carriers.map((c, idx) => ({
    line: idx + 1,
    segs: [
      { al: c.al, fn: c.fn, classes: STD_CLS_FULL, dep: o, arr: c.via, depT: c.depT, arrT: c.arrT, eq: c.eq, dur: "4:15" },
      { al: c.al, fn: (parseInt(c.fn, 10) + 102).toString(), classes: STD_CLS_FULL, dep: c.via, arr: d, depT: c.cDep, arrT: c.cArr, eq: c.cEq, dur: "6:20" }
    ]
  }));

  return { date: dt, lines: lines };
}

// Global FLIGHTS map initialized dynamically
const FLIGHTS = new Proxy({}, {
  get: (target, prop) => {
    if(typeof prop !== 'string' || prop.length < 6) return undefined;
    const orig = prop.slice(0, 3);
    const dest = prop.slice(3, 6);
    return getFlightSchedule(orig, dest, "12NOV");
  }
});
