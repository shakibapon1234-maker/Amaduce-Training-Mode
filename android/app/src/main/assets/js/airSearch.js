/**
 * Amadeus Selling Platform Connect — Graphical Air Search Module ("Your air search")
 * Matches real Amadeus SPC result layout: airline rows + fare columns + autocomplete
 */

let activeTab = 'cmd';
let guiPax = { adt: 1, chd: 0, inf: 0 };

// -------------------------------------------------------
// Start Menu & Tab Switching
// -------------------------------------------------------
function toggleStartMenu(e){
  if(e) e.stopPropagation();
  const menu = document.getElementById('startDropdownMenu');
  if(!menu) return;
  const isShow = menu.classList.contains('show');
  closeAllMenus();
  if(!isShow){
    menu.classList.add('show');
    const arrow = document.getElementById('startArrow');
    if(arrow) arrow.textContent = '▲';
  }
}

function showBookingSubmenu(show){
  const sub = document.getElementById('bookingSubmenu');
  if(sub) sub.style.display = show ? 'block' : 'none';
}

function closeAllMenus(){
  const startMenu = document.getElementById('startDropdownMenu');
  if(startMenu) startMenu.classList.remove('show');
  const arrow = document.getElementById('startArrow');
  if(arrow) arrow.textContent = '▾';
  const sub = document.getElementById('bookingSubmenu');
  if(sub) sub.style.display = 'none';
}

document.addEventListener('click', function(e){
  if(!e.target.closest('.amad-start-wrap')) closeAllMenus();
  if(!e.target.closest('.gui-input-icon-wrap')) closeAllAcDropdowns();
});

function switchToTab(tab){
  closeAllMenus();
  activeTab = tab;
  const tabCmd = document.getElementById('tabCmd');
  const tabAir = document.getElementById('tabAir');
  const termView = document.querySelector('.terminal-view');
  const airView  = document.getElementById('airSearchView');

  if(tab === 'air'){
    if(tabCmd){ tabCmd.classList.remove('page-tab-active'); tabCmd.classList.remove('active'); }
    if(tabAir){ tabAir.classList.add('page-tab-active'); tabAir.classList.add('active'); tabAir.style.display = 'flex'; }
    if(termView) termView.style.display = 'none';
    if(airView)  airView.style.display  = 'flex';
    initGuiAirSearch();
  } else {
    if(tabCmd){ tabCmd.classList.add('page-tab-active'); tabCmd.classList.add('active'); }
    if(tabAir){ tabAir.classList.remove('page-tab-active'); tabAir.classList.remove('active'); }
    if(termView) termView.style.display = 'flex';
    if(airView)  airView.style.display  = 'none';
    const inp = document.getElementById('termInput');
    if(inp) inp.focus();
  }
}

function openNewTab(){ switchToTab(activeTab === 'cmd' ? 'air' : 'cmd'); }

function closeAirTab(e){
  if(e) e.stopPropagation();
  switchToTab('cmd');
  const tabAir = document.getElementById('tabAir');
  if(tabAir) tabAir.style.display = 'none';
}

