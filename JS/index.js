//책 데이터
const books = ['미움받을 용기', '미움받을 용기2', '던마잠전', '헨스키', '우리딸', '데어라', '씹덕', '그뭔씹', '응 아니야'];

const searchList = parent.document.getElementById('searchList');

const searchInput = document.getElementById('searchInput');

const inputDataInput = (event) => {
    let inputData = event.target.value;
    arrayComparison(event.target.value);
    return inputData;
};

searchInput.addEventListener('input', inputDataInput);

const arrayComparison = (inputData) => {
    deleteListData();
    let searchBookListData = [];
    let inputDataLength = inputData.length;
    if (inputData != "") {
        for (let i = 0; i < books.length; i++) {
            for (let j = 0; j < books[i].length; j++) {
                if (books[i].substr(j, inputDataLength) == inputData.substr(0, inputDataLength)) {
                    searchBookListData.push(books[i]);
                }
            }
        }
    }
    creatListData(searchBookListData, inputData);
};

const creatListData = (booksData, inputData) => {
    let div = parent.document.createElement('div');
    div.className = "searchListData";

    for (let i = 0; i < booksData.length; i++) {
        div.id = `searchListData${i}`;
        div.innerHTML += `${booksData[i].replace(inputData, `<strong>${inputData}</strong>`)}<br>`; 
    }
    searchList.appendChild(div);
};

const deleteListData = () => {
    let searchListData = document.getElementsByClassName(`searchListData`);

    for (let i = 0; i < searchListData.length; i++) {
        searchListData[i].remove();
    }

};