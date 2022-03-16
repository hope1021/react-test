import axios from 'axios';
import React, { useEffect, useState } from 'react';

// 외부 API 이용

const AxiosTest = () => {
    // state
    const [date, setDate] = useState([]); // 배열 빈 값
    const [loading, setLoading] = useState(false); 

    // 서버에 요청해서 데이터 받아옴
    // state 값 저장
    const loadDate = async () => {
        setLoading(true);
        const respose = await axios.get('http://jsonplaceholder.typicode.com/todos/1'); // 여긴 나중에 우리 서버로
        console.log(respose.data);
        setDate(respose.data);
        setLoading(false);
    }

    // 렌더링 할 때마다 호출
    // 빈 배열 : loadDate() 한 번만 실행하게 함
    useEffect( () => {
        loadDate();
    }, []); // 배열 값이 변경될 때마다 state 불러와서 실행

    // date를 JSON object로 변환해서 key, value 추출
    const jsonObj = JSON.parse(JSON.stringify(date));
    let result = [];
    for(var key in jsonObj){
        result.push(
            <tr> <td>{key}</td>
                 <td>{jsonObj[key]}</td> </tr>
        )
    }

    return (
        <div>
            <h3>서버로부터 받아온 값</h3><hr />

            <h5> 1. JSON.stringify(date)으로 쓴 값 </h5>
                {JSON.stringify(date)}
                {/* date 단독으로 쓸 수 없음. 그래서 Json을 이용해야함.
                    stringify : date를 문자열로 반환 */}
                {/* 실행 결과 : {"userId":1,"id":1,"title":"delectus aut autem","completed":false} */}
                {/* 여기서 Json 오브젝트로 변환해애서 원하는 값을 추출해서 씀 */}
                <hr />
            
            <h5> 2. JSON.stringify(date)를 object로 변환해서 key, value를 추출한 값 </h5>
            <table border="1">
                {result}
                {/* 배열로 반환 */}
            </table>
        </div>
    );
};

export default AxiosTest;