// -------------------------------------------------------
// Airport Autocomplete
// -------------------------------------------------------
const AC_AIRPORTS = [
  { code:'DAC', name:'Dhaka - Hazrat Shahjalal Intl Airport', city:'Dhaka', country:'Bangladesh', type:'airport' },
  { code:'BKK', name:'Bangkok Suvarnabhumi Airport', city:'Bangkok', country:'Thailand', type:'airport' },
  { code:'JED', name:'King Abdulaziz International Airport', city:'Jeddah', country:'Saudi Arabia', type:'airport' },
  { code:'KUL', name:'Kuala Lumpur International Airport', city:'Kuala Lumpur', country:'Malaysia', type:'airport' },
  { code:'DXB', name:'Dubai International Airport', city:'Dubai', country:'United Arab Emirates', type:'airport' },
  { code:'DOH', name:'Hamad International Airport', city:'Doha', country:'Qatar', type:'airport' },
  { code:'SIN', name:'Singapore Changi Airport', city:'Singapore', country:'Singapore', type:'airport' },
  { code:'IST', name:'Istanbul Airport', city:'Istanbul', country:'Turkey', type:'airport' },
  { code:'LHR', name:'London Heathrow Airport', city:'London', country:'United Kingdom', type:'airport' },
  { code:'DEL', name:'Indira Gandhi International Airport', city:'Delhi', country:'India', type:'airport' },
  { code:'CCU', name:'Netaji Subhash Chandra Bose Intl', city:'Kolkata', country:'India', type:'airport' },
  { code:'CMB', name:'Bandaranaike International Airport', city:'Colombo', country:'Sri Lanka', type:'airport' },
  { code:'NRT', name:'Narita International Airport', city:'Tokyo', country:'Japan', type:'airport' },
  { code:'JFK', name:'John F Kennedy International Airport', city:'New York', country:'United States', type:'airport' },
  { code:'CDG', name:'Charles de Gaulle Airport', city:'Paris', country:'France', type:'airport' },
  { code:'FRA', name:'Frankfurt Airport', city:'Frankfurt', country:'Germany', type:'airport' },
  { code:'MNL', name:'Ninoy Aquino International Airport', city:'Manila', country:'Philippines', type:'airport' },
  { code:'CGP', name:'Shah Amanat International Airport', city:'Chittagong', country:'Bangladesh', type:'airport' },
  { code:'ZYL', name:'Osmani International Airport', city:'Sylhet', country:'Bangladesh', type:'airport' },
  { code:'RJH', name:'Shah Makhdum Airport', city:'Rajshahi', country:'Bangladesh', type:'airport' }
];

function setupAcInput(inputId, dropdownId){
  const inp = document.getElementById(inputId);
  const drop = document.getElementById(dropdownId);
  if(!inp || !drop) return;

  inp.addEventListener('input', function(){
    const val = this.value.trim().toLowerCase();
    if(val.length < 1){ drop.style.display = 'none'; return; }
    const matches = AC_AIRPORTS.filter(a =>
      a.code.toLowerCase().startsWith(val) ||
      a.city.toLowerCase().includes(val) ||
      a.name.toLowerCase().includes(val)
    ).slice(0, 8);

    if(!matches.length){ drop.style.display = 'none'; return; }

    drop.innerHTML = matches.map(a => `
      <div class="ac-item" onclick="selectAcItem('${inputId}', '${dropdownId}', '${a.code}', '${a.city.replace(/'/g,"\\'")}')">
        <span class="ac-icon">${a.type === 'city' ? '🏙' : '✈'}</span>
        <div class="ac-text">
          <span class="ac-code">(${a.code})</span>
          <span class="ac-fullname">${a.name}</span>
          <span class="ac-country">${a.country}</span>
        </div>
      </div>
    `).join('');
    drop.style.display = 'block';
  });

  inp.addEventListener('focus', function(){
    if(this.value.length > 0) this.dispatchEvent(new Event('input'));
  });
}

function selectAcItem(inputId, dropdownId, code, city){
  const inp = document.getElementById(inputId);
  const drop = document.getElementById(dropdownId);
  if(inp) inp.value = `${city} (${code})`;
  if(drop) drop.style.display = 'none';
}

function closeAllAcDropdowns(){
  document.querySelectorAll('.ac-dropdown').forEach(d => d.style.display = 'none');
}

// -------------------------------------------------------
// Init
// -------------------------------------------------------
function initGuiAirSearch(){
  setupAcInput('guiFrom1', 'acFrom1');
  setupAcInput('guiTo1',   'acTo1');
  setupAcInput('guiFrom2', 'acFrom2');
  setupAcInput('guiTo2',   'acTo2');
}

// -------------------------------------------------------
// Passenger Adjusters
// -------------------------------------------------------
function adjustPax(type, delta){
  const total = guiPax.adt + guiPax.chd + guiPax.inf;
  if(delta > 0 && total >= 9){ alert("Max 9 passengers per GDS transaction."); return; }
  if(type === 'adt'){
    guiPax.adt = Math.max(1, Math.min(9, guiPax.adt + delta));
    const el = document.getElementById('guiPaxAdt'); if(el) el.textContent = guiPax.adt;
  } else if(type === 'chd'){
    guiPax.chd = Math.max(0, Math.min(8, guiPax.chd + delta));
    const el = document.getElementById('guiPaxChd'); if(el) el.textContent = guiPax.chd;
  } else if(type === 'inf'){
    if(delta > 0 && guiPax.inf >= guiPax.adt){ alert("Infants cannot exceed adult count."); return; }
    guiPax.inf = Math.max(0, Math.min(guiPax.adt, guiPax.inf + delta));
    const el = document.getElementById('guiPaxInf'); if(el) el.textContent = guiPax.inf;
  }
}

