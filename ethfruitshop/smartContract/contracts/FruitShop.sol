// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FruitShop{
    // 주소 -> 과일 -> 수량, 가격
    // 과일리스트
    string[] public fruitList;
    // 판매자 매핑
    // {과일 : 과일주인,가격,수량}
    struct SellFruit{
        address owner;
        uint price;
        uint num;
        uint buyPrice;
    }
    mapping (string=>SellFruit) makeShop;
    // 판매 등록
    function registerFruit(string memory _name,uint _price, uint _num,uint _buyPrice) public returns(bool check){
        check = true;
        for(uint i = 0 ;i<fruitList.length;i++){
            if(keccak256(abi.encode(fruitList[i]))  == keccak256(abi.encode(_name))) check = false;
        }
        if(check == true) {
            fruitList.push(_name);
            makeShop[_name].owner = msg.sender;
            makeShop[_name].price = _price;
            makeShop[_name].num = _num;
            makeShop[_name].buyPrice = _buyPrice;
        }
        return check;
    }
    // 판매 삭제
    function deleteFruit(string memory _name) public returns(bool check){
        check = false;
        if(keccak256(abi.encode(makeShop[_name].owner))  == keccak256(abi.encode(msg.sender))){
            for(uint i = 0 ;i<fruitList.length; i++){
                if(keccak256(abi.encode(fruitList[i])) == keccak256(abi.encode(_name))){
                    delete fruitList[i];
                    check = true;
                }
            }
        }
        return check;
    }
    // 과일 지갑
    // {주소 : {과일 종류 : 갯수}}
    struct Fruit{
        mapping(string=>uint) num;
    }
    mapping (address=>Fruit) fruitWallet;

    // 과일 구매
    function buyFruit(string memory _name, uint _num) public payable{
        if(fruitWallet[msg.sender].num[_name] > 0){
            fruitWallet[msg.sender].num[_name] += _num;
        }else{
            fruitWallet[msg.sender].num[_name] = _num;
        }
        uint sendMoney = makeShop[_name].price * _num * 95 / 100;
        payable(makeShop[_name].owner).transfer(sendMoney);
    }
    // 과일 판매
    function sellFruit(string memory _name, uint _num) public payable{
            fruitWallet[msg.sender].num[_name] -= _num;
            uint sendMoney = makeShop[_name].price * _num * 95 / 100;
            payable(msg.sender).transfer(sendMoney);
    }
}