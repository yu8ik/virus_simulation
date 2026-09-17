let advancedChoices=[];
function chosenAdvanced(){return (TRAITS.advanced||[]).filter(t=>advancedChoices.includes(t.id));}
function advancedReason(t){
 if(t.dynamicAir&&(!Number.isFinite(TRAITS.airThreshold)||!Number.isFinite(TRAITS.airReduction)))return '원본 수치 N 미정';
 if(t.allowedCores&&!t.allowedCores.includes(selectedCore))return '필요 핵심: '+t.allowedCores.map(id=>TRAITS.core.find(c=>c.id===id).name).join(' / ');
 if(t.requiresTrait&&!advancedChoices.includes(t.requiresTrait))return '선행 개조: '+TRAITS.advanced.find(a=>a.id===t.requiresTrait).name;
 return '';
}
function cleanAdvanced(){let previous;do{previous=advancedChoices.length;advancedChoices=advancedChoices.filter(id=>{const t=TRAITS.advanced.find(a=>a.id===id);return t&&!advancedReason(t);});}while(previous!==advancedChoices.length);}
function visibleAdvanced(){return TRAITS.advanced.filter(t=>!t.allowedCores||t.allowedCores.includes(selectedCore));}
function advancedPage(){const visible=visibleAdvanced();return `<h1>심화 개조</h1><p>${esc(TRAITS.advancedGuide)}</p>${traitStats()}<p class="cyan">선택 ${advancedChoices.length}개 ${chosenAdvanced().some(t=>t.grants?.includes('팽창'))?'· 획득 상태: 팽창':''}</p>${[...new Set(visible.map(t=>t.group))].map(group=>`<section class="trait-pair"><h2>${esc(group)}${group==='증상 완화'?'':' 심화'}</h2><div class="cards advanced-cards">${visible.filter(t=>t.group===group).map(t=>{const reason=advancedReason(t),selected=advancedChoices.includes(t.id);return `<button type="button" class="card ${selected?'selected':''}" data-action="advanced-${t.id}" aria-pressed="${selected}" ${reason?'disabled':''}><span class="number">${selected?'■ 선택됨':reason?esc(reason):'□ 선택'}</span><strong>${esc(t.name)}</strong><span class="desc">${esc(selectedCore==='gas'&&t.gasDescription?t.gasDescription:t.description)}</span>${t.requiresTrait?`<span class="dim">선행 개조: ${esc(TRAITS.advanced.find(a=>a.id===t.requiresTrait).name)}</span>`:''}<span class="stats"><span class="green">수용량 ${signed(t.capacity)}</span> · <span class="yellow">심각성 ${t.dynamicAir?`완화 전 ${TRAITS.airThreshold} 초과 시 −${TRAITS.airReduction}`:signed(t.severity)}</span></span></button>`;}).join('')}</div></section>`).join('')}<div class="actions">${button('[Enter] 심화 개조 확정','confirm',true)}${button('[B] 대립 형질 다시 선택','back')}${button('심화 선택 모두 해제','clear-advanced')}</div>`;}
function advancedSummary(){return `<div class="row"><span>심화 개조</span><span>${chosenAdvanced().length?chosenAdvanced().map(t=>esc(t.name)).join(', '):'미선택'}</span></div>${chosenAdvanced().some(t=>t.grants?.includes('팽창'))?'<div class="row"><span>획득 상태</span><span class="yellow">팽창</span></div>':''}`;}
function handleAdvancedAction(action){
 if(page!==8)return false;
 if(action.startsWith('advanced-')){const t=TRAITS.advanced.find(t=>t.id===action.slice(9));if(!t||advancedReason(t))return true;advancedChoices=advancedChoices.includes(t.id)?advancedChoices.filter(id=>id!==t.id):[...advancedChoices,t.id];cleanAdvanced();refreshTraitChoices();return true;}
 if(action==='clear-advanced'){advancedChoices=[];refreshTraitChoices();return true;}
 if(action==='confirm'){if(totals().capacity<0){document.querySelector('#notice').textContent='수용량을 초과했습니다. 심화 선택을 줄여 주세요.';return true;}page=9;render();return true;}
 return false;
}
