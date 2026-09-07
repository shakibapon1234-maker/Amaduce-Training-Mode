const OFFICE_ID = "DACVS3334";
// ---------- Lesson Training PNR (Turkish Airlines - J99GZO) ----------
const LESSON_PNR = {
  locator: "J99GZO",
  officeId: "DACVS3334",
  agentCode: "BS/GS",
  dateStamp: "13NOV24/1435Z",
  passengers: [
    { type: 'adult', label: "AHMED/MD AMIR MR", nameDisplay: "AHMED Md Amir", code: "P1" },
    { type: 'child', label: "AHMED/MD ISMAIL MSTR(CHD/08SEP16)", nameDisplay: "AHMED Md Ismail", code: "P2", dob: "08SEP16" },
    { type: 'infantCarrier', label: "BEGUM/AKLIMA MS(INFISLAM/SANJIDA MISS/25MAR24)", nameDisplay: "BEGUM Aklima", code: "P3",
      infant: { surname: "ISLAM", first: "SANJIDA", title: "MISS", dob: "25MAR24", display: "ISLAM Sanjida (Mar 25, 2024)" } }
  ],
  segments: [
    { al:"TK", fn:"713",  cls:"Y", date:"25MAR", day:"2*", dep:"DAC", arr:"IST", status:"HK", count:3, depT:"0655", arrT:"1325", eq:"77W", tktCode:"TK/VB7BHH", fullDate:"Mar 25, 2025" },
    { al:"TK", fn:"1971", cls:"Y", date:"25MAR", day:"2*", dep:"IST", arr:"LHR", status:"HK", count:3, depT:"1500", arrT:"1610", eq:"321", tktCode:"TK/VB7BHH", fullDate:"Mar 25, 2025" },
    { al:"TK", fn:"1988", cls:"Y", date:"30MAR", day:"7*", dep:"LHR", arr:"IST", status:"HK", count:3, depT:"0630", arrT:"1235", eq:"321", tktCode:"TK/VB7BHH", fullDate:"Mar 30, 2025" },
    { al:"TK", fn:"712",  cls:"Y", date:"30MAR", day:"7*", dep:"IST", arr:"DAC", status:"HK", count:3, depT:"1835", arrT:"0500", eq:"77W", tktCode:"TK/VB7BHH", fullDate:"Mar 30, 2025" }
  ],
  phone: "DAC AGT ITC CEL 01975481616 REF BAYEZID",
  ticketing: "TL13NOV/DACVS3334",
  finalized: true,
  showOths: true,
  showFE: true,
  seats: {},
  // Special Service Requests â€” pre-loaded to match the full lesson video PNR
  specialSSRs: [
    { type:'CTCE', al:'TK', status:'HK1', value:'BAYEZID.SARDAR//GMAIL.COM', pax:'P1' },
    { type:'CTCM', al:'TK', status:'HK1', value:'008801975481616',            pax:'P1' },
    { type:'CTCE', al:'TK', status:'HK1', value:'BAYEZID//GMAIL.COM',         pax:'P2' },
    { type:'CTCE', al:'TK', status:'HK1', value:'BAYEZID//GMAIL.COM',         pax:'P3' },
    { type:'CTCM', al:'TK', status:'HK1', value:'008801975481616',            pax:'P2' },
    { type:'CTCM', al:'TK', status:'HK1', value:'008801975481616',            pax:'P3' },
    { type:'CHML', al:'TK', status:'NN1', allSegs:true, pax:'P2' },
    { type:'BBML', al:'TK', status:'NN1', allSegs:true, pax:'P3' },
    { type:'BSCT', al:'TK', status:'NN1', allSegs:true, pax:'P3' }
  ],
  osiEntries: [
    { al:'TK', text:'VIP MINISTER M/O INFORMATION', pax:'P1' }
  ],
  hasPending: false
};

// ---------- Thai Airways Training PNR (Matching Screenshot 1 - OGJZJ9) ----------
const THAI_PNR = {
  locator: "OGJZJ9",
  officeId: "DACVS31XW",
  agentCode: "BP/AS",
  dateStamp: "1JUL18/0930Z",
  headerLine2: "DACVS31XW/4455BP/1JUL18",
  passengers: [
    { type: 'child', label: "AHMED/KARIM MSTR(CHD/01FEB14)", nameDisplay: "AHMED Karim", code: "P1", dob: "01FEB14" },
    { type: 'infantCarrier', label: "AHMED/SHAMIMA MRS(INFAHMED/TAHERA MISS/19JAN18)", nameDisplay: "AHMED Shamima", code: "P2",
      infant: { surname: "AHMED", first: "TAHERA", title: "MISS", dob: "19JAN18", display: "AHMED Tahera (Jan 19, 2018)" } }
  ],
  segments: [
    { al:"TG", fn:"322", cls:"W", date:"12OCT", day:"5", dep:"DAC", arr:"BKK", status:"HK", count:2, depT:"1335", arrT:"1700", arrDate:"12OCT", eq:"777", tktCode:"TG/OGJZJ9", fullDate:"Oct 12, 2018" },
    { al:"TG", fn:"321", cls:"W", date:"20OCT", day:"6", dep:"BKK", arr:"DAC", status:"HK", count:2, depT:"1035", arrT:"1210", arrDate:"20OCT", eq:"777", tktCode:"TG/OGJZJ9", fullDate:"Oct 20, 2018" }
  ],
  phone: "XYZ 12345678 C/O MR Z",
  ticketing: "OK01JUL/DACVS31XW",
  finalized: true,
  hasTST: true,
  fop: "INV",
  showOths: false,
  showFE: false,
  seats: {},
  tstRecords: [
    { tstNum: 1, pCode: '.1', name: 'AHMED/KARIM', fare: 13529, tax: 6084, total: 19613, ptc: 'CH', segs: '3-4' },
    { tstNum: 2, pCode: '.2', name: 'AHMED/SHAMIMA', fare: 13529, tax: 7584, total: 21113, ptc: 'ADT', segs: '3-4' },
    { tstNum: 3, pCode: '.2 I', name: 'AHMED/TAHERA(INF)', fare: 6640, tax: 252, total: 6892, ptc: 'IN', segs: '3-4' }
  ],
  specialSSRs: [
    { type:'MOML', al:'TG', status:'HK1', allSegs:true, pax:'P2' },
    { type:'CHML', al:'TG', status:'HK1', allSegs:true, pax:'P1' },
    { type:'BBML', al:'TG', status:'HK1', allSegs:true, pax:'P2' },
    { type:'BSCT', al:'TG', status:'HN1', allSegs:true, pax:'P2' }
  ],
  opwRemarks: [
    "OPW-03JUL:1600/1C7/TG REQUIRES TICKET ON OR BEFORE\n       04JUL:1600/S3-4"
  ],
  osiEntries: [],
  hasPending: false
};

// Current Session State
let state = JSON.parse(JSON.stringify(LESSON_PNR));
let activeSegIdx = 0;
let activePaxCode = "P1"; // currently assigning for this passenger

function loadThaiAirwaysPNR(){
  state = JSON.parse(JSON.stringify(THAI_PNR));
  activeSegIdx = 0;
  activePaxCode = "P1";
  term.innerHTML = '';
  printPromptEcho("RT OGJZJ9");
  renderPNR();
  mountInput();
  showToast("Loaded Thai Airways PNR OGJZJ9 (Screenshot 1)");
}

// ---------- Jhony Training PNR (Matching Screenshot 1 & 2 - ICRBPO) ----------
const JHONY_PNR = {
  locator: "ICRBPO",
  officeId: "DACVS31XW",
  agentCode: "BP/AS",
  dateStamp: "17JUN26/1324Z",
  headerLine2: "DACVS31XW/4455BP/17JUN26",
  passengers: [
    { type: 'adult', label: "JHONY/MD MR Male", nameDisplay: "MR MD JHONY", code: "P1" }
  ],
  segments: [
    { al:"BG", fn:"555", cls:"Y", date:"25JUL", day:"7", dep:"DAC", arr:"SIN", status:"DK", count:1, depT:"1659", arrT:"2059", arrDate:"25JUL", eq:"739", tktCode:"BG/54FHGK", fullDate:"2026-07-25" }
  ],
  phone: "DAC JHONY TECH TRAVEL CTC0505793144",
  ticketing: "OK18JUN/DACVS31XW",
  commission: "7%",
  finalized: true,
  hasTST: true,
  fop: "INV",
  showOths: false,
  showFE: false,
  seats: {},
  tstRecords: [
    { tstNum: 1, pCode: '.1', name: 'JHONY/MD MR', fare: 30000, tax: 0, total: 30000, ptc: 'ADT', segs: '3' }
  ],
  specialSSRs: [],
  opwRemarks: [],
  osiEntries: [],
  hasPending: false
};

function loadJhonyPNR(){
  state = JSON.parse(JSON.stringify(JHONY_PNR));
  activeSegIdx = 0;
  activePaxCode = "P1";
  term.innerHTML = '';
  printPromptEcho("RT ICRBPO");
  renderPNR();
  mountInput();
  showToast("Loaded JHONY PNR ICRBPO (Screenshot 1)");
}

const term = document.getElementById('term');
const seatmapOverlay = document.getElementById('seatmapOverlay');
const segmentSelect = document.getElementById('segmentSelect');
const seatTooltip = document.getElementById('seatTooltip');

