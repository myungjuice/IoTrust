# 모요 (Moyo) 메인 페이지 클론 과제

안녕하세요.  
본 프로젝트는 아이오트러스트 프론트엔드 실기 과제를 위해 진행된 클론 코딩 과제입니다.  
모요(Moyo)의 메인 페이지를 Mobile First 전략으로 구현하였습니다.

## 클론한 서비스 URL

<https://www.moyoplan.com/>

## 사용 기술 스택

| 항목          | 설명                      |
| ------------- | ------------------------- |
| Framework     | Vite + React + TypeScript |
| Styling       | TailwindCSS               |
| 디자인 시스템 | shadcn/ui                 |
| AI 도구       | Cursor AI 사용            |

## 로컬 실행 방법

이 프로젝트는 Vite + React + TypeScript + pnpm 환경에서 실행됩니다.

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

### 브라우저를 열어서 <http://localhost:5173> 으로 접근해주시면 사이트가 열립니다

(Netlify에 배포하려고 했으나 잘 안되네요..)
<https://lustrous-gelato-aa2375.netlify.app/>

## 구현 주요 요소

- Mobile First 전략 기반 레이아웃 설계 및 구현
- 상단 헤더, 하단 고정 네비게이션, 하단 푸터, 각 섹션 등 핵심 구성 요소 UI 클론
- 모바일 화면만 구현 (데스크탑 반응형은 시간이 부족하여 못했습니다.)
- 배너 슬라이드 효과 구현 (keen-slider 라이브러리 이용)
- 재사용 가능한 컴포넌트 분리 및 props 구조화
- 디렉토리 구조는 역할 단위 기준으로 설계
  - domain 단위의 `app` 폴더
  - domain별로 사용되는 `component, section, type`등을 모아둔 폴더

## 왜 Mobile First로 구현했나요?

모바일 사용자의 비중이 높고, TailwindCSS가 `min-width` 기준으로 반응형을 지원하는 점을 고려하여  
모바일 화면을 우선 구현하고, 여유가 된다면 PC 화면 대응을 추가하는 전략으로 진행하려고 했습니다.<br />
하지만 생각보다 시간이 부족하여 PC 반응형은 진행하지 못했습니다.

## 남은 작업 및 미구현 섹션

- 테마별 요금제 섹션
- 모요와 함께하는 통신사 섹션
- PC 레이아웃 대응 마무리

## 아쉬운 점

- 전체 구현 시간을 고려하지 못해, 마지막 일부 섹션을 마무리하지 못한 점이 아쉽습니다.
- 구현 이후 코드 점검 및 리팩토링 시간 확보가 어려웠던 점 역시 아쉬운 부분으로 남습니다. (이게 제일 아쉽습니다.)
- TailwindCSS에서 색상을 일부 하드코딩하여 사용하였는데,  
  실무에서는 디자인 시스템을 기반으로 색상을 관리하는 것이 바람직하다는 점을 인지하고 있으며,  
  이번 과제에서는 구현 우선 순위로 인해 해당 부분을 추후 보완하기로 미루었으나 최종 반영하지 못했습니다.

## AI 도구 사용 내역

- **사용 도구**: [Cursor AI](https://www.cursor.so/)
- **사용 목적**: 전체적인 레이아웃 구조와 mock 데이터 생성 등 노가다 작업을 도움 받았습니다.
- **사용 예시 프롬프트**:

  ```tsx
  "모요 메인페이지를 Vite + React + Tailwind로 모바일 우선 클론하고 싶어. 기본 레이아웃 구조를 잡아줘."
  ```

  ```tsx
  "(스크린샷을 주며) 화면에 쓰이는 mock 데이터를 만들어줘."
  ```

## 커밋 전략

- 커밋 메시지는 기능 단위로 구분하여 작성하였습니다.
- 예시:

  ```text
  feat: Promotion section 추가
  style: web title 변경
  등등
  ```
