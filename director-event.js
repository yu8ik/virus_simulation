let directorEvidenceFound=false;
function directorEventScreen(){
 if(page===12)return `<div class="page-label"><span>RECOVERED DOCUMENT / INTERNAL</span><span>보관 해제</span></div><h1>입사 초기 안전사고 기록</h1><div class="box"><h2>당사자: 연구원 한소율</h2><img class="director-photo" src="${myImage}" alt="한소율의 입사 초기 사고 기록 사진 — 검열본"><p>몇 년 전, 신입 연구원 한소율이 운반 중 넘어지는 사고가 있었다.</p><p>혼자 시료에 노출된 한소율은 복도에서 몸 상태가 급격히 나빠졌고, 동료의 도움을 받아 자리를 떠났다. 사건은 내부 안전사고로 처리되었다.</p><p class="dim">평소의 소장에게서는 상상하기 어려운 기록이다. 삭제된 문서의 수신 확인란에는 소장실 주소가 남아 있다.</p></div><div class="actions">${button('소장님에게 메일 작성','director-compose',true)}${button('바탕화면','desktop')}</div>`;
 return `<div class="page-label"><span>SCAT-MAIL / OUTBOX</span><span>임시 보관</span></div><h1>메일 작성</h1><div class="mail-head">받는 사람: 연구소장 한소율</div><div class="mail-head">제목: .</div><div class="mail-body"><img class="director-photo" src="${myImage}" alt="한소율의 입사 초기 사고 기록 사진 — 검열본"></div><p class="dim">연구소 내부 메일</p><div class="actions">${button('메일 전송','director-send',true)}${button('기록으로 돌아가기','director-evidence')}</div>`;
}
function handleDirectorAction(action){
 if(page===0)return false;
 if(action==='director-evidence'){directorEvidenceFound=true;page=12;render();return true;}
 if(action==='director-compose'&&directorEvidenceFound&&page===12){page=13;render();return true;}
 if(action==='director-send'&&directorEvidenceFound&&page===13){currentEnding='director';endingReplay=false;unlockEnding('director');allEndingsUnlocked=true;try{localStorage.setItem(ENDING_MASTER_STORAGE,'true');}catch{endingStorageFailed=true;}resetPlan();page=10;render();return true;}
 if(action==='back'&&(page===12||page===13)){page=page===13?12:-1;render();return true;}
 return false;
}