function esc(s){ return (s+"").replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

function printRaw(html){
  const d = document.createElement('div');
  d.className = 'out';
  d.innerHTML = html;
  term.appendChild(d);
  term.scrollTop = term.scrollHeight;
}
function printLines(lines, cls){
  printRaw(lines.map(l => `<div class="line ${cls||''}">${l}</div>`).join(''));
}
function printPromptEcho(cmd){
  printRaw(`<div class="line prompt-line"><span class="chevron">&gt;</span> ${esc(cmd)}</div>`);
}

// Render PNR exactly matching Screenshot 1 with clickable booking class links
// Helper to render authentic Amadeus building segment lines with mandatory advisory lines (Screenshot 1)
function formatSegmentBuildingLines(seg, sIdx, totalSegs, segLineNum){
  const lines = [];
  const sNum = segLineNum.toString().padStart(2, ' ');
  const classLink = `<span class="seg-class-link" onclick="openSeatMap(${sIdx})" title="Click to view Seat Map for this flight (${seg.al} ${seg.fn})">${seg.cls}</span>`;

  let connCol = '       ';
  if(totalSegs > 1){
    connCol = (sIdx === 0) ? '       1  ' : '          ';
  }

  const eq = seg.eq || '77W';
  const depT = seg.depT || '0000';
  const arrT = seg.arrT || '0000';
  const timeStr = `${depT} ${arrT}`;
  const timeSpacing = arrT.includes('+') ? '  ' : '   ';
  const dateStr = seg.date || '12NOV';
  const dayStr = seg.day || getDayOfWeek(dateStr);
  const fnPadded = seg.fn.toString().length < 4 ? seg.fn.toString().padStart(3, ' ') : seg.fn.toString();

  // Primary flight segment line (Exact alignment matching Amadeus Screenshot 1)
  lines.push(
    `${sNum}  <span class="al">${seg.al} ${fnPadded}</span> ${classLink} ${dateStr} ${dayStr} ${seg.dep}${seg.arr} ${seg.status || 'HK'}${seg.count || 1}${connCol}${timeStr}${timeSpacing}${eq} E 0 M`
  );

  // Mandatory advisory lines (Matches real Amadeus Screenshot 1 for all airlines)
  lines.push(`    MANDATORY REQUIRED DOCS DOCO DOCA CTCM CTCE`);
  lines.push(`    PLS ENTER SSR CTCM OR CTCE FOR IROP ALERTS`);

  // Starlink in-flight connectivity line
  if(['77W', '787', '359'].includes(eq) && (sIdx === 0 || seg.al === 'SQ' || (seg.al === 'QR' && eq === '77W'))){
    lines.push(`    STARLINK ENABLED`);
  }

  // Real Amadeus service routing line
  lines.push(`    SEE RTSVC`);

  return lines;
}

function renderPNR(header){
  const rows = [];

  // ---------- OSI lines appear ABOVE the RLR header in real Amadeus ----------
  const osiList = state.osiEntries || [];
  osiList.forEach(o=>{
    rows.push(`<span class="warn">OSI: ${esc(o.al)} ${esc(o.text)}/${esc(o.pax)}</span>`);
  });

  // If any pending changes, show the Amadeus parallel-process warning
  if(state.hasPending){
    rows.push(`<span class="warn">PNR UPDATED BY PARALLEL PROCESS-PLEASE VERIFY PNR CONTENT</span>`);
    state.hasPending = false; // clear after display
  }

  const isBuilding = !state.locator && !state.finalized;

  if(header) {
    rows.push(header);
  } else if(isBuilding) {
    const currOffice = state.officeId || OFFICE_ID;
    rows.push(`RP/${currOffice}/`);
  } else {
    const rlrHeader = state.hasTST ? `--- TST RLR ---` : `--- RLR MSC ---`;
    rows.push(rlrHeader);
    const currOffice = state.officeId || OFFICE_ID;
    const agCode = state.agentCode || (state.locator === 'OGJZJ9' ? 'BP/AS' : 'BS/GS');
    rows.push(`RP/${currOffice}/${currOffice}          ${agCode}   ${state.dateStamp||"13NOV24/1435Z"}   <span class="locator">${state.locator||"J99GZO"}</span>`);
    if(state.headerLine2){
      rows.push(state.headerLine2);
    }
  }

  let idx = 1;
  // Passenger Lines (building mode uses space-padded single-digit " 1.NAME" matching Screenshot 1)
  if(isBuilding){
    state.passengers.forEach((p, i)=>{
      const pNum = (i + 1).toString().padStart(2, ' ');
      rows.push(`<span class="name">${pNum}.${esc(p.label)}</span>`);
      idx++;
    });
  } else {
    let paxLine = "";
    state.passengers.forEach((p, i)=>{
      const pNum = i + 1;
      const str = `<span class="name">${pNum}</span>.<span class="name">${esc(p.label)}</span> `;
      if(i === 0) paxLine += str;
      else if(i === 1) { paxLine += str; rows.push(paxLine.trim()); paxLine = ""; }
      else { rows.push(str.trim()); }
    });
    if(paxLine) rows.push(paxLine.trim());
    idx = state.passengers.length + 1;
  }

  // Segment Lines with interactive class triggers
  const totalSegs = state.segments ? state.segments.length : 0;
  state.segments.forEach((seg, sIdx)=>{
    const segLineNum = idx++;
    const classLink = `<span class="seg-class-link" onclick="openSeatMap(${sIdx})" title="Click to view Seat Map for this flight (${seg.al} ${seg.fn})">${seg.cls}</span>`;

    if(isBuilding){
      const segLines = formatSegmentBuildingLines(seg, sIdx, totalSegs, segLineNum);
      segLines.forEach(l => rows.push(l));
    } else {
      const segTkt = seg.tktCode || "TK/VB7BHH";
      const day = seg.day || "2*";
      const dateStr = seg.date || "25MAR";
      const arrDateStr = seg.arrDate || dateStr;

      rows.push(
        `${segLineNum.toString().padStart(2, ' ')}  ` +
        `<span class="al">${seg.al} ${seg.fn}</span> ` +
        `${classLink} ${dateStr} ${day}${seg.dep}${seg.arr} ` +
        `${seg.status}${seg.count}  ${seg.depT} ${seg.arrT}  ${arrDateStr}  E  ${segTkt}`
      );
    }
  });

  // AP
  if(state.phone) {
    rows.push(`${idx.toString().padStart(2, ' ')}  AP ${esc(state.phone)}`);
    idx++;
  }

  // TK
  if(state.ticketing) {
    rows.push(`${idx.toString().padStart(2, ' ')}  TK ${esc(state.ticketing)}`);
    idx++;
  }

  // ---------- SSR CHLD (one line per child passenger) ----------
  state.passengers.forEach((p, pi)=>{
    if(p.type === 'child'){
      const al = (state.segments[0] && state.segments[0].al) || 'TK';
      rows.push(`${idx.toString().padStart(2, ' ')}  SSR CHLD ${al} HK1 ${p.dob}/P${pi+1}`);
      idx++;
    }
  });

  // ---------- SSR INFT (one line per segment per infant-carrying adult) ----------
  state.passengers.forEach((p, pi)=>{
    if(p.type === 'infantCarrier'){
      const al = (state.segments[0] && state.segments[0].al) || 'TK';
      state.segments.forEach((seg, si)=>{
        const infName = `${p.infant.surname}/${p.infant.first}${p.infant.title}`.replace(/\s+/g, '');
        const segNum = si + 3;
        rows.push(`${idx.toString().padStart(2, ' ')}  SSR INFT ${al} HK1 ${infName} ${p.infant.dob}/S${segNum}/P${pi+1}`);
        idx++;
      });
    }
  });

  if(state.showOths){
    // ---------- SSR OTHS standard informational lines ----------
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR OTHS 1A PLEASE ADVISE FQTV NUMBER IF AVAILABLE`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR OTHS 1A PLS ADV PSGR MOBILE AND/OR EMAIL AS SSR CTCM/CTCE`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR OTHS 1A DOCS CTCM CTCE ARE MANDATORY FOR TICKETING`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR OTHS 1A PLS ENTER DOCS CTCM AND CTCE FIELDS WTH SSR`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR OTHS 1A FOR DOCS FIELD DOB GENDER NAME FIELDS ARE\n       REQUIRED`); idx++;

    // ---------- SSR ADTK (ticketing deadline advisory) ----------
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR ADTK 1A TO TK BY 16NOV 2021 IRC-2/ADV OTO TKT`); idx++;
  }

  // ---------- Special SSRs: CTCE / CTCM / CHML / BBML / BSCT ----------
  const specialList = state.specialSSRs || [];

  // First: CTCE and CTCM (contact SSRs â€” one line per passenger each)
  specialList.filter(s => s.type === 'CTCE' || s.type === 'CTCM').forEach(s=>{
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR ${s.type} ${s.al} ${s.status} ${s.value}/${s.pax}`);
    idx++;
  });

  // Then: All IATA Meal codes (MOML, CHML, BBML, BSCT, AVML, VGML, etc.) â€” per-segment SSRs
  const ALL_MEAL_CODES = [
    'MOML', 'CHML', 'BBML', 'BSCT', 'AVML', 'BLML', 'CNML', 'DBML', 'FPML', 'GFML',
    'HNML', 'IVML', 'JPML', 'KSML', 'LCML', 'LFML', 'LSML', 'NFML', 'NLML', 'OBML',
    'ORML', 'RVML', 'SFML', 'SPML', 'VGML', 'VLML', 'VOML'
  ];
  ALL_MEAL_CODES.forEach(ssrType=>{
    specialList.filter(s => s.type === ssrType && s.allSegs).forEach(s=>{
      state.segments.forEach((seg, si)=>{
        const al = seg.al || s.al || 'TG';
        const st = s.status || 'HK1';
        const segNum = si + 3; // S3, S4... matches Screenshot 4
        rows.push(`${idx.toString().padStart(2, ' ')}  SSR ${ssrType} ${al} ${st}/S${segNum}/${s.pax}`);
        idx++;
      });
    });
  });

  // ---------- SSR WCHR / WCHS / WCHC (wheelchair) â€” per-segment with free text ----------
  specialList.filter(s => ['WCHR','WCHS','WCHC'].includes(s.type)).forEach(s=>{
    state.segments.forEach((seg, si)=>{
      // Format: SSR WCHR TK NN1 NONMEDA/ELDERLY UNABLE TO WALK LONG DISTANCE /S4/P1
      rows.push(`${idx.toString().padStart(2, ' ')}  SSR ${s.type} ${s.al} ${s.status} ${esc(s.text)} /S${si+4}/${s.pax}`);
      idx++;
    });
  });

  // ---------- SSR SEAT assignments (if seats were booked in the seat map) ----------
  if(state.seats) {
    Object.entries(state.seats).forEach(([sIdx, paxMap])=>{
      const seg = state.segments[parseInt(sIdx,10)];
      if(seg){
        Object.entries(paxMap).forEach(([pCode, seatCode])=>{
          rows.push(`${idx.toString().padStart(2, ' ')}  SSR SEAT ${seg.al} HK1 ${seg.dep}${seg.arr} ${seatCode}/${pCode}/S${parseInt(sIdx,10)+4}`);
          idx++;
        });
      }
    });
  }

  // ---------- SSR DOCS (Passports / Travel Documents) ----------
  const docsList = state.docsEntries || [];
  docsList.forEach(d => {
    // Amadeus standard format (Screenshot 2):
    // SSR DOCS QR HK1 P/BGD/AP3476898/BGD/19OCT90/M/23OCT23/KHAN/ARAFAT (or /P1, /P2, /P3)
    const paxSuffix = (state.passengers.length > 1 || d.pax !== 'P1') ? `/${d.pax}` : '';
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR DOCS ${d.airline} ${d.action} ${d.docType}/${d.country}/${d.docNumber}/${d.nationality}/${d.dob}/${d.gender}/${d.expiry}/${d.surname}/${d.firstName}${paxSuffix}`);
    idx++;
  });

  // ---------- FP Form of Payment (Screenshot 4) ----------
  if(state.fop){
    rows.push(`${idx.toString().padStart(2, ' ')}  FP ${esc(state.fop)}`);
    idx++;
  }

  // ---------- TST Endorsements (Screenshot 2 & 4) ----------
  if(state.hasTST && state.showFE){
    rows.push(`${idx.toString().padStart(2, ' ')}  FE PAX NON ENDORSE/CHNG AND RFND PENALTY APPLY/RFND NOT LATER THAN 90 DAYS AFTER TKT EXPIRY/S3-4/P1`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  FE PAX NON ENDORSE/CHNG AND RFND PENALTY APPLY/RFND NOT LATER THAN 90 DAYS AFTER TKT EXPIRY/S3-4/P2`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  FE INF NON ENDORSE/CHNG AND REF PENALTY APPLY/RFND NOT LATER THAN 90 DAYS AFTER TKT EXPIRY/S3-4/P2`); idx++;
    rows.push(`${idx.toString().padStart(2, ' ')}  FM INF *F*7.00N/S3-4/P2`); idx++;
  }

  // ---------- OPW Remarks (Screenshot 1 Line 18) ----------
  if(state.opwRemarks && state.opwRemarks.length){
    state.opwRemarks.forEach(r => {
      rows.push(`${idx.toString().padStart(2, ' ')}  ${r}`);
      idx++;
    });
  }

  // ---------- FA Electronic Tickets Issued (Issue Entry) ----------
  if(state.ticketed && state.tickets){
    state.tickets.forEach(t => {
      const pNum = t.pax ? t.pax.replace('.', 'P').replace(/\s+/g, '') : 'P1';
      const alLet = t.alLetter || ((state.segments[0] && state.segments[0].al) || 'TG');
      const dt = t.tktDate || (state.dateStamp ? state.dateStamp.split('/')[0] : '01JUL18');
      const off = t.office || state.officeId || OFFICE_ID;
      rows.push(`${idx.toString().padStart(2, ' ')}  FA PAX ${t.tktNum}/ET${alLet}/${dt}/${off}/23567890/S3-4/${pNum}`);
      idx++;
    });
  }

  printLines(rows, '');
  updateTopPnrInfo();
}

function updateTopPnrInfo(){
  const topPnrStatus = document.getElementById('topPnrStatus');
  const tabTitleText = document.getElementById('tabTitleText');
  const bottomPaxName = document.getElementById('bottomPaxName');

  const loc = state.locator || "NO ACTIVE PNR";
  const pax0 = state.passengers[0] ? state.passengers[0].label.split('(')[0] : "NEW";
  const seg0 = state.segments[0];

  // 1. If seats held with no passengers yet (Matches YouTube Screenshot 2 exactly!)
  if(!state.passengers.length && state.segments.length){
    const s0 = state.segments[0];
    const sLast = state.segments[state.segments.length - 1];
    tabTitleText.textContent = `Command page - ${s0.date} - ${sLast.arr} [${s0.count}] Owned by ${state.officeId || OFFICE_ID}`;
    topPnrStatus.textContent = `PNR: Held ${s0.count} seat(s) (${s0.al} ${s0.fn})`;
    bottomPaxName.textContent = `${s0.al} ${s0.fn} ${s0.dep}-${sLast.arr}`;
    return;
  }

  // 2. If no active PNR (reset / ignored state)
  if(!state.passengers.length && !state.segments.length){
    tabTitleText.textContent = `Command page - NEW (0) - - NO ACTIVE PNR`;
    topPnrStatus.textContent = `PNR: None (Inactive)`;
    bottomPaxName.textContent = `NO ACTIVE PNR`;
    return;
  }

  // 3. Normal PNR with passengers
  const segInfo = seg0 ? `${seg0.date} - ${seg0.arr}` : "";
  topPnrStatus.textContent = `PNR: ${loc} (${state.finalized ? 'Confirmed' : 'Building'})`;
  tabTitleText.textContent = `Command page - ${pax0} (${state.passengers.length}) - ${segInfo} - ${loc}`;
  bottomPaxName.textContent = pax0.slice(0, 20) + "...";
}

// ---------- SEAT MAP MODULE ----------
const SEAT_COLS = ["A", "B", "C", "D", "E", "F", "H", "J", "K"];
const OCCUPIED_SEATS = {
  // Pre-seed some occupied seats for realistic appearance matching Screenshot 2 (e.g. row 11 is full)
  "11A": true, "11B": true, "11C": true, "11D": true, "11E": true, "11F": true, "11H": true, "11J": true, "11K": true,
  "08E": true, "08F": true, "14B": true, "14C": true, "17J": true, "17K": true
};