function toggleReturnBound(enable){
  const bound2 = document.getElementById('guiBound2');
  const addBtn  = document.getElementById('btnAddBound');
  if(bound2) bound2.style.display = enable ? 'block' : 'none';
  if(addBtn) addBtn.style.display = enable ? 'none' : 'inline-flex';
}

// -------------------------------------------------------
// Extract IATA Code
// -------------------------------------------------------
function extractIataCode(str, fallback){
  if(!str) return fallback || 'DAC';
  const m = str.match(/\(([A-Z]{3})\)/i);
  if(m) return m[1].toUpperCase();
  const m2 = str.match(/\b([A-Z]{3})\b/);
  if(m2) return m2[1].toUpperCase();
  return fallback || 'DAC';
}

// -------------------------------------------------------
// Main Search Handler
// -------------------------------------------------------
function handleGuiSearch(){
  const fromRaw  = document.getElementById('guiFrom1')?.value || 'Dhaka (DAC)';
  const toRaw    = document.getElementById('guiTo1')?.value   || 'Bangkok (BKK)';
  const dateRaw  = document.getElementById('guiDate1')?.value || '26JAN26';
  const cabin    = document.getElementById('guiCabin')?.value || 'lowest';
  const airline  = (document.getElementById('guiAirlines')?.value || '').trim().toUpperCase();
  const direct   = document.getElementById('guiDirectOnly')?.checked || false;

  const orig     = extractIataCode(fromRaw, 'DAC');
  const dest     = extractIataCode(toRaw,   'BKK');
  const dateCode = dateRaw.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0,7) || '26JAN';

  const area = document.getElementById('airSearchResults');
  if(!area) return;

  // Show filter bar and loading state
  area.innerHTML = buildFilterBar(orig, dest) + `
    <div class="spc-results-loading">
      <div class="spc-spinner"></div>
      <div>Searching all fare classes for <b>${orig} ➔ ${dest}</b> on <b>${dateCode}</b>...</div>
    </div>`;
  area.style.display = 'block';

  setTimeout(() => renderSpcResults(orig, dest, dateCode, cabin, airline, direct), 450);
}

// -------------------------------------------------------
// Filter Bar (matches screenshot top bar)
// -------------------------------------------------------
function buildFilterBar(orig, dest){
  return `
    <div class="spc-top-bar">
      <div class="spc-route-badge">${orig}-${dest}</div>
      <div class="spc-filters-row">
        <button class="spc-filter-chip active"><span class="sf-icon">⊙</span> Smart Filter</button>
        <button class="spc-filter-chip">Duration ▾</button>
        <button class="spc-filter-chip">Connections ▾</button>
        <button class="spc-filter-chip">Time ▾</button>
        <button class="spc-filter-chip">Airlines ▾</button>
        <button class="spc-filter-chip">Connecting in ▾</button>
        <button class="spc-filter-chip">More filters ▾</button>
      </div>
      <div class="spc-sortby">
        Sort by: <select class="spc-sort-select">
          <option>Convenience</option>
          <option>Price</option>
          <option>Duration</option>
          <option>Departure</option>
          <option>Arrival</option>
        </select>
      </div>
    </div>`;
}

