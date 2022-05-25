import Web3 from 'web3'
import Roulette from '../contracts/Roulette.json'

const instance = {
    web3: undefined,
    address: "0x4db0aee809f066acdcfdce1f62b9b848556dc869",
    fromBlock: 10739241,
    contract: undefined,
    init: function () {
        this.web3 = new Web3("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
        this.contract = new this.web3.eth.Contract(Roulette.abi, this.address);
    },
    search: function (address) {
        let self = this;
        return new Promise((resolve, reject) => {
            this.contract.getPastEvents("Reveal", {
                fromBlock: this.fromBlock,
                filter: {player: address}
            }).then(events => {
                console.log(events);
                resolve(events)
            }).catch(console.log)
        })
    },
    toWei: function (wei) {
        return this.web3.utils.fromWei(wei, "ether")
    }
}
export default instance