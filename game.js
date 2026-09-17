'use strict';
const TYPES = [
 {id:'bacteria',name:'박테리아',difficulty:'쉬움',capacity:100,severity:0,description:'전염병을 일으키는 가장 흔한 원인입니다. 하지만 그만큼 무한한 잠재력을 내포하고 있습니다.',restriction:'없음'},
 {id:'parasite',name:'기생충',difficulty:'어려움',capacity:80,severity:20,description:'발견과 치료가 박테리아에 비해 쉽습니다. 하지만 그만큼 확실한 수준의 증상을 나타내기 때문에 병원체 기획에 능한 관리자들이 자주 사용하는 병원체 종류이기도 합니다.',restriction:'없음'},
 {id:'nano',name:'인공 나노 머신',difficulty:'자유',capacity:Infinity,severity:0,description:'뿌리부터 인위적으로 만들어진 병원체입니다. 때문에 형질 개조에 자유가 보장됩니다. 해당 병원체는 개발 후에 퍼뜨리지 않고, 시뮬레이션으로만 이용 가능합니다.',restriction:'결함 금지 · 시뮬레이션 전용'}
];
const AGES = [
 {name:'청소년 (14~19세)',capacity:-15,severity:-10,description:'일명 사춘기라 불리는 연령층입니다. 정신적으로 예민한 시기이기 때문에 감염의 고통에 대한 약제의 수요가 매우 크지만, 타인에게 이러한 증상을 알리는 경우가 적고 경우에 따라서 약제 구매를 피하고 증상을 참는 경우가 생깁니다.'},
 {name:'20대 초반',capacity:-10,severity:10,description:'실질적 통계를 통해 구매력이 입증된 연령층입니다. 모든 연령층 중 가장 넓은 범위의 대인 상호작용을 거치다 보니 예상치 못한 병원체의 변이를 일으킬 가능성이 있어 증상 심각성이 증가합니다.'},
 {name:'20대 후반+',capacity:-5,severity:5,description:'모든 연령층 중 구매력이 가장 큰 연령층입니다. 감염 대상 스스로의 고통을 해소하기 위해 약제를 구매하기도 하지만 친인척의 고통을 해소하기 위해 약제를 구매하는 경우 또한 많습니다. 평균적으로 소화기의 이상이 한두 개씩 나타나는 연령대이기도 합니다.'}
];
let page=0,selected=null,selectedAge=null,planningPage=2,mailRead=false,poweredOff=false;
const MAIL_READ_STORAGE='scat-mail-read-v1';
try{mailRead=localStorage.getItem(MAIL_READ_STORAGE)==='true';}catch{}
function markMailRead(){mailRead=true;try{localStorage.setItem(MAIL_READ_STORAGE,'true');}catch{}}
const DIRECTOR_MAIL_READ_STORAGE='scat-director-mail-read-v1';
let directorMailRead=false,openedMail='original';
try{directorMailRead=localStorage.getItem(DIRECTOR_MAIL_READ_STORAGE)==='true';}catch{}
function hasDirectorMail(){return seenEndings.includes('director');}
function unreadMailCount(){return (mailRead?0:1)+(hasDirectorMail()&&!directorMailRead?1:0);}
function openMail(id){openedMail=id;if(id==='director'){directorMailRead=true;try{localStorage.setItem(DIRECTOR_MAIL_READ_STORAGE,'true');}catch{}}else markMailRead();}
function directorFollowupMail(){return '<h1>기획 건은 처리했어.</h1><div class="mail-head">제목: 기획 건은 처리했어.</div><div class="mail-body"><p class="cyan">From. 연구소장 한소율<br>To. *** 기획팀장</p><p>*** 팀장.</p><p>기획서는 올려 뒀어. 제출자도 네 이름으로 해 놨고, 보상 건도 그대로 진행될 거야. 위에서 물으면 전달한 내용만 확인해서 답해.</p><p>그러니까 그 파일은 이제 지워. 휴지통에 넣는 걸로 끝내지 말고. 다른 데 복사해 둔 게 있으면 그것도.</p><p>괜히 누구한테 보여 주면서 설명할 필요 없어. 그때 일은 이미 끝난 일이야. 너랑 나 사이에서도 더 얘기하지 말자.</p><p>……이번 기획에 손 많이 간 건 알아 둬. 원래 네가 해야 할 일이었으니까.</p><p>답장은 필요 없어. 삭제했으면 그걸로 됐어.</p></div><div class="actions">'+button('[B] 바탕화면','back')+'</div>';}
function resetPlan(){selected=null;selectedAge=null;selectedCore=null;traitChoices={};advancedChoices=[];planningPage=2;}
const signed=n=>n>0?'+'+n:String(n);
function totals(){const t=TYPES[selected],a=AGES[selectedAge],d=traitDelta();return {capacity:t.capacity+(a?a.capacity:0)+d.capacity,severity:t.severity+(a?a.severity:0)+d.severity};}
const screen=document.querySelector('#screen');
const button=(label,action,primary=false)=>`<button type="button" data-action="${action}" class="${primary?'primary':''}">${label}</button>`;
const capacity=t=>Number.isFinite(t.capacity)?`+${t.capacity}`:'무한';
function render(){
 document.querySelector('#shutdown').hidden=!poweredOff;
 document.querySelector('#computer').classList.toggle('is-off',poweredOff);
 closeStartMenu();
 const desktop=page===-1;
 document.querySelector('#desktop').hidden=page===0;
 document.querySelector('.monitor').hidden=desktop;
 document.querySelector('.outside').hidden=page!==0;
 document.querySelector('#window-bar').hidden=page===0;
 document.querySelector('#window-title').textContent=page===1?'SCAT-Mail — 받은 편지함':'개발 품목 기획 — Schreckliche Plage System';
 document.querySelector('#mail-badge').hidden=unreadMailCount()===0;
 document.querySelector('[data-action="mail"]').setAttribute('aria-label',unreadMailCount()?'SCAT-Mail, 새 편지 '+unreadMailCount()+'통':'SCAT-Mail');
 document.querySelector('#steps').hidden=page<=1;
 document.body.classList.toggle('logged-in',page!==0);
 document.querySelector('#notice').textContent='';
 updateArchive();
 if(desktop)return;
 if(page===14){document.querySelector('#steps').hidden=true;document.querySelector('#window-title').textContent='시뮬레이션 관찰 기록';screen.innerHTML=simulationScreen();document.querySelector('#keys').textContent='';screen.scrollTop=0;return;}
 if(page>=12){document.querySelector('#steps').hidden=true;document.querySelector('#window-title').textContent=page===12?'휴지통 — 복구된 기록':'SCAT-Mail — 메일 작성';screen.innerHTML=directorEventScreen();document.querySelector('#keys').textContent='B 이전';screen.scrollTop=0;return;}
 if(page>=10){document.querySelector('#steps').hidden=true;document.querySelector('#window-title').textContent=page===11?'연구 자료실 — 엔딩 기록':'최종 시뮬레이션';screen.innerHTML=page===11?archiveScreen():endingScreen();document.querySelector('#keys').textContent='B 이전';screen.scrollTop=0;return;}
 document.querySelector('#steps').innerHTML='<span class="cyan">프로세스 진행 상황</span>'+['기획 안내','병원체 종류 선택','대상 연령층','개조 안내','핵심 형질','대립 형질','심화 개조','선택 확정'].map((s,i)=>{const target=i+2,reason=stepLockReason(target);return `<button type="button" data-action="step-${target}" class="step-button ${page===target?'active':page>target?'done':''}" ${page===target?'aria-current="step"':''} ${reason?'disabled':''} title="${reason||s+' 단계로 이동'}">${page>target?'✓':String(i+1).padStart(2,'0')} ${s}</button>`;}).join('');
 const labels=['ACCESS CONTROL','SCAT-MAIL / 001','PLANNING GUIDE','PATHOGEN DATABASE','AGE GROUP DATABASE','TRAIT GUIDE','CORE TRAITS','OPPOSING TRAITS','ADVANCED TRAITS','SELECTION RECORD'];
 let html=`<div class="page-label"><span>${labels[page]}</span><span>${page>=2?String(page-1).padStart(2,'0')+' / 08':''}</span></div>`;
 if(page===0)html+=`<div class="terminal-title">Schreckliche<br>Plage System<span class="blink">_</span></div><p class="dim">스캇그룹 제 8 생화학 연구소 · 개발 기획 프로그램</p><div class="box login"><p>관리자님의 승인이 필요합니다…</p><br><p>ID : ************</p><p>PASSWORD : **************</p><br><p class="green">신원 확인 완료. 기획팀장 ***님의 접근을 환영합니다.</p></div><p>금일 할당 과제 : <span class="yellow">개발 품목 기획</span></p><div class="actions">${button('[1] 개발 프로세스 실행','next',true)}</div>`;
 if(page===1&&openedMail==='original')html+=`<h1>도착한 메시지가 있습니다.</h1><div class="mail-head row"><strong>SCAT-Mail</strong><span>프로젝트 지시</span></div><div class="mail-body"><p class="cyan">From. 연구소장 한소율<br>To. *** 기획팀장</p><p>*** 팀장.</p><p>프로젝트 개요는 전달받았지? 설마 그것까지 내가 직접 설명해 줘야 하는 건 아니겠지?</p><p>동천 제약의 신약 발표 이후 우리 주가가 어떤 꼴인지 너도 봤을 거야. 상부에서는 우리 약제로만 치료할 수 있는 새로운 질환을 요구하고 있어. 목적이 이 정도로 명확하면 기획팀장이라는 직함을 달고 있는 사람이 뭘 해야 하는지도 알겠지.</p><p>이번에도 아이디어 몇 줄 늘어놓고 검토 부탁한다는 식으로 가져오지 마. 네 이름으로 제출하는 기획안을 왜 내가 완성해 줘야 해? 내 시간을 쓰려면 적어도 그만한 값어치는 있어야지.</p><p>언론과 의료기관 쪽은 이미 정리됐어. 네가 걱정할 일도, 나중에 핑계로 댈 일도 없다는 뜻이야. 맡긴 부분이나 제대로 처리해.</p><p>아, 그리고 ‘최종’, ‘진짜 최종’ 같은 파일명은 제발 그만.<br>최종이라고 쓸 거면, 정말로 끝내서 보내.</p></div><div class="actions">${button('[B] 이전','back')}</div>`;
 if(page===2)html+=`<h1>제 1번 프로세스를 실행합니다.</h1><p>해당 병원체 개발의 목적은 본사만의 약제만으로 치료할 수 있는<br>새로운 병원체를 만드는 것입니다.</p><div class="box"><h2 class="green">01. 형질 개조 수용량</h2><p>병원체의 유전자 개조가 얼마나 가능한지를 나타냅니다.</p><p class="dim">녹색으로 표시되며, 유전자에 특이 형질을 삽입할 때마다 수용량은 줄어듭니다.</p></div><div class="box"><h2 class="yellow">02. 증상 심각성</h2><p>병원체로 인한 증상의 세기와 병원체에 대한 세간의 주목도를 나타냅니다.</p><p class="dim">기획 과정에서 계속 누적되며 수치에 따라 개발 결과가 달라집니다. 높을수록 감염자들의 약제 수요가 높아지지만, 일정 수준을 넘으면 다른 세력이 치료제를 개발할 가능성이 생기고 명성에도 부정적인 영향을 줍니다.</p></div><div class="actions">${button('[1] 병원체 종류 선택','next',true)}${button('[B] 이전','back')}</div>`;
 if(page===3)html+=`<h1>신규 개발 병원체의 종류를 선택해 주세요.</h1><p class="dim">항목을 눌러 한 종류를 선택해 주세요.</p><div class="cards">${TYPES.map((t,i)=>`<button type="button" class="card ${selected===i?'selected':''}" data-action="select-${i}" aria-pressed="${selected===i}"><span class="number">[${i+1}] ${selected===i?'■ 선택됨':'□ 선택'}</span><strong>${t.name}</strong><span class="difficulty">난이도 : ${t.difficulty}</span><span class="desc">${t.description}</span><span class="stats"><span class="green">형질 개조 수용량 ${capacity(t)}</span>${t.severity?`<br><span class="yellow">증상 심각성 + ${t.severity}</span>`:''}${t.id==='nano'?'<br><span class="yellow">결함 금지</span>':''}</span></button>`).join('')}</div><div class="selection-line">${selected===null?'선택 대기 중…':`선택한 종류 : ${TYPES[selected].name}`}</div><div class="actions">${button('[Enter] 선택 확정','confirm',true)}${button('[B] 이전','back')}</div>`;
 if(page===4){const total=totals();html+=`<h1>제 2번 프로세스 · 감염 대상 연령층 선택</h1><p>병원체의 감염 예정 대상 연령층을 선택해 주세요.</p><p class="dim">프로젝트 기획서에 따라 남성 감염 대상층은 제외되었습니다.<br>한 연령층을 선택하세요. 괄호 안의 수치는 현재 수치에 적용되는 변화량입니다.</p><div class="cards age-cards">${AGES.map((a,i)=>`<button type="button" class="card ${selectedAge===i?'selected':''}" data-action="age-${i}" aria-pressed="${selectedAge===i}"><span class="number">[${i+1}] ${selectedAge===i?'■ 선택됨':'□ 선택'}</span><strong>${a.name}</strong><span class="desc">${a.description}</span><span class="stats"><span class="green">형질 개조 수용량 (${signed(a.capacity)})</span><br><span class="yellow">증상 심각성 (${signed(a.severity)})</span></span></button>`).join('')}</div><div class="selection-line">${selectedAge===null?'연령층 선택 대기 중…':'선택한 연령층 : '+AGES[selectedAge].name}<br><span class="green">남은 수용량 : ${Number.isFinite(total.capacity)?total.capacity:'무한'}</span> · <span class="yellow">증상 심각성 : ${total.severity}</span></div><div class="actions">${button('[Enter] 연령층 선택 확정','confirm',true)}${button('[B] 병원체 다시 선택','back')}</div>`;}
 if(page>=5&&page<=7)html+=traitPage();
 if(page===8)html+=advancedPage();
 if(page===9){const t=TYPES[selected],a=AGES[selectedAge],total=totals();html+=`<h1 class="cyan">기획 내용이 등록되었습니다.</h1><p>제 3번 프로세스 · 심화 개조 선택 완료</p><div class="box summary"><h2>개발 품목 기획서 / 001</h2><div class="row"><span>병원체 종류</span><strong>${t.name}</strong></div><div class="row"><span>감염 대상 연령층</span><strong>${a.name}</strong></div><div class="row"><span>난이도</span><span>${t.difficulty}</span></div><div class="row"><span>형질 개조 수용량</span><span class="green">${Number.isFinite(total.capacity)?total.capacity:'무한'}</span></div><div class="row"><span>증상 심각성</span><span class="yellow">${total.severity}</span></div>${traitSummary()}${advancedSummary()}<div class="row"><span>제약 사항</span><span>${t.restriction}</span></div></div><p class="dim">기획 내용을 확인한 뒤 최종 시뮬레이션을 실행하세요.</p><div class="actions">${button('최종 시뮬레이션 실행','submit-plan',true)}${button('[B] 심화 개조 다시 선택','back')}${button('[R] 처음으로','reset')}</div>`;}
 if(page===1){if(openedMail==='director'&&hasDirectorMail())html+=directorFollowupMail();const mailTabs='<div class="actions">'+button('프로젝트 지시','mail-original',openedMail==='original')+(hasDirectorMail()?button('기획 건은 처리했어.'+(directorMailRead?'':' · 새 편지'),'mail-director',openedMail==='director'):'')+'</div>';html=mailTabs+html;}
 screen.innerHTML=html;
 if(page===0)screen.querySelector('[data-action="next"]').textContent='[1] 시스템 접속 (로그인)';
 if(page===1)screen.querySelector('[data-action="back"]').textContent='[B] 바탕화면';
 if(page===2)screen.querySelector('[data-action="back"]').textContent='[B] 바탕화면';
 if(page>=2)planningPage=page;
 screen.scrollTop=0;
 document.querySelector('#keys').textContent=page===1?'B 바탕화면':(page===3||page===4)?'1–3 선택 / Enter 확정 / B 이전':page===9?'B 재선택 / R 처음으로':(page===7||page===8)?'항목 클릭 선택 / Enter 확정 / B 이전':page===6?'1–4 선택 / Enter 확정 / B 이전':'1 또는 Enter 진행 / B 이전';
}
function closeStartMenu(){document.querySelector('#start-menu').hidden=true;document.querySelector('#start-button').setAttribute('aria-expanded','false');}
function stepLockReason(target){
 if(!Number.isInteger(target)||target<2||target>9)return '이동할 수 없는 단계입니다.';
 if(target>=4&&selected===null)return '병원체 종류를 먼저 선택해 주세요.';
 if(target>=5&&selectedAge===null)return '대상 연령층을 먼저 선택해 주세요.';
 if(target>=7&&!selectedCore)return '핵심 형질을 먼저 선택해 주세요.';
 if(target===9&&totals().capacity<0)return '수용량을 초과했습니다. 개조 선택을 줄여 주세요.';
 return '';
}
function act(action){
 if(poweredOff&&action!=='power-on')return;
 if(action.startsWith('step-')){if(page<2||page>9)return;const target=Number(action.slice(5)),reason=stepLockReason(target);if(reason){document.querySelector('#notice').textContent=reason;return;}page=target;render();screen.focus();return;}
 if(handleDirectorAction(action))return;
 if(handleScenarioAction(action))return;
 if(handleEndingAction(action))return;
 if(handleAdvancedAction(action))return;
 if(handleTraitAction(action))return;
 if(action==='start-menu'&&page!==0){const menu=document.querySelector('#start-menu');menu.hidden=!menu.hidden;document.querySelector('#start-button').setAttribute('aria-expanded',String(!menu.hidden));return;}
 if(action==='power-off'){poweredOff=true;page=0;selected=null;selectedAge=null;selectedCore=null;traitChoices={};advancedChoices=[];directorEvidenceFound=false;planningPage=2;render();return;}
 if(action==='power-on'){poweredOff=false;render();return;}
 if(action==='desktop'&&page!==0)page=-1;
 else if(action==='mail'&&page!==0){page=1;openMail(hasDirectorMail()&&!directorMailRead?'director':'original');}
 else if(action==='mail-original'&&page===1)openMail('original');
 else if(action==='mail-director'&&page===1&&hasDirectorMail())openMail('director');
 else if(action==='planning'&&page!==0)page=planningPage;
 else if(action==='logout'&&page!==0)page=0;
 else if(action==='next'&&page===0)page=-1;
 
 else if(action==='next'&&page===2)page=3;
 else if(action==='back'&&(page===1||page===2))page=-1;
 else if(action==='back'&&page>2)page--;
 else if(action==='reset'){page=0;selected=null;selectedAge=null;selectedCore=null;traitChoices={};advancedChoices=[];directorEvidenceFound=false;planningPage=2;}
 else if(action.startsWith('select-')&&page===3){const n=Number(action.slice(7));if(Number.isInteger(n)&&n>=0&&n<TYPES.length)selected=n;}
 else if(action.startsWith('age-')&&page===4){const n=Number(action.slice(4));if(Number.isInteger(n)&&n>=0&&n<AGES.length)selectedAge=n;}
 else if(action==='confirm'&&page===4){if(selectedAge===null){document.querySelector('#notice').textContent='먼저 대상 연령층을 선택해 주세요. [1 / 2 / 3]';return;}page=5;}
 else if(action==='confirm'&&page===3){if(selected===null){document.querySelector('#notice').textContent='먼저 병원체 종류를 선택해 주세요. [1 / 2 / 3]';return;}page=4;}
 else return;
 render();
}
function command(value){const cmd=value.trim().toLowerCase();if(cmd==='b'||cmd==='이전')act('back');else if(cmd==='r'||cmd==='처음으로')act('reset');else if(page===6&&/^[1234]$/.test(cmd))act('core-'+TRAITS.core[Number(cmd)-1].id);else if(page===4&&/^[123]$/.test(cmd))act('age-'+(Number(cmd)-1));else if(page===3&&/^[123]$/.test(cmd))act(`select-${Number(cmd)-1}`);else if((page===3||page===4||page===6||page===7||page===8)&&(cmd===''||cmd==='확정'))act('confirm');else if((page===0||page===2||page===5)&&(cmd===''||cmd==='1'))act('next');else document.querySelector('#notice').textContent='사용 가능한 명령어를 화면 아래에서 확인해 주세요.';}
document.addEventListener('click',e=>{const target=e.target.closest('[data-action]');if(target)act(target.dataset.action);else if(!e.target.closest('#start-menu'))closeStartMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeStartMenu();return;}if(poweredOff)return;if(e.target.closest('input,button')||e.ctrlKey||e.altKey||e.metaKey)return;if(['1','2','3','4','b','B','r','R','Enter'].includes(e.key)){e.preventDefault();command(e.key==='Enter'?'':e.key);}});
render();
