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
<br>
## Props Update
컴포넌트의 업데이트는 `props`의 변화, `state`의 변화에 따라 결정이 된다. 이 부분에서는 `props`의 변화에 집중하도록 한다. <br>
먼저 `props`가 변화되어 컴포넌트가 업데이트를 해야 하는 상황이면, 스스로 **업데이트가 발생하였음을 감지하고 componentWillReceiveProps 메소드가 호출**된다. 이후 **ShouldComponentUpdate, componentWillUpdate**가 차례대로 호출되고, 업데이트가 완료되면(렌더링 되면) **componentDidUpdate**가 된다. <br>
이 메소드들은 첫 번째 인자로 바뀔 `props`의 정보를 가지고 있다. 오직 componentDidUpdate만 **이전의 `props`의 정보를 가지고 있다. 이미 업데이트 되었기 때문**이다. <br><br>

shouldComponentUpdate에서는 아직 렌더링을 하기 전이기 때문에, `false`의 값을 리턴해주면 렌더링을 취소할 수 있다. 주로 이 부분에서 *성능 최적화*를 해준다. <br><br>

또한, componentWillUpdate에서는 `state`를 **바꿔선 안 된다.** 아직 `props`도 업데이트 되지 않은 상태인데 `state`를 변경하면 shouldComponentUpdate가 발생하기 때문이다.<br>
그리고 componentDidUpdate에서는 렌더링이 완료되었기 때문에 DOM에 접근할 수 있다. <br>
실행 순서를 나열하면 다음과 같다. <br>

1. componentWillReceiveProps
2. shouldComponentUpdate
3. componentWillUpdate
4. render
5. componentDidUpdate
<br>
## State Update
이 과정은 setState 호출을 통해 state가 업데이트 될 때의 과정이다. Props update와 과정이 같지만, `props`를 가져올 필요는 없으므로 **componentWillReceiveProps 메소드는 호출되지 않는다.** 메소드의 두 번째 인자로는 바뀌어야 할 `state`의 정보를 가지고 있다. Props update와 마찬가지로, componentDidUpdate는 바뀌기 이전의 `state`정보를 가지고 있다.
<br>

1. shouldComponentUpdate
2. componentWillUpdate
3. render
4. componentDidUpdate
<br>
## Unmount
이 과정은 **컴포넌트가 제거되는 과정**이다. 더는 컴포넌트를 사용하지 않을 때 발생하는 이벤트이며, 메소드 명은 **componentWillUnmount**이다. **componentDidUnmount**는 없다. 이미 컴포넌트는 제거되었기 때문이다. 이 과정에서는 **연결했던 이벤트 리스너를 정리하는 등의 정리 활동**을 한다.
<br>
## Error
이는 에러 발생 시를 위한 메소드이다. 리액트 16에서 추가되었으며, 사용 메소드 명은 **componentDidChatch**이다. 최상위 컴포넌트에 단 한 번만 넣어주면 되며, 에러 발생 시 어떻게 대처할 것인가를 정의할 수 있다.