// ============================================================
// Amadeus Fare Shop / Master Pricer (FXD & FS commands)
// Matches original Selling Platform Connect fare shopping output
// ============================================================

let fareShopSession = null;

function resetFareShop(){
  fareShopSession = null;
}

// ---------- Curated DAC-LHR round-trip (matches original app screenshot) ----------
const CURATED_DACLHR = {
  headerGroups: 25,
  headerRecs: 50,
  headerMin: 108413,
  headerMax: 791142,
  groups: [
    {
      groupNum: 1,
      recommendations: [
        {
          recNum: 1, total: 108413, fare: 25916, tax: 82497, fareBasis: 'LL2YXSLC+', ptc: 'ADT',
          segs: [
            { al:'AI', fn:'238',  cls:'L', date:'10FEB', dep:'DAC', arr:'DEL', termDep:'2', termArr:'3', depT:'2100', arrT:'2320', eq:'320', dur:'0220' },
            { al:'AI', fn:'111',  cls:'L', date:'11FEB', dep:'DEL', arr:'LHR', termDep:'3', termArr:'2', depT:'0730', arrT:'1130', eq:'359', dur:'2030' },
            { al:'AI', fn:'112',  cls:'G', date:'25FEB', dep:'LHR', arr:'DEL', termDep:'2', termArr:'3', depT:'1330', arrT:'0315+1', eq:'359', dur:'' },
            { al:'AI', fn:'2181', cls:'G', date:'26FEB', dep:'DEL', arr:'DAC', termDep:'3', termArr:'2', depT:'0645', arrT:'0945', eq:'32N', dur:'1415' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOVALU', fc:'FC1' }, { range:'3-4', name:'ECOVALU', fc:'FC2' }],
          lastTkt: '10FEB25'
        },
        {
          recNum: 2, total: 115820, fare: 31200, tax: 84620, fareBasis: 'LL3YXSLC+', ptc: 'ADT',
          segs: [
            { al:'AI', fn:'238',  cls:'L', date:'10FEB', dep:'DAC', arr:'DEL', termDep:'2', termArr:'3', depT:'2100', arrT:'2320', eq:'320', dur:'0220' },
            { al:'AI', fn:'111',  cls:'L', date:'11FEB', dep:'DEL', arr:'LHR', termDep:'3', termArr:'2', depT:'0730', arrT:'1130', eq:'359', dur:'2030' },
            { al:'AI', fn:'113',  cls:'G', date:'25FEB', dep:'LHR', arr:'DEL', termDep:'2', termArr:'3', depT:'1830', arrT:'0815+1', eq:'359', dur:'' },
            { al:'AI', fn:'2181', cls:'G', date:'26FEB', dep:'DEL', arr:'DAC', termDep:'3', termArr:'2', depT:'0645', arrT:'0945', eq:'32N', dur:'1415' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOVALU', fc:'FC1' }, { range:'3-4', name:'ECOVALU', fc:'FC2' }],
          lastTkt: '10FEB25'
        },
        {
          recNum: 3, total: 128450, fare: 38500, tax: 89950, fareBasis: 'QL2YXBDC+', ptc: 'ADT',
          segs: [
            { al:'AI', fn:'230',  cls:'Q', date:'10FEB', dep:'DAC', arr:'DEL', termDep:'2', termArr:'3', depT:'1530', arrT:'1755', eq:'320', dur:'0225' },
            { al:'AI', fn:'111',  cls:'L', date:'11FEB', dep:'DEL', arr:'LHR', termDep:'3', termArr:'2', depT:'0730', arrT:'1130', eq:'359', dur:'2030' },
            { al:'AI', fn:'112',  cls:'G', date:'25FEB', dep:'LHR', arr:'DEL', termDep:'2', termArr:'3', depT:'1330', arrT:'0315+1', eq:'359', dur:'' },
            { al:'AI', fn:'2181', cls:'G', date:'26FEB', dep:'DEL', arr:'DAC', termDep:'3', termArr:'2', depT:'0645', arrT:'0945', eq:'32N', dur:'1415' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOVALU', fc:'FC1' }, { range:'3-4', name:'ECOVALU', fc:'FC2' }],
          lastTkt: '10FEB25'
        }
      ]
    },
    {
      groupNum: 2,
      recommendations: [
        {
          recNum: 1, total: 123039, fare: 84586, tax: 38453, fareBasis: 'QARXBDB4+', ptc: 'ADT',
          segs: [
            { al:'QR', fn:'639', cls:'Q', date:'10FEB', dep:'DAC', arr:'DOH', termDep:'', termArr:'', depT:'0410', arrT:'0620', eq:'77W', dur:'0310' },
            { al:'QR', fn:'3',   cls:'Q', date:'10FEB', dep:'DOH', arr:'LHR', termDep:'', termArr:'4', depT:'0745', arrT:'1215', eq:'351', dur:'0730' },
            { al:'QR', fn:'4',   cls:'Q', date:'25FEB', dep:'LHR', arr:'DOH', termDep:'4', termArr:'', depT:'1410', arrT:'2335', eq:'351', dur:'0625' },
            { al:'QR', fn:'640', cls:'Q', date:'26FEB', dep:'DOH', arr:'DAC', termDep:'', termArr:'', depT:'0130', arrT:'0950', eq:'77W', dur:'0320' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECONOMY', fc:'FC1' }, { range:'3-4', name:'ECONOMY', fc:'FC2' }],
          lastTkt: '10FEB25'
        },
        {
          recNum: 2, total: 145200, fare: 98000, tax: 47200, fareBasis: 'NARXBDB4+', ptc: 'ADT',
          segs: [
            { al:'EK', fn:'583', cls:'N', date:'10FEB', dep:'DAC', arr:'DXB', termDep:'', termArr:'3', depT:'0955', arrT:'1320', eq:'77W', dur:'0525' },
            { al:'EK', fn:'5',   cls:'N', date:'10FEB', dep:'DXB', arr:'LHR', termDep:'3', termArr:'3', depT:'1500', arrT:'1935', eq:'388', dur:'0735' },
            { al:'EK', fn:'6',   cls:'N', date:'25FEB', dep:'LHR', arr:'DXB', termDep:'3', termArr:'3', depT:'0930', arrT:'2035', eq:'388', dur:'0705' },
            { al:'EK', fn:'584', cls:'N', date:'26FEB', dep:'DXB', arr:'DAC', termDep:'3', termArr:'', depT:'0215', arrT:'0840', eq:'77W', dur:'0525' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOFLEX', fc:'FC1' }, { range:'3-4', name:'ECOFLEX', fc:'FC2' }],
          lastTkt: '10FEB25'
        },
        {
          recNum: 3, total: 168750, fare: 112000, tax: 56750, fareBasis: 'MARXBDB4+', ptc: 'ADT',
          segs: [
            { al:'TK', fn:'713', cls:'M', date:'10FEB', dep:'DAC', arr:'IST', termDep:'', termArr:'', depT:'0655', arrT:'1325', eq:'77W', dur:'0830' },
            { al:'TK', fn:'1971', cls:'M', date:'10FEB', dep:'IST', arr:'LHR', termDep:'', termArr:'2', depT:'1500', arrT:'1610', eq:'321', dur:'0410' },
            { al:'TK', fn:'1988', cls:'M', date:'25FEB', dep:'LHR', arr:'IST', termDep:'2', termArr:'', depT:'0630', arrT:'1235', eq:'321', dur:'0405' },
            { al:'TK', fn:'712', cls:'M', date:'26FEB', dep:'IST', arr:'DAC', termDep:'', termArr:'', depT:'1835', arrT:'0500+1', eq:'77W', dur:'0825' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOFLY', fc:'FC1' }, { range:'3-4', name:'ECOFLY', fc:'FC2' }],
          lastTkt: '10FEB25'
        }
      ]
    }
  ]
};

// ---------- Helpers ----------
function fsFormatSegLine(seg, idx){
  const num = idx === 0 ? String(idx + 1).padStart(2, ' ') : '  ';
  const alFn = `${seg.al} ${seg.fn}`.padEnd(7, ' ');
  const termD = seg.termDep ? ` ${seg.termDep}` : '';
  const termA = seg.termArr ? ` ${seg.termArr}` : '';
  const route = `${seg.dep}${termD} ${seg.arr}${termA}`.padEnd(12, ' ');
  const dur = seg.dur ? seg.dur.padStart(6, ' ') : '      ';
  return `${num} ${alFn} ${seg.cls} ${seg.date} ${route} ${seg.depT} ${seg.arrT.padEnd(6, ' ')} E0/${seg.eq}${dur ? '  ' + dur : ''}`;
}

function fsFareBasis(al, cls){
  const bases = { L:'LL2YXSLC+', Q:'QARXBDB4+', N:'NARXBDB4+', M:'MARXBDB4+', G:'GL2YXSLC+', K:'KL2YXSLC+', W:'WL2YXSLC+' };
  return bases[cls] || `${cls}L2YXSLC+`;
}

function fsBuildDynamicGroups(orig, dest, outDate, retDate){
  const outSched = getFlightSchedule(orig, dest, outDate);
  const retSched = getFlightSchedule(dest, orig, retDate);
  if(!outSched || !outSched.lines || !outSched.lines.length) return null;

  const retLines = (retSched && retSched.lines) ? retSched.lines : [];
  const groups = [];
  const outLines = outSched.lines.slice(0, 6);
  const priceFn = (typeof calcBasePrice === 'function') ? calcBasePrice : function(al, o, d){ return 28000; };

  for(let g = 0; g < Math.min(3, outLines.length); g++){
    const outLine = outLines[g];
    const retLine = retLines[g] || retLines[0] || outLines[(g + 1) % outLines.length];
    const recs = [];
    const clsOptions = ['L', 'Q', 'N', 'M', 'K'];

    clsOptions.forEach((cls, ri) => {
      const allSegs = [];
      outLine.segs.forEach((s, si) => {
        allSegs.push({
          al: s.al, fn: s.fn, cls,
          date: si === 0 ? outDate : outDate,
          dep: s.dep, arr: s.arr,
          termDep: s.termDep || '', termArr: s.termArr || '',
          depT: s.depT, arrT: s.arrT, eq: s.eq || '77W', dur: s.dur || ''
        });
      });
      if(retLine && retLine.segs){
        retLine.segs.forEach((s, si) => {
          allSegs.push({
            al: s.al, fn: s.fn, cls: clsOptions[(ri + 1) % clsOptions.length],
            date: retDate,
            dep: s.dep, arr: s.arr,
            termDep: s.termDep || '', termArr: s.termArr || '',
            depT: s.depT, arrT: s.arrT, eq: s.eq || '77W', dur: s.dur || ''
          });
        });
      }

      const al = outLine.segs[0].al;
      const base = priceFn(al, orig, dest);
      const mul = 1 + (ri * 0.12) + (g * 0.08);
      const fare = Math.round(base * mul);
      const tax  = Math.round(fare * 0.42);
      const total = fare + tax;

      recs.push({
        recNum: ri + 1, total, fare, tax,
        fareBasis: fsFareBasis(al, cls), ptc: 'ADT', segs: allSegs,
        fareFamilies: [{ range:`1-${Math.min(2, allSegs.length)}`, name:'ECOVALU', fc:'FC1' },
                       { range:`3-${allSegs.length}`, name:'ECOVALU', fc:'FC2' }],
        lastTkt: outDate + '25'
      });
    });

    groups.push({ groupNum: g + 1, recommendations: recs.slice(0, 3) });
  }

  return groups;
}

function fsRenderRecommendation(rec, groupNum, recIdx, totalInGroup){
  const rows = [];
  rows.push(`---------- RECOMMENDATION ${recIdx + 1} OF ${totalInGroup} IN GROUP ${groupNum} (BDT ${rec.total}) ----------`);
  rows.push(`  PTC  1 ${rec.ptc}`);
  rows.push(`  CUR  BDT`);
  rows.push(`  FARE ${rec.fare}`);
  rows.push(`  TAX  ${rec.tax}`);
  rows.push(`  FARE BASIS  ${rec.fareBasis}`);
  rows.push(``);
  rec.segs.forEach((s, i) => rows.push(fsFormatSegLine(s, i)));
  rows.push(``);
  rows.push(`>> FXS${rec.recNum} TO SELECT`);
  rows.push(`>> FXZ${rec.recNum} TO BOOK`);
  rows.push(`>> FXU${rec.recNum} TO BOOK AND CREATE TST`);
  rows.push(`>> FXY${rec.recNum} TO HAVE UPSELL RECOMMENDATION`);
  rows.push(``);
  rows.push(`  1 TICKETS ARE NON-REFUNDABLE`);
  rows.push(`  1 LAST TKT DTE ${rec.lastTkt || '10FEB25'} - DATE OF ORIGIN`);
  rows.push(`  FARE FAMILIES:    (ENTER FQFn FOR DETAILS, FXY FOR UPSELL)`);
  rec.fareFamilies.forEach(ff => {
    rows.push(`  ${ff.range} ${ff.name} (${ff.fc})`);
  });
  return rows;
}

function fsGetAllPrices(groups){
  let min = Infinity, max = 0;
  groups.forEach(g => g.recommendations.forEach(r => {
    if(r.total < min) min = r.total;
    if(r.total > max) max = r.total;
  }));
  return { min: min === Infinity ? 0 : min, max };
}

function fsStoreSession(groups, query){
  const prices = fsGetAllPrices(groups);
  const totalRecs = groups.reduce((s, g) => s + g.recommendations.length, 0);
  fareShopSession = { groups, query, prices, totalRecs, selectedRec: null, activeGroup: 0 };
}

// ---------- FXD — Fare Driven Search (original app command) ----------
function handleFXD(cmd, clean){
  // FXDDAC/D10FEBLHR/D25FEBDAC
  const m = clean.match(/^FXD([A-Z]{3})\/D(\d{1,2}[A-Z]{3})([A-Z]{3})\/D(\d{1,2}[A-Z]{3})([A-Z]{3})$/i);
  if(!m){
    printLines([
      'INVALID FORMAT',
      'Examples:',
      '  FXDDAC/D10FEBLHR/D25FEBDAC',
      '  FXDDAC/D12NOVBKK/D20NOVDAC'
    ], 'err');
    return;
  }

  const orig = m[1], outDate = m[2].toUpperCase(), dest = m[3];
  const retDate = m[4].toUpperCase(), retOrig = m[5];

  let groups;
  let headerOverride = null;
  if(orig === 'DAC' && dest === 'LHR' && retOrig === 'DAC'){
    groups = JSON.parse(JSON.stringify(CURATED_DACLHR.groups));
    headerOverride = {
      groups: CURATED_DACLHR.headerGroups,
      recs: CURATED_DACLHR.headerRecs,
      min: CURATED_DACLHR.headerMin,
      max: CURATED_DACLHR.headerMax
    };
  } else {
    groups = fsBuildDynamicGroups(orig, dest, outDate, retDate);
    if(!groups){
      printLines([`NO FARE RECOMMENDATIONS FOR ${orig}-${dest}`], 'err');
      return;
    }
  }

  fsStoreSession(groups, { orig, dest, outDate, retDate, retOrig, type:'FXD' });

  const totalGroups = headerOverride ? headerOverride.groups : groups.length;
  const totalRecs   = headerOverride ? headerOverride.recs   : fareShopSession.totalRecs;
  const min = headerOverride ? headerOverride.min : fareShopSession.prices.min;
  const max = headerOverride ? headerOverride.max : fareShopSession.prices.max;

  const rows = [];
  rows.push(`${totalGroups} GROUPS AND ${totalRecs} RECOMMENDATIONS RETURNED FROM BDT ${min} TO ${max}`);
  rows.push(``);

  groups.forEach((g, gi) => {
    if(gi > 0) rows.push(``);
    rows.push(`GROUP ${g.groupNum}`);
    g.recommendations.forEach((rec, ri) => {
      rows.push(...fsRenderRecommendation(rec, g.groupNum, ri, g.recommendations.length));
      if(ri < g.recommendations.length - 1) rows.push(``);
    });
  });

  printLines(rows, '');
  showToast(`✓ Fare Shop: ${totalGroups} groups, ${totalRecs} recommendations (${orig}-${dest})`);
}

// ---------- FS — Master Pricer (training lecture command) ----------
function handleFS(cmd, clean){
  // Round-trip: FSDACBKK20NOV-28NOV
  let m = clean.match(/^FS([A-Z]{3})([A-Z]{3})(\d{1,2}[A-Z]{3})-(\d{1,2}[A-Z]{3})$/i);
  if(m){
    const orig = m[1], dest = m[2], outDate = m[3].toUpperCase(), retDate = m[4].toUpperCase();
    return handleFXD(cmd, `FXD${orig}/D${outDate}${dest}/D${retDate}${orig}`);
  }

  // One-way: FSDACBKK20NOV
  m = clean.match(/^FS([A-Z]{3})([A-Z]{3})(\d{1,2}[A-Z]{3})$/i);
  if(!m){
    printLines([
      'INVALID FORMAT',
      'Examples:',
      '  FSDACBKK20NOV        (one-way)',
      '  FSDACBKK20NOV-28NOV  (round-trip)'
    ], 'err');
    return;
  }

  const orig = m[1], dest = m[2], outDate = m[3].toUpperCase();
  const outSched = getFlightSchedule(orig, dest, outDate);
  if(!outSched || !outSched.lines || !outSched.lines.length){
    printLines([`NO FARE RECOMMENDATIONS FOR ${orig}-${dest}`], 'err');
    return;
  }

  const priceFn = (typeof calcBasePrice === 'function') ? calcBasePrice : function(){ return 28000; };
  const groups = [];
  const lines = outSched.lines.slice(0, 5);

  lines.forEach((line, gi) => {
    const recs = [];
    ['L', 'Q', 'N'].forEach((cls, ri) => {
      const al = line.segs[0].al;
      const base = priceFn(al, orig, dest);
      const fare = Math.round(base * (1 + ri * 0.15));
      const tax  = Math.round(fare * 0.38);
      const segs = line.segs.map(s => ({
        al: s.al, fn: s.fn, cls,
        date: outDate, dep: s.dep, arr: s.arr,
        termDep: s.termDep || '', termArr: s.termArr || '',
        depT: s.depT, arrT: s.arrT, eq: s.eq || '77W', dur: s.dur || ''
      }));
      recs.push({
        recNum: ri + 1, total: fare + tax, fare, tax,
        fareBasis: fsFareBasis(al, cls), ptc: 'ADT', segs,
        fareFamilies: [{ range:`1-${segs.length}`, name:'ECOVALU', fc:'FC1' }],
        lastTkt: outDate + '25'
      });
    });
    groups.push({ groupNum: gi + 1, recommendations: recs });
  });

  fsStoreSession(groups, { orig, dest, outDate, type:'FS' });

  const { min, max } = fareShopSession.prices;
  const rows = [
    `** AMADEUS MASTER PRICER ** ${orig}${dest} ${outDate}`,
    `${groups.length} GROUPS AND ${fareShopSession.totalRecs} RECOMMENDATIONS RETURNED FROM BDT ${min} TO ${max}`,
    ``
  ];

  groups.forEach((g, gi) => {
    if(gi > 0) rows.push(``);
    rows.push(`GROUP ${g.groupNum}`);
    g.recommendations.forEach((rec, ri) => {
      rows.push(...fsRenderRecommendation(rec, g.groupNum, ri, g.recommendations.length));
      if(ri < g.recommendations.length - 1) rows.push(``);
    });
  });

  printLines(rows, '');
  showToast(`✓ Master Pricer FS: ${orig}-${dest} ${outDate}`);
}

// ---------- FXS / FXZ / FXU / FXY — Recommendation actions ----------
function fsFindRecommendation(recNum){
  if(!fareShopSession || !fareShopSession.groups.length){
    return null;
  }
  for(const g of fareShopSession.groups){
    const rec = g.recommendations.find(r => r.recNum === recNum);
    if(rec) return { rec, group: g };
  }
  return null;
}

function fsBookRecommendation(rec, createTST){
  if(state.finalized || (state.locator && state.passengers.length > 0)){
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

  state.segments = rec.segs.map(s => ({
    al: s.al, fn: s.fn, cls: s.cls, count: 1,
    dep: s.dep, arr: s.arr,
    depT: s.depT, arrT: s.arrT,
    eq: s.eq || '77W',
    date: s.date,
    day: getDayOfWeek(s.date),
    status: 'DK',
    fullDate: `${s.date} 2026`,
    tktCode: `${s.al}/VB7BHH`
  }));

  state.hasPending = true;
  state.fareShopPrice = rec;
  fareShopSession.selectedRec = rec;

  if(createTST){
    state.hasTST = true;
    state.tstRecords = [{
      tstNum: 1, pCode: '.1', name: 'ADT/PAX', fare: rec.fare, tax: rec.tax,
      total: rec.total, ptc: 'ADT', segs: `1-${rec.segs.length}`
    }];
  }

  const rows = [];
  rows.push(`RP/${state.officeId || OFFICE_ID}/`);
  state.segments.forEach((seg, idx) => {
    const segLines = formatSegmentBuildingLines(seg, idx, state.segments.length, idx + 1);
    segLines.forEach(l => rows.push(l));
  });

  if(createTST){
    rows.push(``);
    rows.push(`TST CREATED — TOTAL BDT ${rec.total} (FARE ${rec.fare} + TAX ${rec.tax})`);
    rows.push(`TYPE NM1 TO ADD PASSENGER NAME, THEN ER TO SAVE`);
  } else {
    rows.push(``);
    rows.push(`RECOMMENDATION BOOKED — TYPE NM1 TO ADD PASSENGER`);
  }

  printLines(rows, '');
  updateTopPnrInfo();
  showToast(createTST
    ? `✓ Booked + TST created — BDT ${rec.total.toLocaleString()}`
    : `✓ Recommendation booked — ${rec.segs.length} segment(s) held`);
}

function handleFXAction(cmd, clean){
  const m = clean.match(/^FX([SZUY])(\d+)$/i);
  if(!m){
    printLines(['INVALID FORMAT — try FXS1, FXZ1, FXU1, or FXY1'], 'err');
    return;
  }

  const action = m[1].toUpperCase();
  const recNum = parseInt(m[2], 10);
  const found = fsFindRecommendation(recNum);

  if(!found){
    printLines([
      'NO ACTIVE FARE SHOP RESULTS',
      'Run a fare search first, e.g.:',
      '  FXDDAC/D10FEBLHR/D25FEBDAC',
      '  FSDACBKK20NOV-28NOV'
    ], 'err');
    return;
  }

  const { rec } = found;

  if(action === 'S'){
    fareShopSession.selectedRec = rec;
    const rows = [
      `RECOMMENDATION ${recNum} SELECTED — BDT ${rec.total}`,
      ``
    ];
    rec.segs.forEach((s, i) => rows.push(fsFormatSegLine(s, i)));
    rows.push(``);
    rows.push(`>> FXZ${recNum} TO BOOK`);
    rows.push(`>> FXU${recNum} TO BOOK AND CREATE TST`);
    rows.push(`>> FXY${recNum} TO HAVE UPSELL RECOMMENDATION`);
    printLines(rows, '');
    showToast(`✓ Recommendation ${recNum} selected — BDT ${rec.total.toLocaleString()}`);
    return;
  }

  if(action === 'Z'){
    fsBookRecommendation(rec, false);
    return;
  }

  if(action === 'U'){
    fsBookRecommendation(rec, true);
    return;
  }

  if(action === 'Y'){
    const upsellTotal = rec.total + 6626;
    const upsellFare  = rec.fare + 4500;
    const upsellTax   = upsellTotal - upsellFare;
    const rows = [
      `UPSELL RECOMMENDATION FOR REC ${recNum}`,
      `  CURRENT:  BDT ${rec.total}  (${rec.fareFamilies[0] ? rec.fareFamilies[0].name : 'ECOVALU'})`,
      `  UPSELL:   BDT ${upsellTotal}  (ECONVENIEN / ECOFLEX)`,
      `  DIFFERENCE: +6626 BDT`,
      ``,
      `  FARE BASIS  ${rec.fareBasis.replace('+', 'UP+')}`,
      `  ADDITIONAL BENEFITS: REFUNDABLE PENALTY, SEAT SELECTION, LOUNGE ACCESS`,
      ``,
      `>> FXU${recNum} TO BOOK CURRENT FARE`,
      `>> FXZ${recNum} TO BOOK AT CURRENT PRICE`
    ];
    printLines(rows, '');
    showToast(`Upsell available: ECONVENIEN +6626 BDT`);
    return;
  }
}