function openSeatMap(segIndex){
  activeSegIdx = segIndex || 0;
  seatmapOverlay.classList.add('active');

  // Populate segment select dropdown
  segmentSelect.innerHTML = '';
  state.segments.forEach((seg, i)=>{
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `S${i+1}: ${seg.al}${seg.fn} ${seg.cls} ${seg.fullDate||seg.date} ${seg.dep}-${seg.arr} ${seg.depT.slice(0,2)}:${seg.depT.slice(2)}/${seg.arrT.slice(0,2)}:${seg.arrT.slice(2)}`;
    if(i === activeSegIdx) opt.selected = true;
    segmentSelect.appendChild(opt);
  });

  renderCabinLayout();
  renderPassengersList();
}

function closeSeatMap(){
  seatmapOverlay.classList.remove('active');
  hideTooltip();
  const legend = document.getElementById('legendModal');
  if(legend) legend.classList.remove('show');

  // Focus terminal input
  const inp = document.getElementById('cmdInput');
  if(inp) inp.focus();
}

function onSegmentChange(newIdx){
  activeSegIdx = parseInt(newIdx, 10);
  renderCabinLayout();
  renderPassengersList();
}

function renderCabinLayout(){
  const seg = state.segments[activeSegIdx] || state.segments[0];
  const header = document.getElementById('cabinClassHeader');
  const equipName = seg.eq === "77W" ? "Boeing 777-300ER" : (seg.eq === "321" ? "Airbus A321" : "Aircraft");
  header.textContent = `Economy Class â€” ${seg.al === "TK" ? "Turkish Airlines" : seg.al} (${equipName})`;

  const container = document.getElementById('seatRowsContainer');
  container.innerHTML = '';

  const assignedInThisSeg = state.seats[activeSegIdx] || {};

  // Rows 6 to 22
  for(let r = 6; r <= 22; r++){
    const rowEl = document.createElement('div');
    rowEl.className = 'seat-row';

    // Left row number
    const leftNum = document.createElement('div');
    leftNum.className = 'row-num';
    leftNum.textContent = r;
    rowEl.appendChild(leftNum);

    // Columns: A B C (aisle) D E F (aisle) H J K
    SEAT_COLS.forEach((col, cIdx)=>{
      if(col === "D" || col === "H"){
        const aisle = document.createElement('div');
        aisle.className = 'aisle-gap';
        rowEl.appendChild(aisle);
      }

      const seatCode = `${r < 10 ? '0'+r : r}${col}`;
      const seatTile = document.createElement('div');
      seatTile.className = 'seat-tile';
      seatTile.dataset.code = seatCode;

      // Chargeable / Legroom seats ($): rows 6 to 10
      const isChargeable = (r >= 6 && r <= 10);
      const isOccupied = OCCUPIED_SEATS[seatCode] || false;

      // Check if assigned to any passenger
      let assignedPax = null;
      Object.entries(assignedInThisSeg).forEach(([pCode, sCode])=>{
        if(sCode === seatCode) assignedPax = pCode;
      });

      if(isOccupied){
        seatTile.classList.add('occupied');
        seatTile.innerHTML = `âœ•`;
      } else if(assignedPax){
        seatTile.classList.add('selected');
        seatTile.innerHTML = `<span class="pax-tag">${assignedPax}</span>`;
      } else if(isChargeable){
        seatTile.classList.add('dollar');
        seatTile.textContent = '$';
      }

      // Tooltip events
      seatTile.addEventListener('mouseenter', (e)=> showTooltip(e, seatCode, isChargeable, isOccupied, assignedPax));
      seatTile.addEventListener('mousemove', moveTooltip);
      seatTile.addEventListener('mouseleave', hideTooltip);

      // Seat selection click
      if(!isOccupied){
        seatTile.addEventListener('click', ()=> onSeatClick(seatCode, isChargeable));
      }

      rowEl.appendChild(seatTile);
    });

    // Right row number
    const rightNum = document.createElement('div');
    rightNum.className = 'row-num';
    rightNum.textContent = r;
    rowEl.appendChild(rightNum);

    container.appendChild(rowEl);
  }
}

function onSeatClick(seatCode, isChargeable){
  if(!state.seats[activeSegIdx]) state.seats[activeSegIdx] = {};
  const currentSegSeats = state.seats[activeSegIdx];

  // If already assigned to the currently selected passenger, toggle off
  if(currentSegSeats[activePaxCode] === seatCode){
    delete currentSegSeats[activePaxCode];
  } else {
    // If another passenger had this seat, reassign
    Object.keys(currentSegSeats).forEach(pCode => {
      if(currentSegSeats[pCode] === seatCode) delete currentSegSeats[pCode];
    });
    // Assign to active passenger
    currentSegSeats[activePaxCode] = seatCode;

    // Automatically advance active passenger to next unassigned passenger
    const adultAndChild = state.passengers.filter(p => p.type !== 'infant');
    const unassigned = adultAndChild.find(p => !currentSegSeats[p.code]);
    if(unassigned) {
      activePaxCode = unassigned.code;
    }
  }

  renderCabinLayout();
  renderPassengersList();
}

function renderPassengersList(){
  const container = document.getElementById('paxListContainer');
  container.innerHTML = '';

  const assigned = state.seats[activeSegIdx] || {};
  let totalSelected = 0;

  state.passengers.forEach((p)=>{
    const row = document.createElement('div');
    row.className = `pax-item-row ${activePaxCode === p.code ? 'active-pax' : ''}`;
    row.onclick = () => {
      activePaxCode = p.code;
      renderPassengersList();
    };

    const seatCode = assigned[p.code];
    if(seatCode) totalSelected++;

    const chdBadge = p.type === 'child' ? `<span class="pax-badge-chd">CHD</span>` : '';
    const seatDisplay = seatCode ? seatCode : `<span class="pax-seat-code empty">â€”</span>`;
    const statusDisplay = seatCode
      ? `<span class="pax-status-text">Selected</span>`
      : `<span class="pax-status-text pending">Not selected</span>`;

    row.innerHTML = `
      <div class="pax-check"><input type="checkbox" checked disabled></div>
      <div class="pax-info">
        <span class="pax-code">${p.code}</span>
        ${chdBadge}
        <span class="pax-name">${esc(p.nameDisplay || p.label.split('(')[0])}</span>
      </div>
      <div class="pax-seat-code">${seatDisplay}</div>
      ${statusDisplay}
    `;
    container.appendChild(row);

    // If infant carrier, show infant sub-line
    if(p.type === 'infantCarrier' && p.infant){
      const infRow = document.createElement('div');
      infRow.className = 'infant-sub-row';
      infRow.innerHTML = `
        <span class="infant-badge">INF</span>
        <span>${esc(p.infant.display || p.infant.surname + ' ' + p.infant.first)}</span>
        <span style="margin-left:auto; font-style:italic;">(Infant on lap - no seat)</span>
      `;
      container.appendChild(infRow);
    }
  });

  document.getElementById('selectedSeatsCount').textContent = totalSelected;
  const bookBtn = document.getElementById('bookSeatsBtn');
  bookBtn.disabled = (totalSelected === 0);
}

function confirmBookSeats(){
  const assigned = state.seats[activeSegIdx] || {};
  const seg = state.segments[activeSegIdx];
  const bookedList = Object.entries(assigned).map(([p, s]) => `${p}: ${s}`).join(', ');

  if(!bookedList){
    alert("Please select at least one seat first.");
    return;
  }

  showToast(`âœ“ Seats confirmed for ${seg.al}${seg.fn} (${seg.dep}-${seg.arr}): ${bookedList}`);

  // Re-render PNR so SSR SEAT lines appear in the terminal
  renderPNR();
}

// Tooltip logic matching Screenshot 2
function showTooltip(e, seatCode, isChargeable, isOccupied, assignedPax){
  document.getElementById('tooltipBadge').textContent = seatCode;
  const charEl = document.getElementById('tooltipChar');
  const occEl = document.getElementById('tooltipOcc');

  if(isChargeable){
    charEl.innerHTML = `Chargeable seat<br>Leg space seat`;
  } else {
    charEl.innerHTML = `Standard seat`;
  }

  if(isOccupied){
    occEl.textContent = `Seat is occupied`;
  } else if(assignedPax){
    occEl.textContent = `Selected by ${assignedPax}`;
  } else {
    occEl.textContent = `Seat is vacant`;
  }

  moveTooltip(e);
  seatTooltip.style.display = 'block';
}

function moveTooltip(e){
  const x = e.clientX + 14;
  const y = e.clientY - 40;
  seatTooltip.style.left = `${Math.min(window.innerWidth - 240, x)}px`;
  seatTooltip.style.top = `${Math.max(10, y)}px`;
}

function hideTooltip(){
  seatTooltip.style.display = 'none';
}

function toggleLegend(){
  document.getElementById('legendModal').classList.toggle('show');
}

function switchSmTab(tab){
  document.getElementById('smTabSeatMap').classList.toggle('active', tab==='seatmap');
  document.getElementById('smTabServices').classList.toggle('active', tab==='services');
  if(tab === 'services'){
    alert("Amadeus Ancillary Service Catalogue â€” Baggage, Lounge & Meals simulation.");
  }
}

function switchDetailsTab(tab){
  document.getElementById('dtTabPax').classList.toggle('active', tab==='passengers');
  document.getElementById('dtTabFeatures').classList.toggle('active', tab==='features');
  document.getElementById('dtTabAmenities').classList.toggle('active', tab==='amenities');

  document.getElementById('paxTabPane').style.display = (tab === 'passengers') ? 'block' : 'none';
  document.getElementById('featuresTabPane').style.display = (tab === 'features') ? 'block' : 'none';
  document.getElementById('amenitiesTabPane').style.display = (tab === 'amenities') ? 'block' : 'none';
}

function showToast(msg){
  const t = document.getElementById('toastNotification');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=> t.classList.remove('show'), 3500);
}

// Load Video Lesson PNR
function loadLessonPNR(){
  state = JSON.parse(JSON.stringify(LESSON_PNR));
  activeSegIdx = 0;
  activePaxCode = "P1";
  term.innerHTML = '';
  printPromptEcho("IR");
  renderPNR();
  mountInput();
  showToast("Loaded training lesson PNR J99GZO");
}

function resetSimulator(){
  state = {
    locator: null,
    passengers: [],
    segments: [],
    phone: null,
    ticketing: null,
    commission: null,
    finalized: false,
    hasTST: false,
    tstData: null,
    specialSSRs: [],
    osiEntries: [],
    seats: {}
  };
  lastANRoute = null;
  term.innerHTML = `<div class="line muted">Simulator reset. Type a command below (e.g. <code>AN12NOVDACBKK</code>, <code>AN12NOVDACNRT</code>, <code>AN25MARDACDXB</code>, or <code>IR</code> for lesson PNR).</div>`;
  updateTopPnrInfo();
  mountInput();
  showToast("Simulator reset â€” ready for new command");
}

function handleIG(){
  state = {
    locator: null,
    passengers: [],
    segments: [],
    phone: null,
    ticketing: null,
    commission: null,
    finalized: false,
    hasTST: false,
    tstData: null,
    specialSSRs: [],
    osiEntries: [],
    seats: {}
  };
  lastANRoute = null;
  printLines([
    '--- RLR ---',
    'TRANSACTION IGNORED'
  ], 'warn');
  updateTopPnrInfo();
  showToast("Transaction ignored (IG) â€” Workspace cleared");
}

// ---------- Command Execution Engine ----------
let lastANRoute = null;
let lastANDate = "12NOV";

function handleAN(cmd, isDirect){
  const clean = cmd.replace(/\s+/g, '');
  const m = clean.match(/^(AN|AD)(\d{1,2}[A-Z]{3})?([A-Z]{2,3})([A-Z]{2,3})(?:\/([A-Z0-9]+))?$/i);
  if(!m){
    printLines(["INVALID FORMAT — e.g. AN12NOVDACBKK, AN12NOVDACNRT, or AN25MARDACDXB"], 'err');
    return;
  }
  const [, type, dateRaw, orig, dest, filter] = m;
  const date = (dateRaw || "12NOV").toUpperCase();
  let o = orig.toUpperCase();
  let d = dest.toUpperCase();
  if(o === 'XB') o = 'DXB';
  if(d === 'XB') d = 'DXB';

  const route = getFlightSchedule(o, d, date);
  if(!route || !route.lines || !route.lines.length){
    printLines([`NO FLIGHTS FOUND FOR ${o}${d}`], 'err');
    return;
  }
  lastANRoute = route;
  lastANDate = date;

  const header = `** AMADEUS AVAILABILITY - ${isDirect ? "AD" : "AN"} ** ${o} ${date}`;
  const rows = [header];

  const alFilter = filter ? filter.toUpperCase().replace(/^A/, '') : null;
  let displayIdx = 1;

  route.lines.forEach(line => {
    if(alFilter && !line.segs.some(s => s.al.toUpperCase() === alFilter)) return;

    line.segs.forEach((seg, i) => {
      const clsStr = Object.entries(seg.classes).map(([c, n]) => `${c}${n}`).join(' ');
      const num = (i === 0) ? (displayIdx++).toString().padStart(2, ' ') : '  ';
      rows.push(`${num}  <span class="al">${seg.al} ${seg.fn.padEnd(4, ' ')}</span>  ${clsStr}   /${seg.dep} ${seg.arr}  ${seg.depT} ${seg.arrT}  ${seg.eq}  ${seg.dur || '3:00'}`);
    });
  });

  if(rows.length === 1){
    rows.push(`NO FLIGHTS MATCHING AIRLINE FILTER /${filter}`);
  }

  printLines(rows, '');
}

