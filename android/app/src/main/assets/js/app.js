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

function createEmptyState() {
  return {
    locator: null,
    officeId: OFFICE_ID,
    agentCode: null,
    dateStamp: null,
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
    seats: {},
    docsEntries: [],
    hasPending: false
  };
}

// Current Session State - Starts completely clean & fresh upon login/refresh!
var state = createEmptyState();
if(typeof window !== 'undefined') window.state = state;
if(typeof global !== 'undefined') global.state = state;
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
// Helper: compute next-day date string from a base date string like "23NOV"
function getNextDayDate(dateStr) {
  const m = (dateStr || '').match(/^(\d{1,2})([A-Z]{3})/i);
  if (!m) return '';
  const months = {JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
  const monthNames = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const day = parseInt(m[1], 10);
  const mon = m[2].toUpperCase();
  const monIdx = months[mon];
  if (monIdx === undefined) return '';
  const d = new Date(2026, monIdx, day + 1);
  return `${d.getDate()}${monthNames[d.getMonth()]}`;
}

function formatSegmentBuildingLines(seg, sIdx, totalSegs, segLineNum){
  const lines = [];
  const sNum = segLineNum.toString().padStart(2, ' ');
  const classLink = `<span class="seg-class-link" onclick="openSeatMap(${sIdx})" title="Click to view Seat Map for this flight (${seg.al} ${seg.fn})">${seg.cls}</span>`;

  const depT = seg.depT || '0000';
  const rawArrT = seg.arrT || '0000';
  const isNextDay = rawArrT.includes('+1');
  // Display arrival time without '+1' suffix
  const arrTClean = rawArrT.replace(/\+\d+$/, '');
  const timeStr = `${depT} ${arrTClean}`;
  const dateStr = seg.date || '12NOV';
  const dayStr = seg.day || getDayOfWeek(dateStr);
  const fnPadded = seg.fn.toString().length < 4 ? seg.fn.toString().padStart(3, ' ') : seg.fn.toString();
  const stCount = `${seg.status || 'DK'}${seg.count || 1}`;
  const eq = seg.eq || '77W';

  // Compute arrival date: next day or same day
  const arrDateStr = isNextDay ? getNextDayDate(dateStr) : dateStr;
  // Spacing: after times, either show arrival date or spaces, then equipment
  // Format: depT arrTClean   [arrDate ]E 0 [eq] M
  const afterTimes = `   ${arrDateStr} E 0 ${eq} M`;

  // Air India (matches Screenshot 3: 1*DACDEL, 2100 2320 10FEB E 0 32A, SEE RTSVC)
  if(seg.al === 'AI'){
    const fnStr = (String(seg.fn).length >= 4) ? `AI${seg.fn}` : `AI ${seg.fn}`;
    const fnDisplay = `<span class="al">${fnStr}</span>`.padEnd(8, ' ');
    const dayStr = seg.day || '1*';
    const arrDateDisplay = (seg.arrT && seg.arrT.includes('+1')) ? getNextDayDate(dateStr) : dateStr;
    lines.push(
      `${sNum}  ${fnDisplay} ${classLink} ${dateStr} ${dayStr}${seg.dep}${seg.arr} ${stCount}    ${timeStr}   ${arrDateDisplay} E 0 ${eq}`
    );
    lines.push(`    SEE RTSVC`);
    return lines;
  }

  // Standard clean Amadeus output for airlines like TG, MH, OD, BG, AK, BS, TK, EK
  if(['TG', 'MH', 'OD', 'BG', 'AK', 'BS', 'TK', 'EK'].includes(seg.al)){
    lines.push(
      `${sNum}  <span class="al">${seg.al} ${fnPadded}</span> ${classLink} ${dateStr} ${dayStr} ${seg.dep}${seg.arr} ${stCount}  ${timeStr}  ${arrDateStr}  E  0 ${eq} M`
    );
    lines.push(`     SEE RTSVC`);
    return lines;
  }

  // Other airlines (e.g. QR / SQ)
  let connCol = '       ';
  if(totalSegs > 1){
    connCol = (sIdx === 0) ? '       1  ' : '          ';
  }
  lines.push(
    `${sNum}  <span class="al">${seg.al} ${fnPadded}</span> ${classLink} ${dateStr} ${dayStr} ${seg.dep}${seg.arr} ${stCount}${connCol}${timeStr}${afterTimes}`
  );
  lines.push(`    MANDATORY REQUIRED DOCS DOCO DOCA CTCM CTCE`);
  lines.push(`    PLS ENTER SSR CTCM OR CTCE FOR IROP ALERTS`);
  if(['77W', '787', '359'].includes(eq) && (sIdx === 0 || seg.al === 'SQ' || (seg.al === 'QR' && eq === '77W'))){
    lines.push(`    STARLINK ENABLED`);
  }
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
  if(state.hasPending && state.locator){
    rows.push(`<span class="warn">PNR UPDATED BY PARALLEL PROCESS-PLEASE VERIFY PNR CONTENT</span>`);
    state.hasPending = false; // clear after display
  }

  const isBuilding = !state.locator && !state.finalized;

  if(header) {
    rows.push(header);
  } else if(isBuilding) {
    if(state.mscHeader){
      rows.push(`--- MSC ---`);
    }
    const currOffice = state.officeId || OFFICE_ID;
    rows.push(`RP/${currOffice}/`);
    // RF line appears right after RP/ in building mode
    if(state.rfEntry){
      rows.push(`RF ${state.rfEntry}`);
    }
  } else {
    const rlrHeader = state.hasTST ? `--- TST RLR ---` : `--- RLR ---`;
    rows.push(rlrHeader);
    const currOffice = state.officeId || OFFICE_ID;
    const agCode = state.agentCode || (state.locator === 'OGJZJ9' ? 'BP/AS' : 'SS/GS');
    rows.push(`RP/${currOffice}/${currOffice}            ${agCode}   ${state.dateStamp||"13NOV24/1435Z"}   <span class="locator">${state.locator||"J99GZO"}</span>`);
    // Second header line (e.g. DACVS33GT/0002TG/7SEP26)
    const line2 = state.erHeaderLine2 || state.headerLine2;
    if(line2){
      rows.push(line2);
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
      const day = seg.day || '2*';
      const dateStr = seg.date || '25MAR';
      const isHK = (seg.status === 'HK');
      // After ER: use confirmedEndCode (E  TG/LOCATOR) format
      // For pre-loaded PNRs (Lesson/Thai): keep *1A/E* format
      const rawArrT = seg.arrT || '0000';
      const isNextDay = rawArrT.includes('+1');
      const arrTClean = rawArrT.replace(/\+\d+$/, '');
      const arrDateStr = isNextDay ? getNextDayDate(dateStr) : dateStr;
      // Build the time+arrdate portion
      const timeAndDate = `${seg.depT} ${arrTClean}  ${arrDateStr}  `;

      let endCode;
      if(seg.confirmedEndCode){
        // User-booked segments: E  TG/92C57S format
        endCode = `  ${timeAndDate}${seg.confirmedEndCode}`;
      } else if(isHK){
        // Pre-loaded lesson PNRs: *1A/E* format
        endCode = `  ${seg.depT} ${seg.arrT}  *1A/E*`;
      } else {
        endCode = `  ${seg.depT} ${seg.arrT}  ${seg.tktCode || 'TK/VB7BHH'}`;
      }

      const countStr = isHK ? seg.count.toString().padStart(4, ' ') : `  ${seg.count}`;

      if(seg.confirmedEndCode){
        const fnPadded = seg.fn.toString().length < 4 ? seg.fn.toString().padStart(3, ' ') : seg.fn.toString();
        if(!state.justEndedRecord && seg.al === 'TG'){
          // Multi-line airport display for TG on IR / RT (matches real Amadeus transcript)
          const destName = seg.arr === 'DAC' ? 'DHAKA, HAZRAT SHAHJALAL INTL' : `${seg.arr} INTL`;
          rows.push(
            `${segLineNum.toString().padStart(2, ' ')}  ` +
            `<span class="al">${seg.al} ${fnPadded}</span> ` +
            `${classLink} ${dateStr} ${day} ${seg.dep}${seg.arr}`
          );
          rows.push(destName);
          rows.push(
            ` HK${seg.count}  ${timeAndDate}${seg.confirmedEndCode}`
          );
        } else {
          // Single-line confirmed format (ER display or other airlines):
          rows.push(
            `${segLineNum.toString().padStart(2, ' ')}  ` +
            `<span class="al">${seg.al} ${fnPadded}</span> ` +
            `${classLink} ${dateStr} ${day} ${seg.dep}${seg.arr} ` +
            `HK${seg.count}  ${timeAndDate}${seg.confirmedEndCode}`
          );
        }
      } else {
        rows.push(
          `${segLineNum.toString().padStart(2, ' ')}  ` +
          `<span class="al">${seg.al} ${seg.fn}</span> ` +
          `${classLink} ${dateStr} ${day}${seg.dep}${seg.arr} ` +
          `${seg.status}${countStr}${endCode}`
        );
      }
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
    const paxSuffix = (state.passengers && state.passengers.length > 1) ? `/${s.pax}` : '';
    rows.push(`${idx.toString().padStart(2, ' ')}  SSR ${s.type} ${s.al} ${s.status} ${s.value}${paxSuffix}`);
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

  // ---------- OPW Remarks (ticketing deadline) ----------
  if(!state.justEndedRecord && state.opwRemarks && state.opwRemarks.length){
    state.opwRemarks.forEach(r => {
      rows.push(`${idx.toString().padStart(2, ' ')}  ${r}`);
      idx++;
    });
  }

  // ---------- OPC Remarks (cancellation deadline) ----------
  if(!state.justEndedRecord && state.opcRemarks && state.opcRemarks.length){
    state.opcRemarks.forEach(r => {
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

  // 2. If no active PNR (clean initial / reset / ignored state)
  if(!state.passengers.length && !state.segments.length && !state.locator){
    if (tabTitleText) tabTitleText.textContent = `Command page`;
    if (topPnrStatus) topPnrStatus.textContent = ``;
    if (bottomPaxName) bottomPaxName.textContent = ``;
    return;
  }

  // 3. Normal PNR with passengers
  const segInfo = seg0 ? `${seg0.date} - ${seg0.arr}` : "";
  if (topPnrStatus) topPnrStatus.textContent = loc ? `PNR: ${loc} (${state.finalized ? 'Confirmed' : 'Building'})` : `PNR: Building`;
  if (tabTitleText) tabTitleText.textContent = `Command page - ${pax0} (${state.passengers.length})${segInfo ? ' - ' + segInfo : ''}${loc ? ' - ' + loc : ''}`;
  if (bottomPaxName) bottomPaxName.textContent = pax0 ? (pax0.slice(0, 20) + "...") : "";
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
  state = createEmptyState();
  lastANRoute = null;
  if(typeof resetFareShop === 'function') resetFareShop();
  term.innerHTML = '';
  updateTopPnrInfo();
  mountInput();
  showToast("Simulator reset — ready for new command");
}

function handleIG(){
  state = createEmptyState();
  lastANRoute = null;
  if(typeof resetFareShop === 'function') resetFareShop();
  printLines([
    '--- RLR ---',
    'TRANSACTION IGNORED'
  ], 'warn');
  updateTopPnrInfo();
  showToast("Transaction ignored (IG) — Workspace cleared");
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

  const CITY_NAMES = {
    KUL: "KUL KUALA LUMPUR.MY",
    DAC: "DAC DHAKA.BD",
    BKK: "BKK BANGKOK.TH",
    SIN: "SIN SINGAPORE.SG",
    DXB: "DXB DUBAI.AE",
    DOH: "DOH DOHA.QA",
    JED: "JED JEDDAH.SA",
    IST: "IST ISTANBUL.TR",
    NRT: "NRT TOKYO.JP",
    JFK: "JFK NEW YORK.US",
    LHR: "LHR LONDON.GB",
    DEL: "DEL DELHI.IN",
    CCU: "CCU KOLKATA.IN",
    CMB: "CMB COLOMBO.LK"
  };
  const destCity = CITY_NAMES[d] || `${d} ${d}.INTL`;
  const dm = date.match(/^(\d{1,2})([A-Z]{3})/i);
  const dayNum = dm ? parseInt(dm[1], 10) : 23;
  const monName = dm ? dm[2].toUpperCase() : 'DEC';
  const monthsMap = {JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
  const mIdx = monthsMap[monName] !== undefined ? monthsMap[monName] : 11;
  const dObj = new Date(2026, mIdx, dayNum);
  const day2L = ['SU','MO','TU','WE','TH','FR','SA'][dObj.getDay()];
  const startOfYear = new Date(2026, 0, 1);
  const dayOfYear = Math.floor((dObj - startOfYear) / (24*60*60*1000)) + 1;
  const julianStr = String(dayOfYear).padStart(3, ' ');

  const header = `** AMADEUS AVAILABILITY - ${isDirect ? "AD" : "AN"} ** ${destCity.padEnd(28, ' ')}  ${julianStr} ${day2L} ${date} 0000`;
  const rows = [header];

  const alFilter = filter ? filter.toUpperCase().replace(/^A/, '') : null;
  let displayIdx = 1;

  route.lines.forEach(line => {
    if(alFilter && !line.segs.some(s => s.al.toUpperCase() === alFilter)) return;

    line.segs.forEach((seg, i) => {
      const clsEntries = Object.entries(seg.classes);
      const isCodeshare = !!seg.codeShare;
      const alDisplay = isCodeshare ? seg.codeShare.padEnd(9, ' ') : `  ${seg.al} ${(seg.fn.length < 3 ? seg.fn.padStart(3, ' ') : seg.fn)}`.padEnd(9, ' ');
      const row1Cls = clsEntries.slice(0, 7).map(([c, n]) => `${c}${n}`).join(' ');
      const row2Cls = clsEntries.length > 7 ? clsEntries.slice(7).map(([c, n]) => `${c}${n}`).join(' ') : '';
      const num = (i === 0) ? (displayIdx++).toString().padStart(2, ' ') : '  ';
      const hasTerm = (seg.termDep !== undefined || seg.termArr !== undefined);
      const termD = seg.termDep !== undefined ? ` ${seg.termDep}` : '';
      const termA = seg.termArr !== undefined ? ` ${seg.termArr}` : '';
      const slash = hasTerm ? ' ' : '/';
      const routeStr = `${seg.dep}${termD} ${seg.arr}${termA}`;
      const durStr = seg.dur ? seg.dur.padStart(10, ' ') : '';
      const eqStr = `E0/${seg.eq || '77W'}`;
      const clsPadded = row1Cls.padEnd(20, ' ');
      if(hasTerm){
        rows.push(`${num} ${alDisplay}  ${clsPadded} ${slash}${routeStr.padEnd(12, ' ')} ${seg.depT}    ${seg.arrT.padEnd(6, ' ')} ${eqStr.padEnd(10, ' ')} ${durStr}`);
      } else {
        rows.push(`${num} <span class="al">${seg.al} ${seg.fn.padEnd(4, ' ')}</span>  ${clsPadded}  /${seg.dep} ${seg.arr}  ${seg.depT} ${seg.arrT}  ${seg.eq}  ${seg.dur || '3:00'}`);
      }
      if(row2Cls){
        rows.push(`             ${row2Cls}`);
      }
    });
  });

  if(rows.length === 1){
    rows.push(`NO FLIGHTS MATCHING AIRLINE FILTER /${filter}`);
  }

  printLines(rows, '');
}

function handleSS(cmd){
  const clean = cmd.replace(/\s+/g, '');
  let m = clean.match(/^SS(\d+)([A-Z]+)(\d+)(\*)?$/i);
  if(!m){
    const alt = clean.match(/^SS(\d+)(\d+)([A-Z]+)$/i);
    if(alt){
      m = [clean, alt[2], alt[3], alt[1]];
    }
  }
  if(!m){
    printLines(["INVALID FORMAT — try SS1W1, SS1N1, or SS1Y1"], 'err');
    return;
  }
  const count = parseInt(m[1], 10);
  // Amadeus GDS individual booking limit is maximum 9 seats
  if(count > 9){
    printLines([
      `MAX 9 SEATS PER TRANSACTION — FORMAT ERROR`,
      `ENTERED SEAT COUNT (${count}) EXCEEDS GDS LIMIT (MAX 9 SEATS)`,
      `Format: SS [SEATS] [CLASS] [LINE] (e.g. SS1W1, SS1N1, or SS2K2)`
    ], 'err');
    showToast(`Invalid seat count (${count}) — Max 9 allowed`, 'warn');
    return;
  }
  if(count < 1){
    printLines([`INVALID NUMBER OF SEATS — MUST BE AT LEAST 1`], 'err');
    return;
  }
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
    status: 'DK',
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
  showToast(`✓ Held ${count} seat(s) on ${newSegs.map(s => s.al + ' ' + s.fn).join(', ')} (Status: DK${count})`);
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
  if(state.segments && state.segments.length){
    renderPNR();
  } else {
    printLines([`<span class="name">${esc(newPax.nameDisplay)} *</span>`], '');
  }
  updateTopPnrInfo();
  showToast(`✅ Passenger added: ${newPax.nameDisplay}`);
}

function handleAP(cmd){
  state.phone = cmd.replace(/^AP\s*/i, '').trim();
  renderPNR();
  showToast(`✓ AP contact added`);
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
    const now = new Date();
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const todayStr = String(now.getDate()).padStart(2, '0') + months[now.getMonth()];
    datePart = todayStr;
  }

  const prefix = isOK ? "OK" : "TL";
  if(rest && rest.includes('/')){
    state.ticketing = `${prefix}${rest.replace(/^(OK|TL)/i, '')}`;
  } else {
    state.ticketing = `${prefix}${datePart}/${currentOffice}`;
  }

  renderPNR();
  showToast(`✅ Ticketing set: TK ${state.ticketing}`);
}

// ---------- FM â€” Fare Modifier / Commission (Screenshot 1: FM7) ----------
function handleFM(cmd){
  const upper = cmd.toUpperCase().trim();
  const m = upper.match(/^FM\s*(\*?[0-9.]+%?N?)?/i);
  const val = (m && m[1]) ? m[1].replace(/[*N%]/g, '') : "7";
  state.commission = val + "%";
  state.hasPending = true;
  printLines(["Commission already added"], 'success');
  showToast(`✓ Commission ${state.commission} added (FM)`);
}

function handleRF(cmd){
  const rf = cmd.replace(/^RF\s*/i, '').trim() || 'R';
  state.receivedFrom = rf;
  state.rfEntry = rf.toUpperCase(); // store e.g. 'SB'
  // Re-display PNR with RF line at the top (real Amadeus shows "RF SB" after RP/ header)
  if(state.segments && state.segments.length){
    renderPNR();
  } else {
    printLines([`RF ${rf.toUpperCase()}`], 'success');
  }
  showToast(`✓ Received From (${rf.toUpperCase()}) saved`);
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
  // Validate: must have at least one segment and passenger
  if(!state.segments || !state.segments.length){
    printLines(['NO ITINERARY TO END RECORD'], 'err');
    return;
  }

  // Validate CTCM/CTCE for TG and other airlines that require it
  const primaryAl = state.segments[0] ? state.segments[0].al : null;
  const requiresCTC = primaryAl && ['TG', 'QR', 'EK', 'SQ', 'TK', 'MH', 'SV'].includes(primaryAl);
  const hasCTCM = state.specialSSRs && state.specialSSRs.some(s => s.type === 'CTCM');
  const hasCTCE = state.specialSSRs && state.specialSSRs.some(s => s.type === 'CTCE');
  if(requiresCTC && (!hasCTCM || !hasCTCE)){
    const errLines = [];
    if(!state.ticketing){
      errLines.push('NEED TICKETING ARRANGEMENT');
    }
    errLines.push(`WARNING: MISSING SSR CTCM MOBILE OR SSR CTCE EMAIL OR SSR CTCR NON-CONSENT`);
    errLines.push(`          FOR ${primaryAl}`);
    printLines(errLines, 'warn');
    return; // Do NOT finalize — ER rejected
  }

  // Validate Ticketing arrangement (TK)
  if(!state.ticketing){
    printLines(['NEED TICKETING ARRANGEMENT'], 'warn');
    return; // Do NOT finalize — ER rejected
  }

  // At this point ER succeeds — generate locator, build confirmed PNR
  if(!state.locator) state.locator = generateRandomLocator();

  // Format date parts for headers
  const now = new Date();
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const dayStr = String(now.getDate()).padStart(2,'0');
  const monStr = months[now.getMonth()];
  const yrStr  = String(now.getFullYear()).slice(-2);
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const erDateStamp = `${dayStr}${monStr}${yrStr}/${hh}${mm}Z`;
  state.dateStamp = erDateStamp;

  // Build agent code: use state one or derive from officeId
  const currOffice = state.officeId || OFFICE_ID;
  state.agentCode = state.agentCode || 'SS/GS';

  // Build second RP header line: DACVS33GT/0002SS/7SEP26
  // 0002 = booking sequence (simulate incrementing), SS = airline code abbrev, date
  const seqNum = String(Math.floor(Math.random() * 9000) + 1000).padStart(4,'0');
  const alCode = primaryAl || 'TK';
  const shortDate = `${now.getDate()}${monStr}${yrStr}`;
  state.erHeaderLine2 = `${currOffice}/${seqNum}${alCode}/${shortDate}`;

  // Update segments to HK and set confirmed end-code format: E  TG/LOCATOR
  state.segments.forEach(s => {
    s.status = 'HK';
    s.confirmedEndCode = `E  ${s.al}/${state.locator}`;
  });

  state.finalized = true;
  state.hasPending = false;
  state.justEndedRecord = true; // Flag: on initial ER, don't show OPW/OPC or multi-line airport yet

  // Auto-generate OPW/OPC for TG, MH, SV and all other airlines
  if(!state.opcRemarks || !state.opcRemarks.length){
    const opwDate = new Date(now); opwDate.setDate(now.getDate() + 1);
    const opcDate = new Date(now); opcDate.setDate(now.getDate() + 3);
    const opwStr = `${String(opwDate.getDate()).padStart(2,'0')}${months[opwDate.getMonth()]}`;
    const opcStr = `${String(opcDate.getDate()).padStart(2,'0')}${months[opcDate.getMonth()]}`;
    const segNums = state.segments.length > 1 ? `S2-${state.segments.length+1}` : `S2`;
    if(primaryAl === 'TG'){
      state.opwRemarks = [
        `OPW-${opwStr}:2300/1C7/TG REQUIRES TICKET ON OR BEFORE\n        ${opcStr}:2300 DAC TIME ZONE/TKT/${segNums}`
      ];
      state.opcRemarks = [
        `OPC-${opcStr}:2300/1C8/TG CANCELLATION DUE TO NO TICKET DAC TIME\n        ZONE/TKT/${segNums}`
      ];
    } else if(primaryAl === 'MH'){
      state.opcRemarks = [
        `OPC-${opcStr}:0800/1C8/MH CANCELLATION DUE TO NO TICKET ZZZ TIME\n        ZONE/TKT/${segNums}`
      ];
    } else {
      state.opwRemarks = [
        `OPW-${opwStr}:2300/1C7/${primaryAl||'1A'} REQUIRES TICKET ON OR BEFORE\n        ${opwStr}${yrStr}:2300 TIME ZONE OF POS / OTHERWISE WILL BE XLD`
      ];
      state.opcRemarks = [
        `OPC-${opcStr}:2300/1C8/${primaryAl||'1A'} CANCELLATION DUE TO NO TICKET DAC TIME\n        ZONE/TKT/${segNums}`
      ];
    }
  }

  renderPNR();
  updateTopPnrInfo();
  showToast(`✅ PNR Confirmed & Saved: ${state.locator}`);
}

function handleIR(){
  state.justEndedRecord = false;
  // If ER was never successfully run (no locator) but PNR is being built:
  if(!state.locator){
    if(state.passengers.length || state.segments.length){
      // PNR is started but not finished — RESTRICTED
      printLines(['RESTRICTED : PNR NOT FINISHED'], 'err');
      return;
    } else {
      // Empty workspace — load lesson PNR
      loadLessonPNR();
      return;
    }
  }
  // Has locator — either finalized or a pre-loaded PNR
  const currOffice = state.officeId || OFFICE_ID;
  const agCode = state.agentCode || 'SS/GS';
  const dt = state.dateStamp || '17JUN26/1324Z';
  const headerLine2 = state.erHeaderLine2 || state.headerLine2 || '';
  const rlrHeader = state.hasTST ? `--- TST RLR ---` : `--- RLR ---`;
  const header = `${rlrHeader}\nRP/${currOffice}/${currOffice}            ${agCode}   ${dt}   <span class="locator">${state.locator}</span>${headerLine2 ? '\n' + headerLine2 : ''}`;
  renderPNR(header);
}

function handleRT(cmd){
  state.justEndedRecord = false;
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

  // Format: SRCTCE TK HK1-email/P1 or SRCTCM TK HK1-phone/P1 or SRCTCMQR HK1-...
  m = cmd.match(/^SRCTC([EM])\s*([A-Z0-9]{2})?\s*((?:HK|NN|KK)\d+)?[-/](.+?)(?:\/P(\d+))?$/i);
  if(m){
    const kind   = m[1].toUpperCase();
    const al     = (m[2] ? m[2].toUpperCase() : null) || (state.segments[0] && state.segments[0].al) || 'QR';
    const status = m[3] ? m[3].toUpperCase() : 'HK1';
    const value  = m[4].trim();
    const pCode  = m[5] ? `P${m[5]}` : (state.passengers.length > 1 ? 'P1' : 'P1');
    if(!state.specialSSRs) state.specialSSRs = [];
    state.specialSSRs = state.specialSSRs.filter(s => !(s.type === `CTC${kind}` && s.pax === pCode));
    state.specialSSRs.push({ type: `CTC${kind}`, al, status, value, pax: pCode });
    state.hasPending = true;
    renderPNR();
    showToast(`✅ SSR CTC${kind} added for ${pCode}`);
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
  // Strip command prefix (supports 'SRDOCS', 'SR DOCS', 'SRDOCSQR', etc.)
  let clean = upper.replace(/^SR\s*DOCS\s*/i, '').trim();

  // Determine airline, status, and details
  let airline = (state.segments && state.segments[0] && state.segments[0].al) ? state.segments[0].al : 'QR';
  let action = 'HK1';
  let body = clean;

  const leadMatch = clean.match(/^([A-Z0-9]{2})?\s*([A-Z0-9]{2,3})?[-/\s]+(.+)$/i);
  if(leadMatch){
    if(leadMatch[1]) airline = leadMatch[1].toUpperCase();
    if(leadMatch[2]) action = leadMatch[2].toUpperCase();
    body = leadMatch[3].trim();
  }

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
      'FORMAT ERROR — MISSING REQUIRED DOCS FIELDS',
      'Format: SRDOCS [AL] [STATUS]-P/[ISSUE_CTRY]/[DOC_NUM]/[NAT]/[DOB]/[GENDER]/[EXP]/[SURNAME]/[FIRST]',
      'Example: SRDOCS QR HK1-P/BGD/BG1234561/BGD/15MAR88/F/15SEP27/HOSSAIN/KAMALA'
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

  // 1. Check if passengers exist in PNR
  if (!state.passengers || !state.passengers.length) {
    printLines([
      'NO PASSENGER IN WORKSPACE',
      'ENTER PASSENGER NAME FIRST (e.g. NM1SURNAME/FIRSTNAME MR)'
    ], 'err');
    showToast('Enter passenger name before adding DOCS', 'warn');
    return;
  }

  // 2. Identify target passenger number (default P1)
  let targetPaxNum = 1;
  if (pax) {
    const pMatch = pax.match(/P(\d+)/i);
    if (pMatch) targetPaxNum = parseInt(pMatch[1], 10);
  }

  const targetPax = state.passengers[targetPaxNum - 1];
  if (!targetPax) {
    printLines([
      `PASSENGER P${targetPaxNum} NOT FOUND IN PNR`,
      `CURRENT PASSENGERS: ${state.passengers.length} (P1${state.passengers.length > 1 ? ' - P' + state.passengers.length : ''})`
    ], 'err');
    showToast(`Passenger P${targetPaxNum} does not exist in PNR`, 'warn');
    return;
  }

  // 3. Check for Infant / Adult / Child mismatch
  const isInfantGender = (gender === 'MI' || gender === 'FI' || gender === 'I');
  const isInfantSuffix = pax.includes('INF');
  const isInfant = isInfantGender || isInfantSuffix;
  const isChild  = (targetPax.type === 'child');

  // If user enters Infant DOCS on an adult passenger who has NO infant associated:
  if (isInfant && targetPax.type !== 'infantCarrier' && !targetPax.infant) {
    printLines([
      `NO INFANT ASSOCIATED TO PASSENGER ${targetPaxNum}`,
      `PASSENGER ${targetPaxNum} IS REGISTERED AS ADULT (${targetPax.nameDisplay || targetPax.label})`,
      `USE ADULT GENDER M OR F (NOT MI/FI/INF), OR ENTER INFANT IN NAME FIRST`
    ], 'err');
    showToast(`Error: P${targetPaxNum} has no associated infant`, 'warn');
    return;
  }

  // If user enters Infant DOCS on a Child passenger:
  if (isInfant && targetPax.type === 'child') {
    printLines([
      `PASSENGER TYPE MISMATCH — P${targetPaxNum} IS A CHILD, NOT AN INFANT`,
      `USE GENDER M OR F FOR CHILD DOCS (NOT MI/FI)`
    ], 'err');
    showToast(`Error: P${targetPaxNum} is a Child, not an Infant`, 'warn');
    return;
  }

  if(!pax){
    pax = isInfant ? `P${targetPaxNum}/INF` : `P${targetPaxNum}`;
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

  // Immediately render updated PNR display (matches YouTube Screenshot 1!)
  renderPNR();

  const typeLabel = isInfant ? 'Infant' : (isChild ? 'Child' : 'Adult');
  showToast(`✅ SSR DOCS (${typeLabel}) added for ${pax} — Type RF then ER to save`);
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

// ---------- FXR / FXB / FXP / FXX — Pricing & TST Creation (Matches YouTube tutorial & original Amadeus) ----------
function handlePricing(cmd){
  const upper = (cmd || 'FXR').toUpperCase().trim();
  const isRebook = (/^FX[RB]/i.test(upper));

  // If rebook requested, keep current class if already lowest (e.g. W, N) or set to W for TG / N for QR
  if(isRebook && state.segments && state.segments.length){
    state.segments.forEach(s => {
      if(!s.cls || s.cls === 'Y') {
        s.cls = (s.al === 'TG') ? 'W' : 'N';
      }
      s.rebooked = true;
    });
  }

  state.hasTST = true;
  state.hasPending = true;

  const hasPax = state.passengers && state.passengers.length > 0;
  // Multi-passenger table for FXP when multiple passengers are in PNR
  if(upper.startsWith("FXP") && hasPax && state.passengers.length > 1){
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
    showToast(`✓ Quoted (${upper}) — TST Stored for ${totalNP} passenger(s) — Type TQT to view`);
    return;
  }

  // Standard Segment / Fare Basis table for FXR / FXB / single-passenger
  const segs = (state.segments && state.segments.length) ? state.segments : [
    { al:"TG", fn:"322", cls:"W", date:"25SEP", dep:"DAC", arr:"BKK", depT:"1335", arrT:"1715" },
    { al:"TG", fn:"321", cls:"W", date:"07OCT", dep:"BKK", arr:"DAC", depT:"1035", arrT:"1210" }
  ];

  // Build passenger name line for FXB / FXR (01 P1 or 01 SURNAME/FIRST*)
  const paxLine = (hasPax && upper.startsWith('FXB'))
    ? (() => {
        const p = state.passengers[0];
        const raw = (p.label || 'PAX/ONE').split(' ')[0];
        const parts = raw.split('/');
        const surname = parts[0] || 'PAX';
        const first = (parts[1] || 'ONE').split(' ')[0];
        return `01  ${surname}/${first}*`;
      })()
    : `01 P1`;

  // Status line: matches real Amadeus screenshot
  const statusLine = `NO REBOOKING REQUIRED FOR LOWEST AVAILABLE FARE`;

  // Ticket deadline
  const tkDte = (() => {
    const seg0 = segs[0];
    const raw = seg0.date || '25SEP';
    const m = raw.match(/(\d+)([A-Z]{3})/i);
    const day = m ? m[1] : '31';
    const mon = m ? m[2].toUpperCase() : 'MAR';
    return `${day}${mon}26`;
  })();

  const rows = [
    upper,
    ``,
    paxLine,
    statusLine,
    `LAST TKT DTE ${tkDte} - SEE SALES RSTNS`,
    `------------------------------------------------------------`,
    `       AL FLGT   BK T DATE   TIME  FARE BASIS       NVB   NVA   BG`
  ];

  // Origin city of whole journey
  rows.push(` ${segs[0].dep}`);

  // Segment rows
  segs.forEach((s, idx) => {
    // City code: destination of this segment (e.g. ' BKK', ' DAC')
    // If it's a connecting transit segment in multi-leg flight (not roundtrip turnaround):
    const isTransit = (idx < segs.length - 1 && s.arr !== segs[0].dep && segs[idx+1] && segs[idx+1].arr !== segs[0].dep);
    const city = (isTransit ? `X${s.arr}` : ` ${s.arr}`).padEnd(4, ' ');

    const al = s.al.padEnd(2, ' ');
    const fn = s.fn.padStart(5, ' ');
    const bk = (s.cls || 'W').padStart(2, ' ');
    const t = (s.cls || 'W').padStart(2, ' ');
    const date = (s.date || '25SEP').padStart(5, ' ');
    const time = (s.depT || '1335').padStart(4, ' ');

    // Fare basis
    const fBasis = (s.al === 'TG' ? `${s.cls || 'W'}LASV` : `${s.cls || 'N'}JR4R1RI`).padEnd(16, ' ');

    // NVB and NVA: flight date repeated (e.g. 25SEP25SEP or 12DEC12DEC)
    const nvbNva = `${s.date || '25SEP'}${s.date || '25SEP'}`.padEnd(10, ' ');

    // Baggage: 1P
    const bg = '  1P';

    rows.push(`${city} ${al} ${fn} ${bk} ${t} ${date} ${time}     ${fBasis} ${nvbNva}${bg}`);
  });

  rows.push(``);

  const origCity = segs[0].dep;
  const destCity = segs[segs.length - 1].arr;
  const date0 = segs[0].date || '25SEP';
  const isTG = (segs[0].al === 'TG');
  const isAI = (segs[0].al === 'AI');

  if (isAI) {
    // Exact Air India calculation matching YouTube Screenshot 4
    const aiRows = [
      upper,
      ``,
      paxLine,
      statusLine,
      `LAST TKT DTE 10FEB25 - DATE OF ORIGIN`,
      `------------------------------------------------------------`,
      `       AL FLGT   BK T DATE   TIME  FARE BASIS       NVB   NVA   BG`,
      ` DAC`,
      `XDEL AI   238 L  L 10FEB 2100     LL2YXSDC         10FEB10FEB 1P`,
      ` LON AI   111 L  L 11FEB 0730     LL2YXSDC         11FEB11FEB 1P`,
      `XDEL AI   112 G  G 25FEB 1330     GL2YXSDC         25FEB25FEB 1P`,
      ` DAC AI  2181 G  G 26FEB 0645     GL2YXSDC         26FEB26FEB 1P`,
      ``,
      `USD   216.00     10FEB25DAC AI X/DEL AI LON75.50AI X/DEL AI`,
      `BDT    25916     DAC140.50NUC216.00END ROE1.00`,
      `BDT      500-BD  XT BDT 912-YR BDT 435-E5 BDT 3000-OW BDT`,
      `BDT    47992-YQ  1200-P7 BDT 1200-P8 BDT 6000-UT BDT 13389`,
      `BDT    34005-XT  -GB BDT 7869-UB`,
      `BDT   108413`,
      `RATE USED 1USD=119.98BDT`
    ];
    state.tstRecords = [
      { tstNum: 1, pCode: '.1', name: (hasPax ? state.passengers[0].label : 'P1'), fare: 25916, tax: 82497, total: 108413, ptc: 'ADT', segs: `1-${segs.length}` }
    ];
    printLines(aiRows, '');
    showToast(`✓ Quoted (${upper}) — Lowest available fare (BDT 108,413)`);
    return;
  } else if (isTG) {
    // Exact Thai Airways calculation from YouTube tutorial
    rows.push(`USD    256.00     ${date0}26DAC TG BKK128.00TG DAC128.00NUC`);
    rows.push(`BDT     31414     256.00END ROE1.00`);
    rows.push(`BDT    500-BD     XT BDT 444-E5 BDT 2500-OW BDT 1228-P7 BDT`);
    rows.push(`BDT   1228-YR     1228-P8 BDT 4000-UT BDT 136-E7 BDT 136-E7`);
    rows.push(`BDT  14201-XT     BDT 97-G8 BDT 97-G8 BDT 4335-TS`);
    rows.push(`BDT     47343`);
    rows.push(`RATE USED 1USD=122.71BDT`);
    rows.push(`FARE FAMILIES:    (ENTER FQFn FOR DETAILS, FXY FOR UPSELL)`);
    rows.push(`FARE FAMILY:FC1:1:ECOSV1`);
    rows.push(`FARE FAMILY:FC2:2:ECOSV1`);
    rows.push(`>                                                   PAGE  2/ 3`);

    state.tstRecords = [
      { tstNum: 1, pCode: '.1', name: (hasPax ? state.passengers[0].label : 'PAX 1'), fare: 31414, tax: 15929, total: 47343, ptc: 'ADT', segs: `1-${segs.length}` }
    ];
  } else {
    // General international calculation (e.g. QR / TK)
    const alCode = segs[0].al;
    const viaCode = segs.length > 2 ? ` X/${segs[0].arr}` : '';
    rows.push(`USD   1068.00     ${date0}26${origCity} ${alCode}${viaCode} ${alCode} ${destCity}1068.00NUC`);
    rows.push(`BDT    131055     1068.00END ROE1.00`);
    rows.push(`BDT     500-BD    XT BDT 2500-OW BDT 1228-P7 BDT 1228-P8 BDT`);
    rows.push(`BDT     444-E5    4000-UT BDT 2022-G4 BDT 184-PZ BDT 2022-QA`);
    rows.push(`BDT   13754-XT    BDT 337-R9 BDT 136-E7 BDT 97-G8`);
    rows.push(`BDT    145753`);
    rows.push(`RATE USED 1USD=122.71BDT`);
    rows.push(`FARE FAMILIES:    (ENTER FQFn FOR DETAILS, FXY FOR UPSELL)`);
    rows.push(`FARE FAMILY:FC1:1-2:ECLASSIC`);
    rows.push(`FXU/TS TO UPSELL ECONVENIEN FOR 6626BDT`);
    rows.push(`>                                                   PAGE  2/ 3`);

    state.tstRecords = [
      { tstNum: 1, pCode: '.1', name: (hasPax ? state.passengers[0].label : 'PAX 1'), fare: 131055, tax: 14698, total: 145753, ptc: 'ADT', segs: `1-${segs.length}` }
    ];
  }

  printLines(rows, '');
  showToast(`✓ Quoted (${upper}) — Lowest available fare`);
  return;
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

// ---------- TQ T — Full TST Detail Display (matches original Amadeus screenshot) ----------
function handleTQDetail(){
  if(!state.hasTST){
    printLines(['NO TST EXISTS — USE FXB OR FXP TO CREATE TST FIRST'], 'err');
    return;
  }

  const segs = state.segments || [];
  const pax  = state.passengers || [];
  const currOffice = state.officeId || OFFICE_ID;
  const al   = segs.length ? segs[0].al : 'QR';

  // TST header line: TST00001  DACVS33Q4 MM/07MAR I 0 LD 19MAY26 2359 OD DACBKK
  const now = new Date();
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const dateStr = `${String(now.getDate()).padStart(2,'0')}${months[now.getMonth()]}`;
  const yrShort = String(now.getFullYear()).slice(-2);
  // Last date = flight date (approx)
  const flightDate = segs.length ? segs[0].date : '20MAY';
  const flightMon  = months.findIndex(m => flightDate.toUpperCase().includes(m));
  const flightDay  = parseInt(flightDate) || 20;
  const ldDay = flightDay > 1 ? flightDay - 1 : flightDay;
  const ldMon = flightMon >= 0 ? months[flightMon] : 'MAY';
  const ldDate = `${ldDay}${ldMon}${yrShort}`;
  const origCity = segs.length ? segs[0].dep : 'DAC';
  const destCity = segs.length ? segs[segs.length-1].arr : 'BKK';
  const agCode = state.agentCode || 'MM';
  const agInitials = agCode.split('/')[0] || 'MM';

  const rows = [];
  rows.push(`TST00001    ${currOffice} ${agInitials}/${dateStr} I 0 LD ${ldDate} 2359 OD ${origCity}${destCity}`);
  rows.push(`T-E`);
  rows.push(`FXB`);

  // Passenger line(s)
  pax.forEach((p, i) => {
    rows.push(`    ${i+1}.${p.label || 'HOSSAIN/KAMALA MS'}`);
  });
  if(!pax.length) rows.push(`    1.PASSENGER/NAME MS`);

  // Segment lines
  // Format: " 1  DAC QR  639 N 20MAY 0410  OK NJR4R1RI          20MAY    25K"
  const isTG = (segs.length && segs[0].al === 'TG');
  const tst = (state.tstRecords && state.tstRecords[0]) ? state.tstRecords[0] : null;
  const fareBDT = tst ? tst.fare : (isTG ? 31414 : 131055);
  const fareUSD = isTG ? 256.00 : 1068.00;
  const taxTotal = tst ? tst.tax : (isTG ? 15929 : 14698);
  const grandTotal = tst ? tst.total : (fareBDT + taxTotal);
  const bsr = 122.71;

  segs.forEach((s, idx) => {
    const isTransit = (idx < segs.length - 1 && s.arr !== segs[0].dep && segs[idx+1] && segs[idx+1].arr !== segs[0].dep);
    const connX = isTransit ? 'X' : ' ';
    const dep   = s.dep.padEnd(3,' ');
    const alPad = s.al.padEnd(2,' ');
    const fn    = s.fn.padStart(4,' ');
    const cls   = s.cls || (s.al === 'TG' ? 'W' : 'N');
    const fBasis= (s.al === 'TG' ? `${cls}LASV` : `${cls}JR4R1RI`).padEnd(16,' ');
    const nva   = s.date || '25SEP';
    const bg    = ' 1P';
    rows.push(` ${idx+1} ${connX} ${dep} ${alPad} ${fn} ${cls} ${s.date||'25SEP'} ${s.depT||'1335'}  OK ${fBasis} ${nva}    ${bg}`);
  });

  // Fare block

  rows.push(``);
  rows.push(`FARE F USD   ${fareUSD.toFixed(2)}`);
  rows.push(`EQUIV  BDT     ${fareBDT}`);
  rows.push(`TX001 X BDT    500-BDAE TX002 X BDT    444-E5GO TX003 X BDT    2500-OWGA`);
  rows.push(`TX004 X BDT   1228-P7DE TX005 X BDT   1228-P8SE TX006 X BDT   4000-UTTR`);
  rows.push(`TX007 X BDT   2022-G4AF TX008 X BDT    184-PZAV TX009 X BDT   2022-QAAP`);
  rows.push(`TX010 X BDT    337-R9SE TX011 X BDT    136-E7AD TX012 X BDT     97-G8AE`);
  rows.push(`TOTAL  BDT   ${grandTotal}    BSR ${bsr}`);
  rows.push(`GRAND TOTAL BDT    ${grandTotal}`);

  // NUC routing line
  const viaStr = segs.length > 1 ? ` ${al} X/${segs[0].arr} ${segs[1]?.al||al}` : ` ${al}`;
  rows.push(`${origCity}${viaStr} ${destCity}${fareUSD.toFixed(2)}NUC${fareUSD.toFixed(2)}END ROE1.00`);
  rows.push(``);

  // FE / FV lines
  const feNum = pax.length + segs.length + 11;
  rows.push(`${feNum}.FE /C1-2 NON END/CHNG PENALTIES AS PER RULE`);
  rows.push(`${feNum+1}.FV ${al}`);

  printLines(rows, '');
  showToast(`TST Detail displayed (TQ T)`);
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
      showToast('✖ OSI entries deleted');
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

  // CTCM / CTCE typed WITHOUT the SR prefix → INVALID FORMAT (real Amadeus rejects these)
  if(/^CTC[ME]-/i.test(clean)){
    printLines(['INVALID FORMAT'], 'err');
    return;
  }

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

  // FXD / FS — Fare Shop / Master Pricer (original Amadeus fare shopping)
  if(/^FXD/i.test(clean)) return handleFXD(upper, clean);
  if(/^FS[A-Z]{6}/i.test(clean)) return handleFS(upper, clean);
  if(/^FX[SZUY]\d+$/i.test(clean)) return handleFXAction(upper, clean);

  // FXR / FXB / FXP / FXX — Pricing & TST Creation (Screenshot 2 & 3)
  if(/^FX[RBPX]/i.test(clean)) return handlePricing(upper);

  // TQ T - Full TST Detail display (matches original Amadeus "tq t" command)
  if(/^TQ\s+T$/i.test(upper)) return handleTQDetail();

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

  // FQN — Fare Quote Notes / Rules Display (Screenshot 5: FQN1-1//PE, FQN1-1, etc.)
  // Strips accidental backticks like FQN1-1`//PE -> FQN1-1//PE
  const fqnClean = clean.replace(/[`']/g, '');
  if(/^FQN/i.test(fqnClean)) return handleFQN(upper.replace(/[`']/g, ''), fqnClean);

  // FQF — Fare Families Details Display (e.g. FQF1, FQF2, FQF)
  if(/^FQF/i.test(clean)) return handleFQF(upper, clean);

  printLines([`FORMAT - command not recognised. Try: FXDDAC/D10FEBLHR/D25FEBDAC · FSDACBKK20NOV · FXS1 · FXZ1 · FXR · FXB · RT · HE/MEAL · ER · TQT · TTP`], 'err');
}

// ---------- FQN — Fare Rules / Penalty Display (Matches Screenshot 5) ----------
function handleFQN(cmd, clean){
  // Check if PE (Penalties) category requested: FQN1-1//PE, FQN1-1`//PE, FQN1-1/PE, FQN1//PE, FQN//PE
  const isPE = /PE/i.test(clean) || /PENAL/i.test(clean);
  const seg0 = (state.segments && state.segments[0]) ? state.segments[0] : null;
  const al = seg0 ? seg0.al : 'AI';
  const basis = (seg0 && seg0.fareBasis) ? seg0.fareBasis.replace('+', '') : 'LL2YXSDC';
  const depCity = seg0 ? seg0.dep : 'DAC';
  const arrCity = (state.segments && state.segments.length > 1) ? state.segments[1].arr : (seg0 ? seg0.arr : 'LON');
  const destGroup = (arrCity === 'LHR' || arrCity === 'LON') ? 'DACLON' : `${depCity}${arrCity}`;
  const bkCls = seg0 ? seg0.cls : 'L';
  const famName = (al === 'TG') ? 'ECOSV1' : 'ECOVALU';

  if(isPE || clean.includes('//') || clean.includes('/')){
    // Exact match for YouTube Screenshot 5: red PE badge, CHANGES, CHARGE USD 120.00 FOR REISSUE
    const peBadge = `<span style="background:#dc2626; color:#fff; font-weight:bold; padding:0 2px;">PE</span>`;
    const rows = [
      ` 1 - PSGR P1 ADT                                   RULES DISPLAY`,
      ` FARE COMPONENT  1     ADT ${destGroup} ${al}   ${basis}  PU 1 S`,
      ` FCL: ${basis}   TRF:    4 RULE: BDGD BK:  ${bkCls}`,
      ` PTC: ADT-ADULT                FTC: XEX-REGULAR EXCURSION`,
      ` FARE FAMILY              : ${famName}`,
      ` ${peBadge}.PENALTIES`,
      ` FROM/TO EUROPE FOR ${basis} TYPE FARES`,
      ``,
      `  CHANGES`,
      ``,
      `    CHARGE USD 120.00 FOR REISSUE.`,
      `       NOTE -`,
      `          CHANGES NOTE`,
      `          ...TILL 4 HRS CHARGE USD 120 FOR REISSUE.`,
      `    -------------------------------------------------------`,
      `    A CHANGE IS A DATE/FLIGHT/ROUTING/BOOKING CODE`,
      `    CHANGE.`,
      `    -------------------------------------------------------`
    ];
    printLines(rows, '');
    showToast(`✓ Fare Rules Display: ${basis} (PE.PENALTIES)`);
    return;
  }

  // General FQN category menu
  const rows = [
    ` 1 - PSGR P1 ADT                                   RULES DISPLAY`,
    ` FARE COMPONENT  1     ADT ${destGroup} ${al}   ${basis}  PU 1 S`,
    ` FCL: ${basis}   TRF:    4 RULE: BDGD BK:  ${bkCls}`,
    ` PTC: ADT-ADULT                FTC: XEX-REGULAR EXCURSION`,
    ` FARE FAMILY              : ${famName}`,
    ``,
    ` SELECT CATEGORY BY ENTERING FQN1-1//[CATEGORY]`,
    `   AP - ADVANCE PURCHASE`,
    `   MN - MINIMUM STAY`,
    `   MX - MAXIMUM STAY`,
    `   PE - PENALTIES / CHANGES / CANCELLATIONS`,
    `   CD - CHILDREN DISCOUNTS`,
    `   SO - STOPOVERS`,
    `   SR - SALES RESTRICTIONS`,
    `   FL - FLIGHT APPLICATION`
  ];
  printLines(rows, '');
  showToast(`Fare Rules categories displayed — Enter FQN1-1//PE to view penalties`);
}

// ---------- FQF — Fare Families Details Display ----------
function handleFQF(cmd, clean){
  const seg0 = (state.segments && state.segments[0]) ? state.segments[0] : null;
  const al = seg0 ? seg0.al : 'AI';
  const alName = (al === 'AI') ? 'AIR INDIA (AI)' : (al === 'TG' ? 'THAI AIRWAYS (TG)' : `${al} AIRLINES`);
  const famName = (al === 'TG') ? 'ECOSV1 (FC1)' : 'ECOVALU (FC1)';

  const rows = [
    `FARE FAMILY DISPLAY: ${famName}`,
    `  CARRIER: ${alName}`,
    `  CABIN: ECONOMY`,
    `  BOOKING CODES: L, G, U, T, W, V`,
    ``,
    `SERVICES INCLUDED:`,
    `  CHECKED BAGGAGE: 1 PIECE UP TO 23 KG`,
    `  CABIN BAGGAGE: 1 PIECE UP TO 7 KG`,
    `  MEAL / SNACK: INCLUDED (COMPLIMENTARY)`,
    `  STANDARD SEAT: FREE AT CHECK-IN`,
    `  MILES ACCRUAL: 50% MILES`,
    ``,
    `CHANGE & CANCELLATION CONDITIONS:`,
    `  CHANGES: PERMITTED BEFORE DEPARTURE - CHARGE USD 120.00`,
    `  CANCELLATION: NON-REFUNDABLE`,
    `  NO SHOW: CHARGE USD 150.00`
  ];
  printLines(rows, '');
  showToast(`✓ Fare Family details displayed (${famName})`);
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
    // If user is selecting text (blocking) to copy, do NOT steal focus or clear selection!
    const sel = window.getSelection ? window.getSelection() : null;
    if(sel && sel.toString().trim().length > 0){
      return;
    }
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

// ─────────────────────────────────────────────────────────────────────────────
// COMMAND HISTORY MODAL — matches original Amadeus "Command History" dialog
// ─────────────────────────────────────────────────────────────────────────────
let _selectedHistoryCmd = null;

window.openCommandHistory = function() {
  const overlay = document.getElementById('cmdHistoryOverlay');
  const list    = document.getElementById('cmdHistoryList');
  if (!overlay || !list) return;

  // Rebuild list (newest at bottom like Amadeus)
  list.innerHTML = '';
  _selectedHistoryCmd = null;

  if (!commandHistory.length) {
    list.innerHTML = '<li style="padding:10px 14px; color:#888; font-size:13px; list-style:none;">No commands yet</li>';
  } else {
    commandHistory.forEach((cmd, i) => {
      const li = document.createElement('li');
      li.textContent = `•  ${cmd}`;
      li.dataset.cmd = cmd;
      li.style.cssText = 'padding:3px 12px; font-size:14px; cursor:pointer; font-family:"Consolas","Courier New",monospace; line-height:1.6; white-space:nowrap; list-style:none;';

      // Highlight last item (like Amadeus golden highlight)
      if (i === commandHistory.length - 1) {
        li.style.background = '#f5a623';
        li.style.color = '#000';
        li.style.fontWeight = 'bold';
        _selectedHistoryCmd = cmd;
      }

      li.addEventListener('click', () => {
        // Deselect all
        list.querySelectorAll('li').forEach(el => {
          el.style.background = '';
          el.style.color = '';
          el.style.fontWeight = 'normal';
        });
        // Select clicked
        li.style.background = '#f5a623';
        li.style.color = '#000';
        li.style.fontWeight = 'bold';
        _selectedHistoryCmd = cmd;
      });

      li.addEventListener('mouseover', () => {
        if (_selectedHistoryCmd !== cmd) {
          li.style.background = '#eef3f8';
        }
      });
      li.addEventListener('mouseout', () => {
        if (_selectedHistoryCmd !== cmd) {
          li.style.background = '';
          li.style.color = '';
          li.style.fontWeight = 'normal';
        }
      });

      list.appendChild(li);
    });
    // Scroll to bottom (latest command)
    list.scrollTop = list.scrollHeight;
  }

  overlay.style.display = 'flex';
};

window.closeCommandHistory = function() {
  const overlay = document.getElementById('cmdHistoryOverlay');
  if (overlay) overlay.style.display = 'none';
  _selectedHistoryCmd = null;
};

window.clearCommandHistory = function() {
  commandHistory = [];
  historyPos = -1;
  const list = document.getElementById('cmdHistoryList');
  if (list) list.innerHTML = '<li style="padding:10px 14px; color:#888; font-size:13px; list-style:none;">History cleared</li>';
  _selectedHistoryCmd = null;
  showToast('Command history cleared');
};

window.historyAction = function(action) {
  const cmd = _selectedHistoryCmd;
  if (!cmd && action !== 'flow') {
    showToast('Please select a command first', 'warn');
    return;
  }

  if (action === 'send') {
    // Execute the command
    closeCommandHistory();
    setTimeout(() => runCommand(cmd), 100);

  } else if (action === 'copy') {
    // Copy to clipboard
    navigator.clipboard.writeText(cmd).then(() => {
      showToast(`Copied: ${cmd}`);
    }).catch(() => {
      // Fallback
      const inp = document.getElementById('cmdInput');
      if (inp) { inp.value = cmd; inp.focus(); inp.select(); }
      showToast(`Copied to input: ${cmd}`);
    });
    closeCommandHistory();

  } else if (action === 'edit') {
    // Put in input for editing
    closeCommandHistory();
    setTimeout(() => {
      const inp = document.getElementById('cmdInput');
      if (inp) { inp.value = cmd; inp.focus(); inp.setSelectionRange(cmd.length, cmd.length); }
    }, 100);

  } else if (action === 'flow') {
    showToast('Smart Flow creation — coming soon');
  }
};

// Close modal when clicking outside (backdrop click)
document.addEventListener('click', (e) => {
  const overlay = document.getElementById('cmdHistoryOverlay');
  if (overlay && e.target === overlay) closeCommandHistory();
});

// Initialize on page load: start with a fresh, clean terminal (Amadeus Selling Platform Connect behavior)
window.addEventListener('DOMContentLoaded', ()=>{
  state = createEmptyState();
  term.innerHTML = '';
  updateTopPnrInfo();
  mountInput();
});
