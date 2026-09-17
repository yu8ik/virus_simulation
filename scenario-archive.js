'use strict';
const SPECIAL_SCENARIOS={
  "diarrhea": {
    "title": "설사병 팬데믹",
    "core": "diarrhea",
    "requires": [
      "liquid",
      "pressure",
      "burst",
      "dispersion"
    ],
    "text": "처음에는 화장실에 다녀오면 괜찮아질 것이라 생각했습니다. 그러나 설사를 겪는 여성들 사이에서 배변 간격이 짧아지고, 한 차례의 배출로는 불편이 끝나지 않는 경우가 늘었습니다. 잠시 잦아든 듯한 배변 신호가 다시 돌아오면서, 몸이 편해지는 시점을 예상하기 어려워졌습니다.\n\n증상은 단순히 횟수가 늘어나는 데 그치지 않았습니다. 변은 더욱 묽어졌고, 갑작스럽고 강한 배출 때문에 준비할 여유가 줄었습니다. 한 번에 나오는 양이 적더라도 반복되는 배변은 부담이었으며, 배출 순간의 돌발적인 변화까지 겹쳐 화장실에 머무는 시간이 길어졌습니다.\n\n여성들이 가장 자주 호소한 것은 끝났다는 확신을 갖기 어렵다는 점이었습니다. 배변을 마쳤다고 생각한 뒤에도 복부의 불편과 새로운 신호가 이어졌습니다. 하루의 기준은 식사나 약속 시간이 아니라, 다음 배변까지 얼마나 몸이 편안할 수 있는지로 바뀌어 갔습니다.\n\n가장 먼저 달라진 풍경은 화장실 앞의 줄이었습니다. 막 나왔던 여성이 얼마 지나지 않아 다시 줄 끝에 서는 일이 생겼고, 기다리는 동안에도 자리를 떠날 수 없는 이용자가 늘었습니다. 문이 열릴 때마다 다음 차례가 서둘러 들어갔지만 줄은 쉽게 줄어들지 않았습니다. 예정된 휴식 시간이 끝난 뒤에도 빈자리가 남는 이유는 더 이상 설명을 요구할 만큼 낯선 일이 아니었습니다.\n\n급하게 배출되는 묽은 변은 화장실을 찾았다는 사실만으로 모든 문제가 해결되지는 않는다는 것을 보여 주었습니다. 이용 뒤 추가 정리가 필요한 칸이 생기면 기다리던 줄은 다른 층으로 이어졌습니다. 관리 인력이 청소를 끝내기도 전에 다시 사용 요청이 들어왔고, 소모품을 채우는 손길은 바빠졌습니다. 화장실 앞에서 들리는 말은 어디가 비었느냐와 얼마나 더 기다려야 하느냐로 비슷해졌습니다.\n\n거리에서도 이동의 기준이 바뀌었습니다. 여성들은 목적지까지 가장 빠른 길보다 중간에 화장실을 찾을 수 있는 길을 택했습니다. 함께 걷던 일행이 잠시 흩어졌다가 다시 모이는 일이 잦아졌고, 기다리는 장소도 화장실과 가까운 곳으로 정해졌습니다. 갑작스러운 설사로 늦어진 약속을 두고 예의부터 따지는 반응은 줄었습니다. 비슷한 사정을 겪는 여성이 주변에 너무 많았기 때문입니다.\n\n식당의 빈 좌석과 화장실 앞의 긴 줄이 같은 시간에 보였습니다. 상점에서는 구매 문의보다 화장실 위치를 먼저 묻는 방문객을 맞았고, 행사장에서는 본행사보다 쉬는 시간이 길어지기도 했습니다. 일상이 완전히 멈춘 것은 아니었습니다. 다만 무엇을 하든 배변 때문에 자리를 비울 수 있다는 전제가 따라붙었습니다. 도시는 설사를 견디며 살아가는 여성들의 이동과 기다림을 중심으로 조금씩 다른 리듬을 갖게 되었습니다."
  },
  "constipation": {
    "title": "조용한 사회",
    "core": "constipation",
    "requires": [
      "extreme",
      "hardening",
      "plug",
      "adhesion"
    ],
    "text": "변비를 겪는 여성들은 처음에는 시간이 좀 더 필요한 것이라 여겼습니다. 하지만 배변 욕구가 생겨도 쉽게 배출되지 않았고, 오래 화장실에 머문 뒤에도 답답함이 남았습니다. 기다리는 시간이 길어지는 것과 실제로 불편이 해소되는 것은 별개의 일이 되었습니다.\n\n장 안쪽의 상태와 출구 부근의 상태가 달라지면서 증상은 더욱 설명하기 어려워졌습니다. 단단해진 내용물이 배출을 가로막는 동안 안쪽의 불편은 계속되었고, 일부 내용물은 쉽게 이동하지 않은 채 남았습니다. 조금 배출된 경우에도 충분히 비워졌다는 느낌을 얻기 어려웠습니다.\n\n여성들의 경험담에는 배변 전후의 차이가 크지 않다는 말이 반복되었습니다. 화장실에서 나왔다는 사실만으로 편안해진 것은 아니었습니다. 배출의 어려움과 남아 있는 듯한 느낌이 함께 이어지면서, 잠깐이라도 복부의 부담이 덜한 시간이 소중해졌습니다.\n\n공동 화장실에서는 문이 좀처럼 열리지 않는 칸이 늘었습니다. 여성들은 충분히 기다리면 나아질 것이라 생각했지만, 시간이 흐른 만큼 배출이 이루어지지는 않았습니다. 밖의 줄이 길어지는 것을 알아도 쉽게 일어날 수 없었고, 결국 해결하지 못한 채 자리를 내주는 경우도 생겼습니다. 다음 이용자가 들어간 뒤에도 먼저 나온 여성은 근처에서 쉬며 다시 시도할 시간을 기다렸습니다.\n\n한 번 화장실에 다녀온 뒤 곧바로 일상을 이어 가리라는 기대는 맞지 않았습니다. 단단한 내용물이 출구를 막고 남은 내용물이 쉽게 움직이지 않는 동안, 안쪽에서 느끼는 불편은 사라지지 않았습니다. 여성들은 앉은 자세를 바꾸거나 잠시 걷다가 다시 쉬었습니다. 겉으로는 조용한 휴식처럼 보였지만, 당사자에게는 배변이 이루어질 때를 기다리는 시간이었습니다.\n\n모임의 대화가 끊기는 이유도 달라졌습니다. 여성들은 다음 일정을 서두르기보다 지금 자리를 뜨면 다시 화장실을 찾기 어려울지를 생각했습니다. 긴 외출을 앞두고 시간을 넉넉히 비워 두어도 계획대로 몸이 따라주지는 않았습니다. 약속을 취소하는 연락에는 자세한 설명이 줄었고, 상대도 쉽게 다시 묻지 않았습니다. 배출되지 않는다는 짧은 말만으로 길어진 하루를 짐작할 수 있게 되었습니다.\n\n거리의 한산함과 화장실의 혼잡은 모순되지 않았습니다. 외출을 줄인 여성도 집에서는 긴 시간을 배변과 휴식에 쓰고 있었고, 밖에 나온 여성은 이용할 수 있는 장소를 쉽게 떠나지 못했습니다. 공동체가 조용해진 것은 불편이 사라져서가 아니었습니다. 몸속에 남은 부담을 해결하려는 시간이 각자의 하루를 차지한 결과였습니다. 문 하나가 열리기를 기다리는 줄은 그 조용한 사회의 가장 분주한 풍경이 되었습니다."
  },
  "gas": {
    "title": "대기 오염",
    "core": "gas",
    "requires": [
      "gas_liquid",
      "gas_plug",
      "gas_dispersion",
      "gas_residue"
    ],
    "text": "가스가 찼다가 빠져나가면 한동안 편해지던 양상이 달라졌습니다. 여성들은 한 번에 배출되는 양이 적어지는 대신 가스 배출 욕구가 자주 돌아온다고 이야기했습니다. 팽만감이 남아 있는데도 원하는 만큼 배출되지 않는 경우가 겹쳤습니다.\n\n완전히 분해되지 않은 내용물이 출구 부근에 모여 가스의 이동을 방해했습니다. 가스가 배출되는 경우에도 습기나 소량의 잔여물이 동반되어, 단순히 공기가 빠져나가는 것으로 끝나지 않았습니다. 여성들은 배출 뒤 몸을 정리할 시간이 필요해졌다고 호소했습니다.\n\n배출을 기다리는 동안의 압박과 배출 뒤의 불편이 번갈아 나타났습니다. 조금 편해졌다고 느낀 뒤에도 다시 가스가 차면서, 한 번의 배출을 증상이 끝났다는 신호로 받아들이기 어려웠습니다. 가장 큰 부담은 양보다 반복과 불확실성에 있었습니다.\n\n함께 앉아 있던 자리에서 여성들이 잠시 일어났다가 돌아오는 일이 반복되었습니다. 가스를 내보내면 괜찮아질 것이라 생각해도 소량만 빠져나가거나 다시 압박이 생겼습니다. 그러다 배출에 습기와 잔여물이 동반되면 단순히 자리를 옮기는 것으로 끝낼 수 없었습니다. 여성들은 화장실에서 몸을 정리한 뒤에야 돌아왔고, 주변에서는 짧은 외출이 길어져도 이유를 재촉하지 않았습니다.\n\n공동 공간에서는 소리보다 남아 있는 냄새가 더 오래 대화를 붙잡았습니다. 창문을 열고 자리를 바꾸어도 누군가 다시 가스를 배출하면 같은 요청이 이어졌습니다. 어느 한 여성에게만 원인을 돌리기도 어려웠습니다. 비슷한 불편을 겪는 여성이 여럿 있었고, 배출을 미루는 동안에는 당사자의 팽만감이 커졌습니다. 환기를 원하는 쪽과 잠시라도 몸이 편해지기를 바라는 쪽은 종종 같은 여성이었습니다.\n\n가스가 막혀 있을 때와 빠져나올 때의 부담은 서로 달랐습니다. 여성들은 압박 때문에 자리를 비웠다가 배출 뒤의 정리 때문에 돌아오는 시간이 늦어지기도 했습니다. 조금씩 자주 나타나는 증상은 휴식 한 번으로 하루를 정돈하기 어렵게 만들었습니다. 화장실이 있는 곳을 찾아 오래 머무는 일이 늘었고, 공동체의 이동은 목적지뿐 아니라 몸을 정리할 장소에도 좌우되기 시작했습니다.\n\n거리의 광고에는 환기와 탈취, 개인 위생을 돕는 물품이 자주 등장했습니다. 그 배경에는 단순한 유행이 아니라 함께 있는 공간에서 되풀이되는 가스 배출이 있었습니다. 여성들은 남에게 불편을 주지 않으려는 노력과 자신의 몸을 편하게 하려는 요구 사이에서 시간을 보냈습니다. 도시의 공기가 달라졌다는 말은 과장이 아니었습니다. 여러 공간에 남는 냄새와 열려 있는 창문이, 질환이 일상 깊숙이 들어왔다는 사실을 말없이 드러냈습니다."
  },
  "unchanged": {
    "title": "평범함의 기준",
    "core": "unchanged",
    "requires": [
      "odor",
      "odor_plus",
      "digestion",
      "pain"
    ],
    "text": "배변 형태만 놓고 보면 이전과 큰 차이가 없었습니다. 그런데도 여성들은 식사 뒤 소화가 불편하고 복부 통증이 이어진다고 호소했습니다. 눈에 보이는 변화가 작다는 사실은 몸이 느끼는 부담까지 작다는 뜻이 아니었습니다.\n\n배출 과정에서는 냄새의 변화가 두드러졌지만, 그 외의 모습은 익숙한 범위에 머물렀습니다. 변이 묽어지거나 단단해지는 변화 없이도 배변 전후의 불편은 남았습니다. 여성들은 배출을 마치고도 충분히 편안해지지 않는다는 점을 설명해야 했습니다.\n\n평소처럼 배변했다는 말과 몸이 괜찮다는 말은 더 이상 같은 뜻이 아니었습니다. 식사와 배변 사이에 이어지는 소화 불편과 통증 때문에, 겉으로 정상적으로 보이는 하루에도 휴식이 필요했습니다. 달라지지 않은 배변 형태 뒤에 달라진 부담이 남았습니다.\n\n공동 화장실에서 배출되는 변의 형태는 낯설지 않았습니다. 그러나 이용 뒤 강하게 남는 냄새 때문에 다음 이용자가 발길을 돌리거나 다른 칸을 찾는 일이 생겼습니다. 감염된 여성은 평소와 같은 배변이었다고 설명했지만, 함께 쓰는 공간에서 느끼는 차이는 분명했습니다. 시설에서는 배관과 환기 장치를 점검했고, 이상이 없다는 답변 뒤에도 같은 민원은 다시 들어왔습니다.\n\n식사를 마친 여성들이 배를 편하게 할 자세를 찾거나 일정을 늦추는 모습도 눈에 띄었습니다. 화장실에 다녀오라는 조언은 이미 다녀왔다는 대답에 막혔고, 평소처럼 배변했다는 말은 왜 계속 불편한지 설명해 주지 못했습니다. 당사자는 같은 질문에 자신의 상태를 반복해서 말해야 했습니다. 겉으로 뚜렷한 변화가 없다는 사실은 오히려 도움을 받기까지 더 많은 설명이 필요하다는 뜻이 되었습니다.\n\n주변에서는 화장실 이용이 끝나면 문제도 끝났다고 생각하기 쉬웠습니다. 하지만 복통과 소화 불편 때문에 여성들이 바로 돌아오지 못하는 경우가 생겼고, 돌아온 뒤에도 쉬어야 하는 일이 있었습니다. 식당과 일터에서는 비어 있는 자리를 두고 무슨 일이 생겼는지 묻다가, 배변 뒤에도 상태가 좋아지지 않았다는 말을 듣곤 했습니다. 공동체는 정상적인 배변과 편안한 몸을 더 이상 같은 것으로 다루기 어려워졌습니다.\n\n일상은 겉으로 크게 바뀌지 않은 채 조금씩 지연되었습니다. 식사는 평소처럼 나왔고 화장실도 운영되었지만, 여성들이 느끼는 통증과 이용 뒤의 냄새는 그 사이사이에 새로운 부담을 남겼습니다. 누군가 큰 사건을 겪어야만 대응할 수 있다는 태도는 반복되는 작은 불편 앞에서 설득력을 잃었습니다. 이 질환이 바꾼 것은 배변의 모양이 아니라, 배변을 둘러싼 시간이었습니다. 공동체는 평범해 보이는 하루를 유지하기 위해 이전보다 더 자주 멈추고 기다려야 했습니다."
  },
  "hyper": {
    "title": "도시의 처리 능력",
    "requires": [
      "appetite",
      "appetite_plus",
      "mass",
      "mass_plus"
    ],
    "text": "식사를 마친 뒤에도 먹을 것을 찾는 여성들이 늘었습니다. 배가 차 있다는 느낌과 식욕이 더는 같은 방향으로 움직이지 않았고, 식사량을 정해 두어도 그에 맞춰 멈추기 어려웠습니다. 복부가 불편한데도 다시 음식에 손이 가는 경험이 반복되었습니다.\n\n내용물이나 가스가 늘어나는 변화까지 겹치면서, 먹은 양만으로 복부의 팽만을 설명하기 어려워졌습니다. 배출되는 형태와 원활함은 각자의 증상에 따라 달랐지만, 공통적으로 배출을 마친 뒤에도 부담이 금세 돌아온다는 호소가 나왔습니다. 식사량과 배출량, 몸이 느끼는 편안함 사이의 익숙한 관계가 어긋났습니다.\n\n여성들은 먹는 일과 배출하는 일 사이에서 충분히 쉴 틈을 찾기 어려워졌습니다. 배출이 이루어져도 식욕이 가라앉는 것은 아니었고, 식사를 줄이려는 노력만으로 이미 남은 팽만이 사라지지도 않았습니다. 몸의 요구를 하나씩 해결해도 다음 요구가 이어지는 것이 이 증상의 가장 큰 부담이었습니다.\n\n식사 자리에서는 다 먹었다는 말 뒤에도 음식이 추가로 주문되었습니다. 여성들은 복부가 불편하다고 이야기하면서도 먹을 것을 찾았고, 주변에서는 그 두 반응을 쉽게 이해하지 못했습니다. 식사를 끝내고 나갈 시간을 정해 두어도 그대로 움직이기 어려웠습니다. 배가 차는 것과 먹고 싶은 마음이 가라앉는 것이 별개가 되면서, 한 끼의 끝을 함께 맞추는 일부터 달라졌습니다.\n\n화장실에서 나타나는 변화는 각자의 증상에 따라 달랐습니다. 배출이 가능한 여성에게는 늘어난 내용물을 처리할 시간과 정리가 필요했고, 원활하지 않은 여성에게는 남아 있는 양과 팽만이 더 큰 부담이 되었습니다. 가스 증상을 겪는 여성에게도 늘어난 양은 잠깐 자리를 비우는 것만으로 끝나지 않는 불편이었습니다. 어느 쪽이든 먹고 나서 한 번 화장실에 다녀오면 된다는 익숙한 계산은 맞지 않았습니다.\n\n식당에서 화장실을 찾고, 몸을 정리한 뒤 다시 먹을 것을 찾는 일상이 반복되었습니다. 여성들은 약속을 잡을 때 메뉴뿐 아니라 오래 머물러도 되는지, 쉬어 갈 장소가 있는지를 확인했습니다. 일행이 함께 움직이기 어려워지자 먼저 식사를 마친 쪽이 기다리거나 각자 일정을 이어 가는 일이 늘었습니다. 한 사람의 배고픔과 다른 사람의 배변 시간이 같은 시간표 안에 들어오기 어려워졌습니다.\n\n시설에서 감당해야 하는 것은 이용자 수만이 아니었습니다. 배출량이 늘어난 경우에는 정리와 보충에 시간이 더 들었고, 배출이 어려운 경우에는 칸이 오래 비지 않았습니다. 가스로 인한 팽만을 호소하는 여성에게도 쉬고 몸을 정리할 공간이 필요했습니다. 관리자는 같은 수의 방문객을 받더라도 이전처럼 운영할 수 없다는 것을 알게 되었습니다. 한 번의 이용이 끝났다는 표시 뒤에도 다음 정리와 기다림이 이어졌습니다.\n\n거리에서는 음식 판매가 활발해지는 시간과 화장실이 붐비는 시간이 겹쳤습니다. 더 많은 것을 공급하면 문제가 풀릴 것이라는 기대는 늘어난 처리 부담 앞에서 멈췄습니다. 여성들의 몸은 먹는 일과 배출하는 일 사이에서 쉴 여유를 찾기 어려웠고, 공동체는 그 반복을 떠받치느라 바빠졌습니다. 풍요롭게 보이는 식탁과 쉬지 못하는 생활이 나란히 놓였습니다. 도시가 커진 것은 만족할 수 있는 여유가 아니라, 끝나지 않는 요구를 감당하기 위해서였습니다."
  }
};
const SCENARIO_STORAGE='scat-seen-scenarios-v1';
let seenScenarios=[];try{const stored=JSON.parse(localStorage.getItem(SCENARIO_STORAGE)||'[]');if(Array.isArray(stored))seenScenarios=stored.filter(id=>typeof id==='string');}catch{}
let researchTab='endings',selectedScenario=null;
function specialScenarioIds(){const chosen=new Set(simulationResult.advanced);return Object.entries(SPECIAL_SCENARIOS).filter(([,s])=>(!s.core||s.core===simulationResult.core)&&s.requires.every(id=>chosen.has(id))).map(([id])=>id);}
function selectedSpecialScenario(){const ids=specialScenarioIds();return ids.includes('hyper')?'hyper':ids[0]||null;}
function specialScenarioScreen(){const story=SPECIAL_SCENARIOS[selectedSpecialScenario()];return '<div class="page-label"><span>SPECIAL SCENARIO</span></div><h1>'+esc(story.title)+'</h1><div class="box ending-story">'+story.text.split('\n\n').map(p=>'<p>'+esc(p)+'</p>').join('')+'</div><div class="actions">'+button('시뮬레이션 종료','finish-simulation',true)+'</div>';}
function simulationSpecialParagraphs(){return specialScenarioIds().map(id=>SPECIAL_SCENARIOS[id].text);}
function scenarioCatalog(){const entries=[];const add=(id,title,condition,text,hidden=false)=>entries.push({id,title,condition,text,hidden});
for(const core of TRAITS.core){const prefix=core.name+' · ';for(let age=0;age<3;age++){const r=SIMULATION_INTROS[core.id][age];add('intro:'+core.id+':'+age,prefix+AGES[age].name,'핵심 '+core.name+' / 대상 '+AGES[age].name,r.intro+'\n\n'+r.body);}
for(const pair of TRAITS.pairs)for(const t of pair.options){const text=SIMULATION_OPPOSING[core.id]?.[t.id];if(text)add('opposing:'+core.id+':'+t.id,prefix+t.name,'핵심 '+core.name+' / '+t.name+' 선택',text);}
for(const t of TRAITS.advanced){const text=SIMULATION_SYMPTOMS[core.id]?.[t.id];if(text)add('symptom:'+core.id+':'+t.id,prefix+t.name,'핵심 '+core.name+' / '+t.name+' 선택'+(TRAITS.advanced.some(u=>u.requiresTrait===t.id)?' / 강화형 미선택':''),text);}}
for(const [id,text]of Object.entries(SIMULATION_INFECTION))add('infection:'+id,id==='none'?'감염성 심화 미선택':TRAITS.advanced.find(t=>t.id===id).name,id==='none'?'감염성 심화 미선택':TRAITS.advanced.find(t=>t.id===id).name+' 선택',text);
for(const [n,text]of Object.entries(SIMULATION_INFECTION_FOLLOWUP))add('spread:'+n,'감염 확산 · '+n+'개','감염성 심화 '+n+'개 선택',text);
for(const [id,text]of Object.entries(SIMULATION_CORE_ADVANCED)){const t=TRAITS.advanced.find(t=>t.id===id);add('core:'+id,t.group+' · '+t.name,t.group+' 핵심 / '+t.name+' 선택',text);}
for(const [id,text]of Object.entries(SIMULATION_MITIGATION)){const t=TRAITS.advanced.find(t=>t.id===id);add('mitigation:'+id,t.name,t.name+' 선택',text);}
for(const [id,s]of Object.entries(SPECIAL_SCENARIOS))add('special:'+id,s.title,(s.core?'핵심 '+TRAITS.core.find(t=>t.id===s.core).name+' / ':'핵심 종류 무관 / ')+s.requires.map(id=>TRAITS.advanced.find(t=>t.id===id).name).join('·')+' 모두 선택 (다른 선택 추가 가능)'+(s.core?' / 하이퍼 4종 동시 선택 시 하이퍼 우선':''),s.text,true);return entries;}
function saveScenarioIds(ids){seenScenarios=[...new Set([...seenScenarios,...ids])];try{localStorage.setItem(SCENARIO_STORAGE,JSON.stringify(seenScenarios));}catch{}}
function recordSimulationScenarios(){const special=selectedSpecialScenario();if(special){saveScenarioIds(['special:'+special]);return;}const r=simulationResult,chosen=new Set(r.advanced);const ids=['intro:'+r.core+':'+r.age];for(const [pair,id]of Object.entries(r.opposing||{}))if(SIMULATION_OPPOSING[r.core]?.[id])ids.push('opposing:'+r.core+':'+id);
const infectious=TRAITS.advanced.filter(t=>t.group==='감염성'&&chosen.has(t.id));if(infectious.length){ids.push(...infectious.map(t=>'infection:'+t.id),'spread:'+infectious.length);}else ids.push('infection:none');
for(const t of TRAITS.advanced.filter(t=>chosen.has(t.id))){if(SIMULATION_SYMPTOMS[r.core]?.[t.id]&&!TRAITS.advanced.some(u=>u.requiresTrait===t.id&&chosen.has(u.id)))ids.push('symptom:'+r.core+':'+t.id);if(t.allowedCores?.includes(r.core)&&SIMULATION_CORE_ADVANCED[t.id])ids.push('core:'+t.id);if(t.mitigation)ids.push('mitigation:'+t.id);}saveScenarioIds(ids);}
function researchTabs(){return '<div class="actions" role="tablist" aria-label="연구 자료실">'+['endings','scenarios'].map(id=>'<button role="tab" aria-selected="'+(researchTab===id)+'" data-action="research-'+id+'" class="'+(researchTab===id?'primary':'')+'">'+(id==='endings'?'엔딩 기록':'시나리오 기록')+'</button>').join('')+'</div>';}
let scenarioFolder=null;
function scenarioFolders(){return [...TRAITS.core.map(t=>({id:t.id,name:t.name})),{id:'common',name:'공통 시나리오'}];}
function scenarioFolderFor(entry){const [kind,id]=entry.id.split(':');if(['intro','opposing','symptom'].includes(kind))return id;if(kind==='core')return TRAITS.advanced.find(t=>t.id===id).allowedCores[0];if(kind==='special')return SPECIAL_SCENARIOS[id].core||'common';return 'common';}
function scenarioArchiveScreen(){const folder=scenarioFolders().find(f=>f.id===scenarioFolder);const heading='<h1>연구 자료실 · 시나리오 기록</h1>';if(!folder)return heading+'<p class="dim">폴더를 열어 관련 시나리오를 확인하세요.</p><div class="cards scenario-folders">'+scenarioFolders().map(f=>'<button class="card" data-action="scenario-folder-'+f.id+'"><span class="folder-icon" aria-hidden="true">📁</span><strong>'+esc(f.name)+'</strong><span class="stats">폴더 열기</span></button>').join('')+'</div><div class="actions">'+button('바탕화면','desktop')+'</div>';
const list=scenarioCatalog().filter(s=>scenarioFolderFor(s)===folder.id&&(!s.hidden||allEndingsUnlocked||seenScenarios.includes(s.id)));const readable=s=>seenScenarios.includes(s.id)||(allEndingsUnlocked&&!s.hidden);const current=list.find(s=>s.id===selectedScenario);return heading+'<div class="actions">'+button('← 폴더 목록','scenario-root')+'<span class="cyan">시나리오 기록 / '+esc(folder.name)+'</span></div><p class="dim">미발견 항목을 누르면 조건을 확인합니다.</p>'+(current?'<section class="box"><h2>'+esc(current.title)+'</h2><p>조건: '+esc(current.condition)+'</p>'+(readable(current)?current.text.split('\n\n').map(p=>'<p>'+esc(p.replaceAll('{pathogen}','병원체'))+'</p>').join(''):'<p class="dim">미발견 시나리오입니다.</p>')+'</section>':'')+['일반 시나리오','특수 시나리오'].map((label,i)=>{const members=list.filter(s=>s.hidden===Boolean(i));if(!members.length)return '';return '<details class="scenario-branch"><summary>📁 '+label+'</summary><div class="cards scenario-cards">'+members.map(s=>'<button class="card '+(readable(s)?'':'ending-undiscovered')+'" data-action="scenario-'+s.id+'"><strong>'+esc(s.title)+'</strong><span class="number">'+(readable(s)?'열람 가능':'미발견')+'</span><span class="stats">클릭하여 '+(readable(s)?'기록 열람':'조건 확인')+'</span></button>').join('')+'</div></details>';}).join('')+'<div class="actions">'+button('폴더 목록','scenario-root')+button('바탕화면','desktop')+'</div>';}
function handleScenarioAction(action){if(page!==11)return false;if(action==='research-endings'||action==='research-scenarios'){researchTab=action.slice(9);selectedScenario=null;scenarioFolder=null;render();return true;}if(researchTab!=='scenarios')return false;if(action==='scenario-root'||(action==='back'&&scenarioFolder)){scenarioFolder=null;selectedScenario=null;render();return true;}if(action.startsWith('scenario-folder-')){const id=action.slice('scenario-folder-'.length);if(scenarioFolders().some(f=>f.id===id)){scenarioFolder=id;selectedScenario=null;render();}return true;}if(action.startsWith('scenario-')){const id=action.slice(9);if(scenarioCatalog().some(s=>s.id===id&&scenarioFolderFor(s)===scenarioFolder&&(!s.hidden||allEndingsUnlocked||seenScenarios.includes(s.id)))){selectedScenario=id;render();}return true;}return false;}
