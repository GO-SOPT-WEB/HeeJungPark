<!-- PR의 제목은 "[ n주차 기본/심화/생각 과제 ] 과제명 " 으로 작성해주시면 되겠습니다 -->
<!-- PR은 리뷰어를 위한 글입니다, 보다 더 상세하게 적음으로써 소통을 활성화해봐요! -->

## ✨ 생각과제 : 웹 최적화 
<br/>

### ➡️ 웹 최적화란 무엇이고, 최적화가 필요한 이유는 무엇일까? <br/><br/>
웹 최적화란, 최고의 웹 성능을 구현하기 위하여 최적의 조건을 만드는 노력을 의미합니다. 사용자 경험에 긍정적인 영향을 미치기 위해서는 웹페이지의 반응 시간이 가능한 빨라야 합니다. 웹사이트 반응 시간이 0.1초면 사용자는 자신의 동작에 바로 웹페이지가 반응했다고 느끼지만 1초 이상 걸리게 될 경우에는 컴퓨터 동작에 이상이 있다고 생각하게 된다고 합니다. 따라서 웹 페이지의 반응 속도를 높이는 것은 사용자 경험을 높이는 데 아주 중요한 부분입니다.
웹 최적화 방법에는 프론트앤드 최적화, 백엔드 최적화, 프로토콜 최적화가 있습니다. 
<br/>
✔️ 프론트앤드 최적화는 ui/ux 관련 최적화로서 스크립트의 크기를 최소화하여 바이트 자체를 줄이거나, 도메인 수를 줄여 DNS 조회를 최소화하는 것입니다.<br/>
✔️ 백엔드 최적화는 웹 서버와 데이터베이스, DNS 서버를 최적화하는 것으로서 응답 성능을 개선할 수 있도록 하는 것이 주 목적입니다. <br/>
✔️ 프로토콜 최적화는 HTML 프로토콜 자체의 효과를 극대화하여 최고 속도와 최저지연시간으로 전달하도록 하기 위해 프로토콜을 업그레이드 하는 것입니다.

### ➡️ 이를 위해 어떤 개발을 해야 할까? 
<br/>
웹최적화를 하기 위해서는 개발을 하면서 동시에 웹 성능에 영향을 미치는 다양한 요소를 제어해야 합니다. 
<br/>
✔️첫번째는 렌더링 최적화로, 브라우저의 렌더링을 막는 소스들인 CSS, JS 파일을 최적화해야 합니다. CSS경우 리플로우, 리페인트를 고려하여 스타일을 작성하고 사용하지 않는 CSS는 제거합니다. 이 때 UNUSED CSS는 구글 크롬 라이트하우스를 통해 확인할 수 있다고 합니다! HTML 최적화의 경우에는, HTML 요소에 style을 통해 인라인 스타일을 작성하면 불필요한 코드중복이 발생하기 쉽고 리플로우를 발생시키기 때문에 인라인 스타일을 사용하지 않도록 다. 더불어 복잡한 DOM 트리를 지양해서 DOM 변경 시 계산해야 하는 것이 많아지지 않도록 합니다. <br/>
✔️두번째는 로딩 최적화로, 웹 페이지가 로드되면 HTML과 CSS가 동시에 파싱되는데 CSS는 head 내에서, js는 body 하단에서 불러오는 것을 고려하여 코드를 작성합니다. 그리고 이미지의 경우 picture 태그를 사용해서 type 속성을 통해 사용자 환경에 맞는 이미지를 제공할 수 있도록 합니다. 실제로 사용자들이 편리하게 이용할 수 있도록 웹 개발을 하기 위해서 이러한 웹 성능 최적화 방법들을 항상 상기하고 여러 변수들을 고려하며 개발해야겠다는 생각이 듭니다!