function handleSS(cmd){
  const clean = cmd.replace(/\s+/g, '');
  const m = clean.match(/^SS(\d+)([A-Z]+)(\d+)(\*)?$/i);
  if(!m){
    printLines(["INVALID FORMAT — try SS1Y1, SS1T1, or SS2K2"], 'err');
    return;
  }
  const count = parseInt(m[1], 10);
  const cls = m[2].toUpperCase();
  const lineNum = parseInt(m[3], 10);

  const route = lastANRoute || getFlightSchedule("DAC", "BKK", lastANDate || "12NOV");
  const line = (route && route.lines) ? (route.lines.find(l => l.line === lineNum) || route.lines[0]) : null;

  if(!line){
    printLines([`LINE ${lineNum} NOT FOUND IN CURRENT AVAILABILITY DISPLAY`], 'err');
    return;
  }

  // If previous PNR was finalized or active with a saved locator, reset workspace for new holding
  if(state.finalized || (state.locator && state.locator === "J99GZO" && state.passengers.length > 0)){
    state.locator = null;
    state.passengers = [];
    state.segments = [];
    state.phone = null;
    state.ticketing = null;
    state.commission = null;
    state.finalized = false;
    state.specialSSRs = [];
    state.osiEntries = [];
    state.seats = {};
    state.tstRecords = [];
    state.hasTST = false;
  }

  const heldDate = lastANDate || line.segs[0].date || "12NOV";
  const dayStr = getDayOfWeek(heldDate);

  const newSegs = line.segs.map((s, idx) => ({
    al: s.al,
    fn: s.fn,
    cls: cls,
    count: count,
    dep: s.dep,
    arr: s.arr,
    depT: s.depT,
    arrT: s.arrT,
    eq: s.eq || '77W',
    date: heldDate,
    day: dayStr,
    status: 'HK',
    fullDate: `${heldDate} 2026`,
    tktCode: `${s.al}/VB7BHH`
  }));

  // Append segments for Roundtrip / Multi-City (আপ-ডাউন একসাথে)
  if(!state.segments) state.segments = [];
  state.segments = state.segments.concat(newSegs);

  // Real Amadeus Holding Display (matches YouTube Screenshot 2 & 5)
  const rows = [];
  rows.push(`RP/${state.officeId || OFFICE_ID}/`);

  // If passengers already exist, display them first
  if(state.passengers && state.passengers.length){
    state.passengers.forEach((p, i) => {
      const pNum = (i + 1).toString().padStart(2, ' ');
      rows.push(`<span class="name">${pNum}.${esc(p.label)}</span>`);
    });
  }

  let lineIdx = (state.passengers ? state.passengers.length : 0) + 1;
  const totalSegs = state.segments.length;
  state.segments.forEach((seg, idx) => {
    const segLines = formatSegmentBuildingLines(seg, idx, totalSegs, lineIdx++);
    segLines.forEach(l => rows.push(l));
  });

  printLines(rows, '');
  updateTopPnrInfo();
  showToast(`✓ Held ${count} seat(s) on ${newSegs.map(s => s.al + ' ' + s.fn).join(', ')} (Status: HK${count})`);
}

function handleNM(cmd){
  let m = cmd.match(/^NM1([A-Z ]+)\/([A-Z .]+?)\s+(MR|MRS|MS)\(INF\s*([A-Z ]+)\/([A-Z .]+?)\s+(MISS|MSTR)\/(\d{2}[A-Z]{3}\d{2,4})\)$/i);
  if(m){
    const pCode = `P${state.passengers.length+1}`;
    const newPax = {
      code: pCode, type:'infantCarrier',
      label: `${m[1].trim()}/${m[2].trim()} ${m[3]}(INF${m[4].trim()}/${m[5].trim()} ${m[6]}/${m[7]})`,
      nameDisplay: `${m[1].trim()}/${m[2].trim()} ${m[3]}`,
      infant:{ surname:m[4].trim(), first:m[5].trim(), title:m[6], dob:m[7], display:`${m[4].trim()} ${m[5].trim()}` }
    };
    state.passengers.push(newPax);
    updateTopPnrInfo();
    renderBuildingPNRAfterNM(newPax);
    return;
  }
  m = cmd.match(/^NM1([A-Z ]+)\/([A-Z .]+?)\s+(MSTR|MISS)\(CHD\/(\d{2}[A-Z]{3}\d{2,4})\)$/i);
  if(m){
    const pCode = `P${state.passengers.length+1}`;
    const newPax = {
      code: pCode, type:'child',
      label: `${m[1].trim()}/${m[2].trim()} ${m[3]}(CHD/${m[4]})`,
      nameDisplay: `${m[1].trim()}/${m[2].trim()} ${m[3]}`, dob:m[4]
    };
    state.passengers.push(newPax);
    updateTopPnrInfo();
    renderBuildingPNRAfterNM(newPax);
    return;
  }
  m = cmd.match(/^NM1([A-Z ]+)\/([A-Z .]+?)\s+(MR|MRS|MS)$/i);
  if(m){
    const pCode = `P${state.passengers.length+1}`;
    const newPax = {
      code: pCode, type:'adult',
      label: `${m[1].trim()}/${m[2].trim()} ${m[3]}`,
      nameDisplay: `${m[1].trim()}/${m[2].trim()} ${m[3]}`
    };
    state.passengers.push(newPax);
    updateTopPnrInfo();
    renderBuildingPNRAfterNM(newPax);
    return;
  }
  printLines(["INVALID FORMAT â€” try NM1SURNAME/FIRST NAME MR"], 'err');
}

function renderBuildingPNRAfterNM(newPax){
  if(state.locator){
    renderPNR(`RP/${OFFICE_ID}/`);
    return;
  }
  if(state.segments && state.segments.length){
    const rows = [];
    const currOffice = state.officeId || OFFICE_ID;
    rows.push(`RP/${currOffice}/`);

    // Passenger lines (aligned with space for single digit e.g. " 1.NAME" matching Screenshot 1)
    state.passengers.forEach((p, i) => {
      const pNum = (i + 1).toString().padStart(2, ' ');
      rows.push(`<span class="name">${pNum}.${esc(p.label)}</span>`);
    });

    // Flight segment lines with full details and mandatory advisory lines (Screenshot 1)
    let lineIdx = state.passengers.length + 1;
    const totalSegs = state.segments.length;
    state.segments.forEach((seg, sIdx) => {
      const segLines = formatSegmentBuildingLines(seg, sIdx, totalSegs, lineIdx++);
      segLines.forEach(l => rows.push(l));
    });

    // Display AP if already present
    if(state.phone){
      rows.push(`${lineIdx.toString().padStart(2, ' ')}  AP ${esc(state.phone)}`);
      lineIdx++;
    }

    // Display TK if already present
    if(state.ticketing){
      rows.push(`${lineIdx.toString().padStart(2, ' ')}  TK ${esc(state.ticketing)}`);
      lineIdx++;
    }

    // Display Special SSRs if already present
    if(state.specialSSRs && state.specialSSRs.length){
      state.specialSSRs.forEach(s => {
        rows.push(`${lineIdx.toString().padStart(2, ' ')}  SSR ${s.type} ${s.al} ${s.status} ${s.value}/${s.pax}`);
        lineIdx++;
      });
    }

    // Display SSR DOCS if already present
    if(state.docsEntries && state.docsEntries.length){
      state.docsEntries.forEach(d => {
        const paxSuffix = (state.passengers.length > 1 || d.pax !== 'P1') ? `/${d.pax}` : '';
        rows.push(`${lineIdx.toString().padStart(2, ' ')}  SSR DOCS ${d.airline} ${d.action} ${d.docType}/${d.country}/${d.docNumber}/${d.nationality}/${d.dob}/${d.gender}/${d.expiry}/${d.surname}/${d.firstName}${paxSuffix}`);
        lineIdx++;
      });
    }

    printLines(rows, '');
  } else {
    printLines([`<span class="name">${esc(newPax.nameDisplay)} *</span>`], '');
  }
  updateTopPnrInfo();
  showToast(`✅ Passenger added: ${newPax.nameDisplay}`);
}

function handleAP(cmd){
  state.phone = cmd.replace(/^AP\s*/i, '').trim();
  if(!state.locator){
    const lineNum = (state.passengers.length || 0) + (state.segments.length || 0) + 1;
    printLines([`${lineNum.toString().padStart(2, ' ')}  AP ${esc(state.phone)}`], 'success');
  } else {
    renderPNR();
  }
  showToast(`âœ“ AP contact added`);
}

function handleTK(cmd){
  const upper = cmd.toUpperCase().trim();
  const isOK = /^TK\s*OK/i.test(upper);

  let rest = upper.replace(/^TK\s*(OK|TL)\s*/i, '').trim();
  const currentOffice = (state.officeId || (state.locator === 'OGJZJ9' ? 'DACVS31XW' : OFFICE_ID));

  let datePart = "";
  if(rest){
    if(rest.includes('/')){
      const parts = rest.split('/');
      datePart = parts[0];
    } else {
      datePart = rest;
    }
  }
  if(!datePart){
    datePart = isOK ? "18Jun26" : "13NOV";
  }

  const prefix = isOK ? "OK" : "TL";
  if(rest && rest.includes('/')){
    state.ticketing = `${prefix}${rest.replace(/^(OK|TL)/i, '')}`;
  } else {
    state.ticketing = `${prefix}${datePart}/${currentOffice}`;
  }

  // Interactive building feedback (Screenshot 2: 4  OK18Jun26  DACVS31XW)
  if(!state.locator){
    const lineNum = (state.passengers.length || 0) + (state.segments.length || 0) + (state.phone ? 1 : 0) + 1;
    const tkDisplay = `${prefix}${datePart}  ${currentOffice}`;
    printLines([`${lineNum.toString().padStart(2, ' ')}  ${tkDisplay}`], 'success');
  } else {
    renderPNR();
  }
  showToast(`âœ… Ticketing set: TK ${state.ticketing}`);
}

// ---------- FM â€” Fare Modifier / Commission (Screenshot 1: FM7) ----------
function handleFM(cmd){
  const upper = cmd.toUpperCase().trim();
  const m = upper.match(/^FM\s*(\*?[0-9.]+%?N?)?/i);
  const val = (m && m[1]) ? m[1].replace(/[*N%]/g, '') : "7";
  state.commission = val + "%";
  state.hasPending = true;
  printLines(["Commission already added"], 'success');
  showToast(`âœ“ Commission ${state.commission} added (FM)`);
}

function handleRF(cmd){
  const rf = cmd.replace(/^RF\s*/i, '').trim() || 'R';
  state.receivedFrom = rf;
  const agencyText = state.phone || `DAC JHONY TECH TRAVEL CTC0505793144`;
  printLines([
    `PNRs received by Agency: ${agencyText}`
  ], 'success');
  showToast(`âœ“ Received From (${rf}) saved`);
}

