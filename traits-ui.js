let selectedCore=null,traitChoices={};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function coreTrait(){return TRAITS.core.find(t=>t.id===selectedCore);}
function chosenTraits(){return TRAITS.pairs.flatMap(p=>p.options.filter(t=>traitChoices[p.id]===t.id));}
function traitAllowed(t){return !t.requires||t.requires===selectedCore;}
function cleanTraits(){for(const p of TRAITS.pairs){const t=p.options.find(t=>t.id===traitChoices[p.id]);if(t&&!traitAllowed(t))delete traitChoices[p.id];}}
function traitDescription(t){return t.description;}
function combination(t){return t.combinations?.[selectedCore];}
function effectiveTrait(t){const c=combination(t);return {capacity:t.capacity+(c?.capacity||0),severity:t.severity+(c?.severity||0)};}
function traitDelta(){const list=[coreTrait(),...chosenTraits(),...chosenAdvanced()].filter(Boolean);const delta=list.reduce((sum,t)=>({capacity:sum.capacity+effectiveTrait(t).capacity,severity:sum.severity+effectiveTrait(t).severity+(t.bonusWith&&list.some(x=>x.id===t.bonusWith)?t.bonusSeverity:0)}),{capacity:0,severity:0});if(chosenAdvanced().some(t=>t.dynamicAir)&&Number.isFinite(TRAITS.airThreshold)&&Number.isFinite(TRAITS.airReduction)){const base=(TYPES[selected]?.severity||0)+(AGES[selectedAge]?.severity||0);const mitigation=chosenAdvanced().filter(t=>t.mitigation).reduce((sum,t)=>sum+effectiveTrait(t).severity,0);if(base+delta.severity-mitigation>TRAITS.airThreshold)delta.severity-=TRAITS.airReduction;}return delta;}
function traitStats(){const t=totals();return `<div class="trait-budget"><span class="green">남은 수용량 : ${Number.isFinite(t.capacity)?t.capacity:'무한'}</span><span class="yellow">증상 심각성 : ${t.severity}</span>${t.capacity<0?'<strong>수용량 초과 — 형질을 줄여 주세요.</strong>':''}</div>`;}
function traitCard(t,action,isSelected,disabled=false){const effect=effectiveTrait(t);return `<button type="button" class="card ${isSelected?'selected':''}" data-action="${action}" aria-pressed="${isSelected}" ${disabled?'disabled':''}><span class="number">${isSelected?'■ 선택됨':disabled?'선행 조건 필요':'□ 선택'}</span><strong>${esc(t.name)}</strong><span class="desc">${esc(traitDescription(t))}</span>${t.requires?`<span class="dim">필요 핵심 : ${esc(TRAITS.core.find(c=>c.id===t.requires).name)}</span>`:''}<span class="stats"><span class="green">수용량 ${signed(effect.capacity)}</span> · <span class="yellow">심각성 ${signed(effect.severity)}</span></span></button>`;}
function traitPage(){
 if(page===5)return `<h1>제 3번 프로세스 · 형질 개조 안내</h1><div class="box"><h2>핵심 형질 개조 → 대립 형질 개조 → 심화 개조</h2><p>${esc(TRAITS.guide)}</p></div><p class="dim">각 선택의 효과는 합산됩니다. 핵심 형질을 변경하면 조건에 맞지 않는 대립 형질은 해제됩니다.</p>${traitStats()}<div class="actions">${button('[1] 핵심 형질 선택','next',true)}${button('[B] 연령층 다시 선택','back')}</div>`;
 if(page===6)return `<h1>핵심 형질 개조</h1><p>네 가지 중 하나를 선택해 주세요.</p>${traitStats()}<div class="cards core-cards">${TRAITS.core.map(t=>traitCard(t,'core-'+t.id,selectedCore===t.id)).join('')}</div><div class="actions">${button('[Enter] 대립 형질 선택','confirm',true)}${button('[B] 형질 개조 안내','back')}</div>`;
 if(page===7)return `<h1>대립 형질 개조</h1><p>각 쌍에서 하나를 선택하거나 미선택으로 둘 수 있습니다.<br>선택한 핵심 : <span class="cyan">${esc(coreTrait().name)}</span></p>${traitStats()}${TRAITS.pairs.map(p=>`<section class="trait-pair"><div class="row"><h2>${esc(p.name)}</h2><button data-action="clear-${p.id}" aria-pressed="${!traitChoices[p.id]}">${traitChoices[p.id]?'선택 해제':'✓ 미선택'}</button></div><div class="cards pair-cards">${p.options.map(t=>traitCard(t,'trait-'+t.id,traitChoices[p.id]===t.id,!traitAllowed(t))).join('')}</div></section>`).join('')}<div class="actions">${button('[Enter] 심화 개조로 진행','confirm',true)}${button('[B] 핵심 형질 다시 선택','back')}</div>`;
 return '';
}
function traitSummary(){return `<div class="row"><span>핵심 형질</span><strong>${esc(coreTrait().name)}</strong></div>${TRAITS.pairs.map(p=>{const t=p.options.find(t=>traitChoices[p.id]===t.id);return `<div class="row"><span>${esc(p.name)}</span><span>${t?esc(t.name):'미선택'}</span></div>${t?`<p class="summary-combination"><span class="green">수용량 ${signed(effectiveTrait(t).capacity)}</span> · <span class="yellow">심각성 ${signed(effectiveTrait(t).severity)}</span></p>`:''}`;}).join('')}${chosenTraits().some(t=>t.bonusWith&&chosenTraits().some(x=>x.id===t.bonusWith))?'<p class="yellow">이완 + 수치심 : 심각성 추가 +10 적용</p>':''}`;}
function refreshTraitChoices(){const top=screen.scrollTop;render();screen.scrollTop=top;}
function handleTraitAction(action){
 if(action==='next'&&page===5){page=6;render();return true;}
 if(action.startsWith('core-')&&page===6){const id=action.slice(5);if(!TRAITS.core.some(t=>t.id===id))return true;selectedCore=id;cleanTraits();cleanAdvanced();render();return true;}
 if(action.startsWith('trait-')&&page===7){const id=action.slice(6);for(const p of TRAITS.pairs){const t=p.options.find(t=>t.id===id);if(t&&traitAllowed(t))traitChoices[p.id]=traitChoices[p.id]===id?null:id;}cleanAdvanced();refreshTraitChoices();return true;}
 if(action.startsWith('clear-')&&page===7){delete traitChoices[action.slice(6)];refreshTraitChoices();return true;}
 if(action==='confirm'&&(page===6||page===7)){if(!selectedCore){document.querySelector('#notice').textContent='핵심 형질을 하나 선택해 주세요.';return true;}if(totals().capacity<0){document.querySelector('#notice').textContent='수용량을 초과했습니다. 선택한 형질을 줄여 주세요.';return true;}page++;render();return true;}
 return false;
}
