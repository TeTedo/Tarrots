// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FruitShop{
    // 주소 -> 과일 -> 수량, 가격
    // 과일리스트
    mapping (string=>string[]) fruitList;
    // 판매자 매핑
    // {과일 : 과일주인,가격,수량}
    struct SellFruit{
        address owner;
        string name;
        uint price;
        uint num;
        string typeIs;
    }
    mapping (string=>mapping(string=>SellFruit)) makeShop;
    // 판매 등록
    function registerFruit(string memory _name,uint _price, uint _num,string memory _typeIs) public payable returns(bool check){
        check = true;
        for(uint i = 0 ;i<fruitList[_typeIs].length;i++){
            if(keccak256(abi.encode(fruitList[_typeIs][i]))  == keccak256(abi.encode(_name))) check = false;
        }
        if(check == true) {
            fruitList[_typeIs].push(_name);
        makeShop[_name][_typeIs].owner = msg.sender;
            makeShop[_name][_typeIs].price = _price * 10 ** 18;
            makeShop[_name][_typeIs].num = _num;
            makeShop[_name][_typeIs].name = _name;
            makeShop[_name][_typeIs].typeIs = _typeIs;
        }
        return check;
    }
    // 판매 삭제
    function deleteFruit(string memory _name,string memory _typeIs) public payable returns(bool check){
        check = false;
        if(keccak256(abi.encode(makeShop[_name][_typeIs].owner))  == keccak256(abi.encode(msg.sender))){
            for(uint i = 0 ;i<fruitList[_typeIs].length; i++){
                if(keccak256(abi.encode(fruitList[_typeIs][i])) == keccak256(abi.encode(_name))){
                    refund(_name, _typeIs);
                    delete fruitList[_typeIs][i];
                    check = true;
                }
            }
        }
        return check;
    }
    // 먼저 돈낸거 환불받는곳
    function refund(string memory _name,string memory _typeIs) public payable {
        if(keccak256(abi.encode(_typeIs))==keccak256(abi.encode("BUY"))){
            uint refundMoney = makeShop[_name][_typeIs].price * makeShop[_name][_typeIs].num;
            payable(msg.sender).transfer(refundMoney);
        }
    }
    // 과일 지갑
    // {주소 : {과일 종류 : 갯수}}
    struct Fruit{
        mapping(string=>uint) num;
    }
    mapping (address=>Fruit) fruitWallet;
    mapping (address=>string[]) hasFruitList;
    //과일 지갑 갯수 조회
    function getFruitWallet() view public returns(uint[] memory){
        uint count = hasFruitList[msg.sender].length;
        uint[] memory wallet = new uint[](count);
        for(uint i=0; i<count;i++){
            wallet[i] = fruitWallet[msg.sender].num[hasFruitList[msg.sender][i]];
        }
        return wallet;
    }
    // 과일 종류 조회
    function hasFruit() view public returns(string[] memory){
        return hasFruitList[msg.sender];
    }
    // 과일 구매
    function buyFruit(string memory _name, uint _num, string memory _typeIs) public payable{
        if(fruitWallet[msg.sender].num[_name] > 0){
            fruitWallet[msg.sender].num[_name] += _num;
        }else{
            hasFruitList[msg.sender].push(_name);
            fruitWallet[msg.sender].num[_name] = _num;
        }
    uint sendMoney = makeShop[_name][_typeIs].price * _num * 95 / 100;
    payable(makeShop[_name][_typeIs].owner).transfer(sendMoney);
    }
    // 과일 판매
    function sellFruit(string memory _name, uint _num,string memory _typeIs) public payable {
            fruitWallet[msg.sender].num[_name] -= _num;
            uint sendMoney = makeShop[_name][_typeIs].price * _num * 95 / 100;
            payable(msg.sender).transfer(sendMoney);
    }
    // 상품들 조회
    function getBuyFruitList() public view returns(string[] memory)  {
        return fruitList["BUY"];
    }
    function getSellFruitList() public view returns(string[] memory)  {
        return fruitList["SELL"];
    }
    // 판매자 정보 조회
    function getSellerList(string memory _name, string memory _typeIs) public view returns(SellFruit memory){
    return makeShop[_name][_typeIs];
    }
}