function generateRandomLocator(){
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let res = "";
  for(let i=0; i<6; i++){
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return res;
}

function handleER(){
  if(!state.locator) state.locator = generateRandomLocator();
  state.segments.forEach(s => s.status = "HK");
  state.finalized = true;
  state.hasPending = false;
  renderPNR();
  updateTopPnrInfo();
  showToast(`âœ… PNR Confirmed & Saved: ${state.locator}`);
}

function handleIR(){
  if(!state.locator) {
    if(state.passengers.length && state.segments.length){
      state.locator = "ICRBPO";
    } else {
      loadLessonPNR();
      return;
    }
  }
  const currOffice = state.officeId || "DACVS31XW";
  const agCode = state.agentCode || "BP/AS";
  const dt = state.dateStamp || "17JUN26/1324Z";
  renderPNR(`--- RLR ---\nRP/${currOffice}/${currOffice}            ${agCode} ${dt} <span class="locator">${state.locator}</span>\n${currOffice}/4455BP/${dt.split('/')[0]}`);
}

function handleRT(cmd){
  const loc = (cmd||'').replace(/^RT\s*/i, '').trim().toUpperCase();
  if(loc === 'OGJZJ9' || loc === 'TG'){
    loadThaiAirwaysPNR();
    return;
  }
  if(loc === 'ICRBPO' || loc === 'JHONY' || loc === 'BG'){
    loadJhonyPNR();
    return;
  }
  if(loc && loc !== 'J99GZO' && loc !== state.locator){
    printLines([`NO RECORD LOCATOR FOUND FOR ${loc}`], 'err');
    return;
  }

  // Plain RT: Display current active workspace / PNR
  if(state.segments && state.segments.length){
    renderPNR();
    return;
  }

  loadLessonPNR();
}

function handleXI(){
  resetSimulator();
  printLines(["--- RLR ---", "PNR CANCELLED"], 'warn');
}

// ---------- SR Special Service Request Commands ----------
// Handles: SR CHML/Pn  SR BBML/Pn  SR BSCT/Pn
// Also:    SRCTCE AL STATUS-value/Pn   SRCTCM AL STATUS-value/Pn
// ---------- handleOSI â€” VIP and other informational notes ----------
// Format: OSI TK VIP MINISTER M/O INFORMATION/P1
//         OSI TK MEDA DIABETIC PATIENT REQUIRES SPECIAL HANDLING/P2
function handleOSI(cmd){
  // OSI [AL] [FREE TEXT]/P[n]
  const m = cmd.match(/^OSI\s+([A-Z0-9]{2})\s+(.+?)\/P(\d+)$/i);
  if(!m){
    printLines([
      'INVALID FORMAT. Example:',
      '  OSI TK VIP MINISTER M/O INFORMATION/P1',
      '  OSI TK MEDA DIABETIC PATIENT REQUIRES SPECIAL HANDLING/P1'
    ], 'warn');
    return;
  }
  const al   = m[1].toUpperCase();
  const text = m[2].trim().toUpperCase();
  const pCode = `P${m[3]}`;

  if(!state.osiEntries) state.osiEntries = [];
  // OSI entries are additive (multiple allowed for same pax)
  state.osiEntries.push({ al, text, pax: pCode });
  state.hasPending = true;

  // Show what was staged, then prompt to type IR
  const isVip = /VIP/.test(text);
  printLines([
    `OSI ${al} ${text}/${pCode}`,
    ``,
    isVip
      ? `âœ¦ VIP à¦¸à§à¦¬à¦¿à¦§à¦¾: à¦…à¦—à§à¦°à¦¾à¦§à¦¿à¦•à¦¾à¦° à¦¬à§‹à¦°à§à¦¡à¦¿à¦‚, à¦à¦¯à¦¼à¦¾à¦°à¦ªà§‹à¦°à§à¦Ÿ à¦²à¦¾à¦‰à¦žà§à¦œ, à¦¬à¦¿à¦¶à§‡à¦· à¦ªà§à¦°à¦Ÿà§‹à¦•à¦² à¦¸à§‡à¦¬à¦¾, à¦à¦¸à§à¦•à¦°à§à¦Ÿ à¦“ à¦¡à§‡à¦¡à¦¿à¦•à§‡à¦Ÿà§‡à¦¡ à¦—à§à¦°à¦¾à¦‰à¦¨à§à¦¡ à¦¹à§à¦¯à¦¾à¦¨à§à¦¡à¦²à¦¿à¦‚à¥¤`
      : `OSI à¦à¦¨à§à¦Ÿà§à¦°à¦¿ à¦à¦¡ à¦¹à¦¯à¦¼à§‡à¦›à§‡ (à¦à¦Ÿà¦¿ à¦à¦¯à¦¼à¦¾à¦°à¦²à¦¾à¦‡à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦¤à¦¥à§à¦¯à¦®à§‚à¦²à¦• à¦¨à§‹à¦Ÿ, à¦•à§‹à¦¨à§‹ à¦…à§à¦¯à¦¾à¦•à¦¶à¦¨ à¦•à§‹à¦¡ à¦¨à¦¯à¦¼)à¥¤`,
    ``,
    `--- TYPE IR TO DISPLAY UPDATED PNR ---`
  ], 'warn');
}

// ---------- handleMD â€” More Display (PNR continuation) ----------
// In real Amadeus: MD scrolls down to see more PNR lines.
// In this simulator: MD re-renders PNR from line 20 onwards (the SSR section).
function handleMD(){
  // Show a continuation of the PNR â€” the SSR heavy bottom half
  printLines(['--- MORE ---'], 'muted');
  renderPNR();
}

function handleSR(cmd){
  // Format: SRMOML/P2 or SR MOML/P2 or SR CHML/P2 (with or without space)
  let m = cmd.match(/^SR\s*([A-Z]{4})\/P(\d+)$/i);
  if(m){
    const ssrType = m[1].toUpperCase();
    const paxNum  = parseInt(m[2], 10);
    const pCode   = `P${paxNum}`;
    const pax     = state.passengers[paxNum - 1];
    if(!pax && paxNum > (state.passengers.length || 0)){
      printLines([`PASSENGER P${paxNum} NOT FOUND IN PNR`], 'err');
      return;
    }
    if(!state.specialSSRs) state.specialSSRs = [];

    // Remove any existing same-type SSR for this passenger first
    state.specialSSRs = state.specialSSRs.filter(s => !(s.type === ssrType && s.pax === pCode));

    // Active airline from segments or fallback TG
    const activeAl = (state.segments[0] && state.segments[0].al) ? state.segments[0].al : 'TG';
    state.specialSSRs.push({ type: ssrType, al: activeAl, status: 'HK1', allSegs: true, pax: pCode });

    state.hasPending = true;

    // Immediately render updated PNR display (as seen in Screenshot 4)!
    renderPNR();
    showToast(`âœ… SSR ${ssrType} added for ${pCode} â€” Type RFR then ER to finalize`);
    return;
  }

  // Wheelchair: SR WCHR-NONMEDA/description/P1  or  SR WCHR/P1  (simple)
  // Supports: WCHR (ramp), WCHS (to seat), WCHC (completely immobile)
  m = cmd.match(/^SR\s+(WCHR|WCHS|WCHC)(?:-([A-Z]+))?\/(.+?)\/P(\d+)$/i);
  if(!m) m = cmd.match(/^SR\s+(WCHR|WCHS|WCHC)-(.+?)\/P(\d+)$/i);
  if(m){
    const ssrType = m[1].toUpperCase();
    const textPart = (m[2]||'') + (m[3] ? '/'+(m[3]) : '');
    // Determine text and pax from the match groups
    // Try both patterns
    let wcText, paxNum;
    const m2 = cmd.match(/^SR\s+(WCHR|WCHS|WCHC)-(.+)\/P(\d+)$/i);
    if(m2){
      ssrType2 = m2[1].toUpperCase();
      wcText   = m2[2].trim().toUpperCase();
      paxNum   = parseInt(m2[3], 10);
    } else {
      const m3 = cmd.match(/^SR\s+(WCHR|WCHS|WCHC)\/P(\d+)$/i);
      if(m3){
        ssrType2 = m3[1].toUpperCase();
        wcText   = 'PASSENGER REQUIRES WHEELCHAIR ASSISTANCE';
        paxNum   = parseInt(m3[2], 10);
      } else {
        printLines(['WCHR FORMAT: SR WCHR-NONMEDA/DESCRIPTION/P1  or  SR WCHR/P1'], 'warn');
        return;
      }
    }
    const pCode = `P${paxNum}`;
    if(!state.specialSSRs) state.specialSSRs = [];
    state.specialSSRs = state.specialSSRs.filter(s => !(['WCHR','WCHS','WCHC'].includes(s.type) && s.pax === pCode));
    state.specialSSRs.push({ type: ssrType2||ssrType, al:'TK', status:'NN1', allSegs:true, pax:pCode, text:wcText });
    state.hasPending = true;
    const wDesc = { WCHR:'Wheelchair on Ramp', WCHS:'Wheelchair to Seat', WCHC:'Wheelchair Completely Immobile' };
    const stagingRows2 = state.segments.map((seg, si)=>
      `  SSR ${ssrType2||ssrType} TK NN1 ${wcText} /S${si+4}/${pCode}  --- STAGED`);
    printLines([
      `SSR ${ssrType2||ssrType} WHEELCHAIR â€” ${wDesc[ssrType2||ssrType]||'Wheelchair'}`,
      ...stagingRows2,
      ``,
      `--- TYPE IR TO DISPLAY FULL UPDATED PNR ---`
    ], 'muted');
    showToast(`âœ“ SSR ${ssrType2||ssrType} staged for ${pCode} â€” Type IR to confirm`);
    return;
  }

  // Format: SRCTCE TK HK1-email/P1  or  SRCTCM TK HK1-phone/P1
  m = cmd.match(/^SRCTC([EM])\s+([A-Z0-9]{2})\s+((?:HK|NN|KK)\d+)-(.+)\/P(\d+)$/i);
  if(m){
    const kind   = m[1].toUpperCase();
    const al     = m[2].toUpperCase();
    const status = m[3].toUpperCase();
    const value  = m[4];
    const pCode  = `P${m[5]}`;
    if(!state.specialSSRs) state.specialSSRs = [];
    // Remove existing CTCE/CTCM for this pax if same type
    state.specialSSRs = state.specialSSRs.filter(s => !(s.type === `CTC${kind}` && s.pax === pCode));
    state.specialSSRs.push({ type: `CTC${kind}`, al, status, value, pax: pCode });
    state.hasPending = true;
    printLines([
      `SSR CTC${kind} ${al} ${status} ${value}/${pCode}  --- STAGED`,
      `--- TYPE IR TO DISPLAY FULL UPDATED PNR ---`
    ], 'muted');
    showToast(`âœ“ SSR CTC${kind} staged for ${pCode} â€” Type IR to confirm`);
    return;
  }

  printLines([
    'INVALID SR FORMAT. Examples:',
    '  SR CHML/P2   (Child Meal for P2)',
    '  SR BBML/P3   (Baby Meal for P3)',
    '  SR BSCT/P3   (Bassinet for P3 infant)',
    '  SR MOML/P1   (Muslim Meal for P1)',
    '  SRCTCE TK HK1-email@domain.com/P1',
    '  SRCTCM TK HK1-008801712345678/P1'
  ], 'warn');
}

// ---------- handleES â€” Share/Extend PNR to another office ----------
// Format (from screenshot): ESDACVS3334-B
// ES[OfficeID]-[Option]  where option: A=Agent view only, B=Both can modify, R=Receiving office only
function handleES(cmd){
  const m = cmd.match(/^ES([A-Z0-9]+)(?:-([ABR]))?$/i);
  if(!m){ printLines(['INVALID FORMAT â€” try ESDACVS3334-B'], 'err'); return; }
  const targetOffice = m[1].toUpperCase();
  const option       = (m[2]||'B').toUpperCase();
  const optionDesc   = { A:'Target agent view only', B:'Both offices can modify', R:'Receiving office only' };
  if(!state.sharedWith) state.sharedWith = [];
  // Remove duplicate shares to same office
  state.sharedWith = state.sharedWith.filter(s => s.office !== targetOffice);
  state.sharedWith.push({ office: targetOffice, option });
  state.hasPending = true;
  printLines([
    `PNR ${state.locator||'J99GZO'} SHARED WITH ${targetOffice}`,
    `SHARE OPTION: -${option} (${optionDesc[option]||option})`,
    ``,
    `--- TYPE IR TO DISPLAY UPDATED PNR ---`
  ], 'muted');
  showToast(`âœ“ PNR shared with ${targetOffice} â€” Type IR to display`);
}

// ---------- handleSRDOCS â€” Passport / Travel Document entry (Adult, Child, Infant) ----------
// Standard Amadeus format from Screenshot 2:
//   SRDOCS QR HK1-P-BGD-AP3476898-BGD-19OCT90-M-23OCT23-KHAN-ARAFAT (Adult, P1)
//   SRDOCS QR HK1-P-BGD-BP1234567-BGD-15MAY15-M-14MAY25-KHAN-TAHMID/P2 (Child, P2)
//   SRDOCS QR HK1-P-BGD-CP9876543-BGD-10JAN24-MI-09JAN29-KHAN-ZAYAN/P1 (Infant, MI/P1 or /P3)
function handleSRDOCS(upper, rawCmd){
  if(!state.locator){
    loadLessonPNR();
  }

  // Strip command prefix
  let clean = upper.replace(/^SR\s*DOCS\s*/i, '').trim();

  // Pattern: Airline (2) + Status (2-3) + [-/] + Details
  const leadMatch = clean.match(/^([A-Z0-9]{2})\s+([A-Z0-9]{2,3})[-/](.+)$/i);
  if(!leadMatch){
    printLines([
      'FORMAT ERROR â€” INVALID SRDOCS SYNTAX',
      'Format: SRDOCS [AL] [STATUS]-[TYPE]-[ISSUE_CTRY]-[DOC_NUM]-[NAT]-[DOB]-[GENDER]-[EXP]-[SURNAME]-[FIRST]/[PAX]',
      '',
      'Examples:',
      '  Adult (P1):  SRDOCS QR HK1-P-BGD-AP3476898-BGD-19OCT90-M-23OCT23-KHAN-ARAFAT',
      '  Child (P2):  SRDOCS QR HK1-P-BGD-BP1234567-BGD-15MAY15-M-14MAY25-KHAN-TAHMID/P2',
      '  Infant (MI): SRDOCS QR HK1-P-BGD-CP9876543-BGD-10JAN24-MI-09JAN29-KHAN-ZAYAN/P1'
    ], 'err');
    return;
  }

  const airline = leadMatch[1].toUpperCase();
  const action  = leadMatch[2].toUpperCase();
  let body      = leadMatch[3].trim();

  // Check for passenger designation at the end, e.g. /P1, /P2, /P3, /P1/INF, /INF
  let pax = '';
  const paxMatch = body.match(/\/(P\d+(?:\/INF)?|INF)$/i);
  if(paxMatch){
    pax = paxMatch[1].toUpperCase();
    body = body.substring(0, body.lastIndexOf('/'));
  }

  // Split fields by '-' or '/'
  const tokens = body.split(/[-/]/).map(t => t.trim().toUpperCase()).filter(Boolean);

  if(tokens.length < 8){
    printLines([
      'FORMAT ERROR â€” MISSING REQUIRED DOCS FIELDS',
      'Fields: [DocType]-[IssueCountry]-[DocNumber]-[Nationality]-[DOB]-[Gender]-[Expiry]-[Surname]-[FirstName]',
      'Example: SRDOCS QR HK1-P-BGD-AP3476898-BGD-19OCT90-M-23OCT23-KHAN-ARAFAT'
    ], 'err');
    return;
  }

  const docType     = tokens[0] || 'P';
  const country     = tokens[1] || 'BGD';
  const docNumber   = tokens[2] || '';
  const nationality = tokens[3] || country;
  const dob         = tokens[4] || '';
  const gender      = tokens[5] || 'M';
  const expiry      = tokens[6] || '';
  const surname     = tokens[7] || '';
  const firstName   = tokens.slice(8).join(' ') || '';

  const isInfant = gender.includes('I') || pax.includes('INF') || pax === 'P3';
  const isChild  = pax === 'P2';

  if(!pax){
    pax = isInfant ? 'P1/INF' : (isChild ? 'P2' : 'P1');
  }

  if(!state.docsEntries) state.docsEntries = [];

  // Remove existing DOCS entry for this passenger if any
  state.docsEntries = state.docsEntries.filter(d => d.pax !== pax);

  state.docsEntries.push({
    airline,
    action,
    docType,
    country,
    docNumber,
    nationality,
    dob,
    gender,
    expiry,
    surname,
    firstName,
    pax,
    isInfant,
    isChild
  });

  state.hasPending = true;

  // Immediately render updated PNR display (as in Amadeus Screenshot 2)
  renderPNR();

  const typeLabel = isInfant ? 'Infant' : (isChild ? 'Child' : 'Adult');
  showToast(`âœ… SSR DOCS (${typeLabel}) added for ${pax} â€” Type RFR or RF R, then ER to save`);
}

function runSmartCmd(cmd){
  const input = document.getElementById('cmdInput');
  if(input) input.value = cmd;
  runCommand(cmd);
  mountInput();
}

// ---------- NAME MODIFY â€” NU1HAMED/MAHMOUD  or  1/MOUSSA/MAHMOUD ----------
// Matches real Amadeus GDS output: "Passenger 1 name changed from OLD to NEW"
function handleNameModify(cmd){
  const upper = cmd.toUpperCase().trim();

  let paxNum = null;
  let newSurname = '';
  let newFirst = '';

  // Format 1: NU1HAMED/MAHMOUD
  const mNU = upper.match(/^NU(\d+)([A-Z]+)\/([A-Z]+)$/i);
  if(mNU){
    paxNum    = parseInt(mNU[1], 10);
    newSurname = mNU[2].trim();
    newFirst   = mNU[3].trim();
  }

  // Format 2: 1/MOUSSA/MAHMOUD
  if(!mNU){
    const mSlash = upper.match(/^(\d+)\/([A-Z]+)\/([A-Z]+)$/i);
    if(mSlash){
      paxNum    = parseInt(mSlash[1], 10);
      newSurname = mSlash[2].trim();
      newFirst   = mSlash[3].trim();
    }
  }

  if(!paxNum || !newSurname || !newFirst){
    printLines([
      'INVALID NAME MODIFY FORMAT',
      'Format 1: NU1HAMED/MAHMOUD',
      'Format 2: 1/MOUSSA/MAHMOUD'
    ], 'err');
    return;
  }

  // Make sure a PNR is loaded
  if(!state.locator && !state.passengers.length){
    loadLessonPNR();
  }

  const paxIdx = paxNum - 1;
  if(paxIdx < 0 || paxIdx >= state.passengers.length){
    printLines([`PASSENGER ${paxNum} NOT FOUND â€” PNR HAS ${state.passengers.length} PASSENGER(S)`], 'err');
    return;
  }

  const pax = state.passengers[paxIdx];

  // Capture old display name for the confirmation message
  const oldLabel = (pax.nameDisplay || pax.label || '').split('(')[0].trim();
  const oldDisplay = oldLabel || `PASSENGER ${paxNum}`;

  // Build new label â€” preserve type suffix (CHD/DOB, INF, etc.) if present
  const suffixMatch = (pax.label || '').match(/\(.*\)/);
  const suffix = suffixMatch ? ` ${suffixMatch[0]}` : '';

  const newLabel     = `${newSurname}/${newFirst}${suffix}`;
  const newDisplay   = `${newSurname}/${newFirst}`;

  // Detect title from existing label
  const titleMatch = (pax.label || '').match(/\b(MR|MRS|MS|MISS|MSTR)\b/i);
  const title = titleMatch ? ` ${titleMatch[1].toUpperCase()}` : '';
  const newLabelFull = `${newSurname}/${newFirst}${title}${suffix}`;

  // Apply changes
  pax.label       = newLabelFull.trim();
  pax.nameDisplay = newDisplay;
  state.hasPending = true;

  // Output matching Screenshot 1 exactly
  printLines([
    `Passenger ${paxNum} name changed from ${esc(oldDisplay)} to ${newSurname}/${newFirst}`
  ], 'success');

  showToast(`âœ“ Name modified: P${paxNum} â†’ ${newSurname}/${newFirst} â€” Type IR to display updated PNR`);
}

// ---------- DM / DM1 — Display Minimum Connecting Time / Transit Time (Screenshot 1) ----------
function handleDM(cmd){
  const clean = (cmd || 'DM1').replace(/\s+/g, '').toUpperCase();
  const m = clean.match(/^DM(\d+)?/i);
  const segIdx = (m && m[1]) ? parseInt(m[1], 10) : 1;

  let seg1 = null;
  let seg2 = null;

  if(state.segments && state.segments.length >= 2){
    seg1 = state.segments[segIdx - 1] || state.segments[0];
    seg2 = state.segments[segIdx] || state.segments[1];
  } else if(lastANRoute && lastANRoute.lines){
    const connLine = lastANRoute.lines.find(l => l.segs && l.segs.length >= 2) || lastANRoute.lines[0];
    if(connLine && connLine.segs && connLine.segs.length >= 2){
      seg1 = connLine.segs[0];
      seg2 = connLine.segs[1];
    }
  }

  if(!seg1 || !seg2){
    seg1 = { al: "QR", fn: "639", dep: "DAC", arr: "DOH", arrT: "0620" };
    seg2 = { al: "QR", fn: "828", dep: "DOH", arr: "BKK", depT: "0725" };
  }

  const transit = seg1.arr || "DOH";
  const arrClean = (seg1.arrT || "0620").replace(/[^0-9]/g, '').padEnd(4, '0').slice(0, 4);
  const depClean = (seg2.depT || "0725").replace(/[^0-9]/g, '').padEnd(4, '0').slice(0, 4);

  const arrMin = parseInt(arrClean.slice(0, 2), 10) * 60 + parseInt(arrClean.slice(2, 4), 10);
  let depMin = parseInt(depClean.slice(0, 2), 10) * 60 + parseInt(depClean.slice(2, 4), 10);

  if(depMin < arrMin || (seg1.arrT && seg1.arrT.includes('+')) || (seg2.depT && seg2.depT.includes('+'))){
    depMin += 24 * 60;
  }
  const diff = depMin - arrMin;
  const hours = Math.floor(diff / 60);
  const mins = diff % 60;
  const connTimeStr = String(hours).padStart(2, '0') + String(mins).padStart(2, '0');

  const al1 = seg1.al;
  const al2 = seg2.al;

  const rows = [
    `DM${segIdx}`,
    `${transit}-${transit}       FROM      -       TO`,
    `CC FLTN-FLTR ORGN EQP TM CS-CC FLTN-FLTR DEST EQP TM CS       HHMM`,
    `${al1.padEnd(27, ' ')}-${al2.padEnd(32, ' ')}I/I:0045`,
    `ACTUAL CONNECTING TIME IS ${connTimeStr}`
  ];

  printLines(rows, '');
  showToast(`✓ Actual connecting time at ${transit}: ${hours}h ${mins}m (${connTimeStr})`);
}

// ---------- FXR / FXB / FXP / FXX — Pricing & TST Creation (Screenshot 2 & 3) ----------
function handlePricing(cmd){
  const upper = (cmd || 'FXR').toUpperCase().trim();
  const isRebook = (/^FX[RB]/i.test(upper)); // FXR and FXB rebook to lowest class

  // Rebook segment classes to 'N' (lowest economy promotional class)
  if(isRebook && state.segments && state.segments.length){
    state.segments.forEach(s => {
      s.cls = 'N';
      s.rebooked = true;
    });
  }

  state.hasTST = true;
  state.hasPending = true;

  const hasPax = state.passengers && state.passengers.length > 0;

  // If FXR command OR no passenger names entered yet (matching Screenshot 2 & 3)
  if(upper.startsWith("FXR") || !hasPax){
    const segs = (state.segments && state.segments.length) ? state.segments : [
      { al:"QR", fn:"639", cls:"N", date:"20MAY", dep:"DAC", arr:"DOH", depT:"0410", arrT:"0620" },
      { al:"QR", fn:"828", cls:"N", date:"20MAY", dep:"DOH", arr:"BKK", depT:"0725", arrT:"1820" }
    ];

    const rows = [
      upper,
      ``,
      `01 P1`,
      isRebook ? `ITINERARY REBOOKED` : `PRICED AS BOOKED`,
      `LAST TKT DTE 19MAY26/23:59 LT in POS - SEE ADV PURCHASE`,
      `------------------------------------------------------------`,
      `      AL  FLGT  BK T DATE   TIME  FARE BASIS       NVB   NVA   BG`
    ];

    segs.forEach((s, idx) => {
      if(idx === 0) {
        rows.push(` ${s.dep}`);
      }
      const prefix = (idx > 0) ? `X${s.dep}`.padEnd(5, ' ') : '     ';
      const bkCol = isRebook ? `${s.cls} *${s.cls}` : `${s.cls}  ${s.cls}`;
      const fBasis = `${s.cls}JR4R1RI`.padEnd(16, ' ');
      rows.push(`${prefix} ${s.al.padEnd(3, ' ')}  ${s.fn.padStart(4, ' ')}  ${bkCol} ${s.date}  ${s.depT}  ${fBasis} ${s.date}       25`);
      if(idx === segs.length - 1){
        rows.push(` ${s.arr}`);
      }
    });

    const origCity = segs[0].dep;
    const destCity = segs[segs.length - 1].arr;
    const alCode = segs[0].al;
    const dateStr = segs[0].date;
    const viaCode = segs.length > 1 ? ` X/${segs[0].arr}` : '';

    rows.push(``);
    rows.push(` USD  1068.00       ${dateStr}26${origCity} ${alCode}${viaCode} ${alCode} ${destCity}1068.00NUC`);
    rows.push(` BDT   131055       1068.00END ROE1.00`);
    rows.push(` BDT      500-BD    XT BDT 2500-OW BDT 1228-P7 BDT 1228-P8 BDT`);
    rows.push(` BDT      444-E5    4000-UT BDT 2022-G4 BDT 184-PZ BDT 2022-QA`);
    rows.push(` BDT    13754-XT    BDT 337-R9 BDT 136-E7 BDT 97-G8`);
    rows.push(` BDT   145753`);
    rows.push(` RATE USED 1USD=122.71BDT`);
    rows.push(` FARE FAMILIES:    (ENTER FQFn FOR DETAILS, FXY FOR UPSELL)`);
    rows.push(` FARE FAMILY:FC1:1-2:ECLASSIC`);
    rows.push(` FXU/TS TO UPSELL ECONVENIEN FOR 6626BDT`);
    rows.push(`>                                                    PAGE  2/ 3`);

    state.tstRecords = [
      { tstNum: 1, pCode: '.1', name: 'PAX 1', fare: 131055, tax: 14698, total: 145753, ptc: 'ADT', segs: `1-${segs.length}` }
    ];

    printLines(rows, '');
    showToast(`✓ Best Buy Quoted (${upper}) — Rebooked to class ${segs[0].cls} — Type RT to view`);
    return;
  }

  // Multi-passenger PNR table (e.g. Thai Airways / Turkish Airlines with existing names)
  const rows = [
    isRebook ? `ITINERARY REBOOKED` : `PRICED AS BOOKED`,
    `  PASSENGER       PTC   NP  FARE<BDT> TAX/FEE   PER PSGR`
  ];

  let totalNP = 0;
  let totalFare = 0;
  let totalTax = 0;
  let grandTotal = 0;
  state.tstRecords = [];

  let lineNo = 1;
  state.passengers.forEach((p, i)=>{
    if(p.type === 'child'){
      const rawName = p.label.split('/')[0] + '/' + (p.label.split('/')[1]||'').split(' ')[0] + '*';
      const shortName = rawName.slice(0, 14).padEnd(14, ' ');
      rows.push(`<span class="tst-tag">0${lineNo}</span> ${shortName}  CH     1     13529     6084      19613`);
      totalNP += 1; totalFare += 13529; totalTax += 6084; grandTotal += 19613;
      state.tstRecords.push({ tstNum: lineNo, pCode: `.${i+1}`, name: p.label.split('(')[0], fare: 13529, tax: 6084, total: 19613, ptc: 'CH', segs: '1-2' });
      lineNo++;
    } else if(p.type === 'adult' || !p.type){
      const rawName = p.label.split('/')[0] + '/' + (p.label.split('/')[1]||'').split(' ')[0] + '*';
      const shortName = rawName.slice(0, 14).padEnd(14, ' ');
      rows.push(`<span class="tst-tag">0${lineNo}</span> ${shortName}  ADT    1     13529     7584      21113`);
      totalNP += 1; totalFare += 13529; totalTax += 7584; grandTotal += 21113;
      state.tstRecords.push({ tstNum: lineNo, pCode: `.${i+1}`, name: p.label.split('(')[0], fare: 13529, tax: 7584, total: 21113, ptc: 'ADT', segs: '1-2' });
      lineNo++;
    } else if(p.type === 'infantCarrier'){
      const rawName = p.label.split('/')[0] + '/' + (p.label.split('/')[1]||'').split(' ')[0] + '*';
      const shortName = rawName.slice(0, 14).padEnd(14, ' ');
      rows.push(`<span class="tst-tag">0${lineNo}</span> ${shortName}  ADT    1     13529     7584      21113`);
      totalNP += 1; totalFare += 13529; totalTax += 7584; grandTotal += 21113;
      state.tstRecords.push({ tstNum: lineNo, pCode: `.${i+1}`, name: p.label.split('(')[0], fare: 13529, tax: 7584, total: 21113, ptc: 'ADT', segs: '1-2' });
      lineNo++;

      const infSurname = p.infant ? p.infant.surname : 'AHMED';
      const infFirst = p.infant ? p.infant.first : 'TAHER';
      const infName = `${infSurname}/${infFirst}*`;
      const shortInf = infName.slice(0, 14).padEnd(14, ' ');
      rows.push(`<span class="tst-tag">0${lineNo}</span> ${shortInf}  IN     1      6640      252       6892`);
      totalNP += 1; totalFare += 6640; totalTax += 252; grandTotal += 6892;
      state.tstRecords.push({ tstNum: lineNo, pCode: `.${i+1} I`, name: `${infSurname}/${infFirst} MISS(INF)`, fare: 6640, tax: 252, total: 6892, ptc: 'IN', segs: '1-2' });
      lineNo++;
    }
  });

  rows.push(``);
  rows.push(`           TOTALS        ${totalNP}     ${totalFare}    ${totalTax}      ${grandTotal}`);
  rows.push(``);
  rows.push(`1-2 LAST TKT DTE 24JUL18 - SEE SALES RSTNS`);
  rows.push(`3 LAST TKT DTE 05OCT18/23:59 LT in POS - SEE ADV PURCHASE`);
  rows.push(`1-3 FARE VALID FOR E TICKET ONLY`);
  rows.push(`1-2 TICKETS ARE NON-REFUNDABLE`);
  rows.push(`                                    PAGE   2/ 2`);

  printLines(rows, '');
  showToast(`✅ Best Buy Quoted (${upper}) — TST Stored for ${totalNP} passenger(s) — Type TQT to view`);
}

// ---------- TQT â€” Ticket Quote Table / Display TST (Screenshot 3) ----------
function handleTQT(cmd){
  if(!state.hasTST || !state.tstRecords || !state.tstRecords.length){
    printLines(['NO TST EXISTS â€” USE FXB OR FXP TO CREATE TST FIRST'], 'err');
    return;
  }

  const fopStr = state.fop || '';
  const rows = [
    `T    P/S  NAME                     TOTAL          FOP          SEGMENTS`
  ];

  state.tstRecords.forEach(t => {
    const tNum = `<span class="tst-tag">${t.tstNum}</span>   `;
    const pCode = t.pCode.padEnd(5, ' ');
    const nameStr = t.name.slice(0, 20).padEnd(21, ' ');
    const totStr = `BDT        ${t.total}`.padEnd(25, ' ');
    const fopDisplay = fopStr.padEnd(13, ' ');
    const segs = t.segs || '3-4';
    rows.push(`${tNum}${pCode}${nameStr}${totStr}${fopDisplay}${segs}`);
  });

  rows.push(``);
  rows.push(`DELETED TST RECORDS MAY EXIST - PLEASE USE TTH`);

  printLines(rows, '');
  showToast(`Ticket Quote Table (TQT) displayed`);
}

// ---------- FPINV / FP ... â€” Form of Payment (Screenshot 4) ----------
function handleFP(cmd){
  const fopVal = cmd.replace(/^FP\s*/i, '').trim().toUpperCase() || 'INV';
  state.fop = fopVal;
  state.hasPending = true;
  printLines([`Ticket Modifiers Updated`], 'success');
  showToast(`âœ… Form of Payment (FP ${fopVal}) recorded â€” Type TTP to issue ticket`);
}

// ---------- TTP â€” Issue Electronic Ticket (Issue Entry â€” Screenshot 2 & 3) ----------
function handleTTP(cmd){
  if(!state.locator && (!state.passengers.length || !state.segments.length)){
    loadJhonyPNR();
  }

  const isBG = (state.segments[0] && state.segments[0].al === 'BG') || (state.locator === 'ICRBPO') || (!state.segments[0] && !state.locator);
  const isTG = (state.segments[0] && state.segments[0].al === 'TG') || (state.locator === 'OGJZJ9');

  const alCode = isBG ? '157' : (isTG ? '217' : '074');
  const alLetter = isBG ? 'BG' : (isTG ? 'TG' : 'TK');
  const tktNum = isBG ? '157-7800396554421' : (isTG ? '217-2456789012' : '074-2456789012');

  // Robustly get fare value â€” never undefined
  let fareVal = 30000;
  if(state.tstRecords && state.tstRecords.length > 0){
    const totalSum = state.tstRecords.reduce((sum, r) => sum + (parseInt(r.total, 10) || 0), 0);
    if(totalSum > 0) fareVal = totalSum;
  }

  const flightNum = (state.segments[0] && state.segments[0].fn) ? state.segments[0].fn : '555';
  const depDate = (state.segments[0] && state.segments[0].fullDate) ? state.segments[0].fullDate : '2026-07-25';
  const destName = (state.segments[0] && state.segments[0].arr === 'SIN') ? 'Singapore Changi Airport' : 
                   ((state.segments[0] && state.segments[0].arr === 'BKK') ? 'Bangkok Suvarnabhumi Airport' :
                   ((state.segments[0] && state.segments[0].arr === 'DXB') ? 'Dubai International Airport' :
                   ((state.segments[0] && state.segments[0].arr === 'IST') ? 'Istanbul Airport' :
                   ((state.segments[0] && state.segments[0].arr === 'LHR') ? 'London Heathrow Airport' : 'Destination Airport'))));

  let paxName = 'MR MD JHONY';
  if(state.passengers && state.passengers.length){
    const p = state.passengers[0];
    const raw = (p.nameDisplay || p.label || '').split('(')[0].trim();
    if(raw.includes('/')){
      const parts = raw.split('/');
      const surname = parts[0].trim();
      const rest = (parts[1] || '').trim();
      paxName = `${rest} ${surname}`.trim();
    } else {
      paxName = raw || 'MR MD JHONY';
    }
  }

  // Finalize state
  state.finalized = true;
  state.ticketed = true;
  state.hasPending = false;
  state.segments.forEach(s => s.status = 'HK');

  const currentOffice = state.officeId || OFFICE_ID;
  const tktDate = state.dateStamp ? state.dateStamp.split('/')[0] : '18JUN26';

  if(state.ticketing && !state.ticketing.includes('/ET')){
    state.ticketing = state.ticketing + '/ET';
  } else if(!state.ticketing){
    state.ticketing = `OK${tktDate}/${currentOffice}/ET`;
  }

  if(!state.tickets) state.tickets = [];
  state.tickets = [{
    tktNum,
    pax: 'P1',
    name: paxName,
    amount: fareVal,
    alLetter,
    tktDate,
    office: currentOffice
  }];

  // Store ticket info in data attributes to avoid JS injection issues in onclick
  const safeId = 'ttp_' + Date.now();
  window._ttpData = window._ttpData || {};
  window._ttpData[safeId] = { paxName, tktNum, fareVal, flightNum, depDate, destName };

  // Render the exact row from Screenshot 2 with Print button
  const rowHtml = `
    <div class="ttp-issued-row">
      <span>ELECTRONIC TKT GENERATED TTL FARE BDT ${fareVal} TICKET NUMBER: ${tktNum} SUPPORTING DOCUMENTS GENERATED</span>
      <button type="button" class="ttp-inline-print-btn" data-ttp-id="${safeId}">ðŸ–¨ Print</button>
    </div>
  `;
  printRaw(rowHtml);

  // Attach click listener via event delegation (avoids inline JS escaping issues)
  setTimeout(() => {
    const btn = document.querySelector(`[data-ttp-id="${safeId}"]`);
    if(btn){
      btn.addEventListener('click', () => {
        const d = window._ttpData[safeId];
        if(d) openTicketModal(d.paxName, d.tktNum, 'BDT ' + d.fareVal, d.flightNum, d.depDate, d.destName);
      });
    }
  }, 0);

  showToast(`ðŸŽ‰ Electronic Ticket Generated (${tktNum}) â€” Click Print to view`);
}

function openTicketModal(pax, tktNo, fare, flight, depDate, dest){
  document.getElementById('tktModalPax').textContent = pax;
  document.getElementById('tktModalNumber').textContent = tktNo;
  document.getElementById('tktModalFare').textContent = fare;
  document.getElementById('tktModalFlight').textContent = flight;
  document.getElementById('tktModalDate').textContent = depDate;
  document.getElementById('tktModalDest').textContent = dest;
  document.getElementById('ticketModalBackdrop').classList.add('show');
}

function closeTicketModal(){
  document.getElementById('ticketModalBackdrop').classList.remove('show');
}

function printTicketFromModal(){
  window.print();
}

// ---------- MEAL HELP & REFERENCE (Screenshot 1 & 2) ----------
function handleMealHelpIndex(){
  const rows = [
    `                     MEAL CODES              EN  16NOV16 0939Z`,
    ``,
    `CODE                                              REFERENCE`,
    `----                                              ---------`,
    `MEAL CODES IN SSR                                 MS 22`,
    `MEAL CODES IN FLIGHT INFORMATION                  MS 64`,
    ``,
    `                                                               >MD`
  ];
  printLines(rows, '');
  showToast(`Meal Codes Index displayed â€” Enter MS22 to view SSR Meal Codes`);
}

function handleMealCodesSSR(){
  const rows = [
    `                     MEAL CODES              EN  16NOV16 0939Z`,
    ``,
    `MEAL CODES IN SSR`,
    `-----------------`,
    ``,
    `CODE   MEAL DESCRIPTION`,
    `----   ----------------`,
    `AVML   VEGETARIAN HINDU MEAL`,
    `BBML   BABY MEAL`,
    `BLML   BLAND MEAL`,
    `CHML   CHILD MEAL`,
    `CNML   CHICKEN MEAL (LY SPECIFIC)`,
    `DBML   DIABETIC MEAL`,
    `FPML   FRUIT PLATTER MEAL`,
    `GFML   GLUTEN INTOLERANT MEAL`,
    `HNML   HINDU (NON VEGETARIAN) MEAL SPECIFIC`,
    `IVML   INDIAN VEGETARIAN MEAL (UA SPECIFIC)`,
    `JPML   JAPANESE MEAL (LH SPECIFIC)`,
    `KSML   KOSHER MEAL`,
    `LCML   LOW CALORIE MEAL`,
    `LFML   LOW FAT MEAL`,
    `LSML   LOW SALT MEAL`,
    `MOML   MUSLIM MEAL`,
    `NFML   NO FISH MEAL`,
    `NLML   NON-LACTOSE MEAL`,
    `OBML   JAPANESE OBENTO MEAL`,
    `ORML   ORIENTAL MEAL`,
    `RVML   RAW VEGETARIAN MEAL`,
    `SFML   SEA FOOD MEAL`,
    `SPML   SPECIAL MEAL`,
    `VGML   VEGETARIAN VEGAN MEAL`,
    `VLML   VEGETARIAN LACTO-OVO MEAL`,
    `VOML   VEGETARIAN ORIENTAL MEAL`,
    `                                                               >MD`
  ];
  printLines(rows, '');
  showToast(`Meal Codes in SSR displayed â€” Example: SRMOML/P2 to add Muslim Meal`);
}

function handleMealCodesFlightInfo(){
  const rows = [
    `                     MEAL CODES              EN  16NOV16 0939Z`,
    ``,
    `MEAL CODES IN FLIGHT INFORMATION`,
    `--------------------------------`,
    ``,
    `CODE   MEAL DESCRIPTION`,
    `----   ----------------`,
    `B      BREAKFAST`,
    `L      LUNCH`,
    `D      DINNER`,
    `S      SNACK OR BRUNCH`,
    `M      MEAL (NON-SPECIFIC)`,
    `R      REFRESHMENT`,
    `C      ALCOHOLIC BEVERAGES COMPLIMENTARY`,
    `                                                               >MD`
  ];
  printLines(rows, '');
  showToast(`Flight Information Meal Codes displayed`);
}

let commandHistory = [];
let historyPos = -1;

// ---------- XE â€” Delete SSR / DOCS / OSI by line number or SSR type ----------
// Formats:
//   XE10              â€” delete PNR line number 10
//   XEMOML            â€” delete all MOML meal requests
//   XECHML            â€” delete all CHML meal requests
//   XESRDOCS/P1       â€” delete passport docs for passenger 1
//   XEDOCS/P2         â€” same shorthand for SRDOCS
function handleXE(cmd){
  const upper = cmd.toUpperCase().trim();
  const body  = upper.replace(/^XE\s*/i, '').trim();

  if(!body){
    printLines([
      'INVALID XE FORMAT. Examples:',
      '  XE10          â€” Delete line 10 from PNR',
      '  XEMOML        â€” Delete Muslim Meal SSR',
      '  XECHML        â€” Delete Child Meal SSR',
      '  XESRDOCS/P1   â€” Delete passport docs for Passenger 1',
    ], 'err');
    return;
  }

  // ---- Format 1: XE[number] â€” delete by line number ----
  const lineMatch = body.match(/^(\d+)$/);
  if(lineMatch){
    const lineNum = parseInt(lineMatch[1], 10);
    // Try to delete the corresponding rendered PNR item
    // Map line number to state items: passengers first, then segments, AP, TK, SSRs
    let deleted = false;
    let lineCounter = 1;

    // Passengers
    for(let i = 0; i < state.passengers.length; i++){
      if(lineCounter === lineNum){
        const removed = state.passengers.splice(i, 1)[0];
        state.hasPending = true;
        printLines([`ELEMENT DELETED - LINE ${lineNum} (${esc(removed.label.split('(')[0].trim())})`], 'success');
        showToast(`âœ• Line ${lineNum} deleted â€” Type IR to refresh PNR`);
        deleted = true; break;
      }
      lineCounter++;
    }

    // Segments
    if(!deleted){
      for(let i = 0; i < state.segments.length; i++){
        if(lineCounter === lineNum){
          const removed = state.segments.splice(i, 1)[0];
          state.hasPending = true;
          printLines([`ELEMENT DELETED - LINE ${lineNum} (${removed.al}${removed.fn} ${removed.dep}-${removed.arr})`], 'success');
          showToast(`âœ• Segment deleted â€” Type IR to refresh`);
          deleted = true; break;
        }
        lineCounter++;
      }
    }

    // SSR / Other lines (AP, TK, special SSRs, docs)
    if(!deleted){
      if(state.phone) lineCounter++;
      if(state.ticketing) lineCounter++;
      // SSR lines
      const ssrList = state.specialSSRs || [];
      for(let i = 0; i < ssrList.length; i++){
        if(lineCounter === lineNum){
          const removed = ssrList.splice(i, 1)[0];
          state.hasPending = true;
          printLines([`ELEMENT DELETED - LINE ${lineNum} (SSR ${removed.type}/${removed.pax})`], 'success');
          showToast(`âœ• SSR ${removed.type} deleted`);
          deleted = true; break;
        }
        lineCounter++;
      }
    }

    if(!deleted){
      printLines([`LINE ${lineNum} NOT FOUND OR CANNOT BE DELETED IN TRAINING MODE`], 'warn');
    }
    return;
  }

  // ---- Format 2: XE[SSRTYPE] â€” delete all SSRs of that type ----
  // e.g. XEMOML, XECHML, XEBBML
  const MEAL_CODES = ['MOML','CHML','BBML','BSCT','AVML','BLML','DBML','FPML','GFML','HNML','KSML','LCML','LFML','LSML','NFML','NLML','ORML','RVML','SFML','SPML','VGML','VLML','VOML','WCHR','WCHS','WCHC'];
  const ssrTypeMatch = MEAL_CODES.find(c => body === c || body === 'SSR' + c);
  if(ssrTypeMatch){
    const before = (state.specialSSRs || []).length;
    state.specialSSRs = (state.specialSSRs || []).filter(s => s.type !== ssrTypeMatch);
    const removed = before - state.specialSSRs.length;
    if(removed > 0){
      state.hasPending = true;
      printLines([`SSR ${ssrTypeMatch} DELETED (${removed} entr${removed > 1 ? 'ies' : 'y'} removed) â€” Type IR to confirm`], 'success');
      showToast(`âœ• SSR ${ssrTypeMatch} removed`);
    } else {
      printLines([`NO SSR ${ssrTypeMatch} FOUND IN THIS PNR`], 'warn');
    }
    return;
  }

  // ---- Format 3: XESRDOCS/P1 or XEDOCS/P1 â€” delete passport docs ----
  const docsMatch = body.match(/^(?:SR)?DOCS\/(P\d+(?:\/INF)?|INF|ALL)$/i);
  if(docsMatch){
    const target = docsMatch[1].toUpperCase();
    const before = (state.docsEntries || []).length;
    if(target === 'ALL'){
      state.docsEntries = [];
    } else {
      state.docsEntries = (state.docsEntries || []).filter(d => d.pax !== target);
    }
    const removed = before - (state.docsEntries || []).length;
    if(removed > 0){
      state.hasPending = true;
      renderPNR();
      printLines([`SSR DOCS DELETED FOR ${target} â€” Re-enter SRDOCS to add new passport`], 'success');
      showToast(`âœ• DOCS deleted for ${target}`);
    } else {
      printLines([`NO DOCS ENTRY FOUND FOR ${target}`], 'warn');
    }
    return;
  }

  // ---- Format 4: XEOSI â€” delete OSI entries ----
  if(body === 'OSI' || body === 'OSHI' || body.startsWith('OSI')){
    const before = (state.osiEntries || []).length;
    state.osiEntries = [];
    if(before > 0){
      state.hasPending = true;
      printLines([`ALL OSI ENTRIES DELETED (${before} removed)`], 'success');
      showToast('âœ• OSI entries deleted');
    } else {
      printLines(['NO OSI ENTRIES TO DELETE'], 'warn');
    }
    return;
  }

  printLines([
    `CANNOT DELETE: ${body}`,
    'Valid formats: XE[lineNo]  |  XE[SSRTYPE]  |  XESRDOCS/P1'
  ], 'err');
}

function runCommand(raw){
  const cmd = raw.trim();
  if(!cmd) return;
  commandHistory.push(cmd);
  historyPos = commandHistory.length;
  printPromptEcho(cmd);
  const upper = cmd.toUpperCase();
  const clean = upper.replace(/\s+/g, '');

  if(/^A[ND]/i.test(clean) && clean.length >= 8) return handleAN(upper, clean.startsWith("AD"));
  if(/^SS\d+[A-Z]+\d+/i.test(clean)) return handleSS(upper);
  if(/^NM1/i.test(upper)) return handleNM(upper);
  if(/^AP\s/i.test(upper)) return handleAP(cmd);
  if(/^TK\s*(TL|OK)/i.test(upper)) return handleTK(upper);
  if(/^FM/i.test(upper)) return handleFM(upper);

  // RF / Received From and ER / ET End Transaction
  if(/^RF\S*;\s*(ER|ET)$/i.test(upper)) {
    const parts = upper.split(';');
    state.receivedFrom = parts[0].replace(/^RF\s*/i, '').trim() || 'R';
    return handleER();
  }
  if(/^RF(\s*.*)?$/i.test(upper) && upper !== "ET" && upper !== "ER") return handleRF(cmd);
  if(upper === "ER" || clean === "ER") return handleER();
  if(upper === "ET" || clean === "ET") return handleER();
  if(upper === "IR" || clean === "IR") return handleIR();
  if(upper === "MD" || clean === "MD") return handleMD();
  if(/^RT/i.test(upper)) return handleRT(upper);
  if(upper === "XI" || clean === "XI") return handleXI();
  if(upper === "IG" || clean === "IG" || upper === "I" || clean === "I") return handleIG();

  // Help & Reference Commands (Screenshot 1 & 2)
  if(/^(HE\/MEAL|HE\s+MEAL|GG\s*MEAL|HELP\s+MEAL|MS\s*21)$/i.test(upper)) return handleMealHelpIndex();
  if(/^MS\s*22$/i.test(upper)) return handleMealCodesSSR();
  if(/^MS\s*64$/i.test(upper)) return handleMealCodesFlightInfo();
  if(/^MS\s*\d+$/i.test(upper)) return handleMealCodesSSR();
  if(/^HE(\/\S*)?$/i.test(upper)) return handleMealHelpIndex();

  // ES = Share/Extend PNR to another office â€” ESDACVS3334-B
  if(/^ES[A-Z0-9]+-[ABR]$/i.test(upper) || /^ES[A-Z0-9]+$/i.test(upper)) return handleES(upper);

  // SRDOCS or SR DOCS - Passport / Travel Document entry (Adult / Child / Infant)
  if(/^SR\s*DOCS/i.test(upper)) return handleSRDOCS(upper, cmd);

  // SR (all meal and special service requests with or without space: SRMOML/P2, SR MOML/P2, etc.)
  if(/^SR/i.test(upper)) return handleSR(upper);

  // OSI VIP / MEDA / informational notes
  if(/^OSI\s+/i.test(upper)) return handleOSI(upper);

  // DM / DM1 — Display Minimum Connecting Time / Transit Time (Screenshot 1)
  if(/^DM\d*/i.test(clean)) return handleDM(upper);

  // FXR / FXB / FXP / FXX — Pricing & TST Creation (Screenshot 2 & 3)
  if(/^FX[RBPX]/i.test(clean)) return handlePricing(upper);

  // TQT — Ticket Quote Table / Display TST (Screenshot 3)
  if(/^TQT(\/T\d+)?$/i.test(upper)) return handleTQT(upper);

  // FPINV / FP ... — Form of Payment (Screenshot 4)
  if(/^FP\s*/i.test(upper) || /^FPINV/i.test(upper)) return handleFP(cmd);

  // TTP — Issue Electronic Ticket (Issue Entry)
  if(/^TTP(\/\S+)?$/i.test(upper)) return handleTTP(upper);

  // ---------- NAME MODIFY — Two real Amadeus formats ----------
  // Format 1: NU1HAMED/MAHMOUD  (NU + pax number + new name)
  // Format 2: 1/MOUSSA/MAHMOUD  (pax number + / + surname + / + firstname)
  if(/^NU\d+[A-Z]+\/[A-Z]+/i.test(upper)) return handleNameModify(upper);
  if(/^\d+\/[A-Z]+\/[A-Z]+/i.test(upper)) return handleNameModify(upper);

  // XE — Delete SSR / DOCS / OSI entry (XE10 or XEMOML or XESRDOCS/P1)
  if(/^XE/i.test(upper)) return handleXE(upper);

  printLines([`FORMAT - command not recognised. Try: DM1 · FXR · FXB · RT · HE/MEAL · MS22 · SRMOML/P2 · ER · TQT · FPINV · TTP · NU1NAME/FIRST · XE10`], 'err');
}

function mountInput(){
  const old = document.querySelector('.inputRow');
  if(old) old.remove();

  const row = document.createElement('div');
  row.className = 'inputRow';
  row.innerHTML = `<span class="chevron">&gt;</span><input id="cmdInput" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="Type an Amadeus command or click a booking class above...">`;
  term.appendChild(row);

  const input = row.querySelector('#cmdInput');
  input.focus();

  input.addEventListener('input', ()=>{
    const pos = input.selectionStart;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(pos, pos);
  });

  input.addEventListener('keydown', e=>{
    if(e.key === 'Enter'){
      const val = input.value;
      input.value = '';
      runCommand(val);
      mountInput();
      return;
    }
    if(e.altKey && e.key === 'ArrowUp'){
      e.preventDefault();
      if(commandHistory.length){
        historyPos = Math.max(0, historyPos - 1);
        input.value = commandHistory[historyPos] || '';
      }
    }
    if(e.altKey && e.key === 'ArrowDown'){
      e.preventDefault();
      if(commandHistory.length){
        historyPos = Math.min(commandHistory.length, historyPos + 1);
        input.value = commandHistory[historyPos] || '';
      }
    }
  });

  term.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('seg-class-link')){
      input.focus();
    }
  });
}

// Action search bar on top
document.getElementById('actionSearchInput').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    const val = e.target.value.trim();
    if(val){
      runCommand(val);
      e.target.value = '';
    }
  }
});

// Initialize on page load: display the exact lesson PNR with clickable classes!
window.addEventListener('DOMContentLoaded', ()=>{
  printPromptEcho("IR");
  renderPNR();
  mountInput();
});
