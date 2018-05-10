const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //uppercase Web3 means im working with Web3 constructor function
const provider = ganache.provider();
const web3 = new Web3(provider); //lowercase web3 means im working with an instance of Web3
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
// const INITIAL_STRING = 'Hi there!';
beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' });
    
    inbox.setProvider(provider);
    // process.setMaxListeners(0);

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); //assert.ok says if inbox.options.address is a defined value
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });

    it('can change the message', async() => {
        await inbox.methods.setMessage('bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});