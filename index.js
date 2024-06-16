//폼 제출 버튼 클릭시 메세지 클릭
function showAlert() {
    var checkbox = document.getElementById('agree_check');
    if (!checkbox.checked) {
        alert("개인정보 활용에 동의하셔야 합니다.");
    }
    else {
        alert('문의가 접수되었습니다.');
    }
    
}


//이력서 페이지 - 아이디와 비밀번호 입력받기
function authenticate() {
    //아이디, 비밀번호
    var myUsername = "admin";
    var myPassword = 1234;

    var username = prompt("이력서를 열람하려면 아이디를 입력하세요 (정답:admin)");
    var password = Number(prompt("비밀번호를 입력하세요 (정답:1234)"));

    // Check credentials
    if (username === myUsername && password === myPassword) {
        return true; // 이력서 페이지 리턴
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
        return false; // 인덱스 페이지로 이동
    }
}

//학점계산기
function calculateAverage() {
    const subjects = document.querySelectorAll('.subject');
    let totalGrade = 0;
    let subjectCount = 0;

    subjects.forEach(subject => {
        const grade = parseFloat(subject.querySelector('select[name="grade"]').value);
        totalGrade += grade;
        subjectCount++;
    });

    const averageGrade = totalGrade / subjectCount;
    
    // alert로 평균 학점 표시
    alert(`평균 학점: ${averageGrade.toFixed(2)}`);
}

function addSubject() {
    const subjectsContainer = document.getElementById('subjects-container');
    const newSubject = document.createElement('div');
    newSubject.className = 'subject';
    
    newSubject.innerHTML = `
        <input type="text" name="subject" placeholder="과목명">
        <select name="grade">
            <option value="4.5">4.5</option>
            <option value="4.0">4.0</option>
            <option value="3.5">3.5</option>
            <option value="3.0">3.0</option>
            <option value="2.5">2.5</option>
            <option value="2.0">2.0</option>
            <option value="1.5">1.5</option>
            <option value="1.0">1.0</option>
            <option value="0.5">0.5</option>
            <option value="0.0">0.0</option>
        </select>
    `;

    subjectsContainer.appendChild(newSubject);
}
