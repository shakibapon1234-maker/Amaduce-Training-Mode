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
  usdRate: 119.98,
  groups: [
    {
      groupNum: 1,
      recommendations: [
        {
          recNum: 1, total: 108413, fare: 25916, tax: 82497, fareBasis: 'LL2YXSDC+', ptc: 'ADT', bg: '1P',
          ticketNote: 'TICKETS ARE NON-REFUNDABLE',
          segs: [
            { al:'AI', fn:'238',  cls:'L', date:'10FEB', dep:'DAC', arr:'DEL', termDep:'2', termArr:'3', depT:'2100', arrT:'2320', eq:'32A', dur:'0220' },
            { al:'AI', fn:'111',  cls:'L', date:'11FEB', dep:'DEL', arr:'LHR', termDep:'3', termArr:'2', depT:'0730', arrT:'1130', eq:'359', elapsed:'2030' },
            { al:'AI', fn:'112',  cls:'G', date:'25FEB', dep:'LHR', arr:'DEL', termDep:'2', termArr:'3', depT:'1330', arrT:'0315+1', eq:'359', dur:'' },
            { al:'AI', fn:'2181', cls:'G', date:'26FEB', dep:'DEL', arr:'DAC', termDep:'3', termArr:'2', depT:'0645', arrT:'0945', eq:'32N', elapsed:'1415' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOVALU', fc:'FC1' }, { range:'3-4', name:'ECOVALU', fc:'FC2' }],
          lastTkt: '10FEB25'
        },
        {
          recNum: 2, total: 115820, fare: 31200, tax: 84620, fareBasis: 'LL3YXSDC+', ptc: 'ADT', bg: '1P',
          ticketNote: 'TICKETS ARE NON-REFUNDABLE',
          segs: [
            { al:'AI', fn:'238',  cls:'L', date:'10FEB', dep:'DAC', arr:'DEL', termDep:'2', termArr:'3', depT:'2100', arrT:'2320', eq:'32A', dur:'0220' },
            { al:'AI', fn:'111',  cls:'L', date:'11FEB', dep:'DEL', arr:'LHR', termDep:'3', termArr:'2', depT:'0730', arrT:'1130', eq:'359', elapsed:'2030' },
            { al:'AI', fn:'113',  cls:'G', date:'25FEB', dep:'LHR', arr:'DEL', termDep:'2', termArr:'3', depT:'1830', arrT:'0815+1', eq:'359', dur:'' },
            { al:'AI', fn:'2181', cls:'G', date:'26FEB', dep:'DEL', arr:'DAC', termDep:'3', termArr:'2', depT:'0645', arrT:'0945', eq:'32N', elapsed:'1415' }
          ],
          fareFamilies: [{ range:'1-2', name:'ECOVALU', fc:'FC1' }, { range:'3-4', name:'ECOVALU', fc:'FC2' }],
          lastTkt: '10FEB25'
        },
        {
          recNum: 3, total: 128450, fare: 38500, tax: 89950, fareBasis: 'QL2YXBDC+', ptc: 'ADT', bg: '1P',
          ticketNote: 'TICKETS ARE NON-REFUNDABLE',
          segs: [
            { al:'AI', fn:'230',  cls:'Q', date:'10FEB', dep:'DAC', arr:'DEL', termDep:'2', termArr:'3', depT:'1530', arrT:'1755', eq:'320', dur:'0225' },
            { al:'AI', fn:'111',  cls:'L', date:'11FEB', dep:'DEL', arr:'LHR', termDep:'3', termArr:'2', depT:'0730', arrT:'1130', eq:'359', elapsed:'2030' },
            { al:'AI', fn:'112',  cls:'G', date:'25FEB', dep:'LHR', arr:'DEL', termDep:'2', termArr:'3', depT:'1330', arrT:'0315+1', eq:'359', dur:'' },
            { al:'AI', fn:'2181', cls:'G', date:'26FEB', dep:'DEL', arr:'DAC', termDep:'3', termArr:'2', depT:'0645', arrT:'0945', eq:'32N', elapsed:'1415' }
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

// ---------- Curated DAC-JFK round-trip (matches original app FXD/FXZ screenshots) ----------
const CURATED_DACJFK = {
  headerGroups: 26,
  headerRecs: 50,
  headerMin: 90961,
  headerMax: 705393,
  usdRate: 83.20,
  groups: [
    {
      groupNum: 1,
      recommendations: [
        {
          recNum: 1, total: 90961, fare: 73632, tax: 17329, fareBasis: 'NAATRBD8', ptc: 'ADT', bg: '2P',
          segs: [
            { al:'CX', opAl:'KA', fn:'5111', cls:'N', date:'20DEC', dep:'DAC', arr:'HKG', termArr:'1', depT:'2310', arrT:'0445+1', eq:'333', dur:'' },
            { al:'CX', fn:'830', cls:'N', date:'21DEC', dep:'HKG', arr:'JFK', termDep:'1', termArr:'8', depT:'0935', arrT:'1210', eq:'77W', elapsed:'2400' },
            { al:'CX', fn:'841', cls:'N', date:'10JAN', dep:'JFK', arr:'HKG', termDep:'8', termArr:'1', depT:'0900', arrT:'1410+1', eq:'77W', dur:'' },
            { al:'CX', opAl:'KA', fn:'5110', cls:'N', date:'11JAN', dep:'HKG', arr:'DAC', termDep:'1', depT:'1930', arrT:'2200', eq:'333', elapsed:'2600' }
          ],
          lastTkt: '20DEC18',
          ticketNote: 'TICKETS ARE NON REFUNDABLE AFTER DEPARTURE'
        }
      ]
    },
    {
      groupNum: 2,
      recommendations: [
        {
          recNum: 1, total: 93547, fare: 78708, tax: 14839, fareBasis: 'QJBDL4RE+', ptc: 'ADT', bg: '2P', cat35: true,
          segs: [
            { al:'CX', opAl:'KA', fn:'5111', cls:'Q', date:'20DEC', dep:'DAC', arr:'HKG', termArr:'1', depT:'2310', arrT:'0445+1', eq:'333', dur:'' },
            { al:'CX', fn:'830', cls:'Q', date:'21DEC', dep:'HKG', arr:'JFK', termDep:'1', termArr:'8', depT:'0935', arrT:'1210', eq:'77W', elapsed:'2400' },
            { al:'CX', fn:'841', cls:'Q', date:'10JAN', dep:'JFK', arr:'HKG', termDep:'8', termArr:'1', depT:'0900', arrT:'1410+1', eq:'77W', dur:'' },
            { al:'CX', opAl:'KA', fn:'5110', cls:'Q', date:'11JAN', dep:'HKG', arr:'DAC', termDep:'1', depT:'1930', arrT:'2200', eq:'333', elapsed:'2600' }
          ],
          lastTkt: '20DEC18',
          ticketNote: 'TICKETS ARE NON REFUNDABLE AFTER DEPARTURE'
        }
      ]
    }
  ]
};

// ---------- Helpers ----------
const FS_CITY = { JFK:'NYC', EWR:'NYC', LGA:'NYC', LHR:'LON', LGW:'LON', STN:'LON', CDG:'PAR', ORY:'PAR', NRT:'TYO', HND:'TYO' };

function fsCityCode(apt){
  return FS_CITY[apt] || apt;
}

function fsNormDur(dur){
  if(!dur) return '';
  const s = String(dur).trim();
  if(s.includes(':')){
    const [h, m] = s.split(':');
    return String(parseInt(h, 10) || 0).padStart(2, '0') + String(parseInt(m, 10) || 0).padStart(2, '0');
  }
  const digits = s.replace(/\D/g, '');
  if(!digits) return '';
  return digits.padStart(4, '0').slice(-4);
}

function fsAddDur(a, b){
  const toMin = d => {
    const n = fsNormDur(d);
    if(!n) return 0;
    return parseInt(n.slice(0, 2), 10) * 60 + parseInt(n.slice(2, 4), 10);
  };
  const mins = toMin(a) + toMin(b);
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return String(h).padStart(2, '0') + String(m).padStart(2, '0');
}

function fsBoundStartIndexes(segs, dest){
  const starts = [0];
  if(!segs || segs.length < 2) return starts;
  for(let i = 1; i < segs.length; i++){
    if(segs[i].dep === dest || segs[i - 1].arr === dest){
      starts.push(i);
      break;
    }
  }
  return starts;
}

function fsElapsedByBound(segs, dest){
  const starts = fsBoundStartIndexes(segs, dest);
  const elapsed = new Array(segs.length).fill('');
  const ends = starts.map((s, i) => (i < starts.length - 1 ? starts[i + 1] - 1 : segs.length - 1));
  starts.forEach((start, bi) => {
    const end = ends[bi];
    if(segs[end] && segs[end].elapsed){
      elapsed[end] = fsNormDur(segs[end].elapsed);
      return;
    }
    let sum = '0000';
    let any = false;
    for(let i = start; i <= end; i++){
      if(segs[i].dur){
        sum = fsAddDur(sum, segs[i].dur);
        any = true;
      }
    }
    if(any) elapsed[end] = sum;
  });
  return { starts, elapsed };
}

function fsCarrierFlight(seg){
  if(seg.opAl && seg.opAl !== seg.al){
    return `${seg.opAl}:${seg.al}${seg.fn}`;
  }
  return `${seg.al} ${seg.fn}`;
}

function fsRoutePart(seg){
  const bits = [seg.dep];
  if(seg.termDep) bits.push(seg.termDep);
  bits.push(seg.arr);
  if(seg.termArr) bits.push(seg.termArr);
  return bits.join(' ');
}

function fsFormatSegLine(seg, idx, boundStarts, elapsedAt){
  const isBoundStart = boundStarts && boundStarts.indexOf(idx) !== -1;
  const num = isBoundStart ? String(boundStarts.indexOf(idx) + 1) : ' ';
  const glued = !!(seg.opAl && seg.opAl !== seg.al);
  const alFn = fsCarrierFlight(seg).padEnd(glued ? 9 : 7, ' ');
  const prefix = glued && isBoundStart ? `${num}${alFn}` : `${num} ${alFn}`;
  const route = fsRoutePart(seg).padEnd(12, ' ');
  const elapsed = elapsedAt && elapsedAt[idx] ? ` ${elapsedAt[idx]}` : '';
  return `${prefix} ${seg.cls} ${seg.date} ${route} ${seg.depT} ${String(seg.arrT).padEnd(6, ' ')} E0/${seg.eq}${elapsed}`;
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

function fsJourneyDest(rec){
  if(fareShopSession && fareShopSession.query && fareShopSession.query.dest){
    return fareShopSession.query.dest;
  }
  return rec.segs.length ? rec.segs[Math.max(0, Math.floor(rec.segs.length / 2) - 1)].arr : '';
}

function fsFormatSegLines(rec){
  const dest = fsJourneyDest(rec);
  const { starts, elapsed } = fsElapsedByBound(rec.segs, dest);
  return rec.segs.map((s, i) => fsFormatSegLine(s, i, starts, elapsed));
}

function fsRenderRecommendation(rec, groupNum, recIdx, totalInGroup){
  const rows = [];
  rows.push(`---------- RECOMMENDATION ${recIdx + 1} OF ${totalInGroup} IN GROUP ${groupNum} (BDT ${rec.total})----------`);
  rows.push(` PTC          CUR                 TAX      FARE BASIS`);
  const curAmt = `1 BDT ${rec.total}`;
  const cat35 = rec.cat35 ? '  CAT35' : '';
  rows.push(`${' 1 ' + rec.ptc}`.padEnd(14, ' ') + curAmt.padEnd(20, ' ') + String(rec.tax).padEnd(9, ' ') + rec.fareBasis + cat35);
  rows.push(`${' TOTAL'}`.padEnd(14, ' ') + curAmt.padEnd(20, ' ') + String(rec.tax));
  rows.push(``);
  fsFormatSegLines(rec).forEach(line => rows.push(line));
  rows.push(``);
  const n = rec.recNum;
  rows.push(`>> FXS${n} TO SELECT    >> FXZ${n} TO BOOK    >> FXU${n} TO BOOK AND CREATE TST`);
  rows.push(`>> FXY${n} TO HAVE UPSELL RECOMMENDATION`);
  const note = rec.ticketNote || 'TICKETS ARE NON-REFUNDABLE';
  rows.push(` 1 ${note}`);
  rows.push(` 1 LAST TKT DTE${rec.lastTkt || '10FEB25'} - DATE OF ORIGIN`);
  if(rec.fareFamilies && rec.fareFamilies.length){
    rows.push(` FARE FAMILIES:    (FOR MORE DETAILS: FQFn)`);
    rec.fareFamilies.forEach(ff => {
      rows.push(` FARE FAMILY:${ff.fc}:${ff.range}:${ff.name}`);
    });
  }
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

function fsStoreSession(groups, query, extra){
  const prices = fsGetAllPrices(groups);
  const totalRecs = groups.reduce((s, g) => s + g.recommendations.length, 0);
  fareShopSession = { groups, query, prices, totalRecs, selectedRec: null, activeGroup: 0, usdRate: extra && extra.usdRate };
}

function fsKnownCity(code){
  return typeof AIRPORTS !== 'undefined' && AIRPORTS[code];
}

function fsFixCity(code){
  const c = (code || '').toUpperCase().replace(/[^A-Z]/g, '');
  if(!c) return '';
  if(fsKnownCity(c)) return c;
  const collapsed = c.replace(/(.)\1+/g, '$1');
  if(fsKnownCity(collapsed)) return collapsed;
  if(c.length === 4){
    for(let i = 0; i < 4; i++){
      const t = c.slice(0, i) + c.slice(i + 1);
      if(fsKnownCity(t)) return t;
    }
  }
  if(c.length > 3 && fsKnownCity(c.slice(0, 3))) return c.slice(0, 3);
  return collapsed.length === 3 ? collapsed : c.slice(0, 3);
}

function fsParseFXD(clean){
  const body = clean.replace(/^FXD/i, '');
  let m = body.match(/^([A-Z]{3,5})\/D(\d{1,2}[A-Z]{3})([A-Z]{3,5})\/D(\d{1,2}[A-Z]{3})([A-Z]{3,5})$/i);
  if(m){
    return {
      origRaw: m[1].toUpperCase(), destRaw: m[3].toUpperCase(), retRaw: m[5].toUpperCase(),
      orig: fsFixCity(m[1]), dest: fsFixCity(m[3]), retOrig: fsFixCity(m[5]),
      outDate: m[2].toUpperCase(), retDate: m[4].toUpperCase(), oneWay: false
    };
  }
  m = body.match(/^([A-Z]{3,5})\/D(\d{1,2}[A-Z]{3})([A-Z]{3,5})$/i);
  if(m){
    return {
      origRaw: m[1].toUpperCase(), destRaw: m[3].toUpperCase(),
      orig: fsFixCity(m[1]), dest: fsFixCity(m[3]),
      outDate: m[2].toUpperCase(), oneWay: true
    };
  }
  return null;
}

function fsPrintFXD(groups, orig, dest, headerOverride){
  fsStoreSession(groups, { orig, dest, type:'FXD' }, headerOverride);
  const totalGroups = headerOverride ? headerOverride.groups : groups.length;
  const totalRecs   = headerOverride ? headerOverride.recs   : fareShopSession.totalRecs;
  const min = headerOverride ? headerOverride.min : fareShopSession.prices.min;
  const max = headerOverride ? headerOverride.max : fareShopSession.prices.max;
  const rows = [];
  rows.push(`${totalGroups} GROUPS AND ${totalRecs} RECOMMENDATIONS RETURNED FROM BDT ${min} TO ${max}`);
  rows.push(``);
  // Default Amadeus FXD display shows recommendation 1 of each group (Screenshot 1)
  groups.forEach((g, gi) => {
    if(gi > 0) rows.push(``);
    const rec = g.recommendations[0];
    rows.push(...fsRenderRecommendation(rec, g.groupNum, 0, g.recommendations.length));
  });
  printLines(rows, '');
  showToast(`✓ Fare Shop: ${totalGroups} groups, ${totalRecs} recommendations (${orig}-${dest})`);
}

// ---------- FXD — Fare Driven Search (original app command) ----------
function fsStampRtDates(groups, dest, outDate, retDate, lastTkt){
  groups.forEach(g => {
    g.recommendations.forEach(rec => {
      rec.lastTkt = lastTkt;
      const starts = fsBoundStartIndexes(rec.segs, dest);
      const retStart = starts[1] != null ? starts[1] : rec.segs.length;
      rec.segs.forEach((s, i) => {
        if(i === 0) s.date = outDate;
        else if(i === retStart) s.date = retDate;
        else {
          const prev = rec.segs[i - 1];
          const prevArr = String(prev.arrT || '');
          s.date = prevArr.includes('+1') ? (typeof getNextDayDate === 'function' ? getNextDayDate(prev.date) : prev.date) : prev.date;
        }
      });
    });
  });
}

function handleFXD(cmd, clean){
  // FXDDAC/D10FEBLHR/D25FEBDAC  |  FXDDAC/D20DECJFK/D10JAN DAC
  // Also accepts 4-letter typos: JFFK → JFK
  const parsed = fsParseFXD(clean);
  if(!parsed){
    printLines([
      'INVALID FORMAT',
      'Examples:',
      '  FXDDAC/D10FEBLHR/D25FEBDAC',
      '  FXDDAC/D20DECJFK/D10JANDAC',
      '  FXDDAC/D12NOVBKK/D20NOVDAC'
    ], 'err');
    return;
  }

  const orig = parsed.orig, dest = parsed.dest, outDate = parsed.outDate;
  const retDate = parsed.retDate, retOrig = parsed.retOrig || orig;
  const corrections = [];
  if(parsed.origRaw && parsed.origRaw !== orig) corrections.push(`${parsed.origRaw}->${orig}`);
  if(parsed.destRaw && parsed.destRaw !== dest) corrections.push(`${parsed.destRaw}->${dest}`);
  if(parsed.retRaw && parsed.retRaw !== retOrig) corrections.push(`${parsed.retRaw}->${retOrig}`);
  if(corrections.length){
    printLines([`CITY CODE CORRECTED: ${corrections.join('  ')}`], 'warn');
  }

  if(parsed.oneWay){
    const oneWayCmd = `FS${orig}${dest}${outDate}`;
    return handleFS(oneWayCmd, oneWayCmd);
  }

  let groups;
  let headerOverride = null;
  if(orig === 'DAC' && dest === 'JFK' && retOrig === 'DAC'){
    groups = JSON.parse(JSON.stringify(CURATED_DACJFK.groups));
    fsStampRtDates(groups, dest, outDate, retDate, outDate === '20DEC' ? '20DEC18' : outDate + '26');
    headerOverride = {
      groups: CURATED_DACJFK.headerGroups,
      recs: CURATED_DACJFK.headerRecs,
      min: CURATED_DACJFK.headerMin,
      max: CURATED_DACJFK.headerMax,
      usdRate: CURATED_DACJFK.usdRate
    };
  } else if(orig === 'DAC' && dest === 'LHR' && retOrig === 'DAC'){
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

  fsPrintFXD(groups, orig, dest, headerOverride);
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

function fsUsdRate(){
  return (fareShopSession && fareShopSession.usdRate) || 122.71;
}

function fsArrCityCol(seg, orig, dest){
  const isEnd = seg.arr === orig || seg.arr === dest || fsCityCode(seg.arr) === fsCityCode(orig) || fsCityCode(seg.arr) === fsCityCode(dest);
  const code = fsCityCode(seg.arr);
  return (isEnd ? ` ${code}` : `X${code}`).padEnd(4, ' ');
}

function fsTaxBreakdownLines(tax, total){
  if(tax === 17329){
    return [
      `BDT     500BD     XT BDT 3000OW BDT 75E5 BDT 3408G3 BDT`,
      `BDT    4000UT     1066I5 BDT 480YC BDT 1523US BDT 1523US BDT`,
      `BDT   12829XT     330XA BDT 583XY BDT 466AY BDT 375XF`,
      `BDT     ${total}`
    ];
  }
  const bd = Math.min(500, tax);
  const ow = Math.min(3000, Math.max(0, tax - bd));
  const ut = Math.min(4000, Math.max(0, tax - bd - ow));
  const xt = Math.max(0, tax - bd);
  const rest = Math.max(0, tax - bd - ow - ut);
  return [
    `BDT ${String(bd).padStart(7)}BD     XT BDT ${ow}OW BDT`,
    `BDT ${String(ut).padStart(7)}UT     ${rest ? 'BDT ' + rest + 'XT' : ''}`,
    `BDT ${String(xt).padStart(7)}XT`,
    `BDT ${String(total).padStart(7)}`
  ];
}

function fsRenderFxzFareMask(rec, createTST){
  const orig = (fareShopSession && fareShopSession.query && fareShopSession.query.orig) || rec.segs[0].dep;
  const dest = fsJourneyDest(rec);
  const origCity = fsCityCode(orig);
  const destCity = fsCityCode(dest);
  const al = rec.segs[0].al;
  const viaSeg = rec.segs.find(s => s.arr !== dest && s.arr !== orig);
  const via = viaSeg ? viaSeg.arr : '';
  const rate = fsUsdRate();
  const usdNum = rec.fare / rate;
  const usd = usdNum.toFixed(2);
  const half = (usdNum / 2).toFixed(2);
  const yy = ((rec.lastTkt || '').match(/(\d{2})$/) || [,'26'])[1];
  const date0 = rec.segs[0].date || '20DEC';
  const bg = (rec.bg || '2P').padStart(3, ' ');
  const fBasis = rec.fareBasis.replace('+', '').padEnd(16, ' ');
  const rows = [
    createTST ? 'FXU' : 'FXZ',
    ``,
    `01 P1`,
    `SELECTED RECOMMENDATION SUCCESSFULLY BOOKED`,
    `LAST TKT DTE ${rec.lastTkt || date0 + yy} - DATE OF ORIGIN`,
    `------------------------------------------------------------`,
    `       AL FLGT   BK T DATE   TIME  FARE BASIS       NVB   NVA   BG`,
    ` ${orig}`
  ];

  if(al === 'AI' && rec.total === 108413){
    // Exact match for YouTube Screenshot 2
    rows.push(`XDEL AI   238  L  L 10FEB 2100     LL2YXSDC         10FEB10FEB 1P`);
    rows.push(` LON AI   111  L  L 11FEB 0730     LL2YXSDC         11FEB11FEB 1P`);
    rows.push(`XDEL AI   112  G  G 25FEB 1330     GL2YXSDC         25FEB25FEB 1P`);
    rows.push(` DAC AI  2181  G  G 26FEB 0645     GL2YXSDC         26FEB26FEB 1P`);
    rows.push(``);
    rows.push(`USD   216.00     10FEB25DAC AI X/DEL AI LON75.50AI X/DEL`);
    rows.push(`BDT    25916     AI DAC140.50NUC216.00END ROE1.00`);
    rows.push(`BDT      500BD   XT BDT 912YR BDT 435E5 BDT 3000OW BDT`);
    rows.push(`BDT    47992YQ   1200P7 BDT 1200P8 BDT 6000UT BDT 13389GB`);
    rows.push(`BDT    34005XT   BDT 7869UB`);
    rows.push(`BDT   108413`);
    rows.push(`RATE USED 1USD=119.98BDT`);
    if(createTST){
      rows.push(``);
      rows.push(`TST CREATED`);
    }
    return rows;
  }

  rec.segs.forEach(s => {
    const city = fsArrCityCol(s, orig, dest);
    const alPad = s.al.padEnd(2, ' ');
    const fn = String(s.fn).padStart(5, ' ');
    const bk = String(s.cls || 'N').padStart(2, ' ');
    const t = String(s.cls || 'N').padStart(2, ' ');
    const date = String(s.date || date0).padStart(5, ' ');
    const time = String(s.depT || '0000').padStart(4, ' ');
    const nvbNva = `${s.date || date0}${s.date || date0}`.padEnd(10, ' ');
    const segBasis = (s.cls === 'G' ? 'GL2YXSDC' : fBasis).padEnd(16, ' ');
    rows.push(`${city} ${alPad} ${fn} ${bk} ${t} ${date} ${time}     ${segBasis} ${nvbNva}${bg}`);
  });
  rows.push(``);
  const viaBit = via ? ` X/${via}` : '';
  rows.push(`USD ${usd.padStart(8)}     ${date0}${yy}${orig} ${al}${viaBit} ${al} ${destCity}${half}${al}${viaBit}`);
  rows.push(`BDT ${String(rec.fare).padStart(8)}     ${al} ${origCity}${half}NUC${usd}END ROE1.000000`);
  fsTaxBreakdownLines(rec.tax, rec.total).forEach(l => rows.push(l));
  rows.push(`RATE USED 1USD=${rate}BDT`);
  if(createTST){
    rows.push(``);
    rows.push(`TST CREATED`);
  }
  return rows;
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

  const isAI = rec.segs[0].al === 'AI';
  state.segments = rec.segs.map((s, si) => ({
    al: s.al, fn: s.fn, cls: s.cls, count: 1,
    dep: s.dep, arr: s.arr,
    termDep: s.termDep || '', termArr: s.termArr || '',
    depT: s.depT, arrT: s.arrT,
    eq: s.eq || '77W',
    date: s.date,
    day: isAI ? (['1*', '2*', '2*', '3*'][si] || '1*') : getDayOfWeek(s.date),
    status: 'DK',
    fullDate: `${s.date} 2025`,
    tktCode: `${s.al}/VB7BHH`,
    fareBasis: (s.cls === 'G' ? 'GL2YXSDC' : 'LL2YXSDC')
  }));

  state.hasPending = true;
  state.fareShopPrice = rec;
  fareShopSession.selectedRec = rec;
  if(isAI){
    state.mscHeader = true;
  }

  if(createTST){
    state.hasTST = true;
    state.tstRecords = [{
      tstNum: 1, pCode: '.1', name: 'ADT/PAX', fare: rec.fare, tax: rec.tax,
      total: rec.total, ptc: 'ADT', segs: `1-${rec.segs.length}`
    }];
  }

  const rows = fsRenderFxzFareMask(rec, createTST);
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
    fsFormatSegLines(rec).forEach(line => rows.push(line));
    rows.push(``);
    rows.push(`>> FXZ${recNum} TO BOOK    >> FXU${recNum} TO BOOK AND CREATE TST`);
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
