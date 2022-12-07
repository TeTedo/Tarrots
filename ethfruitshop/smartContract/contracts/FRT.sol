// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FRT{
    string public name;
    string public symbol;
    uint public decimals = 18;
    uint public totalSupply;
    mapping(address=>uint) public balances;
    mapping(address=>mapping(address=>uint)) public allowance;
    event Transfer(address from,address to,uint value);
    event Approval(address owner,address spender,uint value);

    // 잔액 조회
    function balanceOf(address _account) view external returns(uint){
        return balances[_account];
    }

    // 토큰 전송
    function transfer(address _recipient,uint _amount) external {
        balances[msg.sender] -= _amount;
        balances[_recipient] += _amount;
    }

    // 토큰 권한 주기
    function approve(address _spender, uint _amount) external {
        allowance[msg.sender][_spender] = _amount;
    }

    // 권한 받은거 받아가기
    function transferFrom(address _sender,address _recipient, uint _amount) external {
        require(allowance[_sender][msg.sender] >= _amount);

        allowance[_sender][msg.sender] -= _amount;
        balances[_sender] -= _amount;
        balances[_recipient] += _amount;
    }

    // 토큰량 늘려주기
    function mint(uint _amount) internal{
        balances[msg.sender] += _amount;
        totalSupply += _amount;
    }
    // 토큰 소각
    function burn (uint _amount) external{
        balances[msg.sender] -= _amount;
        totalSupply -= _amount;
    }
}