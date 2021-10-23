# linux-monitor
> 시스템프로그래밍 기말과제   
> React   
> Material UI Design Framework   
> phpExpress Back-End.   
> React-route-dom   
> ES6 이상(Eslint, Prettier)

시스템 프로그래밍 기말과제로 리눅스 시스템 모니터링 기능을 제공합니다.

## 빌드 설정

```bash
# 디펜던시 설치
$ yarn install

# localhost:3000으로 프론트 핫 리로드 서버 실행
$ yarn start

# 정적 프로젝트 생성
$ yarn build

# localhost:4000으로 백 핫 리로드 서버 실행
$ yarn back
```


***

### `public`
정적 파일이 포함될 디렉토리입니다. php로 작성된 Back-End 코드도 포함되어 있습니다.

### `src/components`
컴포넌트 웹 프로그래밍을 위한 컴포넌트 디렉토리입니다.

### `src/pages`
라우터가 포함된 디렉토리입니다. 라우터 설정은 src/pages/App.jsx에 작성되어 있습니다.

***

## 코드 스타일

### `commitlint`
```
feat        새로운 기능을 제공합니다.
fix         버그 수정.
docs        문서만 변경됩니다.
style       코드 작동에 영향을 미치지 않는 스타일 변경(빈 공간, 코드 포멧팅, 누락된 세미콜론 등)
refactor    버그를 수정하거나 기능을 추가하지 않는 코드 변경입니다.
test        테스트 코드를 추가하거나 기존 테스트 코드를 수정합니다.
chore       빌드 프로세스 또는 보조 도구 및 라이브러리(예: 문서 생성)에 대한 변경 사항.
perf        성능을 향상시키는 코드 변경입니다.
ci          CI 구성 파일 및 스크립트의 변경 사항.
build       빌드 시스템 또는 외부 디펜던시에 영향을 미치는 변경 사항(예: gulp, broccli, npm).
temp        변경사항에 포함되지 않는 임시 커밋입니다.
```