// -------------------------------------------------------
// Full SPC Results Renderer
// -------------------------------------------------------
function renderSpcResults(orig, dest, dateCode, cabin, airlineFilter, directOnly){
  const area = document.getElementById('airSearchResults');
  if(!area) return;

  const route = getFlightSchedule(orig, dest, dateCode);
  let lines = (route && route.lines) ? [...route.lines] : [];

  if(directOnly) lines = lines.filter(l => l.segs && l.segs.length === 1);
  if(airlineFilter) lines = lines.filter(l => l.segs && l.segs.some(s => s.al === airlineFilter));

  const origName = getCityName(orig);
  const destName = getCityName(dest);

  let html = buildFilterBar(orig, dest);
  html += `<div class="spc-results-count">${lines.length} of ${lines.length} results</div>`;

  if(!lines.length){
    html += `
      <div class="spc-no-results">
        <div style="font-size:32px;">🛫</div>
        <div style="font-weight:700; font-size:15px; color:#1e293b; margin:8px 0;">No flights found for ${orig} ➔ ${dest}</div>
        <div style="font-size:12px; color:#64748b; margin-bottom:12px;">Try a popular route:</div>
        <div class="spc-popular">
          <button onclick="quickSearchGui('DAC','BKK')">DAC → Bangkok</button>
          <button onclick="quickSearchGui('DAC','JED')">DAC → Jeddah</button>
          <button onclick="quickSearchGui('DAC','KUL')">DAC → Kuala Lumpur</button>
          <button onclick="quickSearchGui('DAC','DXB')">DAC → Dubai</button>
          <button onclick="quickSearchGui('DAC','IST')">DAC → Istanbul</button>
        </div>
      </div>`;
    area.innerHTML = html;
    return;
  }

  html += `<div class="spc-flight-rows">`;

  lines.forEach((line, idx) => {
    const s1   = line.segs[0];
    const sLst = line.segs[line.segs.length - 1];
    const isDirect = line.segs.length === 1;
    const via      = !isDirect ? line.segs[0].arr : null;
    const dur      = calcDuration(s1.depT, sLst.arrT, isDirect ? 0 : 1);

    // Fare bundles (3 tiers like Amadeus)
    const fares = buildFareTiers(s1.al, orig, dest, cabin);

    const alName   = getAirlineName(s1.al);
    const alBadge  = `<span class="spc-al-badge spc-al-${s1.al.toLowerCase()}">${s1.al}</span>`;
    const fnStr    = line.segs.map(s => `${s.al}${s.fn}`).join(', ');
    const viaStr   = !isDirect ? `<span class="spc-via">via ${via}</span>` : `<span class="spc-direct">Direct</span>`;
    const durStr   = `<span class="spc-dur">⏱ ${dur}</span>`;

    // Fare column HTML
    const fareCols = fares.map((f, fi) => `
      <div class="spc-fare-col ${f.highlight ? 'highlighted' : ''}">
        <div class="spc-fare-num-badge">${fi + 1}${f.highlight ? '<span class="etr-tag">ETR</span>' : ''}</div>
        <div class="spc-fare-price">BDT ${f.price.toLocaleString()}.00</div>
        <div class="spc-fare-ptc">PUB ADT</div>
        <div class="spc-fare-class">Economy (${f.cls})</div>
        <div class="spc-fare-tier">${f.label}</div>
        <div class="spc-fare-meta">${f.cls} | ${f.baggage} Kg CO₂</div>
        <div class="spc-fare-icons">
          <span title="Refundable">↩</span>
          <span title="Changeable">✎</span>
          <span title="Baggage">🧳</span>
          <button class="spc-cart-btn" onclick="bookFromSpc('${s1.al}','${s1.fn}','${f.cls}','${orig}','${dest}','${dateCode}',${idx},${f.price},'${s1.depT}','${sLst.arrT}')" title="Select this fare">🛒</button>
        </div>
      </div>
    `).join('');

    html += `
      <div class="spc-flight-row" id="spcRow_${idx}">
        <div class="spc-row-left">
          <div class="spc-al-info">
            ${alBadge}
            <div>
              <div class="spc-al-name">${alName}</div>
              <div class="spc-fn-tag">${fnStr}</div>
            </div>
          </div>
          <div class="spc-timing-block">
            <div class="spc-time-dep">
              <span class="spc-big-time">${s1.depT}</span>
              <span class="spc-apt-code">${s1.dep}</span>
            </div>
            <div class="spc-dur-col">
              ${durStr}
              <div class="spc-dur-line ${isDirect ? 'direct' : 'stop'}"></div>
              ${viaStr}
            </div>
            <div class="spc-time-arr">
              <span class="spc-big-time">${sLst.arrT}</span>
              <span class="spc-apt-code">${sLst.arr}</span>
            </div>
          </div>
          <div class="spc-compare-link" onclick="this.textContent='Compare shown above'">⊟ Compare all fares</div>
        </div>
        <div class="spc-fare-cols-wrap">
          ${fareCols}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  area.innerHTML = html;
}

// -------------------------------------------------------
// Fare tier builder (matches SAVER / STANDARD / FLEX)
// -------------------------------------------------------
function buildFareTiers(al, orig, dest, cabin){
  const base = calcBasePrice(al, orig, dest);
  const mul  = (cabin === 'business') ? 2.8 : (cabin === 'first') ? 4.2 : 1;
  const b    = Math.round(base * mul);

  const bkgCls = (cabin === 'business' || cabin === 'first') ? 'C' : bestEcoClass(al);

  return [
    { label:'SAVER',    price: b,            cls: bkgCls,             baggage: 20, highlight: false },
    { label:'STANDARD', price: Math.round(b * 1.28), cls: bkgCls,    baggage: 25, highlight: true  },
    { label:'FLEX',     price: Math.round(b * 1.65), cls: bkgCls,    baggage: 32, highlight: false }
  ];
}

function bestEcoClass(al){
  const map = { TG:'W', BG:'K', QR:'N', EK:'T', MH:'K', SQ:'S', TK:'M', SV:'W', AI:'K', BS:'M' };
  return map[al] || 'V';
}

function calcBasePrice(al, orig, dest){
  const prices = {
    'DACBKK':{ TG:15598, BG:14200, BS:13800, QR:28500, SQ:32000, MH:22500, EK:35000, AI:21000, UL:19000, CX:29000, '6E':18000 },
    'DACJED':{ SV:131055, QR:98000, EK:110000, TK:95000, MH:105000, SQ:120000 },
    'DACKUL':{ MH:22500, BG:24000, QR:35000, EK:40000 },
    'DACDXB':{ EK:48000, QR:42000, TK:38000, SV:45000 },
    'DACIST':{ TK:55000, QR:60000 },
    'DACLHR':{ TK:75000, QR:80000, EK:85000 },
    'DACDEL':{ AI:12000, QR:18000 },
    'DACDOH':{ QR:35000 },
    'DACSIN':{ SQ:30000, MH:28000 }
  };
  const key = orig + dest;
  const rkey = dest + orig;
  const tbl = prices[key] || prices[rkey] || {};
  return tbl[al] || 28000;
}

// -------------------------------------------------------
// Duration calculator
// -------------------------------------------------------
function calcDuration(dep, arr, extraHours){
  if(!dep || !arr) return '2h 30m';
  const dh = parseInt(dep.slice(0,2),10), dm = parseInt(dep.slice(2,4),10);
  let ah = parseInt((arr||'0000').replace(/\+\d+/,'').slice(0,2),10);
  const am = parseInt((arr||'0000').replace(/\+\d+/,'').slice(2,4),10);
  ah += (extraHours || 0);
  let diff = (ah*60+am) - (dh*60+dm);
  if(diff <= 0) diff += 24*60;
  return `${Math.floor(diff/60)}h ${diff%60}m`;
}

// -------------------------------------------------------
// Book from SPC results
// -------------------------------------------------------
function bookFromSpc(al, fn, cls, orig, dest, dateStr, lineIdx, farePrice, depT, arrT){
  if(state.finalized || (state.locator && state.locator === 'J99GZO' && state.passengers.length > 0)){
    state.locator = null; state.passengers = []; state.segments = [];
    state.phone = null; state.ticketing = null; state.commission = null;
    state.finalized = false; state.specialSSRs = []; state.osiEntries = [];
    state.seats = {}; state.tstRecords = []; state.hasTST = false;
  }

  const count  = Math.max(1, guiPax.adt + guiPax.chd);
  const dayStr = getDayOfWeek(dateStr);

  state.segments = [{
    al, fn, cls, count, dep: orig, arr: dest,
    depT: depT || '1335', arrT: arrT || '1700', eq: '777',
    date: dateStr, day: dayStr, status: 'DK',
    fullDate: `${dateStr} 2026`, tktCode: `${al}/VB7BHH`
  }];
  state.hasPending = true;

  // Highlight selected card row
  document.querySelectorAll('.spc-flight-row').forEach(r => r.classList.remove('spc-row-selected'));
  const row = document.getElementById(`spcRow_${lineIdx}`);
  if(row) row.classList.add('spc-row-selected');

  showSpcBookingSuccess(al, fn, cls, orig, dest, dateStr, count, farePrice);
  showToast(`✓ Seat held: ${al} ${fn} ${cls} ${orig}-${dest} (DK${count})`);
}

// -------------------------------------------------------
// SPC Booking Success Modal
// -------------------------------------------------------
function showSpcBookingSuccess(al, fn, cls, orig, dest, dateStr, count, farePrice){
  let modal = document.getElementById('spcBookModal');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'spcBookModal';
    modal.className = 'gui-modal-overlay';
    document.body.appendChild(modal);
  }

  const taxes = Math.round(farePrice * 0.42);
  const total = farePrice + taxes;

  modal.innerHTML = `
    <div class="gui-modal-box">
      <div class="gui-modal-header success">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:20px;">🎉</span>
          <span style="font-weight:700;font-size:16px;">Seat Successfully Held!</span>
        </div>
        <span class="gui-modal-close" onclick="closeSpcModal()">✕</span>
      </div>
      <div class="gui-modal-body">
        <div class="booking-summary-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-weight:700;font-size:15px;color:#005a9c;">${getAirlineName(al)} — ${al} ${fn}</span>
            <span class="status-pill green">DK${count} (Held)</span>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.5px;color:#334155;">
            <div>Route: <b>${orig} ➔ ${dest}</b></div>
            <div>Date: <b>${dateStr}</b></div>
            <div>Class: <b>${cls}</b></div>
            <div>Seats: <b>${count}</b></div>
            <div>Base Fare: <b>BDT ${farePrice.toLocaleString()}</b></div>
            <div>Taxes: <b>BDT ${taxes.toLocaleString()}</b></div>
          </div>
          <div style="margin-top:8px;font-size:13px;font-weight:700;color:#005a9c;">
            Total: BDT ${total.toLocaleString()}
          </div>
        </div>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:12px;margin-top:14px;font-size:12px;color:#475569;">
          <b>Complete PNR in Command Page:</b>
          <ol style="margin:6px 0 0 16px;line-height:1.7;">
            <li>Enter Passenger Name: <code>NM1SURNAME/FIRSTNAME MR</code></li>
            <li>Add Agency Phone: <code>AP [phone]</code></li>
            <li>Add Ticketing: <code>TKTL</code></li>
            <li>Receive & Save: <code>RFNAME</code> → <code>ER</code></li>
          </ol>
        </div>
        <div class="gui-modal-actions">
          <button class="btn-modal-cmd" onclick="viewInCmdPage()">
            &gt;_ View in Command Page
          </button>
          <button class="btn-modal-pax" onclick="openQuickPax()">
            👤 Add Passenger Visually
          </button>
        </div>
      </div>
    </div>`;
  modal.style.display = 'flex';
}

function closeSpcModal(){
  const m = document.getElementById('spcBookModal');
  if(m) m.style.display = 'none';
}

function viewInCmdPage(){
  closeSpcModal();
  switchToTab('cmd');
  renderPNR();
  showToast("Switched to Command Page — flight held in workspace");
}

function openQuickPax(){
  closeSpcModal();
  let modal = document.getElementById('quickPaxModal');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'quickPaxModal';
    modal.className = 'gui-modal-overlay';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="gui-modal-box">
      <div class="gui-modal-header">
        <span style="font-weight:700;font-size:15px;">Add Passenger Details (No Codes Required)</span>
        <span class="gui-modal-close" onclick="closeQuickPaxModal()">✕</span>
      </div>
      <div class="gui-modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
          <div>
            <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">SURNAME*</label>
            <input type="text" id="quickSurname" placeholder="e.g. SHAKIB" class="gui-input" value="SHAKIB">
          </div>
          <div>
            <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">FIRST NAME*</label>
            <input type="text" id="quickFirst" placeholder="e.g. APON" class="gui-input" value="APON">
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
          <div>
            <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">TITLE*</label>
            <select id="quickTitle" class="gui-input">
              <option value="MR">MR (Adult Male)</option>
              <option value="MRS">MRS (Married Female)</option>
              <option value="MS">MS (Female)</option>
              <option value="MSTR">MSTR (Child Male)</option>
              <option value="MISS">MISS (Child Female)</option>
            </select>
          </div>
          <div>
            <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">MOBILE*</label>
            <input type="text" id="quickPhone" placeholder="01757208244" class="gui-input" value="01757208244">
          </div>
        </div>
        <div style="margin-bottom:14px;">
          <label style="font-size:11px;font-weight:600;color:#475569;display:block;margin-bottom:4px;">EMAIL*</label>
          <input type="text" id="quickEmail" placeholder="shakibapon1234@gmail.com" class="gui-input" value="shakibapon1234@gmail.com">
        </div>
        <div class="gui-modal-actions">
          <button class="btn-modal-pax" style="flex:1;" onclick="submitQuickPax()">✓ Save & Create PNR</button>
        </div>
      </div>
    </div>`;
  modal.style.display = 'flex';
}

function closeQuickPaxModal(){
  const m = document.getElementById('quickPaxModal');
  if(m) m.style.display = 'none';
}

function submitQuickPax(){
  const surname = (document.getElementById('quickSurname')?.value || 'SHAKIB').trim().toUpperCase();
  const first   = (document.getElementById('quickFirst')?.value   || 'APON').trim().toUpperCase();
  const title   = document.getElementById('quickTitle')?.value    || 'MR';
  const phone   = (document.getElementById('quickPhone')?.value   || '01757208244').trim();
  const email   = (document.getElementById('quickEmail')?.value   || 'shakibapon1234@gmail.com').trim();

  handleNM(`NM1${surname}/${first} ${title}`);
  handleAP(`AP WINGS FLY ${phone}`);
  if(!state.specialSSRs) state.specialSSRs = [];
  const al = (state.segments && state.segments[0]) ? state.segments[0].al : 'TG';
  state.specialSSRs.push({ type:'CTCM', al, status:'HK1', value: phone,              pax:'P1' });
  state.specialSSRs.push({ type:'CTCE', al, status:'HK1', value: email.replace('@','//'), pax:'P1' });
  handleTK('TKTL');
  state.rfEntry = surname;
  handleER();
  closeQuickPaxModal();
  switchToTab('cmd');
  showToast(`✅ PNR Created: ${state.locator}`);
}

// -------------------------------------------------------
// Quick Search (Popular routes)
// -------------------------------------------------------
function quickSearchGui(orig, dest){
  const from1 = document.getElementById('guiFrom1');
  const to1   = document.getElementById('guiTo1');
  if(from1) from1.value = `${getCityName(orig)} (${orig})`;
  if(to1)   to1.value   = `${getCityName(dest)} (${dest})`;
  handleGuiSearch();
}

// -------------------------------------------------------
// Helpers
// -------------------------------------------------------
function getAirlineName(code){
  const names = { TG:'Thai Airways', BG:'Biman Bangladesh', BS:'US-Bangla Airlines', QR:'Qatar Airways', EK:'Emirates', TK:'Turkish Airlines', MH:'Malaysia Airlines', SQ:'Singapore Airlines', AI:'Air India', SV:'Saudia', CX:'Cathay Pacific', UL:'SriLankan Airlines', '6E':'IndiGo' };
  return names[code] || `${code} Airlines`;
}

function getCityName(code){
  const cities = { DAC:'Dhaka', BKK:'Bangkok', JED:'Jeddah', KUL:'Kuala Lumpur', DXB:'Dubai', DOH:'Doha', SIN:'Singapore', IST:'Istanbul', LHR:'London', DEL:'Delhi', CCU:'Kolkata', CMB:'Colombo', NRT:'Tokyo', JFK:'New York', CGP:'Chittagong', ZYL:'Sylhet' };
  return cities[code] || code;
}

// Alias for Quick Pax Modal (backward compat)
function openQuickPaxModal(){ openQuickPax(); }
