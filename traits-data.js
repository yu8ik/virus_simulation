// 형질 설정.txt에서 생성됨. 직접 수정하지 마세요.
const TRAITS = {
  "관리 안내": "이 파일이 구현된 형질의 효과/설명 기준 원본입니다. JSON 형식을 유지하고 수정 후 node sync-traits.js를 실행하세요. 수치는 가상 게임 규칙입니다.",
  "guide": "유전 형질 개조는 수용량과 증상 심각성에 변동을 줍니다. 핵심 형질에 따라, 세부 형질의 효과가 달라집니다.",
  "규칙": "조합 수치는 가상 게임의 밸런스 값입니다. 대립 형질의 최종 적용값 = 기본값 + 선택한 핵심의 combinations 보정값. 핵심 자체의 비용과 심각성은 별도로 한 번만 더합니다. 이완+수치심의 추가 심각성 10은 별도 합산합니다. 핵심 변경 시 일반 대립 형질은 유지하고 조합 효과만 재계산합니다. 가스성에서 다른 핵심으로 변경하면 라우드/스텔스는 해제됩니다. 음수 심각성은 유지합니다. 미구현 심화/완화 효과는 적용하지 않습니다.",
  "core": [
    {
      "id": "diarrhea",
      "name": "설사",
      "capacity": -10,
      "severity": 15,
      "description": "장내 수분 흡수 능력을 약화시키고 소화기의 능력을 저해하여, 섭취된 음식물이 소화기를 매우 빠르게 통과하게 만듭니다."
    },
    {
      "id": "constipation",
      "name": "변비",
      "capacity": -10,
      "severity": 5,
      "description": "장내 수분 흡수를 강화하고 소화기관의 연동 능력을 억제하여, 내용물이 소화기에 오랫동한 장류하며 부패하고 변성되도록 만듭니다."
    },
    {
      "id": "gas",
      "name": "가스성",
      "capacity": -10,
      "severity": 0,
      "description": "병원체가 장내 분변을 직접적으로 분해하여 악취를 풍기는 가스를 생성합니다."
    },
    {
      "id": "unchanged",
      "name": "변동 없음",
      "capacity": 0,
      "severity": 0,
      "description": "대변의 형태를 변경시키지 않습니다. 감염자가 질병임을 인지하는 것이 느려져 약제 수요와 증상 심각성이 감소합니다."
    }
  ],
  "pairs": [
    {
      "id": "muscle",
      "name": "이완 / 수축",
      "options": [
        {
          "id": "relax",
          "name": "이완",
          "capacity": -10,
          "severity": 25,
          "description": "괄약근의 신경 연결을 약화시켜 이완 상태로 고정하며 배출 조절이 어려워집니다.",
          "bonusWith": "shame",
          "bonusSeverity": 10,
          "combinations": {
            "diarrhea": {
              "capacity": -5,
              "severity": 10,
              "description": "설사 증상에 배출 조절의 어려움이 더해져 갑작스러운 배출을 억제하기 어려워집니다."
            },
            "constipation": {
              "capacity": -5,
              "severity": 5,
              "description": "변비는 유지되지만 가스를 조절할 수 없게 됩니다. 내용물의 정체와 가스 조절의 어려움이 함께 나타납니다."
            },
            "unchanged": {
              "capacity": 5,
              "severity": -10,
              "description": "배출 조절이 어려워지긴 하지만, 비교적 영향이 적습니다. "
            },
            "gas": {
              "capacity": -5,
              "severity": 5,
              "description": "증가한 가스를 조절하기 어려워져 의도하지 않은 가스 배출이 잦아집니다."
            }
          }
        },
        {
          "id": "contract",
          "name": "수축",
          "capacity": -10,
          "severity": 10,
          "description": "괄약근에 연결된 신경 반응을 강화해 닫힌 상태를 유지하도록 만듭니다. 배출하려는 의지와 무관하게 배출이 어려워집니다.",
          "combinations": {
            "diarrhea": {
              "capacity": -10,
              "severity": 20,
              "description": "설사의 배출이 제한되어 극심한 복통을 느끼면서도 배출할 수 없게 됩니다."
            },
            "constipation": {
              "capacity": -5,
              "severity": 10,
              "description": "변비에 배출 제한이 더해져 정체감과 복부 압박이 더욱 심해집니다."
            },
            "unchanged": {
              "capacity": 5,
              "severity": -5,
              "description": "배출 시도에 어려움을 겪는 경우가 많아지긴 하지만, 비교적 영향이 적습니다."
            },
            "gas": {
              "capacity": -5,
              "severity": 15,
              "description": "늘어난 가스가 배출되지 못해 복부 팽만과 압박감이 심해집니다."
            }
          }
        }
      ]
    },
    {
      "id": "emotion",
      "name": "수치심 / 철면",
      "options": [
        {
          "id": "shame",
          "name": "수치심",
          "capacity": -10,
          "severity": -5,
          "description": "증상을 드러내거나 치료받기보다 숨기려는 성향이 강해집니다. 약제 수요와 증상 심각성이 소폭 감소합니다.",
          "combinations": {
            "diarrhea": {
              "capacity": -5,
              "severity": 5,
              "description": "갑작스러운 설사 증상을 숨기려 하면서 부담이 커집니다. 기본 심각성 감소 효과가 상쇄됩니다."
            },
            "constipation": {
              "capacity": 0,
              "severity": -5,
              "description": "변비 증상을 드러내지 않고 혼자 견디려는 경향이 강해져 외부 주목도가 더 낮아집니다."
            },
            "unchanged": {
              "capacity": 5,
              "severity": 0,
              "description": "배설을 수치스러워하는 기본 본성과 맞물려 큰 영향을 발휘하지 못합니다. 감염 사실 자체를 인지하지 못해 약제 수요와 증상 심각성이 큰 폭으로 감소합니다."
            },
            "gas": {
              "capacity": -5,
              "severity": 5,
              "description": "가스 증상을 숨기려는 부담이 커집니다. 기본 심각성 감소 효과가 상쇄됩니다."
            }
          }
        },
        {
          "id": "brazen",
          "name": "철면",
          "capacity": -5,
          "severity": 25,
          "description": "자신의 증상을 타인에게 드러내려는 성향이 강해집니다. 사회적 주목도가 높아져 증상 심각성이 크게 증가합니다.",
          "combinations": {
            "diarrhea": {
              "capacity": -5,
              "severity": 10,
              "description": "설사 증상을 드러내는 여성이 증가하여, 증상에 대한 주목도가 크게 증가합니다."
            },
            "constipation": {
              "capacity": 0,
              "severity": -5,
              "description": "배출 빈도가 낮은 변비의 특성 때문에 증상을 드러내는 행동의 영향이 일부 줄어듭니다."
            },
            "unchanged": {
              "capacity": 5,
              "severity": -10,
              "description": "야외 배설을 시도하는 여성의 수가 증가하지만, 개인의 일탈 내지는 성벽으로 취급되어 추가 주목도가 비교적 낮습니다."
            },
            "gas": {
              "capacity": -5,
              "severity": 5,
              "description": "잦은 가스 증상을 숨기지 않아 주변의 주목도가 더욱 높아집니다."
            }
          }
        }
      ]
    },
    {
      "id": "social",
      "name": "사회적 / 고독",
      "options": [
        {
          "id": "social",
          "name": "사회적",
          "capacity": -10,
          "severity": 15,
          "description": "주변에 사람이 많으면 배변 신호가 강해지고, 사람이 없으면 약해집니다. 감염 증상이 드러나는 경우가 잦아져 증상 심각성이 증가합니다.",
          "combinations": {
            "diarrhea": {
              "capacity": -5,
              "severity": 10,
              "description": "공공장소에서 실례하는 여성이 늘어나며, 주목도가 큰 폭으로 증가합니다."
            },
            "constipation": {
              "capacity": -5,
              "severity": 5,
              "description": "사람이 많은 환경에서 배변 신호는 강해지지만 변비가 유지되어 불편함이 커집니다."
            },
            "unchanged": {
              "capacity": 5,
              "severity": -5,
              "description": "공공장소에서 탈분하는 여성의 수가 증가하지만, 개인의 실수로 취급되어 추가 주목도가 비교적 낮습니다."
            },
            "gas": {
              "capacity": -5,
              "severity": 5,
              "description": "사람이 많은 환경에서 가스감과 팽만감이 강해집니다."
            }
          }
        },
        {
          "id": "solitary",
          "name": "고독",
          "capacity": -10,
          "severity": 5,
          "description": "주변에 사람이 없으면 배변 신호가 강해지고, 사람이 많으면 약해집니다. 감염 증상이 타인에게 드러나는 일이 드물어 증상 심각성이 감소합니다.",
          "combinations": {
            "diarrhea": {
              "capacity": -5,
              "severity": 5,
              "description": "설사 특성상 공공장소에서의 증상 발현 억제가 비교적 적은 영향을 끼칩니다."
            },
            "constipation": {
              "capacity": -5,
              "severity": 10,
              "description": "혼자 있을 때 배변 신호가 강해지지만 변비로 배출이 어려워 정체감이 커집니다."
            },
            "unchanged": {
              "capacity": 5,
              "severity": 0,
              "description": "개방적인 공간에서의 증상 발현이 억제되어 약제 수요와 증상 심각성이 큰 폭으로 감소합니다."
            },
            "gas": {
              "capacity": -5,
              "severity": 5,
              "description": "혼자 있는 환경에서 가스감이 강해지고 사람이 많은 환경에서는 약해집니다."
            }
          }
        }
      ]
    },
    {
      "id": "sound",
      "name": "라우드 / 스텔스",
      "options": [
        {
          "id": "loud",
          "name": "라우드",
          "capacity": -10,
          "severity": 10,
          "requires": "gas",
          "description": "병원체가 직장 및 결장 운동을 제어해 장내 가스 수용량을 증가시킵니다. 한계까지 증폭된 장내 압력은 가스 배출시에 커다란 소리가 발생하며 배출시의 압력 또한 증가해, 가스가 보다 넓은 범위까지 퍼져나가게 됩니다.",
          "combinations": {
            "gas": {
              "capacity": -5,
              "severity": 5,
              "description": "가스성의 잦은 가스 배출에 큰 소리가 더해져 주변의 주목도가 높아집니다."
            }
          }
        },
        {
          "id": "stealth",
          "name": "스텔스",
          "capacity": -10,
          "severity": 0,
          "requires": "gas",
          "description": "병원체가 괄약근을 제어해 가스 배출시 괄약근의 이완 정도를 큰 폭으로 증가시킵니다. 이로 인해 가스를 배출할 때 아주 작은 소리만 발생하게 되며 배출시의 압력 또한 적어지지만, 그 잔향은 더욱 오래 잔류하게 됩니다.",
          "combinations": {
            "gas": {
              "capacity": 0,
              "severity": -5,
              "description": "가스성의 잦은 가스 배출이 작은 소리로 나타나 주변의 주목도가 낮아집니다."
            }
          }
        }
      ]
    }
  ],
  "표시 규칙": "핵심 형질 순서는 설사, 변비, 가스성, 변동 없음입니다. 핵심별 조합 예상 효과 설명은 카드와 결과 화면에 표시하지 않습니다. 조합 수치 보정과 최종 적용 수치 계산은 유지합니다.",
  "advancedGuide": "심화 개조와 증상 완화를 여러 개 선택하거나 미선택으로 진행할 수 있습니다. 심화 개조는 각각 수용량 5를 소비하며, 증상 완화는 수용량을 소비하지 않습니다. 강화형은 해당 선행 개조가 필요합니다. 항목을 다시 누르면 해제됩니다.",
  "advancedRules": "사용자가 수정한 심화 개조 이름과 설명을 기준으로 적용합니다. 식욕→식욕 강화, 대량화→대량화 강화, 악취→악취 강화는 독립된 선행 관계입니다. 각 개조의 비용과 심각성은 누적됩니다. 식욕 강화는 수용량 -5/심각성 +5, 대량화 강화는 -5/+10이며 팽창 상태를 부여합니다. 식욕과 식욕 강화는 가스성에서도 식욕 변화 설명을 그대로 사용합니다. 마개는 기존 변비/가스성 조건과 -5/+5를 유지합니다. 재채기는 이전 인수공통감염과 별개 항목이며 배출 유발 효과에 맞춰 -5/+5로 설정합니다. 대기의 미정 N 규칙은 폐기합니다. 대기는 완화 전 심각성 120 초과 시 -20, 이하는 0입니다. 이후 완화 감소량을 합산합니다. 완화로 대기 효과가 취소되어 심각성이 역상승하지 않게 판정 순서를 고정합니다. 완화 수치는 간헐성 -5, 트리거 일반 -15, 정당화 -20, 반전 -10이며 수용량 0입니다. 완화는 심각성 조건 없이 적용하고 음수도 허용합니다. 트리거 일반은 사회적·고독과 동시 선택할 수 있습니다. 약이 안팔려 엔딩은 박테리아/기생충, 청소년, 변동 없음, 수치심, 정당화를 모두 요구하며 다른 대립·심화·완화 형질은 허용하지 않습니다. 설사·변비 전용 심화와 가스성 전용 심화는 독립 항목으로 관리합니다. 선택한 핵심에 맞는 심화만 표시하며, 공통 심화와 증상 완화는 유지합니다. 핵심 변경으로 사용할 수 없어진 심화 선택은 해제합니다. 가스성 전용 심화는 가습·마개·펌프·잔류 네 항목으로 구성합니다. 가습·마개·펌프의 수용량/심각성은 기존 항목을 유지하고, 신규 잔류는 수용량 -5/심각성 +5로 설정합니다.",
  "airThreshold": 120,
  "airReduction": 20,
  "advanced": [
    {
      "id": "odor",
      "name": "악취",
      "group": "일반",
      "capacity": -5,
      "severity": 0,
      "description": "배설물의 냄새가 강해집니다,"
    },
    {
      "id": "odor_plus",
      "name": "악취 — 강화",
      "group": "일반",
      "capacity": -5,
      "severity": 5,
      "description": "악취의 강도가 더욱 높아져 주변의 불편과 주목도가 증가합니다.",
      "requiresTrait": "odor"
    },
    {
      "id": "digestion",
      "name": "소화장애",
      "group": "일반",
      "capacity": -5,
      "severity": 5,
      "description": "음식물의 소화가 원활하지 않아 소화기 불편이 증가합니다."
    },
    {
      "id": "pain",
      "name": "복통",
      "group": "일반",
      "capacity": -5,
      "severity": 5,
      "description": "복부 감각이 예민해져 지속적인 복통을 느끼게 됩니다."
    },
    {
      "id": "appetite",
      "name": "식욕",
      "group": "대량화",
      "capacity": -5,
      "severity": 5,
      "description": "병원체가 뇌에 침투해 식욕 호르몬의 분비를 촉진시킴으로써, 포만감을 느끼더라도 음식물을 계속 섭취하려는 성향이 강해집니다."
    },
    {
      "id": "appetite_plus",
      "name": "식욕 - 강화",
      "group": "대량화",
      "capacity": -5,
      "severity": 5,
      "description": "포만감 감지 중추를 마비시켜, 식욕을 제어할 수 없게 됩니다.",
      "requiresTrait": "appetite"
    },
    {
      "id": "mass",
      "name": "대량화",
      "group": "대량화",
      "capacity": -5,
      "severity": 0,
      "description": "음식물이 압축되며 분변이 되는 일반적인 소화 과정과 달리, 음식물이 소화되며 분변이 되는 과정에서 부피가 증가하게 됩니다.",
      "gasDescription": "음식물이 압축되며 분변이 되는 일반적인 소화 과정과 달리, 음식물이 소화되고 가스로 분해되는 과정에서 가스의 부피가 증가하게 됩니다."
    },
    {
      "id": "mass_plus",
      "name": "대량화 - 강화",
      "group": "대량화",
      "capacity": -5,
      "severity": 10,
      "description": "병원체가 장내 배설물을 부분적으로 복제합니다.\n복제 과정은 장내 압력이 한계에 다다를 때까지 반복됩니다.",
      "requiresTrait": "mass",
      "grants": [
        "팽창"
      ],
      "gasDescription": "병원체가 장내 가스를 부분적으로 복제합니다.\n복제 과정은 장내 압력이 한계에 다다를 때까지 반복됩니다."
    },
    {
      "id": "liquid",
      "name": "액화",
      "group": "설사",
      "capacity": -5,
      "severity": 0,
      "description": "병원체가 삼투압 현상을 응용해 대량의 수분을 장내로 유입시켜 설사가 극도로 묽어집니다.",
      "allowedCores": [
        "diarrhea"
      ]
    },
    {
      "id": "pressure",
      "name": "고압",
      "group": "설사",
      "capacity": -5,
      "severity": 5,
      "description": "병원체가 장내 조직을 조작해 장내 수용량을 현격히 감소시킵니다. 이로 인해 감염자는 높은 압력으로 분변을 강하게 내뿜게 됩니다.",
      "allowedCores": [
        "diarrhea"
      ]
    },
    {
      "id": "burst",
      "name": "폭파",
      "group": "설사",
      "capacity": -5,
      "severity": 8,
      "description": "병원체가 가스 응집체를 설사에 섞어 배출시킵니다. 이 응집체는 배설과 동시에 폭발해 미세한 설사 입자를 퍼뜨려 반경 15m 내의 사람들을 감염시킵니다.",
      "allowedCores": [
        "diarrhea"
      ]
    },
    {
      "id": "dispersion",
      "name": "분산",
      "group": "설사",
      "capacity": -5,
      "severity": 12,
      "description": "병원체가 주기적으로 장운동의 억제와 촉진을 반복합니다. 이로 인해 감염자는 매우 잦은 변의를 느끼게 되지만, 각 배설의 배설량은 큰 폭으로 감소합니다.",
      "allowedCores": [
        "diarrhea"
      ]
    },
    {
      "id": "extreme",
      "name": "극단",
      "group": "변비",
      "capacity": -5,
      "severity": 0,
      "description": "병원체가 장내 각 위치마다 다르게 작용하며, 직장 부근에선 대변을 더욱 단단하게 만들고 반대로 장 내부에선 대변을 더 묽게 만듭니다.",
      "allowedCores": [
        "constipation"
      ]
    },
    {
      "id": "hardening",
      "name": "경화",
      "group": "변비",
      "capacity": -5,
      "severity": 5,
      "description": "병원체가 장내 수분 흡수 능력을 극한까지 끌어올려 대변을 극도로 단단하게 만듭니다.",
      "allowedCores": [
        "constipation"
      ]
    },
    {
      "id": "plug",
      "name": "체증",
      "group": "변비",
      "capacity": -5,
      "severity": 5,
      "description": "병원체가 괄약근 부근을 제외한 부분의 연동 운동을 촉진하여 괄약근 직전에 자리잡은 변괴의 크기를 큰 폭으로 증가시킵니다.",
      "allowedCores": [
        "constipation"
      ]
    },
    {
      "id": "adhesion",
      "name": "장내 흡착",
      "group": "변비",
      "capacity": -5,
      "severity": 15,
      "description": "병원체가 대변과 반응하는 특별한 효소를 분비하게 됩니다. 해당 효소와 반응한 분변 덩어리는 장벽에 흡착하여 연동운동을 무시하고 강제로 장내에 체류하게 됩니다.",
      "allowedCores": [
        "constipation"
      ]
    },
    {
      "id": "gas_liquid",
      "name": "가습",
      "group": "가스성",
      "capacity": -5,
      "severity": 0,
      "description": "가스로 분해되는 내용물에서 수분이 따로 모여, 배출되는 방귀에 함께 섞입니다. 감염자는 가스를 내보낼 때마다 축축한 느낌을 받게 됩니다.",
      "allowedCores": [
        "gas"
      ]
    },
    {
      "id": "gas_plug",
      "name": "마개",
      "group": "가스성",
      "capacity": -5,
      "severity": 5,
      "description": "대변의 일부를 가스로 분해하지 않고 남겨 직장 끝부분에 모읍니다. 모인 대변은 단단하게 뭉쳐 가스가 빠져나가는 길을 막고, 그 뒤로 가스가 쌓이게 합니다.",
      "allowedCores": [
        "gas"
      ]
    },
    {
      "id": "gas_dispersion",
      "name": "분할",
      "group": "가스성",
      "capacity": -5,
      "severity": 12,
      "description": "장내 가스를 작은 분량으로 나누어 반복적으로 밀어냅니다. 한 번에 나오는 양은 줄어들지만 배출 횟수는 증가해, 짧은 간격으로 가스가 계속 나오게 됩니다.",
      "allowedCores": [
        "gas"
      ]
    },
    {
      "id": "gas_residue",
      "name": "잔류",
      "group": "가스성",
      "capacity": -5,
      "severity": 5,
      "description": "대변을 가스로 바꾸는 과정에서 일부를 작은 덩어리로 남깁니다. 남은 덩어리는 장내 가스에 섞여 이동하다가, 가스가 배출될 때 함께 뿜어져 나옵니다.",
      "allowedCores": [
        "gas"
      ]
    },
    {
      "id": "dependence",
      "name": "의존성",
      "group": "감염성",
      "capacity": -5,
      "severity": 10,
      "description": "병원체에게 이후 출시할 신약에 대한 내성이 부여됩니다. 이로 인해 신약을 복용하더라도 증상이 완전히 사라지지 않게 되어, 신약에 대한 의존성과 수요가 큰 폭으로 증가합니다."
    },
    {
      "id": "relief",
      "name": "안도감",
      "group": "감염성",
      "capacity": -5,
      "severity": 15,
      "description": "배출 후의 안도감을 증폭시켜 배설에 대한 거부감을 감소시킵니다. 야외 배설이나 착의 탈분 등에도 동일하게 적용되어 감염 경로가 증가합니다."
    },
    {
      "id": "air",
      "name": "대기",
      "group": "감염성",
      "capacity": -5,
      "severity": 0,
      "description": "가스를 통한 전파라는 가상 특성입니다. 증상 완화를 적용하기 전 심각성이 120을 초과하면 심각성을 20 낮춥니다. 120 이하면 변화가 없습니다. 감소는 한 번만 적용됩니다.",
      "dynamicAir": true
    },
    {
      "id": "sneeze",
      "name": "재채기",
      "group": "감염성",
      "capacity": -5,
      "severity": 5,
      "description": "병원체가 비부의 신경을 자극하여 잦은 재채기를 유발합니다. 재채기시 순간적으로 복압이 크게 증가하여 의도치 않은 배출이 이루어질 확률이 크게 증가합니다."
    },
    {
      "id": "intermittent",
      "name": "간헐성",
      "severity": -5,
      "description": "병원체가 가진 증상을 간헐적으로 소거합니다. 증상의 통일성이 줄어들어 심각성이 감소합니다.",
      "group": "증상 완화",
      "capacity": 0,
      "mitigation": true
    },
    {
      "id": "reversal",
      "name": "반전",
      "severity": -10,
      "description": "선택한 형질로 인한 증상이 때때로 반전되어 나타납니다. 증상의 통일성이 줄어들어 심각성이 감소합니다.",
      "group": "증상 완화",
      "capacity": 0,
      "mitigation": true
    },
    {
      "id": "general_trigger",
      "name": "둔감화",
      "severity": -15,
      "description": "병원체가 신경계를 교란하여, 실제 증상 수준을 은폐합니다. 감염자는 실제보다 증상을 훨씬 약하게 느끼게 되어 심각성이 감소합니다.",
      "group": "증상 완화",
      "capacity": 0,
      "mitigation": true
    },
    {
      "id": "normalization",
      "name": "정당화",
      "severity": -20,
      "description": "병원체가 기억을 조작하여, 감염자는 증상을 이전부터 가지고 있던 체질로 받아들입니다. 증상 자각이 어려워져 약제 수요와 심각성이 감소합니다.",
      "group": "증상 완화",
      "capacity": 0,
      "mitigation": true
    }
  ],
  "advancedRevisionNotes": "설명만으로 정확한 수치를 확정할 수 없는 항목은 기존 값을 유지했습니다. 재채기의 심각성 +5는 구현상 밸런스 값입니다. 식욕 강화/대량화 강화는 각각 단독 비용 -5이며 선행 형질의 비용과 별도 합산합니다."
};
