# 리액트의 LifeCycle, 생명 주기
이 파일에서는 리액트의 생명 주기, 즉, LifeCycle에 대해서 알아보도록 하겠다. 

## Mount
생명 주기란, 리액트에서 **컴포넌트**가 가지는 것을 의미한다. **리액트의 컴포넌트는 생명주기가 있다.** 컴포넌트가 실행되거나 업데이트, 제거 될 때, 특정한 이벤트들이 발생한다. <br>
Mount란 **컴포넌트가 처음 실행되는 것을 의미**한다. 컴포넌트가 시작이 되면 **context, defaultProps, state**를 저장한다. 
<br>
### componentWillMount
**componentWillMount**는 컴포넌트가 화면에 나가기 직전에 호출되는 **API**이다. 이 **API**를 호출하고 난 이후 render() 메소드로 컴포넌트를 DOM에 렌더링한 후 Mount가 완료된다. 이후에는 **componentDidMount**가 호출이 되는데, **componentWillMount 상태에서는 props나 state를 바꾸면 안된다.** Mount 중이기 때문이다. 물론 이 상태에서는 **아직 컴포넌트가 DOM에 렌더링을 하지 않은 상태이기 때문에 DOM에도 접근할 수 없다.**
<br>
### componentDidMount
**componentDidMount**는 위에서 설명했듯 컴포넌트에 DOM에 렌더링 된 후 호출되는 **API**이다. componentWillMount상태와는 다르게 이 상태에서는 **DOM에 접근이 가능**하다. 그래서 이 상태에서는 주로 AJAX 요청을 하거나, `setTimeout`, `setLnterval`같은 행동을 하며 DOM을 사용해야 하는 외부 라이브러리 연도을 하기도 한다. <br> <br>

총 정리를 하자면, 다음과 같은 순서로 실행이 된다. <br>
1. state, context, defaultProps 저장
2. componentWillMount 실행
3. 렌더링
4. componentDidMount 실행

## Props Update

## State Update

## Unmount

## Error